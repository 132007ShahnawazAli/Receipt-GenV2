import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    await connectToDatabase()

    const user = await User.findById(session.user.id)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    // Calculate days left for subscription
    let daysLeft = 0
    let subscriptionStatus = "Not subscribed"

    if (user.hasActiveSubscription) {
      if (user.subscriptionType === "lifetime") {
        subscriptionStatus = "lifetime"
        daysLeft = "∞"
      } else if (user.subscriptionEndDate) {
        subscriptionStatus = "monthly"
        const today = new Date()
        const endDate = new Date(user.subscriptionEndDate)
        const diffTime = endDate - today
        daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        // If days left is negative, subscription has expired
        if (daysLeft < 0) {
          daysLeft = 0
          subscriptionStatus = "expired"

          // Update user record to reflect expired subscription
          await User.findByIdAndUpdate(user._id, {
            hasActiveSubscription: false,
          })
        }
      }
    }

    return NextResponse.json({
      receiptsGenerated: user.receiptsGenerated || 0,
      subscriptionStatus,
      daysLeft,
    })
  } catch (error) {
    console.error("Error fetching user stats:", error)
    return NextResponse.json({ message: "Error fetching user stats" }, { status: 500 })
  }
}
