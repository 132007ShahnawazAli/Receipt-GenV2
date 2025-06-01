import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDatabase } from "@/lib/utils";
import LicenseUser from "@/models/LicenseUser";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.licenseKey) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    await connectToDatabase();
    const user = await LicenseUser.findOne({ licenseKey: session.user.licenseKey });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({
      email: user.email || "",
      username: user.username || "",
      street: user.street || "",
      city: user.city || "",
      zipCode: user.zipCode || "",
      country: user.country || "",
      receiptsGenerated: user.receiptsGenerated || 0,
      expiresAt: user.expiresAt,
      plan: user.plan,
    });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.licenseKey) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { email, username, street, city, zipCode, country } = await request.json();
    await connectToDatabase();
    const updatedUser = await LicenseUser.findOneAndUpdate(
      { licenseKey: session.user.licenseKey },
      { email, username, street, city, zipCode, country },
      { new: true }
    );
    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
} 