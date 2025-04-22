/**
 * Apple Receipt Template Configuration
 *
 * This file defines the Apple receipt template including:
 * - Form fields and their properties
 * - Email subject format
 * - HTML generation function
 */

const appleTemplate = {
  name: "Apple",
  logo: "apple.png",
  enabled: true,
  subject: "We're processing your order {orderNumber}",
  fields: [
    { name: "email", label: "Email", type: "email", required: true, placeholder: "your.email@example.com" },
    { name: "confirmEmail", label: "Confirm Email", type: "email", required: true, placeholder: "your.email@example.com" },
    { name: "language", label: "Language", type: "text", required: true, defaultValue: "English", placeholder: "English" },
    { name: "orderNumber", label: "Order Number", type: "text", required: true, placeholder: "ML4F5L8522" },
    { name: "orderDate", label: "Order Date", type: "date", required: true },
    { name: "imageLink", label: "Product Image Link", type: "text", required: true, placeholder: "https://example.com/image.jpg" },
    { name: "productName", label: "Item", type: "text", required: true, placeholder: "MacBook Pro" },
    { name: "customerName", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "streetAddress", label: "Street", type: "text", required: true, placeholder: "123 Main St" },
    { name: "city", label: "City", type: "text", required: true, placeholder: "New York" },
    { name: "zipCode", label: "ZIP", type: "text", required: true, placeholder: "10001" },
    { name: "country", label: "Country", type: "text", required: true, placeholder: "United States" },
    { name: "subtotal", label: "Subtotal", type: "number", required: true, placeholder: "999.99" },
    { name: "shipping", label: "Shipping", type: "text", required: true, defaultValue: "Free", placeholder: "Free" },
    { name: "total", label: "Total", type: "number", required: true, placeholder: "999.99" },
  ],
  getHtml: (data) => generateAppleReceiptHtml(data),
}

/**
 * Generate Apple receipt HTML
 * @param {Object} data - The form data
 * @returns {string} The HTML content for the receipt email
 */
function generateAppleReceiptHtml(data) {
  const logoUrl = `https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/${data.brandLogo}`
  const orderDate = new Date(data.orderDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  // Use the existing HTML template but replace the dynamic values
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <body style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;background-color:#ffffff'>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      Apple Receipt
    </div>
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:100%;margin:0 auto;padding:20px 0 48px;width:660px">
      <tbody>
        <tr style="width:100%">
          <td>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column">
                            <img alt="Apple Logo" height="42" src="${logoUrl}" style="display:block;outline:none;border:none;text-decoration:none" width="42" />
                          </td>
                          <td align="right" data-id="__react-email-column" style="display:table-cell">
                            <p style="font-size:32px;line-height:24px;font-weight:300;color:#888888;margin-bottom:16px;margin-top:16px">
                              Receipt
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);background-color:rgb(250,250,250);border-radius:3px;font-size:12px">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="min-height:46px">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td colspan="2" data-id="__react-email-column">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tbody>
                                <tr>
                                  <td>
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;min-height:44px">
                                            <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                              APPLE ID
                                            </p>
                                            <p style="color:#15c;font-size:12px;margin:0;padding:0;line-height:1.4;">
                                              ${data.email}
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                      <tbody style="width:100%">
                                        <tr style="width:100%">
                                          <td data-id="__react-email-column" style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;min-height:44px">
                                            <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                              ORDER ID
                                            </p>
                                            <p style="font-size:12px;line-height:1.4;margin:0;padding:0;">
                                              ${data.orderNumber}
                                            </p>
                                          </td>
                                          <td data-id="__react-email-column" style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;min-height:44px">
                                            <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                              ORDER DATE
                                            </p>
                                            <p style="font-size:12px;line-height:1.4;margin:0;padding:0;">
                                              ${orderDate}
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td colspan="2" data-id="__react-email-column" style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;min-height:44px">
                            <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                              SHIPPING TO
                            </p>
                            <p style="font-size:12px;line-height:1.4;margin:0;padding:0;">
                              ${data.customerName}
                            </p>
                            <p style="font-size:12px;line-height:1.4;margin:0;padding:0;">
                              ${data.streetAddress}
                            </p>
                            <p style="font-size:12px;line-height:1.4;margin:0;padding:0;">
                              ${data.city}, ${data.zipCode}
                            </p>
                            <p style="font-size:12px;line-height:1.4;margin:0;padding:0;">
                              ${data.country}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td data-id="__react-email-column" style="width:64px">
                            <img alt="Product" height="64" src="${data.imageLink}" style="display:block;outline:none;border:1px solid rgb(242,242,242);text-decoration:none;margin:0 0 0 20px;border-radius:14px" width="64" />
                          </td>
                          <td data-id="__react-email-column" style="padding-left:22px">
                            <p style="font-size:12px;line-height:1.4;font-weight:600;margin:0;padding:0;">
                              ${data.productName}
                            </p>
                          </td>
                          <td align="right" data-id="__react-email-column" style="padding-right:20px">
                            <p style="font-size:12px;line-height:24px;font-weight:600;margin:0;">
                              $${data.subtotal}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:30px 0 0 0" />
            <table align="right" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
              <tbody>
                <tr>
                  <td>
                    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                      <tbody style="width:100%">
                        <tr style="width:100%">
                          <td align="right" data-id="__react-email-column">
                            <p style="font-size:10px;line-height:24px;margin:0;color:rgb(102,102,102);font-weight:600;padding:0px 30px 0px 0px;text-align:right;">
                              TOTAL
                            </p>
                          </td>
                          <td data-id="__react-email-column" style="width:90px">
                            <p style="font-size:16px;line-height:24px;margin:0px 20px 0px 0px;font-weight:600;white-space:nowrap;text-align:right;">
                              $${data.total}
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`
}

export default appleTemplate