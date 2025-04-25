import { connectToDatabase } from "@/lib/utils"
import bcrypt from "bcryptjs"
import User from "@/models/User"
import LicenseUser from "@/models/LicenseUser"

export const authOptions = {
  providers: [
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required")
        }

        await connectToDatabase()

        // Find the user by email
        const user = await User.findOne({ email: credentials.email })

        if (!user) {
          throw new Error("No user found with this email")
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        // Return the user object - note this is just for website login, not dashboard access
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          isLicenseUser: false, // Explicitly mark as not a license user
        }
      },
    },
    {
      id: "license-key",
      name: "License Key",
      type: "credentials",
      credentials: {
        licenseKey: { label: "License Key", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.licenseKey) {
          throw new Error("License key is required")
        }

        await connectToDatabase()

        // Find the license key
        const licenseUser = await LicenseUser.findOne({ licenseKey: credentials.licenseKey })

        if (!licenseUser) {
          throw new Error("Invalid license key")
        }

        if (!licenseUser.isActive) {
          throw new Error("This license key has been deactivated")
        }

        // Check if license is expired (for monthly plans)
        if (licenseUser.plan === "monthly" && licenseUser.expiresAt && new Date(licenseUser.expiresAt) < new Date()) {
          throw new Error("This license key has expired")
        }

        // Update last login time
        await LicenseUser.findByIdAndUpdate(licenseUser._id, {
          lastLogin: new Date(),
        })

        // Return the user object with license information
        return {
          id: licenseUser._id.toString(),
          email: licenseUser.email,
          name: licenseUser.email?.split("@")[0] || "User",
          licenseKey: licenseUser.licenseKey,
          plan: licenseUser.plan,
          discordUsername: licenseUser.discordUsername,
          hasActiveSubscription: true,
          isLicenseUser: true, // Flag to identify license users
        }
      },
    },
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.hasActiveSubscription = user.hasActiveSubscription
        token.subscriptionType = user.subscriptionType
        token.discordId = user.discordId
        token.discordUsername = user.discordUsername
        token.isLicenseUser = user.isLicenseUser
        token.licenseKey = user.licenseKey
        token.plan = user.plan
      }

      // Handle session updates
      if (trigger === "update" && session) {
        // Update the token with the new session data
        Object.keys(session).forEach((key) => {
          if (key !== "iat" && key !== "exp" && key !== "jti") {
            token[key] = session[key]
          }
        })
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          email: token.email,
          name: token.name || token.email?.split("@")[0],
          hasActiveSubscription: token.hasActiveSubscription,
          subscriptionType: token.subscriptionType || token.plan,
          discordId: token.discordId,
          discordUsername: token.discordUsername,
          isLicenseUser: token.isLicenseUser,
          licenseKey: token.licenseKey,
          plan: token.plan,
        }
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}
