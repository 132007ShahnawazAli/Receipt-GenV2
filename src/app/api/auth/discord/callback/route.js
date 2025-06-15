import { NextResponse } from "next/server"

// Discord OAuth configuration
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET
const DISCORD_REDIRECT_URI = `${process.env.NEXTAUTH_URL}/api/auth/discord/callback`
const DISCORD_API_ENDPOINT = "https://discord.com/api/v10"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get("code")
    const state = searchParams.get("state")

    if (!code) {
      return NextResponse.json({ message: "Authorization code is required" }, { status: 400 })
    }

    // Decode state to get email
    let email = ""
    try {
      const stateData = JSON.parse(Buffer.from(state || "", "base64").toString())
      email = stateData.email
    } catch (error) {
      console.error("Failed to decode state:", error)
      return NextResponse.json({ message: "Invalid state parameter" }, { status: 400 })
    }

    // Exchange code for access token
    const tokenResponse = await fetch(`${DISCORD_API_ENDPOINT}/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: DISCORD_REDIRECT_URI,
      }),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json()
      console.error("Discord token error:", errorData)
      return NextResponse.json({ message: "Failed to exchange code for token" }, { status: 500 })
    }

    const tokenData = await tokenResponse.json()
    const { access_token, token_type } = tokenData

    // Get user information
    const userResponse = await fetch(`${DISCORD_API_ENDPOINT}/users/@me`, {
      headers: {
        Authorization: `${token_type} ${access_token}`,
      },
    })

    if (!userResponse.ok) {
      const errorData = await userResponse.json()
      console.error("Discord user info error:", errorData)
      return NextResponse.json({ message: "Failed to get Discord user info" }, { status: 500 })
    }

    const userData = await userResponse.json()
    const discordId = userData.id
    const username = userData.username
    const discriminator = userData.discriminator
    const discordUsername = discriminator ? `${username}#${discriminator}` : username

    // --- Automatic Server Join ---
    const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID
    const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
    try {
      // Add user to guild (server) using their access token
      await fetch(`${DISCORD_API_ENDPOINT}/guilds/${DISCORD_GUILD_ID}/members/${discordId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bot ${DISCORD_BOT_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_token: access_token
        })
      })
    } catch (err) {
      console.error("Failed to add user to Discord guild:", err)
      // Continue even if this fails
    }
    // --- End Automatic Server Join ---

    // Return HTML that will send a message to the parent window and close
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Discord Connected</title>
          <script>
            window.onload = function() {
              window.opener.postMessage({
                type: "discord_auth_success",
                username: "${discordUsername}",
                id: "${discordId}"
              }, "${process.env.NEXTAUTH_URL}");
              setTimeout(function() {
                window.close();
              }, 1000);
            }
          </script>
        </head>
        <body>
          <h1>Discord Connected Successfully!</h1>
          <p>You can close this window and return to checkout.</p>
        </body>
      </html>`,
      {
        headers: {
          "Content-Type": "text/html",
        },
      },
    )
  } catch (error) {
    console.error("Discord callback error:", error)
    return NextResponse.json({ message: "Discord authentication failed" }, { status: 500 })
  }
}
