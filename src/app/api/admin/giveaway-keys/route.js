import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import GiveawayLicenseKey from "@/models/GiveawayLicenseKey"
import { generateLicenseKey } from "@/lib/utils"
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid'

// Helper function to generate a unique license key
async function generateUniqueLicenseKey() {
  let licenseKey = generateLicenseKey()
  let existingLicense = await GiveawayLicenseKey.findOne({ licenseKey })

  while (existingLicense) {
    licenseKey = generateLicenseKey()
    existingLicense = await GiveawayLicenseKey.findOne({ licenseKey })
  }

  return licenseKey
}

// POST endpoint to generate new giveaway keys
export async function POST(request) {
  try {
    await connectToDatabase()
    
    const { quantity, expirationDays, notes, isLifetime } = await request.json()

    if (!quantity || quantity < 1) {
      return NextResponse.json(
        { message: "Invalid quantity" },
        { status: 400 }
      )
    }

    // Validate based on lifetime flag
    if (!isLifetime && (typeof expirationDays !== 'number' || expirationDays < 1)) {
      return NextResponse.json(
        { message: "For timed keys, expiration days must be a positive number" },
        { status: 400 }
      )
    }

    const batchId = uuidv4()
    const generatedKeys = []
    const currentDate = new Date()

    // Generate the specified number of license keys
    for (let i = 0; i < quantity; i++) {
      const licenseKey = await generateUniqueLicenseKey()
      
      const giveawayKey = new GiveawayLicenseKey({
        licenseKey,
        isLifetime: Boolean(isLifetime),
        durationInDays: isLifetime ? -1 : expirationDays,
        batchId,
        createdBy: 'admin',
        notes,
        createdAt: currentDate
      })

      await giveawayKey.save()
      generatedKeys.push({
        licenseKey,
        batchId,
        createdAt: currentDate,
        isLifetime: Boolean(isLifetime),
        expirationDays: isLifetime ? null : expirationDays
      })
    }

    return NextResponse.json({
      success: true,
      batchId,
      keys: generatedKeys,
      quantity,
      isLifetime: Boolean(isLifetime),
      expirationDays: isLifetime ? null : expirationDays
    })
  } catch (error) {
    console.error("Giveaway key generation error:", error)
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Duplicate key detected, please try again" },
        { status: 409 }
      )
    }
    return NextResponse.json(
      { message: "Failed to generate giveaway keys", error: error.message },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve giveaway keys
export async function GET(request) {
  try {
    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const batchId = searchParams.get("batchId")
    const status = searchParams.get("status") // 'all', 'redeemed', 'unredeemed'

    let query = {}
    
    if (batchId) {
      query.batchId = batchId
    }
    
    if (status === "redeemed") {
      query.isRedeemed = true
    } else if (status === "unredeemed") {
      query.isRedeemed = false
    }

    const keys = await GiveawayLicenseKey.find(query)
      .sort({ createdAt: -1 })
      .limit(100)

    return NextResponse.json({
      success: true,
      keys
    })
  } catch (error) {
    console.error("Error fetching giveaway keys:", error)
    return NextResponse.json(
      { message: "Failed to fetch giveaway keys" },
      { status: 500 }
    )
  }
} 