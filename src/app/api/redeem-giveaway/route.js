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

    // Check if key is expired
    if (new Date() > new Date(giveawayKey.expiresAt)) {
      return NextResponse.json(
        { message: "This giveaway key has expired" },
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

    // Calculate expiration date based on giveaway key's expiration days
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + giveawayKey.expirationDays)

    // Create new license user entry (always create new, never update existing)
    const newLicenseUser = new LicenseUser({
      email,
      licenseKey,
      plan: "giveaway",
      expiresAt,
      isActive: true
    })
    await newLicenseUser.save()

    // Mark giveaway key as redeemed
    giveawayKey.isRedeemed = true
    giveawayKey.redeemedBy = {
      email,
      redeemedAt: new Date()
    }
    await giveawayKey.save()

    return NextResponse.json({
      success: true,
      message: "Giveaway key redeemed successfully",
      expiresAt
    })
  } catch (error) {
    console.error("Giveaway key redemption error:", error)
    return NextResponse.json(
      { message: "Failed to redeem giveaway key" },
      { status: 500 }
    )
  }
} 