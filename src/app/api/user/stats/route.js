import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { connectToDatabase } from "@/lib/mongodb"
import LicenseUser from "@/models/LicenseUser"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    await connectToDatabase()

    // Check if this is a license user
    if (session.user.isLicenseUser) {
      // Find the license user
      const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

      if (!licenseUser) {
        return NextResponse.json({ message: "License not found" }, { status: 404 })
      }

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

      return NextResponse.json({
        receiptsGenerated: licenseUser.receiptsGenerated || 0,
        subscriptionStatus,
        daysLeft,
        plan: licenseUser.plan,
        licenseKey: licenseUser.licenseKey,
        email: licenseUser.email,
        discordUsername: licenseUser.discordUsername || null,
      })
    } else {
      // Regular user - should not have access to dashboard
      return NextResponse.json({ message: "Not a license user" }, { status: 403 })
    }
  } catch (error) {
    console.error("Error fetching user stats:", error)
    return NextResponse.json({ message: "Error fetching user stats" }, { status: 500 })
  }
}
