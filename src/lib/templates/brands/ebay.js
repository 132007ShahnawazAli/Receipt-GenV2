import { formatDate } from "../template-utils"

const ebayTemplate = {
  id: "ebay",
  name: "eBay",
  displayName: "eBay",
  logo: "ebay.png",
  subject: "eBay Authentication Confirmation",
  enabled: true,

  // Define form fields
  fields: [
    { name: "email", label: "Email", type: "email", required: true },
    { name: "orderNumber", label: "Order Number", type: "text", required: true },
    { name: "pname", label: "Product Name", type: "text", required: true },
    { name: "imageurl", label: "Product Image URL", type: "url", required: true },
    { name: "price", label: "Price", type: "number", required: true },
    { name: "currency", label: "Currency Symbol", type: "text", required: true, defaultValue: "$" },
    { name: "name", label: "Customer Name", type: "text", required: true },
    { name: "street", label: "Street Address", type: "text", required: true },
    { name: "cityzip", label: "City and Zip Code", type: "text", required: true },
    { name: "country", label: "Country", type: "text", required: true }
  ],

  // Generate HTML from form data
  getHtml: (data) => {
    const formattedDate = formatDate(new Date())
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>eBay Authentication Confirmation</title>
</head>
<body style="margin:0; padding:0; font-family:Helvetica,Arial,sans-serif,'Market Sans';">
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
    <tbody>
      <tr>
        <td height="15" style="font-size:1px;line-height:1px">
          <p style="margin:0;font-size:1px;line-height:1px;color:#ffffff" aria-hidden="true">
            Your item will dispatch to the buyer soon.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <table width="600" border="0" cellspacing="0" bgcolor="#F7F7F7" cellpadding="0" align="center" role="presentation">
    <tbody>
      <tr>
        <td width="100%" valign="top" align="center" style="padding-bottom:0px">
          <table width="568" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tbody>
              <tr>
                <td style="font-size:1px;line-height:1px;vertical-align:top" valign="top" align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
                    <tbody>
                        align="center" role="presentation">
                    <tbody>
                      <tr>
                        <td width="79" style="font-size:1px;line-height:1px;vertical-align:top" valign="top" align="left">
                          <table width="79" border="0" cellspacing="0" cellpadding="0" align="left" role="presentation">
                            <tbody>
                              <tr>
                                <td height="32" style="font-size:1px;line-height:1px;vertical-align:top;padding-top:24px" valign="top">
                                  <a href="https://www.ebay.com" style="text-decoration:none;display:inline-block" target="_blank">
                                    <img src="https://secureir.ebaystatic.com/cr/mscdn/2da6a871d3ba2f07594cec7f55bcf6ed/Logo_Legacy_2x.png" width="79" height="32" alt="eBay" border="0" style="display:inline-block;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;line-height:17px;color:#212121;font-weight:bold;text-decoration:none">
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
        </td>
      </tr>
    </tbody>
  </table>
  
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation" bgcolor="#FFFFFF">
    <tbody>
      <tr>
        <td style="font-size:1px;line-height:1px;padding:0px 0px 32px 0px" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation" bgcolor="#F7F7F7">
            <tbody>
              <tr>
                <td style="font-size:1px;line-height:1px;padding:32px 16px 64px 16px" align="center">
                  <table width="568" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
                    <tbody>
                      <tr>
                        <td height="40" style="font-size:1px;line-height:1px;padding:0px 0px 0px 0px" align="center">
                          <h1 style="margin:0;line-height:40px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:30px;color:#111820;font-weight:bold;text-decoration:none;text-align:left" align="left">
                            Congrats! Your item was authenticated.
                          </h1>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:1px;line-height:1px;padding:16px 16px 0px 0px" align="left">
                          <table border="0" cellspacing="0" cellpadding="0" align="left" role="presentation">
                            <tbody>
                              <tr>
                                <th height="40" style="font-size:1px;line-height:1px" align="left">
                                  <div style="font-size:1px;line-height:1px" align="left">
                                    <table border="0" cellspacing="0" cellpadding="0" bgcolor="#3665F3" style="display:inline-table;border-radius:24px;border-collapse:separate" role="presentation">
                                      <tbody>
                                        <tr>
                                          <td height="40" style="font-size:1px;line-height:1px;vertical-align:middle;border:1px solid #3665f3;border-radius:24px;border-collapse:separate" align="center" valign="middle">
                                            <p style="margin:0;line-height:16px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;font-weight:bold;color:#ffffff;text-align:center;vertical-align:middle;border-radius:24px" align="center">
                                              <a href="#" style="color:#ffffff;text-decoration:none;display:block!important;padding:11px 17px 11px 17px!important;border-radius:24px" target="_blank">
                                                <span>Check order status</span>
                                              </a>
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </th>
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
  
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF" role="presentation">
    <tbody>
      <tr>
        <td style="font-size:1px;line-height:1px;vertical-align:top;padding:0px 0px 20px 0px" valign="top" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tbody>
              <tr>
                <td height="20" style="font-size:1px;line-height:1px;padding:0px 16px 0px 16px" align="left">
                  <p style="margin:0;line-height:20px;font-family:-apple-system,BlinkMacSystemFont,-webkit-system-font,Roboto,Arial,sans-serif;font-size:14px;color:#111820;font-weight:normal;text-decoration:none" align="left">
                    Hi ${data.name},
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF" role="presentation">
    <tbody>
      <tr>
        <td style="font-size:1px;line-height:1px;vertical-align:top;padding:0px 0px 20px 0px" valign="top" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tbody>
              <tr>
                <td height="20" style="font-size:1px;line-height:1px;padding:0px 16px 0px 16px" align="left">
                  <p style="margin:0;line-height:20px;font-family:-apple-system,BlinkMacSystemFont,-webkit-system-font,Roboto,Arial,sans-serif;font-size:14px;color:#111820;font-weight:normal;text-decoration:none" align="left">
                    Your item has been authenticated and is ready to dispatch to your buyer. It'll be carefully packaged and sent via secure, expedited delivery - at no extra cost to you as part of <a href="#" style="text-decoration:underline!important;color:inherit!important" target="_blank">Authenticity Guarantee</a>.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF" role="presentation">
    <tbody>
      <tr>
        <td style="font-size:1px;line-height:1px;vertical-align:top;padding:0px 0px 20px 0px" valign="top" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tbody>
              <tr>
                <td height="20" style="font-size:1px;line-height:1px;padding:0px 16px 0px 16px" align="left">
                  <p style="margin:0;line-height:20px;font-family:-apple-system,BlinkMacSystemFont,-webkit-system-font,Roboto,Arial,sans-serif;font-size:14px;color:#111820;font-weight:normal;text-decoration:none" align="left">
                    If you have any questions or concerns, just <a href="#" style="text-decoration:underline!important;color:inherit!important" target="_blank">get in touch</a>. We're here to help.
                  </p>
                </td>
              </tr>
              <tr>
                <td height="20" style="font-size:1px;line-height:1px;padding:20px 16px 0px 16px" align="left">
                  <p style="margin:0;line-height:20px;font-family:-apple-system,BlinkMacSystemFont,-webkit-system-font,Roboto,Arial,sans-serif;font-size:14px;color:#111820;font-weight:normal;text-decoration:none" align="left">
                    Thanks for being part of the eBay community.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
  <table width="600" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation" bgcolor="#FFFFFF">
    <tbody>
      <tr>
        <td style="font-size:1px;line-height:1px;padding:0px 0px 32px 0px;vertical-align:top" valign="top" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tbody>
              <tr>
                <th style="font-size:1px;line-height:1px;vertical-align:top" valign="top" align="center">
                  <table width="194" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
                    <tbody>
                      <tr>
                        <td style="font-size:1px;line-height:1px;padding:0px 0px 0px 0px" align="center">
                          <table width="194" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
                            <tbody>
                              <tr>
                                <td height="178" style="font-size:1px;line-height:1px;padding:0px 0px 0px 0px" align="right">
                                  <a href="#" style="text-decoration:none;display:inline-block" target="_blank">
                                    <img src="${data.imageurl}" width="178" height="178" alt="${data.pname}" border="0" style="border-radius:8px;display:inline-block;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;line-height:17px;color:#171717;font-weight:bold;text-decoration:none;background:#f7f7f7">
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <th style="font-size:1px;line-height:1px;vertical-align:top" valign="top" align="center">
                  <table width="406" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
                    <tbody>
                      <tr>
                        <td style="font-size:1px;line-height:1px;padding:0px 0px 0px 0px" align="center">
                          <table width="374" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
                            <tbody>
                              <tr>
                                <td height="24" style="font-size:1px;line-height:1px;padding:0px 0px 4px 0px" align="center">
                                  <p style="margin:0;line-height:24px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:16px;color:#111820;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                    <a href="#" style="color:#111820;text-decoration:underline;display:block!important" target="_blank">
                                      <span><u>${data.pname}</u></span>
                                    </a>
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:1px;line-height:1px" align="center">
                                  <table border="0" cellspacing="0" cellpadding="0" align="left" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td height="14" style="font-size:1px;line-height:1px;padding-top:4px" align="center" valign="middle">
                                          <img src="https://i.ebayimg.com/00/s/MTZYMTY=/z/8vQAAOSwfm1j6lM-/${data.currency}_57.PNG" width="15" height="15" alt="eBay Authenticity Guarantee icon" border="0" style="display:inline-block;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;line-height:17px;color:#171717;font-weight:bold;text-decoration:none">
                                        </td>
                                        <td height="21" style="font-size:1px;line-height:1px;padding:2px 16px 0px 8px" align="left" valign="middle">
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#767676;text-decoration:none;text-align:left" align="left">
                                            Authenticity Guarantee
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:1px;line-height:1px" align="center">
                                  <table width="357" border="0" cellspacing="0" cellpadding="0" align="left" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td height="21" style="font-size:1px;line-height:1px;padding:8px 0px 0px 0px" align="center">
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#767676;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            Price:
                                          </p>
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#111820;font-weight:bold;text-decoration:none;text-align:left" align="left">
                                            ${data.currency}${data.price} + ${data.currency}${data.shipping} Postage
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="21" style="font-size:1px;line-height:1px;padding:8px 0px 0px 0px" align="center">
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#767676;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            Order number:
                                          </p>
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#111820;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            87-66609-97921
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="21" style="font-size:1px;line-height:1px;padding:8px 0px 0px 0px" align="center">
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#767676;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            Item number:
                                          </p>
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#111820;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            485632404
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="21" style="font-size:1px;line-height:1px;padding:8px 0px 0px 0px" align="center">
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#767676;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            Date sold:
                                          </p>
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#111820;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            ${formattedDate}
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td height="21" style="font-size:1px;line-height:1px;padding:8px 0px 0px 0px" align="center">
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#767676;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            Quantity sold:
                                          </p>
                                          <p style="margin:0;line-height:21px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;color:#111820;font-weight:normal;text-decoration:none;text-align:left" align="left">
                                            1
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
                </th>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  
  <table width="600" bgcolor="#F7F7F7" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
    <tbody>
      <tr>
        <td valign="top" style="padding:40px 16px 16px">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" align="left" role="presentation">
            <tbody>
              <tr>
                <td valign="top" align="left">
                  <a href="#" style="display:inline-block" target="_blank">
                    <img src="https://secureir.ebaystatic.com/cr/mscdn/009a368c51d9e697acc4c9c13f9bc5d6/EBAY-LOGO-YUmcg.png" alt="eBay Logo" width="79" border="0" style="display:inline-block;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:14px;line-height:17px;color:#111820;font-weight:bold;text-decoration:none">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td style="font-size:1px;line-height:1px;padding:0px 16px 48px 16px" align="center">
          <table width="568" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation">
            <tbody>
              <tr>
                <td height="22" style="font-size:1px;line-height:1px;padding:24px 0px 0px 0px" align="center">
                  <p style="margin:0;line-height:22px;font-family:Helvetica,Arial,sans-serif,'Market Sans';font-size:12px;color:#414141;font-weight:normal;text-decoration:none" align="left">
                    © 1995-2023 eBay Inc. or its affiliates
                  </p>
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
}

export default ebayTemplate
