import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.licenseKey) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const { username, productInterests, experience, sellingPlatforms, goal } = await request.json()

    // Validate required fields
    if (!username || !username.trim()) {
      return NextResponse.json({ message: "Username is required" }, { status: 400 })
    }

    await connectToDatabase()

    // Update the user with onboarding data
    const updatedUser = await LicenseUser.findOneAndUpdate(
      { licenseKey: session.user.licenseKey },
      {
        username: username.trim(),
        onboardingCompleted: true,
        onboardingData: {
          productInterests,
          experience,
          sellingPlatforms,
          goal,
        },
      },
      { new: true },
    )

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Onboarding completed successfully",
    })
  } catch (error) {
    console.error("Onboarding error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.licenseKey) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    // Reset onboarding data for testing
    await LicenseUser.findOneAndUpdate(
      { licenseKey: session.user.licenseKey },
      {
        $unset: { username: "", onboardingData: "" },
        onboardingCompleted: false,
      },
    )

    return NextResponse.json({
      success: true,
      message: "Onboarding data reset successfully",
    })
  } catch (error) {
    console.error("Reset onboarding error:", error)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
