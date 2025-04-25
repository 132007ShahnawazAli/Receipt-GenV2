import mongoose from "mongoose"

const LicenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  key: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["monthly", "lifetime"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: null, // null for lifetime licenses
  },
  lastUsed: {
    type: Date,
    default: null,
  },
  revoked: {
    type: Boolean,
    default: false,
  },
  discordId: {
    type: String,
    default: null,
  },
  discordUsername: {
    type: String,
    default: null,
  },
  stripeSessionId: {
    type: String,
    default: null,
  },
})

export default mongoose.models.License || mongoose.model("License", LicenseSchema)
