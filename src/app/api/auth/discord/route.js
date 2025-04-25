import { NextResponse } from "next/server"

// Discord OAuth configuration
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
const DISCORD_REDIRECT_URI = `${process.env.NEXTAUTH_URL}/api/auth/discord/callback`

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    // Store email in state for the callback
    const state = Buffer.from(JSON.stringify({ email })).toString("base64")

    // Generate Discord OAuth URL - only requesting identify scope
    const scope = "identify"

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(DISCORD_REDIRECT_URI)}&response_type=code&scope=${encodeURIComponent(scope)}&state=${state}`

    // Return HTML that will redirect in the popup window
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Connecting to Discord...</title>
          <meta http-equiv="refresh" content="0;url=${discordAuthUrl}">
        </head>
        <body>
          <p>Redirecting to Discord...</p>
        </body>
      </html>`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      },
    )
  } catch (error) {
    console.error("Discord auth error:", error)
    return NextResponse.json({ message: "Failed to initiate Discord authentication" }, { status: 500 })
  }
}
