import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"
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
      if (session?.user?.licenseKey) {
        await connectToDatabase()
        const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

        if (licenseUser) {
          // Update session with latest license data
          session.user.hasActiveSubscription = licenseUser.isActive
          session.user.plan = licenseUser.plan

          // Calculate expiration for monthly plans
          if (licenseUser.plan === "monthly" && licenseUser.expiresAt) {
            const today = new Date()
            const expiresAt = new Date(licenseUser.expiresAt)
            session.user.subscriptionEndDate = expiresAt

            // Check if expired
            if (expiresAt < today) {
              session.user.hasActiveSubscription = false
            }
          }
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
