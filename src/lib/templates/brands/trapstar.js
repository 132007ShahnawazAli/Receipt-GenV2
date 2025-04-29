/**
 * Trapstar London Order Confirmation Email Template
 */

function getHtml(data) {
    return `
      <div style="margin:0">
        <table style="height:100%!important;width:100%!important;border-spacing:0;border-collapse:collapse">
          <tbody>
            <tr>
              <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                <table class="header" style="width:100%;border-spacing:0;border-collapse:collapse;margin:40px 0 20px">
                  <tbody>
                    <tr>
                      <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                        <center>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                    <tbody>
                                      <tr>
                                        <td class="shop-name__cell" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                          <img src="/assets/trapstar-logo.png" alt="Trapstar London" width="180">
                                        </td>
                                        <td class="order-number__cell" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;text-transform:uppercase;font-size:14px;color:#999" align="right">
                                          <span style="font-size:16px">
                                            Order TS2916482
                                          </span>
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
                      <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding-bottom:40px;border-width:0">
                        <center>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <h2 style="font-weight:normal;font-size:24px;margin:0 0 10px">Thank you for your purchase!</h2>
                                  <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                                    Hi ${data.name}, we're getting your order ready to be shipped. We will notify you when it has been sent.
                                  </p>
                                  <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                                    <tbody>
                                      <tr>
                                        <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                          <table class="button main-action-cell" style="border-spacing:0;border-collapse:collapse;float:left;margin-right:15px">
                                            <tbody>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;border-radius:4px" align="center" bgcolor="#050505">
                                                  <a href="#" class="button__text" style="font-size:16px;text-decoration:none;display:block;color:#fff;padding:20px 25px" target="_blank">View your order</a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table class="secondary-action-cell" style="border-spacing:0;border-collapse:collapse;margin-top:19px">
                                            <tbody>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;border-radius:4px" align="center">
                                                  <a href="#" style="font-size:16px;text-decoration:none;display:block;color:#050505;padding:20px 25px" target="_blank">
                                                    <span class="or" style="font-size:16px;color:#999;display:inline-block;margin-right:10px">or</span> Visit our store
                                                  </a>
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
                      <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:40px 0">
                        <center>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Order summary</h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                    <tbody>
                                      <tr style="width:100%">
                                        <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                          <table style="border-spacing:0;border-collapse:collapse">
                                            <tbody>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                                  <img src="${data.imageurl}" align="left" width="60" height="60" style="margin-right:15px;border-radius:8px;border:1px solid #e5e5e5">
                                                </td>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;width:100%">
                                                  <span style="font-size:16px;font-weight:600;line-height:1.4;color:#555">${data.productname} - ${data.color} - ${data.size}&nbsp;×&nbsp;1</span><br>
                                                  <span style="font-size:14px;color:#999">${data.size} / ${data.color}</span>
                                                </td>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;white-space:nowrap">
                                                  <p style="color:#555;line-height:150%;font-size:16px;font-weight:600;margin:0 0 0 15px" align="right">${data.currency}${data.price}</p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:15px;border-top-width:1px;border-top-color:#e5e5e5;border-top-style:solid">
                                    <tbody>
                                      <tr>
                                        <td class="subtotal-spacer" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;width:40%"></td>
                                        <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                          <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                                            <tbody>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:5px 0">
                                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                                    <span style="font-size:16px">Subtotal</span>
                                                  </p>
                                                </td>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:5px 0" align="right">
                                                  <strong style="font-size:16px;color:#555">${data.currency}${data.price}</strong>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:5px 0">
                                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                                    <span style="font-size:16px">Shipping</span>
                                                  </p>
                                                </td>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:5px 0" align="right">
                                                  <strong style="font-size:16px;color:#555">${data.currency}5.45</strong>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:5px 0">
                                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                                    <span style="font-size:16px">GB VAT</span>
                                                  </p>
                                                </td>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:5px 0" align="right">
                                                  <strong style="font-size:16px;color:#555">56.70</strong>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px;border-top-width:2px;border-top-color:#e5e5e5;border-top-style:solid">
                                            <tbody>
                                              <tr>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:20px 0 0">
                                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:0">
                                                    <span style="font-size:16px">Total</span>
                                                  </p>
                                                </td>
                                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:20px 0 0" align="right">
                                                  <strong style="font-size:24px;color:#555">${data.currency}${data.totalprice} ${data.currencytag}</strong>
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
                      <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:40px 0">
                        <center>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Customer information</h3>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                    <tbody>
                                      <tr>
                                        <td class="customer-info__item" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding-bottom:40px;width:50%" valign="top">
                                          <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping address</h4>
                                          <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                                            ${data.name}<br>
                                            ${data.street}<br>
                                            ${data.country}, ${data.cityzip}
                                          </p>
                                        </td>
                                        <td class="customer-info__item" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding-bottom:40px;width:50%" valign="top">
                                          <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Billing address</h4>
                                          <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                                            ${data.name}<br>
                                            ${data.street}<br>
                                            ${data.country}, ${data.cityzip}
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table style="width:100%;border-spacing:0;border-collapse:collapse">
                                    <tbody>
                                      <tr>
                                        <td class="customer-info__item" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding-bottom:40px;width:50%" valign="top">
                                          <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping method</h4>
                                          <p style="color:#777;line-height:150%;font-size:16px;margin:0">9-12 Working Days (Please See Items Description For Pre Order Shipping Dates)</p>
                                        </td>
                                        <td class="customer-info__item" style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding-bottom:40px;width:50%" valign="top">
                                          <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Payment method</h4>
                                          <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                                            <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/themes_support/notifications/visa-e96781bbd9d5a604ec37ca3959c7200b62b58790536de883a9f29852191da219.png" height="24" style="height:24px;display:inline-block;margin-right:10px;margin-top:5px">
                                            <span style="font-size:16px">Ending in 5476 — <strong style="font-size:16px;color:#555">${data.currency}${data.totalprice}</strong></span>
                                          </p>
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
                      <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif;padding:35px 0">
                        <center>
                          <table class="container" style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                            <tbody>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,&quot;Roboto&quot;,&quot;Oxygen&quot;,&quot;Ubuntu&quot;,&quot;Cantarell&quot;,&quot;Fira Sans&quot;,&quot;Droid Sans&quot;,&quot;Helvetica Neue&quot;,sans-serif">
                                  <p style="color:#999;line-height:150%;font-size:14px;margin:0">If you have any questions, please visit our customer service help page <a href="#" style="font-size:14px;text-decoration:none;color:#050505" target="_blank">here.</a><br>
                                  For Shipping Information<a href="#" title="" style="font-size:14px;text-decoration:none;color:#050505" target="_blank"> <span style="color:#ff0000;font-size:16px">Click Here</span></a>
                                  <br>
                                  For our FAQs<a href="#" title="" style="font-size:14px;text-decoration:none;color:#050505" target="_blank"> <span style="color:#ff0000;font-size:16px">Click Here</span></a></p>
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
      </div>
    `
  }
  
  const trapstarTemplate = {
    name: "Trapstar London",
    displayName: "Trapstar London",
    logo: "trapstar.png",
    enabled: true,
    subject: "Your Trapstar London Order Confirmation",
    fields: [
      { name: "email", label: "Email Address", type: "email", required: true, placeholder: "your.email@example.com" },
      { name: "name", label: "Customer Name", type: "text", required: true, placeholder: "John Doe" },
      { name: "productname", label: "Product Name", type: "text", required: true, placeholder: "Product Name" },
      { name: "color", label: "Color", type: "text", required: true, placeholder: "Black" },
      { name: "size", label: "Size", type: "text", required: true, placeholder: "M" },
      { name: "imageurl", label: "Product Image URL", type: "url", required: true, placeholder: "https://example.com/image.jpg" },
      { name: "street", label: "Street Address", type: "text", required: true, placeholder: "123 Main St" },
      { name: "country", label: "Country", type: "text", required: true, placeholder: "United Kingdom" },
      { name: "cityzip", label: "City and ZIP/Postal Code", type: "text", required: true, placeholder: "London, SW1A 1AA" },
      { name: "currency", label: "Currency Symbol", type: "text", required: true, defaultValue: "£", placeholder: "£" },
      { name: "price", label: "Product Price", type: "number", required: true, placeholder: "99.99", step: "0.01" },
      { name: "totalprice", label: "Total Price", type: "number", required: true, placeholder: "99.99", step: "0.01" },
      { name: "currencytag", label: "Currency Tag", type: "text", required: true, defaultValue: "GBP", placeholder: "GBP" },
      { name: "orderDate", label: "Order Date", type: "date", required: true, placeholder: "YYYY-MM-DD" }
    ],
    getHtml: (data) => getHtml(data)
  }
  
  export default trapstarTemplate
  