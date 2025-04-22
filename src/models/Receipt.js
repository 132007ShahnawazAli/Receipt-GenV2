import mongoose from "mongoose"

const ReceiptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: false, // Make fields optional to support different templates
  },
  email: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: false,
  },
  // Added new fields for both templates
  streetAddress: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  zipCode: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  currencySymbol: {
    type: String,
    required: false,
  },
  productName: {
    type: String,
    required: false,
  },
  orderDate: {
    type: Date,
    required: false,
  },
  deliveryDate: {
    type: Date,
    required: false,
  },
  shipping: {
    type: String,
    required: false,
  },
  productSize: {
    type: String,
    required: false,
  },
  subtotal: {
    type: Number,
    required: false,
  },
  tax: {
    type: Number,
    required: false,
  },
  total: {
    type: Number,
    required: false,
  },
  productImageUrl: {
    type: String,
    required: false,
  },
  cardLastFour: {
    type: String,
    required: false,
  },
  // Store all form data as JSON to accommodate different templates
  formData: {
    type: String, // JSON string of all form fields
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Receipt || mongoose.model("Receipt", ReceiptSchema)
