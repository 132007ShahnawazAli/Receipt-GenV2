/**
 * Dyson Receipt Template
 *
 * This template generates a receipt for Dyson orders.
 */

const dysonTemplate = {
    name: "Dyson",
    displayName: "Dyson",
    logo: "dyson.png",
    enabled: true,
    subject: "Your Dyson order confirmation",
  
    // Define form fields for the template
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "John Doe",
        required: true,
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        placeholder: "123 Main St",
        required: true,
      },
      {
        name: "cityzip",
        label: "City and ZIP/Postal Code",
        type: "text",
        placeholder: "London, SW1A 1AA",
        required: true,
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        placeholder: "United Kingdom",
        required: true,
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        placeholder: "Dyson V15 Detect Absolute",
        required: true,
      },
      {
        name: "price",
        label: "Price",
        type: "number",
        placeholder: "599.99",
        required: true,
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        placeholder: "£",
        required: true,
        defaultValue: "£",
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        placeholder: "https://example.com/image.jpg",
        required: true,
      },
    ],
  
    // Generate HTML for the receipt
    getHtml: function (data) {
      // Ensure all required data is available
      const {
        name = "",
        street = "",
        cityzip = "",
        country = "",
        pname = "",
        price = "0.00",
        currency = "£",
        imageurl = "",
        brandLogo = this.logo,
      } = data
  
      return `
  <div class="">
    <div id=":ns" tabindex="-1"></div>
    <div id=":o2" class="ii gt">
      <div id=":o3" class="a3s aiL">
        <div class="adM">
          <span style="font-family:helvetica,arial,sans-serif"></span>
          <span style="font-family:helvetica,arial,sans-serif"></span>
        </div>
        <div>
          <div class="adM"></div>
          <p class="MsoNormal">
          <br>
          </p>
          <div>
            <div align="center">
              <table style="width:100.0%;background:black;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding:0">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:0">
                                            <div align="center">
                                              <table style="border-collapse:collapse;border-spacing:0" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:15.0pt 3.75pt 2.25pt 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:472.5pt;padding:0" width="630">
                                                                                      <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="width:150.75pt;padding:0" valign="top" width="201">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 0 11.25pt" valign="top">
                                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                                                <tbody>
                                                                                                                  <tr>
                                                                                                                    <td style="width:52.5pt;padding:0" width="70">
                                                                                                                      <p class="MsoNormal">
                                                                                                                        <span style="font-family:helvetica,arial,sans-serif">
                                                                                                                          <a href="https://www.dyson.co.uk/" rel="noopener" target="_blank">
                                                                                                                            <span style="text-decoration:none">
                                                                                                                              <img id="m_-4576356055935704555_x0000_i1031" style="width:.725in;height:.2833in" src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/oe-team-email-assets/mjml-master-template-assets/dyson-logo-header-light-x2.png" width="70" height="27" border="0">
                                                                                                                            </span>
                                                                                                                          </a>
                                                                                                                        </span>
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
                                                                                            </td>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="center">
              <table style="width:100.0%;background:#fbfbfb;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding:0">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:0">
                                            <div align="center">
                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:11.25pt 3.75pt 0 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:472.5pt;padding:0" valign="top" width="630">
                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="padding:0 11.25pt 3.75pt 11.25pt" valign="top">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                        <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#333">Order number: 5089915074</span>
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
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="center">
              <table style="width:100.0%;background:white;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding:0">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:0">
                                            <div align="center">
                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:22.5pt 3.75pt 0 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:345.0pt;padding:0" valign="top" width="460">
                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 15.0pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:22.5pt">
                                                                                                        <span style="font-size:18pt;font-family:helvetica,arial,sans-serif;color:#333">Your order</span>
                                                                                                      </p>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                        <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#333">Thank you for ordering from Dyson. Please see your order details below. If you have any questions regarding your order, please get in touch with a Dyson Expert using one of the contact methods below.</span>
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
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="center">
              <table style="width:100.0%;background:#fbfbfb;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding:0">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:0">
                                            <div align="center">
                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:22.5pt 3.75pt 0 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:157.5pt;padding:0" valign="top" width="210">
                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:18.0pt">
                                                                                                        <span style="font-size:13.5pt;font-family:helvetica,arial,sans-serif;color:#333">Delivery details</span>
                                                                                                      </p>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">&nbsp;</td>
                                                                                                  </tr>
                                                                                                </tbody>
                                                                                              </table>
                                                                                            </td>
                                                                                          </tr>
                                                                                        </tbody>
                                                                                      </table>
                                                                                    </td>
                                                                                    <td style="width:157.5pt;padding:0" valign="top" width="210">
                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:18.0pt">
                                                                                                        <span style="font-size:13.5pt;font-family:helvetica,arial,sans-serif;color:#333">Delivery address</span>
                                                                                                      </p>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                        <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#333">${name}
                                                                                                        <br>${street}
                                                                                                        <br>${cityzip}
                                                                                                        <br>${country}
                                                                                                        </span>
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
                                                                                    <td style="width:157.5pt;padding:0" valign="top" width="210">
                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:18.0pt">
                                                                                                        <span style="font-size:13.5pt;font-family:helvetica,arial,sans-serif;color:#333">Billing address</span>
                                                                                                      </p>
                                                                                                    </td>
                                                                                                  </tr>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 0 7.5pt 0">
                                                                                                      <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                        <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#333">${name}
                                                                                                        <br>${street}
                                                                                                        <br>${cityzip}
                                                                                                        <br>${country}
                                                                                                        </span>
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
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="center">
              <table style="width:100.0%;background:white;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding:0">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:0">
                                            <div align="center">
                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:22.5pt 3.75pt 0 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:472.5pt;padding:0" valign="top" width="630">
                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0">
                                                                                                      <p class="MsoNormal" style="line-height:20.25pt">
                                                                                                        <span style="font-size:16pt;font-family:helvetica,arial,sans-serif;color:#333">Your order details</span>
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
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="center">
              <table style="width:100.0%;background:white;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <td style="padding:0">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:3.75pt 11.25pt 0 11.25pt">
                                            <div align="center">
                                              <table style="border-collapse:collapse;border-spacing:0" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:457.5pt;border-collapse:collapse" border="0" width="610" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;background:#fbfbfb;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:22.5pt 3.75pt 0 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:450.0pt;padding:0" width="600">
                                                                                      <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="width:180.0pt;padding:0" valign="top" width="240">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0" valign="top">
                                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td style="padding:0">
                                                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                                                <tbody>
                                                                                                                  <tr>
                                                                                                                    <td style="width:176.25pt;padding:0" width="235">
                                                                                                                      <p class="MsoNormal">
                                                                                                                        <span style="font-family:helvetica,arial,sans-serif">
                                                                                                                          <img id="m_-4576356055935704555_x0000_i1030" style="width:2.45in;height:3.675in" src="${imageurl}" width="235" height="353" border="0">
                                                                                                                        </span>
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
                                                                                            </td>
                                                                                            <td style="width:270.0pt;padding:0" valign="top" width="360">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:15.0pt 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#333">${pname}</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">Availability: Available Immediately</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">Qty: 1</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#333">Price: ${currency}${price}</span>
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
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div align="center">
              <table style="width:100%;background:white;border-collapse:collapse;height:191px" border="0" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                  <tr style="height:191px">
                    <td style="padding:0;height:191px">
                      <div align="center">
                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td style="padding:0">
                                <div>
                                  <div align="center">
                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="padding:0">
                                            <div align="center">
                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                <tbody>
                                                  <tr>
                                                    <td style="padding:0">
                                                      <div align="center">
                                                        <table style="width:480.0pt;border-collapse:collapse" border="0" width="640" cellspacing="0" cellpadding="0">
                                                          <tbody>
                                                            <tr>
                                                              <td style="padding:0">
                                                                <div>
                                                                  <div align="center">
                                                                    <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                      <tbody>
                                                                        <tr>
                                                                          <td style="padding:7.5pt 3.75pt 0 3.75pt">
                                                                            <div align="center">
                                                                              <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                  <tr>
                                                                                    <td style="width:472.5pt;padding:0" width="630">
                                                                                      <table style="border-collapse:collapse" border="0" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                          <tr>
                                                                                            <td style="width:236.25pt;padding:0" valign="top" width="315">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">Subtotal:</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">Delivery Standard Courier Del:</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">VAT:</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:7.5pt 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:18.0pt">
                                                                                                                <span style="font-size:13.5pt;font-family:helvetica,arial,sans-serif;color:#333">Total:</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="line-height:13.5pt">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#06c">Total savings:</span>
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
                                                                                            <td style="width:236.25pt;padding:0" valign="top" width="315">
                                                                                              <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                <tbody>
                                                                                                  <tr>
                                                                                                    <td style="padding:0 11.25pt 15.0pt 11.25pt" valign="top">
                                                                                                      <table style="width:100.0%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                                                                                        <tbody>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="text-align:right;line-height:13.5pt" align="right">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">${currency}${price}</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="text-align:right;line-height:13.5pt" align="right">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">${currency}0.00</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="text-align:right;line-height:13.5pt" align="right">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#999">${currency}0.00</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:7.5pt 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="text-align:right;line-height:18.0pt" align="right">
                                                                                                                <span style="font-size:13.5pt;font-family:helvetica,arial,sans-serif;color:#333">${currency}${price}</span>
                                                                                                              </p>
                                                                                                            </td>
                                                                                                          </tr>
                                                                                                          <tr>
                                                                                                            <td style="padding:0 0 7.5pt 0">
                                                                                                              <p class="MsoNormal" style="text-align:right;line-height:13.5pt" align="right">
                                                                                                                <span style="font-size:10.5pt;font-family:helvetica,arial,sans-serif;color:#06c">${currency}0.00</span>
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
                                                                                    </td>
                                                                                  </tr>
                                                                                </tbody>
                                                                              </table>
                                                                            </div>
                                                                          </td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              </td>
                                                            </tr>
                                                          </tbody>
                                                        </table>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      `
    },
  }
  
  export default dysonTemplate
  