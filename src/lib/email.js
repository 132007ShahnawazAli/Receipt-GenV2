import nodemailer from "nodemailer"

// Create a transporter with connection pool
let transporter = null

function getTransporter() {
  if (transporter) return transporter

  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: process.env.EMAIL_SERVER_SECURE === "true",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    pool: true, // Use connection pool
    maxConnections: 5, // Limit connections
    maxMessages: 100, // Limit messages per connection
  })

  return transporter
}

export async function sendReceiptEmail(to, subject, html) {
  try {
    const transport = getTransporter()

    await transport.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    })

    console.log(`Email sent to ${to}`)
    return true
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}
