import mongoose from "mongoose"

const GiveawayLicenseKeySchema = new mongoose.Schema({
  licenseKey: {
    type: String,
    required: true,
    unique: true,
  },
  durationInDays: {
    type: Number,
    required: true,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: () => new Date().toISOString(),
  },
  redeemedAt: {
    type: Date,
    default: null,
  },
  expiresAt: {
    type: Date,
    default: null,
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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'LicenseUser',
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

// Pre-save middleware to handle expiration calculation
GiveawayLicenseKeySchema.pre('save', function(next) {
  // Only calculate expiration if the key is being redeemed for the first time
  if (this.isModified('isRedeemed') && this.isRedeemed && !this.redeemedAt) {
    const now = new Date()
    this.redeemedAt = now
    
    // Calculate expiration date in UTC
    const expirationDate = new Date(now)
    expirationDate.setUTCDate(expirationDate.getUTCDate() + this.durationInDays)
    this.expiresAt = expirationDate
  }
  next()
})

// Method to check if the key is expired
GiveawayLicenseKeySchema.methods.isExpired = function() {
  if (!this.isRedeemed || !this.expiresAt) {
    return false
  }
  return new Date() > new Date(this.expiresAt)
}

// Method to check if the key is valid for use
GiveawayLicenseKeySchema.methods.isValid = function() {
  return this.isRedeemed && !this.isExpired()
}

export default mongoose.models.GiveawayLicenseKey || mongoose.model("GiveawayLicenseKey", GiveawayLicenseKeySchema) 