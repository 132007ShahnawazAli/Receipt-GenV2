const spiderTemplate = {
    id: "spider",
    name: "SP5DER",
    displayName: "SP5DER",
    logo: "sp5der.png",
    enabled: true,
    subject: "Thank you for your purchase - Order #{orderNumber}",
  
    // Define all form fields needed for this template
    fields: [
      { name: "email", label: "Email", type: "email", required: true },
      { name: "orderNumber", label: "Order Number", type: "text", required: true, defaultValue: "SP148782" },
      { name: "pname", label: "Product Name", type: "text", required: true },
      { name: "imageurl", label: "Product Image URL", type: "url", required: true },
      { name: "price", label: "Price", type: "number", required: true },
      { name: "size", label: "Size", type: "text", required: true },
      { name: "currency", label: "Currency Symbol", type: "text", required: true, defaultValue: "$" },
      { name: "name", label: "Customer Name", type: "text", required: true },
      { name: "street", label: "Street Address", type: "text", required: true },
      { name: "cityzip", label: "City and Zip Code", type: "text", required: true },
      { name: "country", label: "Country", type: "text", required: true },
    ],
  
    // Generate HTML from form data
    getHtml: (data) => generateSpiderReceiptHtml(data),
  }
  
  /**
   * Generate HTML for the Spider receipt
   * @param {Object} data - The form data
   * @returns {string} The HTML content for the receipt email
   */
  function generateSpiderReceiptHtml(data) {
    return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Order Confirmation</title>
  </head>
  <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif; margin:0; padding:0;">
    <table style="height:100%!important;width:100%!important;border-spacing:0;border-collapse:collapse">
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
                                      <img src="https://cdn.shopify.com/s/files/1/0153/0219/7334/files/logo.png?6246" alt="SP5DER" width="152">
                                    </td>
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;text-transform:uppercase;font-size:14px;color:#999" align="right">
                                      <span style="font-size:16px">Order #${data.orderNumber}</span>
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
                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;border-width:0">
                    <center>
                      <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                        <tbody>
                          <tr>
                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                              <h2 style="font-weight:normal;font-size:24px;margin:0 0 10px">Thank you for your purchase.</h2>
                              <p style="color:#777;line-height:150%;font-size:16px;margin:0">&nbsp;</p>
                              <br>
                              <center>
                                <span style="color: #ff0000">
                                  <strong style="color:rgb(0,240,0)">Please note, due to increased demand, your order may take up to 2 weeks to ship. We appreciate your patience.</strong>
                                </span>
                              </center>
                              <br>
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
                                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-radius:4px" align="center" bgcolor="#000000">
                                              <a href="https://kingspider.co/" style="font-size:16px;text-decoration:none;display:block;color:#fff;padding:20px 25px" target="_blank">View your order</a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table style="border-spacing:0;border-collapse:collapse;margin-top:19px">
                                        <tbody>
                                          <tr>
                                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-radius:4px" align="center">or 
                                              <a href="https://kingspider.co/" style="font-size:16px;text-decoration:none;color:#000000" target="_blank">Visit our store</a>
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
                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                              <h3 style="font-weight:normal;font-size:20px;margin:0 0 0px">Order summary</h3>
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
                                      <table style="border-spacing:0;border-collapse:collapse">
                                        <tbody>
                                          <tr></tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-top:15px">
                                      <table style="border-spacing:0;border-collapse:collapse">
                                        <tbody>
                                          <tr>
                                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                              <img style="margin-right:15px;border-radius:8px;border:0px solid #e5e5e5" width="60" height="60" align="left" src="${data.imageurl}">
                                            </td>
                                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;width:100%">
                                              <span style="font-size:16px;font-weight:600;line-height:1.4;color:#555">${data.pname}&nbsp;×&nbsp;1</span> 
                                              <br>
                                              <span style="font-size:14px;color:#999">${data.size}</span> 
                                              <br>
                                            </td>
                                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;white-space:nowrap">
                                              <p style="color:#555;line-height:150%;font-size:16px;font-weight:600;margin:0 0 0 15px" align="right">${data.currency}${data.price}</p>
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
                      <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                        <tbody>
                          <tr>
                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                              <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:15px;border-top-width:1px;border-top-color:#e5e5e5;border-top-style:solid">
                                <tbody>
                                  <tr>
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;width:40%">&nbsp;</td>
                                    <table style="width:30%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                                      <tbody>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px">Subtotal</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0" align="right">
                                            <strong style="font-size:16px;color:#555">${data.currency}${data.price}</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px">Shipping</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0" align="right">
                                            <strong style="font-size:16px;color:#555">${data.currency}0.00</strong>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px">Taxes</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0" align="right">
                                            <strong style="font-size:16px;color:#555">${data.currency}0.00</strong>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <table style="width:30%;border-spacing:0;border-collapse:collapse;margin-top:20px;border-top-width:2px;border-top-color:#e5e5e5;border-top-style:solid">
                                      <tbody>
                                        <tr>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:20px 0 0">
                                            <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                              <span style="font-size:16px">Total</span>
                                            </p>
                                          </td>
                                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:20px 0 0" align="right">
                                            <strong style="font-size:24px;color:#555">${data.currency}${data.price}</strong>
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
                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
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
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;width:50%" valign="top">
                                      <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping address</h4>
                                      <p style="color:#777;line-height:150%;font-size:16px;margin:0">${data.name}
                                        <br>
                                        <a>${data.cityzip}</a> 
                                        <br>
                                        <a>${data.street}</a> 
                                        <br>
                                        <a>${data.country}</a>
                                      </p>
                                    </td>
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;width:50%" valign="top">
                                      <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Billing address</h4>
                                      <p style="color:#777;line-height:150%;font-size:16px;margin:0">${data.name}
                                        <br>
                                        <a>${data.cityzip}</a> 
                                        <br>
                                        <a>${data.street}</a> 
                                        <br>
                                        <a>${data.country}</a>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                <tbody>
                                  <tr>
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;width:50%" valign="top">
                                      <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Payment</h4>
                                      <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                                        <img style="height:24px;display:inline-block;margin-right:10px;margin-top:5px" src="https://cdn.shopify.com/shopifycloud/shopify/assets/themes_support/notifications/visa-e96781bbd9d5a604ec37ca3959c7200b62b58790536de883a9f29852191da219.png" alt="Visa" height="24"> 
                                        <span style="font-size:16px">ending with 4756</span> 
                                        <br>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;width:50%" valign="top">
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
                            <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                              <p style="color:#999;line-height:150%;font-size:14px;margin:0">If you have any questions, reply to this email or contact us at 
                                <a href="mailto:help@kingspider.co" style="font-size:14px;text-decoration:none;color:#000000" target="_blank">help@kingspider.co</a>
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
    </table>
  </body>
  </html>`
  }
  
  export default spiderTemplate
  