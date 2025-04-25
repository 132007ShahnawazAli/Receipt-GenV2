import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"

export async function POST(request) {
  try {
    const { licenseKey } = await request.json()

    if (!licenseKey) {
      return NextResponse.json({ message: "License key is required" }, { status: 400 })
    }

    // Connect to database
    await connectToDatabase()

    // Find the license key
    const licenseUser = await LicenseUser.findOne({ licenseKey })

    if (!licenseUser) {
      return NextResponse.json({ message: "Invalid license key" }, { status: 401 })
    }

    if (!licenseUser.isActive) {
      return NextResponse.json({ message: "This license key has been deactivated" }, { status: 401 })
    }

    // Check if license is expired (for monthly plans)
    if (licenseUser.plan === "monthly" && licenseUser.expiresAt && new Date(licenseUser.expiresAt) < new Date()) {
      return NextResponse.json({ message: "This license key has expired" }, { status: 401 })
    }

    // Return success with the license user data
    return NextResponse.json({
      success: true,
      licenseKey,
      email: licenseUser.email,
      plan: licenseUser.plan,
    })
  } catch (error) {
    console.error("License login error:", error)
    return NextResponse.json({ message: "Authentication failed" }, { status: 500 })
  }
}
