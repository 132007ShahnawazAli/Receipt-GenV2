import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mongoose from "mongoose"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Generate a formatted license key
export function generateLicenseKey() {
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

// Validate license key format
export function isValidLicenseKeyFormat(key) {
  const pattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/
  return pattern.test(key)
}

// Connect to MongoDB
export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined")
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
    throw error
  }
}

// Check if license key is valid and not expired
export async function isLicenseKeyValid(licenseKey) {
  try {
    await connectToDatabase()
    const LicenseUser = mongoose.models.LicenseUser || mongoose.model('LicenseUser', require('@/models/LicenseUser').schema)
    const GiveawayLicenseKey = mongoose.models.GiveawayLicenseKey || mongoose.model('GiveawayLicenseKey', require('@/models/GiveawayLicenseKey').schema)
    
    const licenseUser = await LicenseUser.findOne({ licenseKey })
    
    if (!licenseUser || !licenseUser.isActive) {
      return false
    }

    // Handle different license types
    switch (licenseUser.plan) {
      case "monthly":
        return licenseUser.expiresAt && new Date(licenseUser.expiresAt) > new Date()
      
      case "giveaway":
        // For giveaway keys, check both LicenseUser and GiveawayLicenseKey
        const giveawayKey = await GiveawayLicenseKey.findOne({ licenseKey })
        if (!giveawayKey) {
          return false
        }
        return giveawayKey.expiresAt && new Date(giveawayKey.expiresAt) > new Date()
      
      case "lifetime":
        return true
      
      default:
        return false
    }
  } catch (error) {
    console.error("Error checking license validity:", error)
    return false
  }
}

// Helper function to calculate expiration date for giveaway keys
export function calculateGiveawayExpiration(days) {
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + days)
  return expirationDate
}
