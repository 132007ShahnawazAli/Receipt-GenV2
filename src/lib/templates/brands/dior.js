/**
 * Dior Email Template
 *
 * This template recreates the Dior order confirmation email.
 */

function getHtml(data) {
    return `
    <table cellspacing="0" cellpadding="0" style="table-layout:fixed;border:0px;width:100%;border-collapse:collapse;margin:0px auto">
      <tbody>
          <tr>
              <td align="center">
                <table cellspacing="0" cellpadding="0" style="width:100%">
                  <tbody>
                    <tr>
                      <td>
                        <table align="center" style="width:100%;max-width:600px;padding:32px 0px;text-align:center;border:0px;margin:0px auto">
                          <tbody>
                            <tr>
                              <td>
                                <a href="https://www.dior.com/en_gb/beauty" target="_blank"><img width="106" height="31" alt="Logo Dior" src="https://www.dior.com/on/demandware.static/Sites-dior_gb-Site/-/default/dwcb8d8440/images/email/logo-dior.png"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <table cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="border:0px;text-align:center">
                                <div style="width:100%;max-width:600px;margin:0px auto">
                                  <img style="width:100%" src="https://www.dior.com/on/demandware.static/Sites-dior_gb-Site/-/default/dw2cacc2e6/images/email/order-confirmation/order-confirmation-promo.jpg" alt="Thank you for the order" title="Thank you for the order">
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;padding:32px 0px 64px;margin:0px auto;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgb(229,229,229)">
                  <tbody>
                    <tr>
                      <td>
                        <table style="width:100%;max-width:520px;margin:0px auto;padding:0px 40px">
                          <tbody>
                            <tr>
                              <td>
                                <font face="'CenturyGothic','Helvetica Neue',Helvetica,Arial,sans-serif" style="font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;color:rgb(0,0,0)">
                                  <p style="margin:0px 0px 16px;text-transform:uppercase;font-weight:700;font-size:16px;line-height:24px;text-align:center;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                    Thank you for your purchase
                                  </p>
                                  <p style="margin:0px 0px 8px;font-weight:400;font-size:13px;line-height:20px;text-align:center;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                    ${data.name}
                                  </p>
                                  <p style="margin:0px 0px 16px;font-weight:400;font-size:13px;line-height:20px;text-align:center;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                    This email confirms that your order: <b style="font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">${data.ordernumber}</b>
                                    is currently being processed.
                                  </p>
                                  <p style="margin:0px 0px 16px;font-weight:400;font-size:13px;line-height:20px;text-align:center;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;color:rgb(117,117,117)">
                                    We'll notify you by email when your order has shipped. Your payment card will be charged once your order has been dispatched.
                                  </p>
                                  <p style="margin:0px;font-weight:400;font-size:13px;line-height:20px;text-align:center;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                    The Dior Online Boutique
                                  </p>
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;margin:0px auto">
                  <tbody>
                    <tr>
                      <td>
                        <table style="width:100%;max-width:520px;margin:0px auto;padding:0px 40px">
                          <tbody>
                            <tr>
                              <td>
                                <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                  <tbody>
                                    <tr>
                                      <td style="padding:0px 0px 16px">
                                        <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                          <tbody>
                                            <tr>
                                              <td style="width:80px;padding:0px 16px 0px 0px;vertical-align:top">
                                                <img src="${data.imageurl}" alt="${data.pname}" style="width:80px;height:auto;border:0px">
                                              </td>
                                              <td style="padding:0px;vertical-align:top">
                                                <p style="margin:0px 0px 4px;font-weight:700;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                  ${data.pname}
                                                </p>
                                                <p style="margin:0px 0px 4px;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                  Size: ${data.size}
                                                </p>
                                                <p style="margin:0px;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                  ${data.currency}${data.price}
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:16px;border-top-width:1px;border-top-style:solid;border-top-color:rgb(229,229,229)">
                                  <tbody>
                                    <tr>
                                      <td style="padding:16px 0px 0px">
                                        <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                          <tbody>
                                            <tr>
                                              <td style="padding:0px 0px 8px;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                Subtotal
                                              </td>
                                              <td style="padding:0px 0px 8px;text-align:right;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                ${data.currency}${data.price}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td style="padding:0px 0px 8px;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                Shipping
                                              </td>
                                              <td style="padding:0px 0px 8px;text-align:right;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                ${data.currency}${data.shipping}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td style="padding:0px 0px 8px;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                Tax
                                              </td>
                                              <td style="padding:0px 0px 8px;text-align:right;font-weight:400;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                ${data.currency}${data.tax}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td style="padding:8px 0px 0px;font-weight:700;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                Total
                                              </td>
                                              <td style="padding:8px 0px 0px;text-align:right;font-weight:700;font-size:13px;line-height:20px;font-family:CenturyGothic,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif">
                                                ${data.currency}${data.total}
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
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
    `
}

const diorTemplate = {
  name: "Dior",
  displayName: "Dior",
  enabled: true,
  logo: "dior.png",
  subject: "Thank you for your purchase at Dior",
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "customer@example.com" },
    { name: "ordernumber", label: "Order Number", type: "text", required: true, placeholder: "DI-12345" },
    { name: "pname", label: "Product Name", type: "text", required: true, placeholder: "Sauvage Eau de Parfum" },
    { name: "size", label: "Size", type: "text", required: true, placeholder: "100ml" },
    { name: "price", label: "Price", type: "number", required: true, placeholder: "120.00", step: "0.01" },
    { name: "shipping", label: "Shipping Cost", type: "number", required: true, placeholder: "10.00", step: "0.01" },
    { name: "tax", label: "Tax Amount", type: "number", required: true, placeholder: "24.00", step: "0.01" },
    { name: "total", label: "Total Amount", type: "number", required: true, placeholder: "154.00", step: "0.01" },
    { name: "currency", label: "Currency Symbol", type: "text", required: true, placeholder: "£", defaultValue: "£" },
    { name: "street", label: "Street Address", type: "text", required: true, placeholder: "123 Main St" },
    { name: "city", label: "City", type: "text", required: true, placeholder: "London" },
    { name: "zip", label: "ZIP/Postal Code", type: "text", required: true, placeholder: "SW1A 1AA" },
    { name: "country", label: "Country", type: "text", required: true, placeholder: "United Kingdom" },
    { name: "imageurl", label: "Product Image URL", type: "url", required: true, placeholder: "https://example.com/product-image.jpg" }
  ],
  getHtml: (data) => getHtml(data)
}

export default diorTemplate
  