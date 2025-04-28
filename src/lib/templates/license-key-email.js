/**
 * License Key Email Template
 *
 * This file contains the template for the license key email that is sent
 * to users after they complete a purchase.
 */

/**
 * Generate the HTML for the license key email
 * @param {Object} data - The data for the email
 * @param {string} data.email - The user's email
 * @param {string} data.licenseKey - The generated license key
 * @param {string} data.planType - The type of plan (monthly or lifetime)
 * @returns {string} The HTML content for the email
 */
export function generateLicenseKeyEmail(data) {
    const { email, licenseKey, planType } = data
    const appUrl = process.env.NEXTAUTH_URL || "https://www.resellora.com"
    const currentYear = new Date().getFullYear()
  
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your License Key</title>
    </head>
    <body style="font-family: 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #121212; color: #EDEDED;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.2); margin-top: 20px; margin-bottom: 20px;">
        <tr>
          <td style="padding: 30px 0; text-align: center; background-color: #1e1e1e;">
            <img src="https://res.cloudinary.com/drbew77vx/image/upload/v1745829865/resolora-receipt-logos/Resellora_logo.png" alt="Resellora Logo" style="max-height: 60px;">
          </td>
        </tr>
        <tr>
          <td style="padding: 40px 30px;">
            <h1 style="color: #a2bef7; margin-bottom: 20px; font-weight: 600; font-size: 24px; text-align: center;">Your License Key is Ready!</h1>
            <p style="color: #EDEDED; line-height: 1.6; margin-bottom: 25px; font-size: 16px; text-align: center;">Thank you for your purchase. Your ${planType === "lifetime" ? "lifetime" : "monthly"} license has been activated.</p>
            
            <div style="background-color: #252525; border-left: 4px solid #a2bef7; border-radius: 6px; padding: 25px; margin: 30px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
              <p style="color: #EDEDED; margin-bottom: 15px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your License Key:</p>
              <div style="background-color: #333333; padding: 20px; border-radius: 6px; font-family: monospace; font-size: 20px; color: #a2bef7; text-align: center; letter-spacing: 2px; word-break: break-all; margin-bottom: 15px;">
                ${licenseKey}
              </div>
              <p style="color: #ededed80; font-size: 13px; margin-top: 15px; text-align: center; font-style: italic;">Keep this key safe. You'll need it to access your dashboard.</p>
            </div>
            
            <div style="background-color: #252525; border-radius: 6px; padding: 25px; margin: 30px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
              <h2 style="color: #a2bef7; margin-top: 0; font-size: 18px; font-weight: 600;">Important Information:</h2>
              <ul style="color: #EDEDED; line-height: 1.8; padding-left: 20px;">
                <li>Save your license key in a secure location.</li>
                <li>You can use this key to log in to the dashboard.</li>
                <li>Your Discord account has been granted access to exclusive channels.</li>
                ${planType === "monthly" ? "<li>Your subscription will automatically renew every month.</li>" : ""}
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 35px;">
              <a href="${appUrl}/dashboard-login" style="display: inline-block; background-color: #a2bef7; color: #121212; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; transition: all 0.3s ease;">Access Dashboard</a>
            </div>
            
            <p style="color: #EDEDED; margin-top: 35px; line-height: 1.6; font-size: 15px;">If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
            
            <p style="color: #EDEDED; line-height: 1.6; font-size: 15px;">Thank you for choosing our service!</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #1e1e1e; color: #ededed80; font-size: 12px;">
            <p>&copy; ${currentYear} Resellora. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `
  }
  