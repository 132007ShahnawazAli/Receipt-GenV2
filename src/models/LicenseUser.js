import mongoose from "mongoose"

// Drop existing model to apply changes
if (mongoose.models.LicenseUser) {
  delete mongoose.models.LicenseUser;
}

const LicenseUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  licenseKey: {
    type: String,
    required: true,
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

// Pre-validate middleware to handle lifetime licenses
LicenseUserSchema.pre('validate', function(next) {
  if (this.plan === 'lifetime') {
    this.expiresAt = null;
  }
  next();
});

// Method to check if the license is expired
LicenseUserSchema.methods.isExpired = function() {
  if (this.plan === 'lifetime') return false;
  if (!this.expiresAt) return false;
  return new Date() > new Date(this.expiresAt);
};

// Method to check if the license is valid
LicenseUserSchema.methods.isValid = function() {
  return this.isActive && !this.isExpired();
};

// Add a compound index to ensure licenseKey uniqueness
LicenseUserSchema.index({ licenseKey: 1 }, { unique: true })

export default mongoose.model("LicenseUser", LicenseUserSchema)
