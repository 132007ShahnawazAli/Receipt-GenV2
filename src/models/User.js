import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  hasActiveSubscription: {
    type: Boolean,
    default: false,
  },
  subscriptionType: {
    type: String,
    enum: ["monthly", "lifetime", null],
    default: null,
  },
  subscriptionEndDate: {
    type: Date,
    default: null,
  },
  stripeSubscriptionId: {
    type: String,
    default: null,
  },
  stripeCustomerId: {
    type: String,
    default: null,
  },
  receiptsGenerated: {
    type: Number,
    default: 0,
  },
  discordId: {
    type: String,
    default: null,
  },
  discordUsername: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.User || mongoose.model("User", UserSchema)
