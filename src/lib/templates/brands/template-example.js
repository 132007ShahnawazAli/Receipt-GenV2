/**
 * Example Template - Use this as a starting point for new templates
 *
 * This file shows how to create a new brand template with:
 * - Custom subject line with variable placeholders
 * - Form field definitions
 * - HTML generation function
 */

import { formatDate, formatCurrency } from "../template-utils"

const exampleTemplate = {
  name: "Example Brand",
  logo: "example_brand.png",
  enabled: true,
  subject: "Your {brandName} order #{orderNumber} confirmation",

  // Define all form fields needed for this template
  fields: [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "customerName", label: "Customer Name", type: "text", required: true },
    { name: "orderNumber", label: "Order Number", type: "text", required: true },
    { name: "orderDate", label: "Order Date", type: "date", required: true },
    { name: "productName", label: "Product Name", type: "text", required: true },
    { name: "productImageUrl", label: "Product Image URL", type: "url", required: true },
    { name: "subtotal", label: "Subtotal", type: "number", required: true },
    { name: "shipping", label: "Shipping", type: "text", required: true, defaultValue: "Free" },
    { name: "total", label: "Total", type: "number", required: true },
    { name: "currencySymbol", label: "Currency Symbol", type: "text", required: true, defaultValue: "$" },
  ],

  // Function to generate HTML for the receipt
  getHtml: (data) => generateExampleReceiptHtml(data),
}

/**
 * Generate HTML for the example receipt
 * @param {Object} data - The form data
 * @returns {string} The HTML content for the receipt email
 */
function generateExampleReceiptHtml(data) {
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
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="padding: 20px; text-align: center; background-color: #000000;">
        <img src="${logoUrl}" alt="${data.brandName} Logo" style="max-height: 50px;">
      </td>
    </tr>
    <tr>
      <td style="padding: 20px;">
        <h1 style="color: #333333;">Order Confirmation</h1>
        <p>Hello ${data.customerName},</p>
        <p>Thank you for your order! We've received your purchase and are processing it now.</p>
        
        <h2 style="color: #333333; margin-top: 30px;">Order Details</h2>
        <p><strong>Order Number:</strong> ${data.orderNumber}</p>
        <p><strong>Order Date:</strong> ${formattedDate}</p>
        
        <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f8f8f8;">
            <th style="text-align: left; border-bottom: 1px solid #dddddd;">Product</th>
            <th style="text-align: right; border-bottom: 1px solid #dddddd;">Price</th>
          </tr>
          <tr>
            <td style="border-bottom: 1px solid #dddddd;">
              <div style="display: flex; align-items: center;">
                <img src="${data.productImageUrl}" alt="${data.productName}" style="width: 60px; height: 60px; object-fit: cover; margin-right: 10px;">
                <div>${data.productName}</div>
              </div>
            </td>
            <td style="text-align: right; border-bottom: 1px solid #dddddd;">${formatCurrency(data.subtotal, data.currencySymbol)}</td>
          </tr>
          <tr>
            <td style="text-align: right;">Subtotal:</td>
            <td style="text-align: right;">${formatCurrency(data.subtotal, data.currencySymbol)}</td>
          </tr>
          <tr>
            <td style="text-align: right;">Shipping:</td>
            <td style="text-align: right;">${data.shipping}</td>
          </tr>
          <tr>
            <td style="text-align: right; font-weight: bold;">Total:</td>
            <td style="text-align: right; font-weight: bold;">${formatCurrency(data.total, data.currencySymbol)}</td>
          </tr>
        </table>
        
        <p style="margin-top: 30px;">If you have any questions about your order, please contact our customer service.</p>
        
        <p>Thank you for shopping with us!</p>
        <p>The ${data.brandName} Team</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px; text-align: center; background-color: #f8f8f8; color: #777777; font-size: 12px;">
        <p>&copy; ${new Date().getFullYear()} ${data.brandName}. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export default exampleTemplate
