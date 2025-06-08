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
    default: Date.now,
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

// Pre-validate middleware to ensure proper values
GiveawayLicenseKeySchema.pre('validate', function(next) {
  // For lifetime keys
  if (this.isLifetime) {
    this.durationInDays = -1;
    this.expiresAt = null;
  } 
  // For timed keys
  else if (this.durationInDays <= 0) {
    const err = new Error('Duration must be positive for non-lifetime keys');
    return next(err);
  }
  next();
});

// Virtual for remaining days
GiveawayLicenseKeySchema.virtual('remainingDays').get(function() {
  if (this.isLifetime) return Infinity;
  if (!this.isRedeemed) return this.durationInDays;
  if (!this.expiresAt) return 0;

  const now = new Date();
  const expiresAt = new Date(this.expiresAt);
  const diffTime = expiresAt - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
});

// Virtual for status text
GiveawayLicenseKeySchema.virtual('statusText').get(function() {
  if (!this.isRedeemed) return `Valid for ${this.durationInDays} days when redeemed`;
  if (this.isLifetime) return 'Lifetime License';
  if (this.isExpired()) return 'Expired';
  return `Expires in ${this.remainingDays} days`;
});

// Method to check if the key is expired
GiveawayLicenseKeySchema.methods.isExpired = function() {
  if (this.isLifetime) return false;
  if (!this.isRedeemed) return false;
  if (!this.expiresAt) return false;
  return new Date() > new Date(this.expiresAt);
}

// Method to check if the key is valid for use
GiveawayLicenseKeySchema.methods.isValid = function() {
  if (!this.isRedeemed) return true;
  if (this.isLifetime) return true;
  return !this.isExpired();
}

// Ensure virtuals are included in JSON
GiveawayLicenseKeySchema.set('toJSON', { virtuals: true });
GiveawayLicenseKeySchema.set('toObject', { virtuals: true });

export default mongoose.model("GiveawayLicenseKey", GiveawayLicenseKeySchema) 