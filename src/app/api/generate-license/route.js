import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import LicenseUser from "@/models/LicenseUser"
import { generateLicenseKey } from "@/lib/utils"

export async function POST(request) {
  try {
    const { email, plan, discordId, discordUsername, stripeSessionId } = await request.json()

    if (!email || !plan) {
      return NextResponse.json({ message: "Email and plan type are required" }, { status: 400 })
    }

    await connectToDatabase()

    // Check if user already has a license
    let licenseUser = await LicenseUser.findOne({ email })

    // Generate a unique license key
    let licenseKey = generateLicenseKey()
    let existingLicense = await LicenseUser.findOne({ licenseKey })

    // Ensure the license key is unique
    while (existingLicense) {
      licenseKey = generateLicenseKey()
      existingLicense = await LicenseUser.findOne({ licenseKey })
    }

    // Calculate expiration date for monthly licenses
    let expiresAt = null
    if (plan === "monthly") {
      expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 30) // 30 days from now
    }

    if (licenseUser) {
      // Update existing user with new license
      licenseUser.licenseKey = licenseKey
      licenseUser.plan = plan
      licenseUser.expiresAt = expiresAt
      licenseUser.purchasedAt = new Date()
      licenseUser.isActive = true

      if (discordId && !licenseUser.discordId) {
        licenseUser.discordId = discordId
      }

      if (discordUsername && !licenseUser.discordUsername) {
        licenseUser.discordUsername = discordUsername
      }

      if (stripeSessionId) {
        licenseUser.stripeSessionId = stripeSessionId
      }

      await licenseUser.save()
    } else {
      // Create new license user
      licenseUser = new LicenseUser({
        email,
        licenseKey,
        plan,
        expiresAt,
        discordId,
        discordUsername,
        stripeSessionId,
      })

      await licenseUser.save()
    }

    // If Discord info is provided, grant access to Discord channels
    if (discordId) {
      try {
        await grantDiscordChannelAccess(discordId, plan)
      } catch (error) {
        console.error("Failed to grant Discord channel access:", error)
        // Continue even if Discord channel access fails
      }
    }

    return NextResponse.json({
      success: true,
      licenseKey,
      expiresAt,
    })
  } catch (error) {
    console.error("License generation error:", error)
    return NextResponse.json({ message: "Failed to generate license key" }, { status: 500 })
  }
}

// Function to grant access to Discord channels
async function grantDiscordChannelAccess(discordId, plan) {
  const DISCORD_API_ENDPOINT = "https://discord.com/api/v10"
  const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID
  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN

  // Role IDs for different subscription types
  const MONTHLY_ROLE_ID = process.env.DISCORD_MONTHLY_ROLE_ID
  const LIFETIME_ROLE_ID = process.env.DISCORD_LIFETIME_ROLE_ID

  const roleId = plan === "lifetime" ? LIFETIME_ROLE_ID : MONTHLY_ROLE_ID

  // Add role to the user
  const response = await fetch(
    `${DISCORD_API_ENDPOINT}/guilds/${DISCORD_GUILD_ID}/members/${discordId}/roles/${roleId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  )

  if (!response.ok) {
    const errorData = await response.text()
    throw new Error(`Failed to add role to Discord user: ${errorData}`)
  }

  return true
}
