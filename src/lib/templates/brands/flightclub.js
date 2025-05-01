/**
 * Flight Club Template
 *
 * This template generates a Flight Club order confirmation email
 * with product details, shipping information, and order summary.
 */

import { formatDate, formatCurrency } from "../template-utils"

const flightClubTemplate = {
  name: "Flight Club",
  logo: "flight_club.png",
  enabled: true,
  subject: "Your Flight Club order #{orderNumber} confirmation",

  // Define all form fields needed for this template
  fields: [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "customerName", label: "Customer Name", type: "text", required: true },
    { name: "orderNumber", label: "Order Number", type: "text", required: true },
    { name: "orderDate", label: "Order Date", type: "date", required: true },
    { name: "productName", label: "Product Name", type: "text", required: true },
    { name: "productImageUrl", label: "Product Image URL", type: "url", required: true },
    { name: "productColor", label: "Product Color", type: "text", required: true },
    { name: "productSize", label: "Product Size", type: "text", required: true },
    { name: "price", label: "Price", type: "number", required: true },
    { name: "currencySymbol", label: "Currency Symbol", type: "text", required: true, defaultValue: "$" },
    { name: "shippingName", label: "Shipping Name", type: "text", required: true },
    { name: "shippingStreet", label: "Shipping Street", type: "text", required: true },
    { name: "shippingCity", label: "Shipping City", type: "text", required: true },
    { name: "shippingZip", label: "Shipping ZIP/Postal Code", type: "text", required: true },
    { name: "shippingCounty", label: "Shipping County/State", type: "text", required: true },
    {
      name: "paymentMethod",
      label: "Payment Method",
      type: "text",
      required: true,
      defaultValue: "Apple Pay ENDING IN 4569",
    },
  ],

  // Function to generate HTML for the receipt
  getHtml: (data) => generateFlightClubReceiptHtml(data),
}

/**
 * Generate HTML for the Flight Club receipt
 * @param {Object} data - The form data
 * @returns {string} The HTML content for the receipt email
 */
function generateFlightClubReceiptHtml(data) {
  // Format dates using the utility function
  const formattedDate = formatDate(data.orderDate)

  // Get logo URL from the brand logo
  const logoUrl = `https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/${data.brandLogo}`

  // Generate the HTML for the receipt
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Order Confirmation</title>
</head>
<body style="font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="padding: 20px; text-align: center;">
        <center style="min-width: 580px; width: 100%">
          <img style="margin: 0 auto; clear: both; display: block; float: none; max-width: 100%; outline: 0; padding: 40px 0 0; text-align: center; text-decoration: none; width: auto" src="${logoUrl}" alt="Flight Club Logo" height="23" align="center">
        </center>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="text-align: center; padding-bottom: 20px;">
              <h1 style="margin: 0; margin-bottom: 10px; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 22px; font-weight: 500; line-height: 1.3; margin-top: 50px; padding: 0; text-align: center; word-wrap: normal; text-transform: uppercase">Thanks for your order</h1>
              <p style="margin: 20px 24px 30px; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: center">Your order is being sent to Flight Club for authentication by our specialists. Once your item has been authenticated, we'll send you a confirmation email with a link to track your package.</p>
              <center style="min-width: 580px; width: 100%">
                <table style="margin: 0 0 16px 0; background-color: #000; border-collapse: collapse; border-spacing: 0; margin-bottom: 0; max-width: 280px; padding: 0; text-align: left; vertical-align: top; width: 100%">
                  <tr>
                    <td style="background-color: #000; border: 2px solid #000; padding: 0; text-align: center;">
                      <a href="#" style="margin: 0; border: 0 solid #2199e8; border-radius: 3px; color: #fefefe; display: inline-block; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 8px 16px; text-align: center; text-decoration: none; width: 100%" target="_blank">VIEW ORDER</a>
                    </td>
                  </tr>
                </table>
              </center>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <table style="margin: 40px 0 20px; background-color: #f7f7f7; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: inherit; vertical-align: top; width: 580px; max-width: 600px; margin: 0 auto;">
    <tr>
      <td style="padding: 16px;">
        <table style="margin-bottom: 16px; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
          <tr>
            <td style="margin: 0 40px; background: #fefefe; border: 1px solid #e7e7e7; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; padding: 20px; text-align: left; vertical-align: middle; width: 100%">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; margin-bottom: 18px; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="width: 50%">
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.3; padding: 0; text-align: left">
                      Order Summary
                    </p>
                  </td>
                  <td style="width: 50%">
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: right">
                      Order #${data.orderNumber}
                    </p>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e7e7e7">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; margin: 25px 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="width: 25%; vertical-align: top;">
                    <img style="clear: both; display: block; max-width: 100%; outline: 0; text-decoration: none; width: auto" src="${data.productImageUrl}" alt="${data.productName}">
                  </td>
                  <td style="width: 66.66667%; vertical-align: top; padding-left: 15px;">
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left; text-transform: uppercase">${data.productName}</p>
                    <p style="margin: 0; color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">${data.productColor}</p>
                    <br>
                    <table style="width: 100%;">
                      <tr>
                        <td>
                          <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">Size: ${data.productSize}</p>
                        </td>
                        <td>
                          <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; text-align: right">
                            ${formatCurrency(data.price, data.currencySymbol)}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e7e7e7">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; margin: 20px 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">SUBTOTAL</td>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; text-align: right">
                    ${formatCurrency(data.price, data.currencySymbol)}
                  </td>
                </tr>
                <tr><td height="15px">&nbsp;</td></tr>
                <tr>
                  <td style="color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">SHIPPING</td>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; text-align: right">
                    ${formatCurrency(0, data.currencySymbol)}
                  </td>
                </tr>
                <tr><td height="15px">&nbsp;</td></tr>
                <tr>
                  <td style="color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">PAYMENT METHOD</td>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; text-align: right">
                    ${data.paymentMethod}
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e7e7e7">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">Order Total</td>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: right">
                    ${formatCurrency(data.price, data.currencySymbol)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <table style="margin: 0 auto; background-color: #f7f7f7; border-collapse: collapse; border-spacing: 0; margin-bottom: 40px; margin-top: 20px; padding: 0; text-align: inherit; vertical-align: top; width: 580px; max-width: 600px;">
    <tr>
      <td style="padding: 16px;">
        <table style="margin-bottom: 16px; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
          <tr>
            <td style="margin: 0 40px; background: #fefefe; border: 1px solid #e7e7e7; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; padding: 20px; text-align: left; vertical-align: middle; width: 100%">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; margin-bottom: 18px; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="width: 100%">
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 1.3; padding: 0; text-align: left">
                      Shipping Details
                    </p>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e7e7e7">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; margin: 20px 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="width: 50%; vertical-align: top;">
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">${data.shippingName}</p>
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">${data.shippingStreet}</p>
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">&nbsp;</p>
                    <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">${data.shippingCity}, ${data.shippingZip}</p>
                  </td>
                  <td style="width: 50%; vertical-align: top;">
                    <p style="margin: 0; color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">${data.shippingCounty}</p>
                  </td>
                </tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e7e7e7">
              <table style="border-collapse: collapse; border-spacing: 0; display: table; margin: 20px 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
                <tr>
                  <td style="color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">SHIPPING METHOD</td>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; text-align: right">
                    STANDARD SHIPPING
                  </td>
                </tr>
                <tr><td height="15px">&nbsp;</td></tr>
                <tr>
                  <td style="color: #818181; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">SHIPPING STATUS</td>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; text-align: right">
                    PENDING
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <table style="margin: 0 auto; background-color: #f7f7f7; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: inherit; vertical-align: top; width: 580px; max-width: 600px;">
    <tr>
      <td style="padding: 16px;">
        <h1 style="margin: 0; margin-bottom: 20px; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 1.3; margin-top: 40px; padding: 0; text-align: left; word-wrap: normal">FAQ</h1>
        
        <table style="margin-bottom: 16px; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
          <tr>
            <td style="margin: 0 40px; background: #fefefe; border: 1px solid #e7e7e7; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; padding: 20px; text-align: left; vertical-align: middle; width: 100%">
              <table style="width: 100%;">
                <tr>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">
                    <a href="#" style="color: #000; text-decoration: none;">When will I receive my order?</a>
                  </td>
                  <td style="text-align: right;">
                    <img src="https://email-assets.goat.com/FC/Logos/down-caret@3x.png" width="8" height="14" alt="">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <table style="margin-bottom: 16px; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
          <tr>
            <td style="margin: 0 40px; background: #fefefe; border: 1px solid #e7e7e7; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; padding: 20px; text-align: left; vertical-align: middle; width: 100%">
              <table style="width: 100%;">
                <tr>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">
                    <a href="#" style="color: #000; text-decoration: none;">Will I be able to return this item?</a>
                  </td>
                  <td style="text-align: right;">
                    <img src="https://email-assets.goat.com/FC/Logos/down-caret@3x.png" width="8" height="14" alt="">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <table style="margin-bottom: 16px; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: left; vertical-align: top; width: 100%">
          <tr>
            <td style="margin: 0 40px; background: #fefefe; border: 1px solid #e7e7e7; color: #0a0a0a; font-family: Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 1.3; padding: 20px; text-align: left; vertical-align: middle; width: 100%">
              <table style="width: 100%;">
                <tr>
                  <td style="color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 1.3; padding: 0; text-align: left">
                    <a href="#" style="color: #000; text-decoration: none;">How can I make changes to or cancel my order?</a>
                  </td>
                  <td style="text-align: right;">
                    <img src="https://email-assets.goat.com/FC/Logos/down-caret@3x.png" width="8" height="14" alt="">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        
        <p style="margin: 0; color: #000; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500; line-height: 1.3; padding: 0; padding-bottom: 40px; padding-left: 15px; text-align: left">
          <u><a href="#" style="color: #2199e8; text-decoration: none;">View All FAQ</a></u>
        </p>
      </td>
    </tr>
  </table>

  <table style="margin: 0 auto; background-color: #000; border-collapse: collapse; border-spacing: 0; padding: 0; text-align: inherit; vertical-align: top; width: 580px; max-width: 600px;">
    <tr>
      <td style="padding: 20px; text-align: center;">
        <img style="margin: 40px auto 20px; display: block; height: 32px;" src="https://images.goat.com/FC/Logos/fc-logo-2.png" alt="Flight Club Logo">
        
        <table style="width: 100%; margin: 40px 0;">
          <tr>
            <td style="width: 33.33%; text-align: center;">
              <p style="margin: 0; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; text-align: center">NEW YORK CITY</p>
              <p style="margin: 0; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; text-align: center">812 BROADWAY</p>
            </td>
            <td style="width: 33.33%; text-align: center;">
              <p style="margin: 0; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; text-align: center">LOS ANGELES</p>
              <p style="margin: 0; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; text-align: center">535 N FAIRFAX AVE</p>
            </td>
            <td style="width: 33.33%; text-align: center;">
              <p style="margin: 0; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; text-align: center">MIAMI</p>
              <p style="margin: 0; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 400; line-height: 1.3; text-align: center">3910 NE 1ST AVE</p>
            </td>
          </tr>
        </table>
        
        <div style="margin: 40px 0; text-align: center;">
          <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://email-assets.goat.com/FC/Logos/fb-logo.png" height="20" alt="Facebook"></a>
          <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://email-assets.goat.com/FC/Logos/ig-logo.png" height="20" alt="Instagram"></a>
          <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://email-assets.goat.com/FC/Logos/twitter-logo.png" height="20" alt="Twitter"></a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #818181; margin: 30px 0;">
        
        <div style="margin: 30px 0; text-align: center;">
          <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500;">Contact Support</a>
          <a href="#" style="color: white; text-decoration: none; margin: 0 15px; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 500;">Privacy Policy</a>
        </div>
        
        <p style="margin: 30px 0; color: #999; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; text-align: center;">© ${new Date().getFullYear()} Flight Club New York LLC. All Rights Reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export default flightClubTemplate
