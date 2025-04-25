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
    enum: ["monthly", "lifetime"],
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
})

export default mongoose.models.LicenseUser || mongoose.model("LicenseUser", LicenseUserSchema)
