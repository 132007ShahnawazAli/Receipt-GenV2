import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDatabase } from "@/lib/mongodb"
import { compare } from "bcryptjs"
import User from "@/models/User"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required")
        }

        await connectToDatabase()

        const user = await User.findOne({ email: credentials.email })

        if (!user) {
          throw new Error("No user found with this email")
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          hasActiveSubscription: user.hasActiveSubscription,
          subscriptionType: user.subscriptionType,
          subscriptionEndDate: user.subscriptionEndDate,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        token.id = user.id
        token.hasActiveSubscription = user.hasActiveSubscription
        token.subscriptionType = user.subscriptionType
        token.subscriptionEndDate = user.subscriptionEndDate
      }

      // Handle session updates
      if (trigger === "update" && session) {
        // Update the token with the new session data
        token.hasActiveSubscription = session.hasActiveSubscription
        token.subscriptionType = session.subscriptionType
        token.subscriptionEndDate = session.subscriptionEndDate
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.hasActiveSubscription = token.hasActiveSubscription
        session.user.subscriptionType = token.subscriptionType
        session.user.subscriptionEndDate = token.subscriptionEndDate
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
