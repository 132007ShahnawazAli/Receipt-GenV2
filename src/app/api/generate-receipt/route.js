import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import Receipt from "@/models/Receipt"
import { sendReceiptEmail } from "@/lib/email"
import { getTemplateByBrandId, generateEmailSubject } from "@/lib/templates"

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    // Connect to database to get fresh user data
    await connectToDatabase()
    const user = await User.findById(session.user.id)

    if (!user || !user.hasActiveSubscription) {
      return NextResponse.json({ message: "Active subscription required" }, { status: 403 })
    }

    const formData = await request.json()

    // Get the template for the brand
    const brandId = formData.brandName.toLowerCase().replace(/\s+/g, "_")
    const template = getTemplateByBrandId(brandId)

    if (!template) {
      return NextResponse.json({ message: "Template not found for this brand" }, { status: 404 })
    }

    // Map all form data to include in receipt record
    const receiptData = {
      userId: session.user.id,
      brandName: formData.brandName,
      email: formData.email,
      // Store all form data as JSON to accommodate different templates
      formData: JSON.stringify(formData),
      createdAt: new Date(),
    }

    // Add common fields that are present in the Receipt schema
    const commonFields = [
      "customerName",
      "deliveryAddress",
      "currencySymbol",
      "productName",
      "orderDate",
      "shipping",
      "productSize",
      "subtotal",
      "total",
      "productImageUrl",
      "cardLastFour",
      "tax", // Added tax field for Acne Studios template
      "streetAddress", // Added for both templates
      "city", // Added for both templates
      "zipCode", // Added for both templates
      "country", // Added for Acne Studios template
    ]

    commonFields.forEach((field) => {
      if (formData[field] !== undefined) {
        receiptData[field] = formData[field]
      }
    })

    // Create receipt record
    const receipt = new Receipt(receiptData)
    await receipt.save()

    // Update user's receipt count
    await User.findByIdAndUpdate(session.user.id, {
      $inc: { receiptsGenerated: 1 },
    })

    // Generate email subject
    const emailSubject = generateEmailSubject(template, formData)

    // Generate receipt HTML using the appropriate template
    const receiptHtml = template.getHtml({
      ...formData,
      brandLogo: formData.brandLogo,
    })

    // Send email
    await sendReceiptEmail(formData.email, emailSubject, receiptHtml)

    return NextResponse.json({
      message: "Receipt generated and sent successfully",
      receiptId: receipt._id,
    })
  } catch (error) {
    console.error("Error generating receipt:", error)
    return NextResponse.json({ message: "Error generating receipt" }, { status: 500 })
  }
}
