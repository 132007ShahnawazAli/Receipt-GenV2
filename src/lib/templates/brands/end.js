/**
 * END. Clothing Receipt Template
 *
 * This template generates a receipt email in the style of END. Clothing's order confirmation emails.
 */

const getHtml = (data) => {
    // Format the price with 2 decimal places
    const formattedPrice = Number.parseFloat(data.price || 0).toFixed(2)
  
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>END. Clothing Order Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f7f7;">
  <div style="background-color:#f7f7f7">
      <div style="background-color:#1a1a1a;max-width:600px;margin:0px auto">
        <table style="background-color:#1a1a1a;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#1A1A1A">
          <tbody>
            <tr>
              <td style="border-bottom-width:1px;border-bottom-color:#474747;border-bottom-style:solid;direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:12px" align="center" valign="top">
                <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%" align="left">
                  <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                          <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                  <table style="border-collapse:collapse;border-spacing:0px" role="presentation" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td style="width:44px;border-collapse:collapse">
                                          <img style="display:block;outline:none;text-decoration:none;height:16px;width:100%;line-height:100%;border:0" src="https://ci3.googleusercontent.com/meips/ADKq_Nb_g2sEYb1sfkHA0EPpOVxYipi4SupNZ0C6LOGQOHvXDCJVqAP44bN04MXyJ9SUmAiAXqA2Lz5-XEjLUpRWFHPPn4mvlOSqjIwcYitwg91hv1asW_dRo16pC0l4Uu1FIpYEuWpmJeJx57Qlv8A=s0-d-e1-ft#https://media.endclothing.com/media/wysiwyg/transactional_emails/200413_end_logo@2x.png" width="44" height="16">
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
      <div style="background-color:#1a1a1a;max-width:600px;margin:0px auto">
        <table style="background-color:#1a1a1a;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#1A1A1A">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:40px 12px 18px" align="center" valign="top">
                <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;max-width:408px" align="left">
                  <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                          <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                  <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:22px;letter-spacing:0.35px;line-height:30px;text-align:left;color:#ffffff" align="left">
                                    <span style="font-family:ProximaNova-SemiBold,Arial,sans-serif;letter-spacing:2.8px;text-transform:uppercase">Hi ${data.name || "Customer"}, We've received your order</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                  <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.35px;line-height:22px;text-align:left;color:#dddddd" align="left">
                                    <p style="letter-spacing:0.4px;display:block;margin:16px 0 22px">Your order # ${data.ordernumber || "12345678"} will soon be on its way. We'll be in touch once it's dispatched with the tracking details.</p>
                                    <p style="display:block;margin:16px 0 22px">Please click <a href="#" style="text-decoration:none;color:#ffffff;font-family:ProximaNova-SemiBold,Arial,sans-serif">here</a> for important information regarding deliveries and returns.</p>
                                  </div>
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
      <div>&nbsp;</div>
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:64px 24px 32px" align="center" valign="top">
                <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;max-width:408px" align="left">
                  <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                          <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                  <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:18px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">
                                    <span style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold">Order Summary</span>
                                  </div>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;max-width:408px" align="left">
                  <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                          <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                  <table style="color:#000000;font-family:Proxima Nova,Arial,sans-serif;font-size:14px;line-height:17px;table-layout:auto;width:100%;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                                    <tbody>
                                      <tr>
                                        <td style="width:88px;padding-right:24px;border-collapse:collapse">
                                          <img style="width:100%;height:auto;display:block;line-height:100%;outline:none;text-decoration:none;border:0" src="${data.imageurl || "https://media.endclothing.com/media/catalog/product/2/8/28-04-2023_GH_SS24SDT320-VTW_1_1.jpg"}" width="88" align="left">
                                        </td>
                                        <td style="border-collapse:collapse">
                                          <p style="font-size:14px;letter-spacing:0.4px;line-height:22px;display:block;margin:0">${data.pname || "Cole Buxton SS24 Devil T-Shirt"}</p>
                                          <p style="color:#999999;font-size:14px;letter-spacing:0.4px;line-height:22px;display:block;margin:0"></p>
                                          <table style="width:100%;border-collapse:collapse">
                                            <tbody>
                                              <tr>
                                                <td style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;border-collapse:collapse;padding:0">${data.size || "M"} / QTY 1</td>
                                                <td style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;border-collapse:collapse;padding:0" align="right">${data.currency || "£"}${formattedPrice}</td>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;max-width:408px" align="left">
                  <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                          <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:32px 0px">
                                  <p style="border-top-width:1px;border-top-color:#f0f0f0;border-top-style:solid;font-size:1;width:100%;display:block;margin:0px auto">&nbsp;</p>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;max-width:408px;direction:ltr" align="left">&nbsp;</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;max-width:408px;direction:ltr" align="left">
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:40%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 10px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">Subtotal:</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:60%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 10px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="right">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:right;color:#333333" align="right">${data.currency || "£"}${formattedPrice}</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;max-width:408px;direction:ltr" align="left">
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:40%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 10px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">Discount:</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:60%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 10px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="right">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:right;color:#333333" align="right">${data.currency || "£"}0.00</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;max-width:408px;direction:ltr" align="left">
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:40%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 10px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">Shipping:</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:60%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 10px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="right">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:right;color:#333333" align="right">${data.currency || "£"}0.00</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px" align="center" valign="top">
                <div style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;max-width:408px;direction:ltr" align="left">
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:40%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 21px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">Tax:</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:60%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0 0 21px" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="right">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:right;color:#333333" align="right">${data.currency || "£"}0.00</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      <div style="background-color:#ffffff;max-width:600px;margin:0px auto">
        <table style="background-color:#ffffff;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0 12px 64px" align="center" valign="top">
                <div style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;max-width:408px;direction:ltr" align="left">
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:40%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:20px;letter-spacing:0.4px;line-height:24px;text-align:left;color:#1a1a1a" align="left">
                                      <span style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold">Total:</span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:60%" align="left">
                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td style="background-color:#ffffff;vertical-align:bottom;border-collapse:collapse;padding:0" valign="bottom" bgcolor="#ffffff">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="right">
                                    <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:20px;letter-spacing:0.4px;line-height:24px;text-align:right;color:#1a1a1a" align="right">
                                      <span style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold">${data.currency || "£"}${formattedPrice}</span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
      <div style="background-color:#f2f2f2;max-width:600px;margin:0px auto">
        <table style="background-color:#f2f2f2;width:100%;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#F2F2F2">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:32px 12px 18px" align="center" valign="top">
                <div style="max-width:576px;margin:0px auto">
                  <table style="width:100%;max-width:408px;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0" align="center" valign="top">
                          <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;max-width:408px" align="left">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                            <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333;padding-right:16px" align="left">
                                              <p style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold;display:block;margin:8px 0 4px">Shipping Address</p>
                                              <p style="display:block;margin:4px 0 8px">${data.street || "123 Main Street"}
                                                <br>${data.city || "London"} 
                                                <br>${data.zip || "SW1A 1AA"}
                                              </p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;max-width:408px" align="left">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                            <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">
                                              <p style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold;display:block;margin:8px 0 4px">Payment Address</p>
                                              <p style="display:block;margin:4px 0 8px">${data.street || "123 Main Street"}
                                                <br>${data.city || "London"} 
                                                <br>${data.zip || "SW1A 1AA"}
                                              </p>
                                            </div>
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
                <div style="max-width:576px;margin:0px auto">
                  <table style="width:100%;max-width:408px;border-collapse:collapse" role="presentation" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;border-collapse:collapse;padding:0" align="center" valign="top">
                          <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;max-width:408px" align="left">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                            <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333;padding-right:16px" align="left">
                                              <p style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold;display:block;margin:8px 0 4px">Shipping Method</p>
                                              <p style="display:block;margin:4px 0 8px">2-3 Day Standard Service</p>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:50%;max-width:408px" align="left">
                            <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:top;border-collapse:collapse;padding:0" valign="top">
                                    <table style="border-collapse:collapse" role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <td style="font-size:0px;word-break:break-word;border-collapse:collapse;padding:0" align="left">
                                            <div style="font-family:ProximaNova-Regular,Arial,sans-serif;font-size:14px;letter-spacing:0.4px;line-height:22px;text-align:left;color:#333333" align="left">
                                              <p style="font-family:ProximaNova-SemiBold,Arial,sans-serif;font-weight:bold;display:block;margin:8px 0 4px">Payment Method</p>
                                              <p style="color:#333333;display:block;margin:4px 0 8px">PayPal</p>
                                            </div>
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>
    `
  }
  
  // Define the template configuration
  const endTemplate = {
    name: "END.",
    displayName: "END. Clothing",
    logo: "end.png",
    enabled: true,
    id: "end_clothing",
    subject: "END. - Order Confirmation {orderNumber}",
    fields: [
      {
        name: "ordernumber",
        label: "Order Number",
        type: "text",
        required: true,
        placeholder: "12345678",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "customer@example.com",
      },
      {
        name: "name",
        label: "Customer Name",
        type: "text",
        required: true,
        placeholder: "John",
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        required: true,
        placeholder: "Cole Buxton SS24 Devil T-Shirt",
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
        placeholder: "85.00",
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        required: true,
        placeholder: "£",
        defaultValue: "£",
      },
      {
        name: "size",
        label: "Size",
        type: "text",
        required: true,
        placeholder: "M",
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        required: true,
        placeholder: "https://media.endclothing.com/media/catalog/product/2/8/28-04-2023_GH_SS24SDT320-VTW_1_1.jpg",
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        required: true,
        placeholder: "123 Main Street",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        required: true,
        placeholder: "London",
      },
      {
        name: "zip",
        label: "ZIP/Postal Code",
        type: "text",
        required: true,
        placeholder: "SW1A 1AA",
      },
    ],
    getHtml,
  }
  
  export default endTemplate
  