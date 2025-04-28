import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase } from "@/lib/utils"
import LicenseUser from "@/models/LicenseUser"

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "license-key",
      name: "License Key",
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
    }),
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
    signIn: "/dashboard-login",
    error: "/dashboard-login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
