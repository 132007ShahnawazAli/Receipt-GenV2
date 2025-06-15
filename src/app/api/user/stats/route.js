import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import LicenseUser from "@/models/LicenseUser"
import Receipt from "@/models/Receipt"

export async function GET(request) {
  try {
    // Find the license user
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    await connectToDatabase()

    // Find the license user
    const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!licenseUser) {
      return NextResponse.json({ message: "License not found" }, { status: 404 })
    }

    // Count receipts directly from the Receipt collection
    const receiptCount = await Receipt.countDocuments({ userId: licenseUser._id })

    // Calculate days left for subscription
    let daysLeft = 0
    let subscriptionStatus = "Not subscribed"

    if (licenseUser.isActive) {
      if (licenseUser.plan === "lifetime") {
        subscriptionStatus = "lifetime"
        daysLeft = "∞"
      } else if (licenseUser.expiresAt) {
        subscriptionStatus = "monthly"
        const today = new Date()
        const endDate = new Date(licenseUser.expiresAt)
        const diffTime = endDate - today
        daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        // If days left is negative, subscription has expired
        if (daysLeft < 0) {
          daysLeft = 0
          subscriptionStatus = "expired"

          // Update license record to reflect expired subscription
          await LicenseUser.findByIdAndUpdate(licenseUser._id, {
            isActive: false,
          })
        }
      }
    }

    // Update the receiptsGenerated field in the user document if it doesn't match
    if (licenseUser.receiptsGenerated !== receiptCount) {
      await LicenseUser.findByIdAndUpdate(licenseUser._id, {
        receiptsGenerated: receiptCount,
      })
    }

    return NextResponse.json({
      receiptsGenerated: receiptCount,
      subscriptionStatus,
      daysLeft,
      plan: licenseUser.plan,
      licenseKey: licenseUser.licenseKey,
      email: licenseUser.email,
      discordUsername: licenseUser.discordUsername || null,
    })
  } catch (error) {
    return NextResponse.json({ message: "Error fetching user stats", error: error.message }, { status: 500 })
  }
}
