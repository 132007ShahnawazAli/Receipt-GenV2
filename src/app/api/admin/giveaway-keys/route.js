import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import GiveawayLicenseKey from "@/models/GiveawayLicenseKey"
import { generateLicenseKey } from "@/lib/utils"
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid'

// Helper function to check admin authentication
async function checkAdminAuth(request) {
  const adminToken = request.cookies.get('admin_token')
  return adminToken?.value === 'true'
}

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
    // Check admin authentication
    const isAdmin = await checkAdminAuth(request)
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { quantity, expirationDays, notes } = await request.json()

    if (!quantity || !expirationDays || quantity < 1 || expirationDays < 1) {
      return NextResponse.json(
        { message: "Invalid quantity or expiration days" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const batchId = uuidv4()
    const generatedKeys = []

    // Generate the specified number of license keys
    for (let i = 0; i < quantity; i++) {
      const licenseKey = await generateUniqueLicenseKey()
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + expirationDays)

      const giveawayKey = new GiveawayLicenseKey({
        licenseKey,
        expirationDays,
        expiresAt,
        batchId,
        createdBy: 'admin',
        notes
      })

      await giveawayKey.save()
      generatedKeys.push(licenseKey)
    }

    return NextResponse.json({
      success: true,
      batchId,
      keys: generatedKeys,
      quantity,
      expirationDays
    })
  } catch (error) {
    console.error("Giveaway key generation error:", error)
    return NextResponse.json(
      { message: "Failed to generate giveaway keys" },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve giveaway keys
export async function GET(request) {
  try {
    // Check admin authentication
    const isAdmin = await checkAdminAuth(request)
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

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