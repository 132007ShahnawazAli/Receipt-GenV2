import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"
import { NextResponse } from "next/server"

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.licenseKey) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    const user = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      onboardingCompleted: !!user.onboardingCompleted,
      username: user.username || session.user.name || "User",
    })
  } catch (error) {
    console.error("Onboarding status error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    )
  }
}
