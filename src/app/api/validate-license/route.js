import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"
import GiveawayLicenseKey from "@/models/GiveawayLicenseKey"

export const runtime = 'nodejs' // Force Node.js runtime

export async function POST(request) {
  try {
    const { licenseKey } = await request.json()
    
    if (!licenseKey) {
      return NextResponse.json({ 
        valid: false, 
        error: "License key is required" 
      }, { status: 400 })
    }

    await connectToDatabase()
    
    const licenseUser = await LicenseUser.findOne({ licenseKey })
    
    if (!licenseUser || !licenseUser.isActive) {
      return NextResponse.json({ 
        valid: false,
        error: "Invalid or inactive license key"
      }, { status: 200 })
    }

    let isValid = true
    let expiresAt = null
    let message = null

    switch (licenseUser.plan) {
      case "monthly":
        expiresAt = licenseUser.expiresAt
        if (expiresAt && new Date(expiresAt) < new Date()) {
          isValid = false
          message = "Monthly license has expired"
        }
        break
      
      case "giveaway":
        const giveawayKey = await GiveawayLicenseKey.findOne({ licenseKey })
        if (!giveawayKey) {
          isValid = false
          message = "Invalid giveaway key"
          break
        }

        if (!giveawayKey.isRedeemed) {
          // First time redemption
          giveawayKey.isRedeemed = true
          giveawayKey.redeemedBy = {
            email: licenseUser.email,
            userId: licenseUser._id
          }
          await giveawayKey.save() // This will trigger the pre-save hook to calculate expiration
          expiresAt = giveawayKey.expiresAt
        } else {
          // Already redeemed key
          if (giveawayKey.isExpired()) {
            isValid = false
            message = `Giveaway license expired on ${new Date(giveawayKey.expiresAt).toUTCString()}`
          }
          expiresAt = giveawayKey.expiresAt
        }
        break
      
      case "lifetime":
        // Always valid, no expiration
        break
      
      default:
        isValid = false
        message = "Invalid license type"
    }

    return NextResponse.json({
      valid: isValid,
      expiresAt: expiresAt?.toISOString() || null,
      plan: licenseUser.plan,
      message,
      durationInDays: licenseUser.plan === "giveaway" ? 
        (await GiveawayLicenseKey.findOne({ licenseKey }))?.durationInDays : 
        null
    }, { status: 200 })

  } catch (error) {
    console.error("License validation error:", error)
    return NextResponse.json({ 
      valid: false, 
      error: "Internal server error",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 })
  }
} 