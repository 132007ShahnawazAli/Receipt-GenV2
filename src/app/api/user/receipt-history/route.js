import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import Receipt from "@/models/Receipt"
import LicenseUser from "@/models/LicenseUser"
import mongoose from "mongoose"

export async function GET(request) {
  try {
    console.log("Receipt history API called")

    const session = await getServerSession(authOptions)

    if (!session) {
      console.log("No session found")
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    console.log("Session user:", session.user)

    await connectToDatabase()

    // First, find the license user to get their ID
    const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!licenseUser) {
      console.log("License user not found")
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    console.log("License user found:", licenseUser._id)

    // Now find all receipts for this user
    // Convert the ID to string to ensure consistent comparison
    const userId = licenseUser._id.toString()

    // Find receipts where userId matches either as string or ObjectId
    const receipts = await Receipt.find({
      $or: [{ userId: userId }, { userId: new mongoose.Types.ObjectId(userId) }],
    }).sort({ createdAt: -1 })

    console.log(`Found ${receipts.length} receipts for user`)

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

      // Format date properly
      const date = receipt.updatedAt || receipt.createdAt
      const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })

      return {
        id: receipt._id.toString(),
        date: formattedDate,
        description: `${receipt.brandName} Receipt`,
        brandName: receipt.brandName,
        email: receipt.email,
        formData: parsedFormData,
      }
    })

    return NextResponse.json(formattedReceipts)
  } catch (error) {
    console.error("Error fetching receipt history:", error)
    return NextResponse.json({ message: "Error fetching receipt history", error: error.message }, { status: 500 })
  }
}
