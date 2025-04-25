import mongoose from "mongoose"

// Connect to MongoDB
export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined")
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
    throw error
  }
}
