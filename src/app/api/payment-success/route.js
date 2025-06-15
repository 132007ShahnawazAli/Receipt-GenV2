import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"
import { sendReceiptEmail } from "@/lib/email"
import { generateLicenseKeyEmail } from "@/lib/templates/license-key-email"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const type = searchParams.get("type")
    const discordId = searchParams.get("discordId")
    const discordUsername = searchParams.get("discordUsername")

    if (!email || !type) {
      console.error("Missing required parameters")
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=missing_params`)
    }

    // Connect to database
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
    if (type === "monthly") {
      expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 30) // 30 days from now
    } else if (type === "7day") {
      expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 7) // 7 days from now
    } else if (type === "14day") {
      expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 14) // 14 days from now
    }

    if (licenseUser) {
      // Update existing user with new license
      licenseUser.licenseKey = licenseKey
      licenseUser.plan = type
      licenseUser.expiresAt = expiresAt
      licenseUser.purchasedAt = new Date()
      licenseUser.isActive = true

      if (discordId && !licenseUser.discordId) {
        licenseUser.discordId = discordId
      }

      if (discordUsername && !licenseUser.discordUsername) {
        licenseUser.discordUsername = discordUsername
      }

      await licenseUser.save()
    } else {
      // Create new license user
      licenseUser = new LicenseUser({
        email,
        licenseKey,
        plan: type,
        expiresAt,
        discordId,
        discordUsername,
      })

      await licenseUser.save()
    }

    // If Discord info is provided, grant access to Discord channel
    if (discordId) {
      try {
        await grantDiscordChannelAccess(discordId)
      } catch (error) {
        console.error("Failed to grant Discord channel access:", error)
        // Continue even if Discord channel access fails
      }
    }

    // Send license key email
    await sendLicenseKeyEmail(email, licenseKey, type)

    // Redirect to success page with license key
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/payment-success?licenseKey=${licenseKey}&type=${type}`)
  } catch (error) {
    console.error("Error processing payment success:", error)
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/store?error=server_error`)
  }
}

// Function to grant access to Discord channel
async function grantDiscordChannelAccess(discordId) {
  const DISCORD_API_ENDPOINT = "https://discord.com/api/v10"
  const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID
  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
  const DISCORD_ROLE_ID = process.env.DISCORD_ROLE_ID // Single role ID for all subscribers

  if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID || !DISCORD_ROLE_ID) {
    console.warn("Missing Discord configuration. Skipping Discord channel access.")
    return false
  }

  // Add role to the user
  const response = await fetch(
    `${DISCORD_API_ENDPOINT}/guilds/${DISCORD_GUILD_ID}/members/${discordId}/roles/${DISCORD_ROLE_ID}`,
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

// Function to generate a license key
function generateLicenseKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""

  // Generate 4 groups of 4 characters
  for (let group = 0; group < 4; group++) {
    for (let i = 0; i < 4; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    if (group < 3) result += "-"
  }

  return result
}

// Function to send license key email
async function sendLicenseKeyEmail(email, licenseKey, planType) {
  const subject = "Your Receipt Generator License Key"

  // Generate email HTML using the template
  const html = generateLicenseKeyEmail({
    email,
    licenseKey,
    planType,
  })

  try {
    await sendReceiptEmail(email, subject, html)
    return true
  } catch (error) {
    console.error("Error sending license key email:", error)
    // Continue even if email fails
    return false
  }
}