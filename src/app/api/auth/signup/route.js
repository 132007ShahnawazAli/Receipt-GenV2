import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const { name, email, password } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Connect to database
    await connectToDatabase()

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      hasActiveSubscription: false,
      subscriptionType: null,
      subscriptionEndDate: null,
      receiptsGenerated: 0,
    })

    await user.save()

    // Return success with user data for auto-login
    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
