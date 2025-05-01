import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import LicenseUser from "@/models/LicenseUser"
import { sendReceiptEmail } from "@/lib/email"
import { getTemplateByBrandId, generateEmailSubject, templates } from "@/lib/templates"

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    // Connect to database to get fresh user data
    await connectToDatabase()

    // For license users, we need to check their license
    const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!licenseUser || !licenseUser.isActive) {
      return NextResponse.json({ message: "Active subscription required" }, { status: 403 })
    }

    // Check if license is expired (for monthly plans)
    if (licenseUser.plan === "monthly" && licenseUser.expiresAt && new Date(licenseUser.expiresAt) < new Date()) {
      return NextResponse.json({ message: "Your subscription has expired" }, { status: 403 })
    }

    const formData = await request.json()

    // Get the template for the brand
    const brandId = formData.brandName.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")
    console.log("Original brand name:", formData.brandName)
    console.log("Normalized brand ID:", brandId)
    console.log("Available templates:", Object.keys(templates))
    const template = getTemplateByBrandId(brandId)

    if (!template) {
      console.log("Template lookup failed for brand ID:", brandId)
      return NextResponse.json({ message: "Template not found for this brand" }, { status: 404 })
    }

    // Generate email subject
    const emailSubject = generateEmailSubject(template, formData)

    // Generate receipt HTML using the appropriate template
    const receiptHtml = template.getHtml({
      ...formData,
      brandLogo: formData.brandLogo,
    })

    // Send email
    await sendReceiptEmail(formData.email, emailSubject, receiptHtml)

    // Update user's receipt count
    await LicenseUser.findByIdAndUpdate(licenseUser._id, {
      $inc: { receiptsGenerated: 1 },
    })

    return NextResponse.json({
      message: "Receipt generated and sent successfully",
    })
  } catch (error) {
    console.error("Error generating receipt:", error)
    return NextResponse.json({ message: "Error generating receipt" }, { status: 500 })
  }
}
