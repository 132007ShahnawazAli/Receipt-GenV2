import mongoose from "mongoose"

const LicenseUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  licenseKey: {
    type: String,
    required: true,
    unique: true,
  },
  plan: {
    type: String,
    enum: ["monthly", "lifetime", "giveaway"],
    required: true,
  },
  purchasedAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: null, // null for lifetime licenses
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  discordId: {
    type: String,
    default: null,
  },
  discordUsername: {
    type: String,
    default: null,
  },
  receiptsGenerated: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  // New fields for onboarding
  username: {
    type: String,
    default: null,
  },
  onboardingCompleted: {
    type: Boolean,
    default: false,
  },
  onboardingData: {
    productInterests: {
      type: String,
      default: null,
    },
    experience: {
      type: String,
      default: null,
    },
    sellingPlatforms: {
      type: String,
      default: null,
    },
    goal: {
      type: String,
      default: null,
    },
  },
  // New fields for address and profile
  fullName: {
    type: String,
    default: null,
  },
  street: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  zipCode: {
    type: String,
    default: null,
  },
  country: {
    type: String,
    default: null,
  },
})

export default mongoose.models.LicenseUser || mongoose.model("LicenseUser", LicenseUserSchema)
