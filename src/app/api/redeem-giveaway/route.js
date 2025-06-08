import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import GiveawayLicenseKey from "@/models/GiveawayLicenseKey"
import LicenseUser from "@/models/LicenseUser"

export async function POST(request) {
  try {
    const { licenseKey, email } = await request.json()

    if (!licenseKey || !email) {
      return NextResponse.json(
        { message: "License key and email are required" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    // Find the giveaway key
    const giveawayKey = await GiveawayLicenseKey.findOne({ licenseKey })

    if (!giveawayKey) {
      return NextResponse.json(
        { message: "Invalid giveaway license key" },
        { status: 400 }
      )
    }

    // Check if key is already redeemed
    if (giveawayKey.isRedeemed) {
      return NextResponse.json(
        { message: "This giveaway key has already been redeemed" },
        { status: 400 }
      )
    }

    // Check if this specific license key is already in use
    const existingLicense = await LicenseUser.findOne({ licenseKey })
    if (existingLicense) {
      return NextResponse.json(
        { message: "This license key is already in use" },
        { status: 400 }
      )
    }

    // Set up the license user data
    const now = new Date()
    let expiresAt = null

    // Calculate expiration for non-lifetime keys
    if (!giveawayKey.isLifetime) {
      expiresAt = new Date(now)
      expiresAt.setDate(now.getDate() + giveawayKey.durationInDays)
    }

    // Create new license user entry
    const newLicenseUser = new LicenseUser({
      email,
      licenseKey,
      plan: giveawayKey.isLifetime ? "lifetime" : "giveaway",
      expiresAt,
      isActive: true
    })
    await newLicenseUser.save()

    // Mark giveaway key as redeemed and set expiration
    giveawayKey.isRedeemed = true
    giveawayKey.redeemedAt = now
    giveawayKey.expiresAt = expiresAt
    giveawayKey.redeemedBy = {
      email,
      userId: newLicenseUser._id
    }
    await giveawayKey.save()

    return NextResponse.json({
      success: true,
      message: "Giveaway key redeemed successfully",
      isLifetime: giveawayKey.isLifetime,
      expiresAt,
      remainingDays: giveawayKey.isLifetime ? Infinity : giveawayKey.durationInDays
    })
  } catch (error) {
    console.error("Giveaway key redemption error:", error)
    return NextResponse.json(
      { message: "Failed to redeem giveaway key" },
      { status: 500 }
    )
  }
} 