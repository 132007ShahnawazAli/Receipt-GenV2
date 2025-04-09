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

        try {
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
        } catch (error) {
          console.error("Authorization error:", error)
          throw new Error(error.message || "Authentication failed")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.hasActiveSubscription = user.hasActiveSubscription
        token.subscriptionType = user.subscriptionType
        token.subscriptionEndDate = user.subscriptionEndDate
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

      // If token is about to expire, refresh user data from database
      if (token?.exp && Date.now() / 1000 > token.exp - 300) {
        try {
          await connectToDatabase()
          const user = await User.findById(token.id)
          if (user) {
            token.hasActiveSubscription = user.hasActiveSubscription
            token.subscriptionType = user.subscriptionType
            token.subscriptionEndDate = user.subscriptionEndDate
          }
        } catch (error) {
          console.error("Error refreshing token data:", error)
          // Continue with existing token data on error
        }
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          email: token.email,
          name: token.name,
          hasActiveSubscription: token.hasActiveSubscription,
          subscriptionType: token.subscriptionType,
          subscriptionEndDate: token.subscriptionEndDate,
        }
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login", // Error code passed in query string as ?error=
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" 
        ? `__Secure-next-auth.session-token` 
        : `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === "production"
      }
    },
    callbackUrl: {
      name: process.env.NODE_ENV === "production" 
        ? `__Secure-next-auth.callback-url` 
        : `next-auth.callback-url`,
      options: {
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === "production"
      }
    },
    csrfToken: {
      name: process.env.NODE_ENV === "production" 
        ? `__Host-next-auth.csrf-token` 
        : `next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === "production"
      }
    }
  },
  events: {
    async signIn({ user }) {
      console.log("User signed in:", user.email)
    },
    async signOut({ token }) {
      console.log("User signed out:", token?.email)
    },
    async session({ session, token }) {
      console.log("Session updated:", session?.user?.email)
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
