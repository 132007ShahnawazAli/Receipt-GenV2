import mongoose from "mongoose"

// Drop the existing model if it exists to apply schema changes
if (mongoose.models.GiveawayLicenseKey) {
  delete mongoose.models.GiveawayLicenseKey;
}

const GiveawayLicenseKeySchema = new mongoose.Schema({
  licenseKey: {
    type: String,
    required: true,
    unique: true,
  },
  durationInDays: {
    type: Number,
    required: true,
    default: -1,
  },
  isLifetime: {
    type: Boolean,
    default: false,
    required: true
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

// Pre-save middleware to validate and handle expiration calculation
GiveawayLicenseKeySchema.pre('validate', function(next) {
  // Validate durationInDays based on isLifetime
  if (this.isLifetime && this.durationInDays !== -1) {
    this.durationInDays = -1;
  } else if (!this.isLifetime && this.durationInDays <= 0) {
    const err = new Error('Duration must be positive for non-lifetime keys');
    return next(err);
  }
  next();
});

GiveawayLicenseKeySchema.pre('save', function(next) {
  // Only calculate expiration if the key is being redeemed for the first time
  if (this.isModified('isRedeemed') && this.isRedeemed && !this.redeemedAt) {
    const now = new Date()
    this.redeemedAt = now
    
    // Don't set expiration date for lifetime keys
    if (!this.isLifetime) {
      // Calculate expiration date in UTC
      const expirationDate = new Date(now)
      expirationDate.setUTCDate(expirationDate.getUTCDate() + this.durationInDays)
      this.expiresAt = expirationDate
    }
  }
  next()
})

// Method to check if the key is expired
GiveawayLicenseKeySchema.methods.isExpired = function() {
  if (this.isLifetime || !this.isRedeemed || !this.expiresAt) {
    return false
  }
  return new Date() > new Date(this.expiresAt)
}

// Method to check if the key is valid for use
GiveawayLicenseKeySchema.methods.isValid = function() {
  return this.isRedeemed && (this.isLifetime || !this.isExpired())
}

export default mongoose.model("GiveawayLicenseKey", GiveawayLicenseKeySchema) 