import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import Receipt from "@/models/Receipt"
import LicenseUser from "@/models/LicenseUser"
import mongoose from "mongoose"

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    await connectToDatabase()

    // First, find the license user to get their ID
    const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!licenseUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Now find all receipts for this user
    const userId = licenseUser._id.toString()

    // Find receipts where userId matches either as string or ObjectId
    const receipts = await Receipt.find({
      $or: [{ userId: userId }, { userId: new mongoose.Types.ObjectId(userId) }],
    }).sort({ createdAt: -1 })

    // Format receipts for the frontend
    const formattedReceipts = receipts.map((receipt) => {
      // Try to parse the formData if it exists
      let parsedFormData = {}
      try {
        if (receipt.formData) {
          parsedFormData = JSON.parse(receipt.formData)
        }
      } catch (e) {
        console.error("Error parsing receipt formData:", e)
      }

      // Include all necessary date fields
      return {
        id: receipt._id.toString(),
        orderDate: receipt.orderDate ? new Date(receipt.orderDate).toISOString() : null,
        createdAt: receipt.createdAt ? new Date(receipt.createdAt).toISOString() : null,
        updatedAt: receipt.updatedAt ? new Date(receipt.updatedAt).toISOString() : null,
        description: (
          receipt.productName
            ? receipt.productName.trim().replace(/\s+Receipt$/i, "")
            : receipt.brandName
        ) + " Receipt",
        brandName: receipt.brandName,
        email: receipt.email,
        productName: receipt.productName,
        formData: parsedFormData,
        // Include other relevant fields
        customerName: receipt.customerName,
        orderNumber: receipt.orderNumber,
        total: receipt.total,
        currencySymbol: receipt.currencySymbol,
        status: receipt.status
      }
    })

    return NextResponse.json(formattedReceipts)
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching receipt history", error: error.message }, 
      { status: 500 }
    )
  }
}
