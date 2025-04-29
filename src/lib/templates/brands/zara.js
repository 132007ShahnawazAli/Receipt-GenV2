/**
 * Zara Receipt Template
 *
 * This template generates a receipt email in the style of Zara's order confirmation emails.
 */

const getHtml = (data) => {
    // Format the price with 2 decimal places
    const formattedPrice = Number.parseFloat(data.price || 0).toFixed(2)

    // Calculate total (price + shipping)
    const shippingCost = 4.95
    const total = (Number.parseFloat(data.price || 0) + shippingCost).toFixed(2)

    return `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="direction: ltr;">
  <head>
    <title>ZARA</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        font-family: Helvetica, Arial, sans-serif;
      }
      table, td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
  </head>
  <body style="direction: ltr; word-spacing: normal;">
    <div style="direction: ltr;">
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 0;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="center" style="direction: ltr; font-size: 0px; padding: 0; padding-top: 48px; padding-bottom: 43px; word-break: break-word;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; border-collapse: collapse; border-spacing: 0px;">
                                    <tbody style="direction: ltr;">
                                      <tr style="direction: ltr;">
                                        <td style="direction: ltr; width: 149px;" width="149">
                                          <img src="http://static.zara.net/photos/contents/apps/logo_Zara_2019.png" style="direction: ltr; border: 0; display: block; outline: none; text-decoration: none; height: auto; width: 100%; font-size: 13px;" width="149" height="auto">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="center" class="rd-title" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; font-weight: bold; letter-spacing: 0.7px; font-family: Helvetica; text-align: center; color: #000000; font-size: 22px; line-height: 28px;">Vielen Dank für Ihren Einkauf</div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="center" class="rd-section-title" style="direction: ltr; font-size: 0px; padding: 0; padding-top: 24px; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; font-weight: bold; letter-spacing: 0.7px; font-family: Helvetica; text-align: center; color: #000000; font-size: 16px; line-height: 24px;">Bestellung Nr. ${data.ordernumber || "53452029285"}</div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-text-info" style="direction: ltr; font-size: 0px; padding: 0; padding-top: 24px; word-break: break-word;">
                                  <div style="direction: ltr; letter-spacing: 0.3px; font-family: Helvetica; text-align: left; color: #000000; font-size: 14px; line-height: 18px;">
                                    <p style="direction: ltr; margin: 13px 0 0;"></p>
                                    <p style="direction: ltr; margin: 13px 0 0;"></p>
                                    <p style="direction: ltr; margin: 13px 0 0;">Sobald Ihre Bestellung unterwegs ist, senden wir Ihnen eine weitere E-Mail.</p>
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
  
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 0; padding-top: 24px;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-subsection-text-light" style="direction: ltr; font-size: 0px; padding: 0; padding-bottom: 24px; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-family: Helvetica; font-weight: bold; text-align: left; font-size: 13px; line-height: 18px; color: #333333;"> Sie erhalten Ihre Sendung: </div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-subsection-title" style="direction: ltr; font-size: 0px; padding: 0; padding-bottom: 16px; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.7px; font-family: Helvetica; font-weight: bold; text-align: left; color: #000000; font-size: 14px; line-height: 18px;">${data.deliverydate || "20-25.07.2024"}</div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td style="direction: ltr; font-size: 0px; word-break: break-word;">
                                  <div style="direction: ltr; height: 16px; line-height: 16px;">&#8202;</div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-subsection-text-light" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-family: Helvetica; font-weight: bold; text-align: left; font-size: 13px; line-height: 18px; color: #333333;">Standardversand nach Hause</div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-subsection-text" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-family: Helvetica; text-align: left; color: #000000; font-size: 13px; line-height: 18px;">
                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">
                                      <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">${data.street || "Musterstraße 123"}</div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-subsection-text" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-family: Helvetica; text-align: left; color: #000000; font-size: 13px; line-height: 18px;">
                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">${data.zipcity || "12345 Berlin"}</div>
                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">${data.state || "Berlin"}</div>
                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">${data.country || "Deutschland"}</div>
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
  
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 0;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="center" vertical-align="middle" class="rd-order-detail-btn" style="direction: ltr; word-break: break-word; padding: 15px 0 20px; font-size: 14px;">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; border-collapse: separate; width: 100%; line-height: 100%;" width="100%">
                                    <tbody style="direction: ltr;">
                                      <tr style="direction: ltr;">
                                        <td align="center" bgcolor="#000000" role="presentation" style="direction: ltr; border: 1px solid #FFFFFF; border-radius: 3px; cursor: auto; mso-padding-alt: 10px 25px; background: #000000;" valign="middle">
                                          <a style="direction: ltr; display: inline-block; background: #000000; color: #FFFFFF; font-family: Helvetica; font-size: 13px; font-weight: bold; line-height: 120%; margin: 0; text-decoration: none; text-transform: uppercase; padding: 10px 25px; mso-padding-alt: 0px; border-radius: 3px;">Sendungsverfolgung</a>
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
  
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 0; padding-top: 40px;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-subsection-text" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-family: Helvetica; text-align: left; color: #000000; font-size: 13px; line-height: 18px;">
                                    <div class="rd-light-font" style="direction: ltr; color: #666666; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">1 Artikel</div>
                                  </div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" style="direction: ltr; font-size: 0px; padding: 16px 0 0; word-break: break-word;">
                                  <table cellpadding="0" cellspacing="0" width="100%" border="0" style="direction: ltr; color: #000000; font-family: Helvetica; font-size: 13px; line-height: 22px; table-layout: auto; width: 100%; border: none;">
                                    <tr style="direction: ltr;">
                                      <td style="direction: ltr;">
                                        <table table-layout="fixed" style="direction: ltr;"></table>
                                        <table table-layout="fixed" style="direction: ltr;">
                                          <tr class="rd-product-row" style="direction: ltr;">
                                            <td style="direction: ltr; vertical-align: top; padding-bottom: 24px;" class="rd-product-col" valign="top">
                                              <table class="rd-product" style="direction: ltr; width: 85%; max-width: 230px;" width="85%">
                                                <tr style="direction: ltr;">
                                                  <td style="direction: ltr; width: 100%; max-width: 230px; padding: 0;" class="rd-subsection-text" width="100%">
                                                    <table style="direction: ltr;">
                                                      <tr style="direction: ltr;">
                                                        <td style="direction: ltr; width: 100%; max-width: 230px; padding: 0 0 8px;" width="100%">
                                                          <img padding="0" class="rd-product-img" width="225" src="${data.imageurl || "https://static.zara.net/photos/2024/V/0/1/p/3666/029/800/2/w/563/3666029800_1_1_1.jpg?ts=1708506545250"}" style="direction: ltr; max-width: 230px; width: 100%; height: auto;" height="auto">
                                                        </td>
                                                      </tr>
                                                    </table>
                                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">${data.pname || "OVERSIZE-BLAZER MIT KNÖPFEN"}</div>
                                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; color: #666666; font-size: 13px; line-height: 18px;">${data.coloridcode || "SCHWARZ | 3666/029"}</div>
                                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; padding-top: 16px; font-size: 13px; line-height: 18px;">1 Einheit / ${formattedPrice} ${data.currencycode || "EUR"}</div>
                                                    <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; font-size: 13px; line-height: 18px;">${data.size || "M"}</div>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                            <td style="direction: ltr; vertical-align: top; padding-bottom: 24px;" class="rd-product-col" valign="top"></td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
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
  
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 8px 0 0 0;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="center" style="direction: ltr; font-size: 0px; padding: 0; padding-bottom: 40px; word-break: break-word;">
                                  <p style="direction: ltr; border-top: solid 1px #dddddd; font-size: 1px; margin: 0px auto; width: 100%;"></p>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-section-title" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; font-weight: bold; letter-spacing: 0.7px; font-family: Helvetica; text-align: left; color: #000000; font-size: 16px; line-height: 24px;">Zahlungsmethode</div>
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
  
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; padding-bottom: 20px; padding-top: 16px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 0;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="left" style="direction: ltr; font-size: 0px; padding: 0; word-break: break-word;">
                                  <table cellpadding="0" cellspacing="0" width="100%" border="0" style="direction: ltr; color: #000000; font-family: Helvetica; font-size: 13px; line-height: 22px; table-layout: auto; width: 100%; border: none;">
                                    <tr style="direction: ltr;">
                                      <td style="direction: ltr; width: 60px;" width="60">
                                        <table style="direction: ltr;">
                                          <tr style="direction: ltr;">
                                            <td style="direction: ltr;">
                                              <img width="60" padding-left="10px" src="https://sttc-stage-zaraphr.inditex.com/photos/contents/apps/Background.jpg" style="direction: ltr; width: 60px; height: auto;" height="auto">
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td style="direction: ltr; padding-left: 16px;" class="rd-text-info-small">
                                        <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; text-align: left; font-size: 11px; line-height: 16px;">PayPal</div>
                                        <div style="direction: ltr; text-transform: uppercase; letter-spacing: 0.8px; text-align: left; font-size: 11px; line-height: 16px;">Gesamt ${total} ${data.currencycode || "EUR"}</div>
                                      </td>
                                    </tr>
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
  
      <div style="direction: ltr; margin: 0px auto; max-width: 535px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr; width: 100%;" width="100%">
          <tbody style="direction: ltr;">
            <tr style="direction: ltr;">
              <td style="direction: ltr; font-size: 0px; padding: 0 5px; text-align: center;" align="center">
                <div style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="direction: ltr;">
                    <tbody style="direction: ltr;">
                      <tr style="direction: ltr;">
                        <td style="direction: ltr; vertical-align: top; padding: 8px 0 0 0;" valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="direction: ltr;" width="100%">
                            <tbody style="direction: ltr;">
                              <tr style="direction: ltr;">
                                <td align="center" style="direction: ltr; font-size: 0px; padding: 0; padding-bottom: 40px; word-break: break-word;">
                                  <p style="direction: ltr; border-top: solid 1px #dddddd; font-size: 1px; margin: 0px auto; width: 100%;"></p>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-section-title" style="direction: ltr; font-size: 0px; padding: 0; padding-bottom: 16px; word-break: break-word;">
                                  <div style="direction: ltr; text-transform: uppercase; font-weight: bold; letter-spacing: 0.7px; font-family: Helvetica; text-align: left; color: #000000; font-size: 16px; line-height: 24px;">Aufschlüsselung</div>
                                </td>
                              </tr>
                              <tr style="direction: ltr;">
                                <td align="left" class="rd-payment-table" style="direction: ltr; font-size: 0px; word-break: break-word; padding: 0px;">
                                  <table cellpadding="0" cell  word-break: break-word; padding: 0px;">
                                  <table cellpadding="0" cellspacing="0" width="100%" border="0" style="direction: ltr; letter-spacing: 0.7px; text-transform: uppercase; color: #000000; font-family: Helvetica; table-layout: auto; width: 100%; border: none; font-size: 13px; line-height: 18px;">
                                    <tr class="rd-light-font" style="direction: ltr; color: #666666;">
                                      <td style="direction: ltr; padding-bottom: 4px; min-width: 100px;">1 Artikel</td>
                                      <td class="rd-payment-price" style="direction: ltr; padding-bottom: 4px; min-width: 100px; text-align: right; word-break: break-word;" align="right">${formattedPrice} ${data.currencycode || "EUR"}</td>
                                    </tr>
                                    <tr class="rd-light-font" style="direction: ltr; color: #666666;">
                                      <td style="direction: ltr; padding-bottom: 4px; min-width: 100px;">Versandkosten</td>
                                      <td class="rd-payment-price" style="direction: ltr; padding-bottom: 4px; min-width: 100px; text-align: right; word-break: break-word;" align="right">4,95 ${data.currencycode || "EUR"}</td>
                                    </tr>
                                    <tr class="rd-payment-total rd-black-font" style="direction: ltr; font-weight: bold; color: #000000;">
                                      <td style="direction: ltr; padding-bottom: 4px; min-width: 100px;">Gesamt</td>
                                      <td class="rd-payment-price" style="direction: ltr; padding-bottom: 4px; min-width: 100px; text-align: right; word-break: break-word;" align="right">${total} ${data.currencycode || "EUR"}</td>
                                    </tr>
                                    <tr style="direction: ltr;">
                                      <td colspan="2" style="direction: ltr; padding-bottom: 4px; min-width: 100px;">
                                        <span class="rd-payment-include-tax-label-left" style="direction: ltr; color: #666666; letter-spacing: 0.3px; text-transform: none; font-size: 12px; line-height: 18px; text-align: left;">*Inkl. Steuern</span>
                                      </td>
                                    </tr>
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
  </body>
  </html>
    `
}

// Define the template configuration
const zaraTemplate = {
    name: "Zara",
    displayName: "Zara",
    logo: "zara.png",
    subject: "Ihre Bestellung bei Zara - Bestellnummer {ordernumber}",
    enabled: true,
    fields: [
        {
            name: "ordernumber",
            label: "Order Number",
            type: "text",
            required: true,
            placeholder: "53452029285",
        },
        {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
            placeholder: "customer@example.com",
        },
        {
            name: "pname",
            label: "Product Name",
            type: "text",
            required: true,
            placeholder: "OVERSIZE-BLAZER MIT KNÖPFEN",
        },
        {
            name: "price",
            label: "Price",
            type: "text",
            required: true,
            placeholder: "69.95",
        },
        {
            name: "currencycode",
            label: "Currency Code",
            type: "text",
            required: true,
            placeholder: "EUR",
        },
        {
            name: "size",
            label: "Size",
            type: "text",
            required: true,
            placeholder: "M",
        },
        {
            name: "coloridcode",
            label: "Color/ID Code",
            type: "text",
            required: true,
            placeholder: "SCHWARZ | 3666/029",
        },
        {
            name: "imageurl",
            label: "Product Image URL",
            type: "url",
            required: true,
            placeholder: "https://static.zara.net/photos/2024/V/0/1/p/3666/029/800/2/w/563/3666029800_1_1_1.jpg",
        },
        {
            name: "deliverydate",
            label: "Delivery Date",
            type: "text",
            required: true,
            placeholder: "20-25.07.2024",
        },
        {
            name: "street",
            label: "Street Address",
            type: "text",
            required: true,
            placeholder: "Musterstraße 123",
        },
        {
            name: "zipcity",
            label: "ZIP Code and City",
            type: "text",
            required: true,
            placeholder: "12345 Berlin",
        },
        {
            name: "state",
            label: "State",
            type: "text",
            required: true,
            placeholder: "Berlin",
        },
        {
            name: "country",
            label: "Country",
            type: "text",
            required: true,
            placeholder: "Deutschland",
        },
    ],
    getHtml,
}

export default zaraTemplate
