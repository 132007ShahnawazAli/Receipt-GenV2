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
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  currencySymbol: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  shipping: {
    type: String,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  subtotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  productImageUrl: {
    type: String,
    required: true,
  },
  cardLastFour: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Receipt || mongoose.model("Receipt", ReceiptSchema)
