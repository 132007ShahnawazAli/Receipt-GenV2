/**
 * Denim Tears Email Template
 *
 * This template recreates the Denim Tears order confirmation email.
 */

function getHtml(data) {
    return `
    <tbody>
      <tr>
        <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
          <table style="width:100%;border-spacing:0;border-collapse:collapse;margin:40px 0 20px">
            <tbody>
              <tr>
                <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                  <center>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <table style="width:100%;border-spacing:0;border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                    <img src="https://cdn.shopify.com/s/files/1/0258/6102/9962/files/DT-Floral-Logo.png" alt="Denim Tears" width="180">
                                  </td>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;text-transform:uppercase;font-size:14px;color:#999" align="right">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="width:100%;border-spacing:0;border-collapse:collapse">
            <tbody>
              <tr>
                <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;border:0">
                  <center>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
                          <td style="font-family:Helvetica">
                            <p style="font-weight:normal;font-size:16px;margin:0 0 10px">Thank you for your order, ${data.name}</p><br>
                            <p style="color:#777;line-height:150%;font-size:16px;margin:0">Your order #${data.ordernumber} has been successfully received on . Once your package ships we will send you an email with tracking information. Updates cannot be made to your order once tracking has been generated.</p>
                            <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                              <tbody>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:0em">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                    <table style="border-spacing:0;border-collapse:collapse;float:left;margin-right:15px">
                                      <tbody>
                                        <tr>
                                          <td style="font-family:Helvetica;border-radius:4px" align="center" bgcolor="#000000">
                                            <a style="font-size:16px;text-decoration:none;display:block;color:#fff;padding:20px 25px">View your order</a>
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
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="width:100%;border-spacing:0;border-collapse:collapse">
            <tbody>
              <tr>
                <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:40px 0">
                  <center>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
    <td style="width:50%;font-family:'Helvetica Neue',sans-serif">
      <h3 style="color:#777;font-weight:normal;font-size:16px;margin:0 0 25px;font-family:Helvetica"></h3>
    </td>
    <td style="width:50%;font-family:'Helvetica Neue',sans-serif">
                            <h3 style="color:#777;font-weight:normal;font-size:16px;margin:0 0 25px;font-family:Helvetica;text-align:end">Order #${data.ordernumber}</h3>
    </td>
    </tr>
                      </tbody>
                    </table>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <table style="width:100%;border-spacing:0;border-collapse:collapse">
                              <tbody>
                                <tr style="width:100%">
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:15px">
                                    <table style="border-spacing:0;border-collapse:collapse;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5">
                                      <tbody>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                            <img style="margin-top:24px;margin-bottom:24px;margin-right:15px" src="${data.imageurl}" width="120" height="auto" align="left">
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;width:100%">
                                            <span>${data.pname}</span> 
                                            <br>
                                            <span style="font-family:Helvetica;font-size:16px;color:#999">${data.size} / </span> 
                                            <br>
                                            <span style="font-size:16px;color:#999;font-family:Helvetica"><br>Qty: 1</span>
                                          </td>
                                          <td style="font-family:Helvetica;white-space:nowrap">
                                            <p align="right">${data.currency}${data.price}</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                      <tbody>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px;font-family:Helvetica">Subtotal</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0" align="right">
                                            <p style="font-size:16px;color:#555;font-family:Helvetica">${data.currency}${data.price}</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px;font-family:Helvetica">Shipping</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0" align="right">
                                            <p style="font-size:16px;color:#555;font-family:Helvetica">${data.currency}0.00</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px;font-family:Helvetica">Taxes</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0" align="right">
                                            <p style="font-size:16px;color:#555;font-family:Helvetica">${data.currency}0.00</p>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px;font-family:Helvetica"><br>Total</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:5px 0" align="right">
                                            <p style="font-size:16px;color:#555;font-family:Helvetica"><br>${data.currency}${data.price}</p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                                      <tbody>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-bottom-width:1px;border-bottom-color:#e5e5e5;border-bottom-style:solid;height:1px;padding:0" colspan="2">&nbsp;</td>
                                        </tr>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;height:10px" colspan="2">&nbsp;</td>
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
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="width:100%;border-spacing:0;border-collapse:collapse">
            <tbody>
              <tr>
                <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:40px 0">
                  <center>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
                          <td style="font-family:Helvetica">
                            <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Customer information</h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <table style="width:100%;border-spacing:0;border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td style="font-family:Helvetica;padding-bottom:40px;width:50%" valign="top">
                                    <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping address</h4>
                                    <p style="color:#777;line-height:150%;font-size:16px;margin:0">${data.name}
                                      <br>${data.street}
                                      <br>${data.city}
                                      <br>${data.zip}
                                      <br>${data.country}
                                    </p>
                                  </td>
                                  <td style="font-family:Helvetica;padding-bottom:40px;width:50%" valign="top">
                                    <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Billing address</h4>
                                    <p style="color:#777;line-height:150%;font-size:16px;margin:0">${data.name}
                                      <br>${data.street}
                                      <br>${data.city}
                                      <br>${data.zip}
                                      <br>${data.country}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table style="width:100%;border-spacing:0;border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td style="font-family:Helvetica;padding-bottom:40px;width:50%" valign="top">
                                    <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping method</h4>
                                    <p style="color:#777;line-height:150%;font-size:16px;margin:0">Standard</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="width:100%;border-spacing:0;border-collapse:collapse;border-top-width:1px;border-top-color:#e5e5e5;border-top-style:solid">
            <tbody>
              <tr>
                <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:35px 0">
                  <center>
                    <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                      <tbody>
                        <tr>
                          <td style="font-family:Helvetica">
                            <p style="color:#999;line-height:150%;font-size:14px;margin:0">
    If you have any questions, reply to this email or contact us at
                              <a href="mailto:${data.email}" style="font-size:14px;text-decoration:none;color:#000000">${data.email}</a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
    `
}

const denimTearsTemplate = {
  name: "Denim Tears",
  displayName: "Denim Tears",
  enabled: true,
  logo: "denim_tears.png",
  subject: "Thank you for your order, {name}",
  fields: [
    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "email", label: "Email Address", type: "email", required: true, placeholder: "customer@example.com" },
    { name: "ordernumber", label: "Order Number", type: "text", required: true, placeholder: "DT-12345" },
    { name: "pname", label: "Product Name", type: "text", required: true, placeholder: "Cotton Jersey T-Shirt" },
    { name: "size", label: "Size", type: "text", required: true, placeholder: "M" },
    { name: "price", label: "Price", type: "number", required: true, placeholder: "120.00", step: "0.01" },
    { name: "currency", label: "Currency Symbol", type: "text", required: true, placeholder: "$", defaultValue: "$" },
    { name: "street", label: "Street Address", type: "text", required: true, placeholder: "123 Main St" },
    { name: "city", label: "City", type: "text", required: true, placeholder: "New York" },
    { name: "zip", label: "ZIP/Postal Code", type: "text", required: true, placeholder: "10001" },
    { name: "country", label: "Country", type: "text", required: true, placeholder: "United States" },
    { name: "imageurl", label: "Product Image URL", type: "url", required: true, placeholder: "https://example.com/product-image.jpg" }
  ],
  getHtml: (data) => getHtml(data)
}

export default denimTearsTemplate
  