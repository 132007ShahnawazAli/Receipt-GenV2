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
