import { getServerSession } from "next-auth/next"
import { authOptions } from "../[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
    }

    const url = new URL(request.url)
    const update = url.searchParams.get("update")

    if (update === "true") {
      // Refresh user data from database
      try {
        await connectToDatabase()
        const user = await User.findById(session.user.id)

        if (!user) {
          return NextResponse.json({ message: "User not found" }, { status: 404 })
        }

        // Return updated user data
        return NextResponse.json({
          user: {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            hasActiveSubscription: user.hasActiveSubscription,
            subscriptionType: user.subscriptionType,
            subscriptionEndDate: user.subscriptionEndDate,
          },
        })
      } catch (error) {
        console.error("Database error when refreshing session:", error)
        // Return the current session if database refresh fails
        return NextResponse.json(session)
      }
    }

    return NextResponse.json(session)
  } catch (error) {
    console.error("Session refresh error:", error)
    return NextResponse.json({ message: "Error refreshing session" }, { status: 500 })
  }
}
