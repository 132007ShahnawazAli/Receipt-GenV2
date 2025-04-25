import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/mongodb"
import User from "@/models/User"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions)
    return NextResponse.json(session || { user: null })
  } catch (error) {
    console.error("Session error:", error)
    return NextResponse.json({ user: null }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { update } = await request.json()

    if (update) {
      const session = await getServerSession(authOptions)
      if (session?.user?.id) {
        await connectToDatabase()
        const user = await User.findById(session.user.id)

        if (user) {
          // Update session with latest user data
          session.user.hasActiveSubscription = user.hasActiveSubscription
          session.user.subscriptionType = user.subscriptionType
          session.user.subscriptionEndDate = user.subscriptionEndDate
        }
      }
      return NextResponse.json(session || { user: null })
    }

    return NextResponse.json({ success: false }, { status: 400 })
  } catch (error) {
    console.error("Session update error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
