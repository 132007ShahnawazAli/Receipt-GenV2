import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import Receipt from "@/models/Receipt"
import LicenseUser from "@/models/LicenseUser"
import { sendReceiptEmail } from "@/lib/email"
import { getTemplateByBrandId, generateEmailSubject } from "@/lib/templates"

export async function POST(request) {
  try {
    console.log("Update receipt API called")

    const session = await getServerSession(authOptions)

    if (!session) {
      console.log("No session found")
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    console.log("Session user:", session.user)

    await connectToDatabase()

    // Get the license user
    const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!licenseUser || !licenseUser.isActive) {
      console.log("License user not found or inactive")
      return NextResponse.json({ message: "Active subscription required" }, { status: 403 })
    }

    // Check if license is expired (for monthly plans)
    if (licenseUser.plan === "monthly" && licenseUser.expiresAt && new Date(licenseUser.expiresAt) < new Date()) {
      console.log("License expired")
      return NextResponse.json({ message: "Your subscription has expired" }, { status: 403 })
    }

    const formData = await request.json()
    const { receiptId, ...updatedData } = formData

    if (!receiptId) {
      console.log("No receipt ID provided")
      return NextResponse.json({ message: "Receipt ID is required" }, { status: 400 })
    }

    console.log("Receipt ID:", receiptId)
    console.log("Updated data:", updatedData)

    // Find the receipt
    const receipt = await Receipt.findById(receiptId)

    if (!receipt) {
      console.log("Receipt not found")
      return NextResponse.json({ message: "Receipt not found" }, { status: 404 })
    }

    // Verify the receipt belongs to this user
    if (receipt.userId.toString() !== licenseUser._id.toString()) {
      console.log("Receipt does not belong to this user")
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 })
    }

    // Get the brand ID from the form data or receipt
    const brandId =
      updatedData.brandId ||
      (updatedData.brandName && updatedData.brandName.toLowerCase().replace(/\s+/g, "_")) ||
      receipt.brandName.toLowerCase().replace(/\s+/g, "_")

    console.log("Brand ID:", brandId)

    // Get the template for the brand
    const template = getTemplateByBrandId(brandId)

    if (!template) {
      console.log("Template not found")
      return NextResponse.json({ message: "Template not found for this brand" }, { status: 404 })
    }

    // Generate email subject
    const emailSubject = generateEmailSubject(template, updatedData)

    // Generate receipt HTML using the appropriate template
    const receiptHtml = template.getHtml({
      ...updatedData,
      brandLogo: updatedData.brandLogo || receipt.brandLogo,
    })

    // Send email
    await sendReceiptEmail(updatedData.email || receipt.email, emailSubject, receiptHtml)

    // Update receipt in database
    const updatedReceipt = await Receipt.findByIdAndUpdate(
      receiptId,
      {
        ...updatedData,
        formData: JSON.stringify(updatedData),
        updatedAt: new Date(),
      },
      { new: true },
    )

    console.log("Receipt updated successfully")

    return NextResponse.json({
      message: "Receipt updated and sent successfully",
      receipt: updatedReceipt,
    })
  } catch (error) {
    console.error("Error updating receipt:", error)
    return NextResponse.json(
      {
        message: "Error updating receipt",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
