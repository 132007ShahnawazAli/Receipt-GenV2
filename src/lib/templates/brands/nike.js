/**
 * Nike Receipt Template Configuration
 *
 * This file defines the Nike receipt template including:
 * - Form fields and their properties
 * - Email subject format
 * - HTML generation function
 */

const nikeTemplate = {
  name: "Nike",
  logo: "nike.png",
  enabled: true,
  subject: "Thanks, {customerName}! Your Nike Order Confirmation",
  fields: [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "customerName", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "streetAddress", label: "Street", type: "text", required: true, placeholder: "123 Main St" },
    { name: "city", label: "City", type: "text", required: true, placeholder: "New York" },
    { name: "zipCode", label: "ZIP", type: "text", required: true, placeholder: "10001" },
    { name: "orderNumber", label: "Order Number", type: "text", required: true, placeholder: "NI-12345678" },
    { name: "orderDate", label: "Date Of Order", type: "date", required: true },
    { name: "deliveryDate", label: "Date Of Delivery", type: "date", required: true },
    {
      name: "productImageUrl",
      label: "Image Link",
      type: "url",
      required: true,
      placeholder: "https://example.com/image.jpg",
    },
    { name: "productName", label: "Item Name", type: "text", required: true, placeholder: "Nike Air Max" },
    { name: "productSize", label: "Size", type: "text", required: true, placeholder: "US 10" },
    {
      name: "cardLastFour",
      label: "Last 4 Digits Of Credit Card",
      type: "text",
      required: true,
      defaultValue: "4677",
      placeholder: "1234",
    },
    { name: "subtotal", label: "Subtotal", type: "number", required: true, placeholder: "99.99" },
    { name: "shipping", label: "Shipping", type: "text", required: true, defaultValue: "Free", placeholder: "Free" },
    { name: "total", label: "Total", type: "number", required: true, placeholder: "99.99" },
    {
      name: "currencySymbol",
      label: "Currency Symbol",
      type: "text",
      required: true,
      placeholder: "$, €, £",
      defaultValue: "$",
    },
  ],
  getHtml: (data) => generateNikeReceiptHtml(data),
}

/**
 * Generate Nike receipt HTML
 * @param {Object} data - The form data
 * @returns {string} The HTML content for the receipt email
 */
function generateNikeReceiptHtml(data) {
  // Use the direct logo URL provided by the admin without any path modifications
  const logoUrl = data.brandLogo || `https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/nike.png`
  const formattedDate = new Date(data.orderDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  const formattedDeliveryDate = data.deliveryDate
    ? new Date(data.deliveryDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : formattedDate

  return `<div style="background-color: #121212; color: white; font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <table cellpadding="0" cellspacing="0" border="0" width="100%"
    style="max-width: 600px; margin: 0 auto; border: 1px solid #696969;">
    <tr>
      <td style="background-color: white; padding: 15px; text-align: center;">
        <img src="${logoUrl}" alt="${data.brandName} Logo" style="height: 30px;">
      </td>
    </tr>

    <tr>
      <td style="text-align: center; padding: 20px 0;">
        <h2 style="margin: 0; font-size: 22px; font-weight: bold;">Thanks, ${data.customerName} !</h2>
        <h2 style="margin: 5px 0 0 0; font-size: 22px; font-weight: bold;">We're On It.</h2>
      </td>
    </tr>

    <tr>
      <td style="text-align: center; padding: 0 20px 30px; font-size: 14px; color: #aaaaaa; line-height: 1.5;">
        <p style="margin: 0;">Your order's in. We're working to get it packed up and</p>
        <p style="margin: 0;">out the door—expect a shipping confirmation email</p>
        <p style="margin: 0;">soon.</p>
      </td>
    </tr>

    <tr>
      <td style="color: #4CAF50; font-size: 12px; padding: 0 20px 15px;">
        Order Date: ${formattedDate}
      </td>
    </tr>

    <tr>
      <td style="padding: 0 20px;">
        <table cellpadding="10" cellspacing="0" border="0" width="100%" style="border-bottom: 1px solid #333333;">
          <tr>
            <td width="60" style="vertical-align: middle;">
              <img src="${data.productImageUrl}" alt="Product Image"
                style="width: 50px; height: 50px; object-fit: cover; background-color: #333333;">
            </td>
            <td style="vertical-align: middle;">
              <div style="font-size: 14px;">${data.productName}</div>
              <div style="font-size: 12px; color: #aaaaaa;">${data.productSize}</div>
            </td>
            <td style="vertical-align: middle; text-align: right; font-size: 14px;">
              ${data.currencySymbol}${data.subtotal}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 20px 20px 0;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%"
          style="border-bottom: 1px solid rgb(183, 183, 183);">
          <tr>
            <td style="padding-bottom: 20px;">
              <div style="font-size: 14px; font-weight: bold; margin-bottom: 5px;">Order Number</div>
              <div style="font-size: 14px; color: #aaaaaa;">${data.orderNumber}</div>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px;">
              <div style="font-size: 14px; font-weight: bold;">Order Date</div>
              <div style="font-size: 14px; color: #aaaaaa;">${formattedDate}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="padding: 20px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="font-size: 14px; color: #aaaaaa; padding-bottom: 15px;">Payment</td>
            <td style="font-size: 14px; color: #aaaaaa; text-align: right; padding-bottom: 15px;">•••• •••• •••• ${data.cardLastFour}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #aaaaaa; padding-bottom: 15px;">Subtotal</td>
            <td style="font-size: 14px; color: #aaaaaa; text-align: right; padding-bottom: 15px;">${data.currencySymbol}${data.subtotal}</td>
          </tr>
          <tr>
            <td style="font-size: 14px; color: #aaaaaa; padding-bottom: 15px;">Shipping & Handling</td>
            <td style="font-size: 14px; color: #aaaaaa; text-align: right; padding-bottom: 15px;">${data.shipping}</td>
          </tr>
          <tr>
            <td style="font-size: 16px; font-weight: bold; padding-bottom: 20px;">Total</td>
            <td style="font-size: 16px; font-weight: bold; text-align: right; padding-bottom: 20px;">${data.currencySymbol}${data.total}</td>
          </tr>
        </table>
      </td>
    </tr>

    <tr>
      <td style="background-color: #1a1a1a; padding: 20px;">
        <div style="font-size: 16px; font-weight: bold; margin-bottom: 20px;">Get Help</div>

        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 20px;">
          <tr>
            <td width="50%" style="padding-bottom: 15px;">
              <a href="#" style="font-size: 14px; color: #aaaaaa; text-decoration: none;">Cancel Order</a>
            </td>
            <td width="50%" style="padding-bottom: 15px; text-align: right;">
              <a href="#" style="font-size: 14px; color: #aaaaaa; text-decoration: none;">Returns Policy</a>
            </td>
          </tr>
          <tr>
            <td width="50%" style="padding-bottom: 15px;">
              <a href="#" style="font-size: 14px; color: #aaaaaa; text-decoration: none;">Contact Options</a>
            </td>
            <td width="50%" style="padding-bottom: 15px; text-align: right;">
              <a href="#" style="font-size: 14px; color: #aaaaaa; text-decoration: none;">Gift Card Balance</a>
            </td>
          </tr>
        </table>

        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="vertical-align: middle;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align: middle; padding-right: 10px;">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vjR1DY5Phi5dTD3gvbCuIoX6v552Ik.png"
                      alt="Phone Icon" style="width: 20px; height: 20px;">
                  </td>
                  <td style="vertical-align: middle;">
                    <a href="tel:+442076604453" style="font-size: 14px; color: #aaaaaa; text-decoration: none;">+44 (0)
                      2076604453</a>
                  </td>
                </tr>
              </table>
            </td>
            <td style="text-align: right; vertical-align: middle;">
              <a href="#" style="font-size: 14px; color: #aaaaaa; text-decoration: none;">Hours of Operation</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>`
}

export default nikeTemplate
