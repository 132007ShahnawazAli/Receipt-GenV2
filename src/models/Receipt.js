import mongoose from "mongoose"

const ReceiptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LicenseUser",
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
  },
  orderNumber: {
    type: String,
  },
  orderDate: {
    type: Date,
  },
  productName: {
    type: String,
  },
  productSize: {
    type: String,
  },
  productImageUrl: {
    type: String,
  },
  subtotal: {
    type: Number,
  },
  shipping: {
    type: String,
  },
  tax: {
    type: Number,
  },
  total: {
    type: Number,
  },
  currencySymbol: {
    type: String,
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  country: {
    type: String,
  },
  cardLastFour: {
    type: String,
  },
  // Store all form data as JSON to accommodate different templates
  formData: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
})

export default mongoose.models.Receipt || mongoose.model("Receipt", ReceiptSchema)
