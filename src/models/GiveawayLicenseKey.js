import mongoose from "mongoose"

const GiveawayLicenseKeySchema = new mongoose.Schema({
  licenseKey: {
    type: String,
    required: true,
    unique: true,
  },
  expirationDays: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  isRedeemed: {
    type: Boolean,
    default: false,
  },
  redeemedBy: {
    email: {
      type: String,
      default: null,
    },
    redeemedAt: {
      type: Date,
      default: null,
    }
  },
  batchId: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    default: null,
  }
})

export default mongoose.models.GiveawayLicenseKey || mongoose.model("GiveawayLicenseKey", GiveawayLicenseKeySchema) 