import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import LicenseUser from "@/models/LicenseUser"
import GiveawayLicenseKey from "@/models/GiveawayLicenseKey"

export async function POST(request) {
  try {
    const { licenseKey } = await request.json()

    if (!licenseKey) {
      return NextResponse.json(
        { message: "License key is required" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    // First check regular license users
    let user = await LicenseUser.findOne({ licenseKey })

    // If not found in regular licenses, check giveaway keys
    if (!user) {
      const giveawayKey = await GiveawayLicenseKey.findOne({ licenseKey })
      
      if (giveawayKey) {
        // If key exists and is not redeemed, create a temporary auth response
        if (!giveawayKey.isRedeemed) {
          return NextResponse.json({
            isGiveawayKey: true,
            licenseKey: giveawayKey.licenseKey,
            isLifetime: giveawayKey.isLifetime,
            durationInDays: giveawayKey.durationInDays,
            hasActiveSubscription: false // Will become true after redeeming
          })
        }

        // For redeemed keys, check expiration only for non-lifetime keys
        if (giveawayKey.isRedeemed && !giveawayKey.isLifetime && giveawayKey.expiresAt) {
          if (new Date() > new Date(giveawayKey.expiresAt)) {
            return NextResponse.json(
              { message: "This giveaway key has expired" },
              { status: 401 }
            )
          }
        }

        // If key is redeemed, get the associated license user
        if (giveawayKey.isRedeemed && giveawayKey.redeemedBy?.email) {
          user = await LicenseUser.findOne({ 
            email: giveawayKey.redeemedBy.email,
            licenseKey: giveawayKey.licenseKey
          })
        }
      }
    }

    if (!user) {
      return NextResponse.json(
        { message: "Invalid license key" },
        { status: 401 }
      )
    }

    // Check if license is expired for non-lifetime plans
    if (user.plan !== "lifetime" && user.expiresAt && new Date() > new Date(user.expiresAt)) {
      return NextResponse.json(
        { message: "License key has expired" },
        { status: 401 }
      )
    }

    // Update last login
    user.lastLogin = new Date()
    await user.save()

    // Return user data without sensitive information
    return NextResponse.json({
      email: user.email,
      plan: user.plan,
      expiresAt: user.expiresAt,
      isActive: user.isActive,
      hasActiveSubscription: true,
      isLifetime: user.plan === "lifetime"
    })
  } catch (error) {
    console.error("License login error:", error)
    return NextResponse.json(
      { message: "Authentication failed" },
      { status: 500 }
    )
  }
}
