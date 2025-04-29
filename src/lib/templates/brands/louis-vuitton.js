/**
 * Louis Vuitton Receipt Template
 *
 * This template generates a Louis Vuitton order confirmation email receipt
 * with the brand's styling and format.
 */

const louisVuittonTemplate = {
    name: "Louis Vuitton",
    displayName: "Louis Vuitton",
    logo: "lv.png",
    enabled: true,
    subject: "Your Louis Vuitton Order Confirmation - {reference}",
  
    // Define form fields for the receipt
    fields: [
      {
        name: "fname",
        label: "First Name",
        type: "text",
        required: true,
        placeholder: " first name",
      },
      {
        name: "fullname",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: " full name",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: " email address",
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        required: true,
        placeholder: " product name",
      },
      {
        name: "pimage",
        label: "Product Image URL",
        type: "url",
        required: true,
        placeholder: " product image URL",
      },
      {
        name: "reference",
        label: "Order Reference",
        type: "text",
        required: true,
        placeholder: " order reference",
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        required: true,
        placeholder: " currency symbol",
      },
      {
        name: "total",
        label: "Order Total",
        type: "text",
        required: true,
        placeholder: " order total",
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        required: true,
        placeholder: " street address",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        required: true,
        placeholder: " city",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        required: true,
        placeholder: " country",
      },
    ],
  
    // Generate HTML for the receipt
    getHtml: (data) => {
      return `
  <html>
  <meta charset="utf-8" />
  
  <head>
    <meta charset="utf-8" />
    <style type="text/css">
      h4 {
        text-align: left;
      }
  
      @media screen {
  
        .headerLineTitle {
          width: 1.5in;
          display: inline-block;
          margin: 0in;
          margin-bottom: .0001pt;
          font-size: 11.0pt;
          font-family: "Calibri", "sans-serif";
          font-weight: bold;
        }
  
        .headerLineText {
          display: inline;
          margin: 0in;
          margin-bottom: .0001pt;
          font-size: 11.0pt;
          font-family: "Calibri", "sans-serif";
          font-weight: normal;
        }
  
        .pageHeader {
          font-size: 14.0pt;
          font-family: "Calibri", "sans-serif";
          font-weight: bold;
          visibility: hidden;
          display: none;
        }
      }
  
      @media print {
        .headerLineTitle {
          width: 1.5in;
          display: inline-block;
          margin: 0in;
          margin-bottom: .0001pt;
          font-size: 11.0pt;
          font-family: "Calibri", "sans-serif";
          font-weight: bold;
        }
  
        .headerLineText {
          display: inline;
          margin: 0in;
          margin-bottom: .0001pt;
          font-size: 11.0pt;
          font-family: "Calibri", "sans-serif";
          font-weight: normal;
        }
  
        .pageHeader {
          font-size: 14.0pt;
          font-family: "Calibri", "sans-serif";
          font-weight: bold;
          visibility: visible;
          display: block;
        }
      }
    </style>
  </head>
  
  <body>
    <div dir="ltr">
      <div class="gmail_quote">
        <div class="gmail_attr" dir="ltr">
        </div>
        <div bgcolor="#FFFFFF" marginheight="0" marginwidth="0" style="margin:0px;padding:0px">
          <c>
            <div id="m_-8964193687320215169m_-7919068182185907768m_4464009999400761189container">
              <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                style="border-collapse:collapse;table-layout:fixed" width="100%">
                <tbody>
                  <tr>
                    <td align="c">
                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                        style="border-collapse:collapse" width="640">
                        <tbody>
                          <tr>
                            <td style="font-size:1px;line-height:1px!important">
                              <img border="0" height="20"
                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                style="display:block" width="1" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                        style="border-collapse:collapse" width="642">
                        <tbody>
                          <tr>
                            <td>
                              <table align="c" bgcolor="#F1F0EC" border="0" cellpadding="0" cellspacing="0"
                                style="border-collapse:collapse" width="642">
                                <tbody>
                                  <tr>
                                    <td bgcolor="#F1F0EC" style="font-size:1px;line-height:1px!important">
                                      <img border="0" height="1"
                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                        style="display:block" width="1" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                style="border-collapse:collapse" width="642">
                                <tbody>
                                  <tr>
                                    <td bgcolor="#F1F0EC" style="font-size:1px;line-height:1px!important" width="1">
                                      <img border="0" height="1"
                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                        style="display:block" width="1" />
                                    </td>
                                    <td align="c" width="640">
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="c">
                                              <a href="https://us.louisvuitton.com/eng-us/homepage" target="_blank"
                                                title="LOUIS VUITTON">
                                                <img alt="LOUIS VUITTON" border="0" height="24"
                                                  src="https://www.louisvuitton.com/images/lv_logo.png"
                                                  style="display:block" width="214" />
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#F1F0EC" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="1"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:top;color:rgb(25,17,11)'>
                                              Dear
                                              ${data.fname},
                                              <br />
                                              <br />
                                              We are pleased to inform you that your Louis Vuitton order ${data.reference} has
                                              been shipped.
                                              <br />
                                              We thank you and we wish you a fantastic journey with your new product.
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td
                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:normal;text-align:left;vertical-align:middle;padding-bottom:5px;padding-top:5px;color:rgb(25,17,11)'>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="10"
                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#F6F5F3" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td
                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:c;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'
                                              width="100">
                                            </td>
                                            <td
                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:middle;padding-top:10px;padding-bottom:10px;padding-left:10px;color:rgb(25,17,11)'
                                              width="300">
                                            </td>
                                            <td
                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:c;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'
                                              width="100">
                                            </td>
                                            <td
                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:right;vertical-align:middle;padding-top:10px;padding-bottom:10px;padding-right:10px;color:rgb(25,17,11)'
                                              width="100">
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td width="400">
                                              <table align="left" bgcolor="#FFFFFF" border="0" cellpadding="0"
                                                cellspacing="0" style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td align="left">
                                                      <table align="left" bgcolor="#FFFFFF" border="0" cellpadding="0"
                                                        cellspacing="0" style="border-collapse:collapse">
                                                        <tbody>
                                                          <tr>
                                                            <td align="left"
                                                              id="m_-8964193687320215169m_-7919068182185907768m_4464009999400761189prodImg"
                                                              valign="middle">
                                                              <img src="${data.pimage}" width="100" />
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                      <table align="left" bgcolor="#FFFFFF" border="0" cellpadding="0"
                                                        cellspacing="0" style="border-collapse:collapse" width="250">
                                                        <tbody>
                                                          <tr>
                                                            <td style="font-size:1px;line-height:1px!important"
                                                              width="10">
                                                              <img border="0" height="10"
                                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                                style="display:block" width="1" />
                                                            </td>
                                                            <td align="left"
                                                              style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:top;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                              <font
                                                                style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:rgb(25,17,11)'>
                                                                <a style='text-decoration:none;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;color:rgb(25,17,11)'
                                                                  title="#Titre1#">
  
                                                                  ${data.pname}
  
                                                                </a>
                                                                <br />
                                                                Reference : ${data.reference}
                                                                <br />
                                                                <br />
                                                              </font>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td align="c" style="padding-top:10px;padding-bottom:10px" valign="top"
                                              width="100">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:c;vertical-align:top;color:rgb(25,17,11)'>
                                                      1
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td valign="top" width="100">
                                              <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0"
                                                cellspacing="0" style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:right;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                      ${data.currency}${data.total}.00
                                                      <br />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="10"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#F6F5F3" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td valign="top" width="500">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="10"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td valign="top" width="100">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:right;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                      ${data.currency}${data.total}.00
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="10"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td valign="top" width="500">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="10"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                      DELIVERY: Complentary standard
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td valign="top" width="100">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:right;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                      $0.00
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="10"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td valign="top" width="500">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                    </td>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td valign="top" width="100">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:right;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="10"
                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css//images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#F6F5F3" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td valign="top" width="300">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                    </td>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:normal;text-align:left;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td valign="top" width="300">
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="100%">
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:normal;text-align:right;vertical-align:middle;padding-top:10px;padding-bottom:10px;color:rgb(25,17,11)'>
                                                      <strong
                                                        style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif'>
                                                      ${data.currency}${data.total}.00
                                                      </strong>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td bgcolor="#FFFFFF" valign="top">
                                              <table align="left" bgcolor="#FFFFFF" border="0" cellpadding="0"
                                                cellspacing="0" style="border-collapse:collapse" width="290">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" bgcolor="#FFFFFF"
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:top;padding-top:10px;padding-bottom:10px;padding-left:10px;color:rgb(25,17,11)'
                                                      valign="top">
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td bgcolor="#E1DFD8" style="font-size:1px;line-height:1px!important">
                                                      <img border="0" height="1"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td align="left" bgcolor="#FFFFFF"
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:top;padding-top:10px;padding-bottom:10px;padding-left:10px;color:rgb(25,17,11)'
                                                      valign="top">
                                                      ${data.fullname}
                                                      <br />
                                                      <a href="https://www.google.com/maps/place/Ass+Hill,+Wimborne,+Spojen%C3%A9+kr%C3%A1%C4%BEovstvo/@50.8872586,-1.9882541,18.25z/data=!4m6!3m5!1s0x4873bb95c142b9eb:0x6c19cebbeb89f7bd!8m2!3d50.8873176!4d-1.9882224!16s%2Fg%2F1tfqqdsg?entry=ttu"
                                                        style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif'
                                                        target="_blank">
                                                        ${data.street}
                                                      </a>
                                                      <br />
                                                      ${data.city}
                                                      <br />
                                                      ${data.country}
                                                      <br />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table align="right" bgcolor="#FFFFFF" border="0" cellpadding="0"
                                                cellspacing="0" style="border-collapse:collapse" width="290">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" bgcolor="#FFFFFF"
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:top;padding-top:10px;padding-bottom:10px;padding-left:10px;color:rgb(25,17,11)'
                                                      valign="top">
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td bgcolor="#E1DFD8" style="font-size:1px;line-height:1px!important">
                                                      <img border="0" height="1"
                                                        src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                        style="display:block" width="1" />
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td align="left" bgcolor="#FFFFFF"
                                                      style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;line-height:normal;text-align:left;vertical-align:top;padding-top:10px;padding-bottom:10px;padding-left:10px;color:rgb(25,17,11)'
                                                      valign="top">
                                                      ${data.fullname}
                                                      <br />
                                                      <a href="https://www.google.com/maps/place/Ass+Hill,+Wimborne,+Spojen%C3%A9+kr%C3%A1%C4%BEovstvo/@50.8872586,-1.9882541,18.25z/data=!4m6!3m5!1s0x4873bb95c142b9eb:0x6c19cebbeb89f7bd!8m2!3d50.8873176!4d-1.9882224!16s%2Fg%2F1tfqqdsg?entry=ttu"
                                                        style='font-family:"Helvetica Neue",Helvetica,Arial,sans-serif'
                                                        target="_blank">
                                                        ${data.street}
                                                      </a>
                                                      <br />
                                                      ${data.city}
                                                      <br />
                                                      ${data.country}
                                                      <br />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="10"
                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="10"
                                                src="https://us.louisvuitton.com/static/23.21.0-RC/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td
                                              style="font-family:Futura,Georgia,Arial,Helvetica;font-size:12px;line-height:normal;text-align:left;vertical-align:top;color:rgb(43,19,15)">
                                              Should
                                              you require additional information, please contact our Client
                                              Services at
                                              <font
                                                style="font-family:Futura,Georgia,Arial,Helvetica;color:rgb(43,19,15)">
                                                1300 582 827
                                              </font>
                                              . Our
                                              client advisors will be pleased to assist you.
                                              <br />
                                              <br />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style="font-family:Futura,Georgia,Arial,Helvetica;font-size:12px;line-height:normal;text-align:left;vertical-align:top;color:rgb(43,19,15)">
                                              We
                                              look forward to continuing our journey together soon!
                                              <br />
                                              Warm regards,
                                              <a href="https://us.louisvuitton.com/eng-us/start-the-journey"
                                                style="font-family:Futura,Georgia,Arial,Helvetica" target="_blank">
                                                Louis
                                                Vuitton Client Services
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style="font-family:Futura,Georgia,Arial,Helvetica;font-size:12px;line-height:normal;text-align:left;vertical-align:top;color:rgb(43,19,15)">
                                              Call
                                              us:
                                              <font
                                                style="font-family:Futura,Georgia,Arial,Helvetica;color:rgb(43,19,15)">
                                                1300 582 827
                                              </font>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#F1F0EC" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="1"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="20"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="480">
                                        <tbody>
                                          <tr>
                                            <td>
                                              <a href="https://us.louisvuitton.com" target="_blank" title="">
                                                <img alt="" border="0" height="223"
                                                  src="https://www.louisvuitton.com/images/is/image/lv/footer_email"
                                                  style="display:block" width="480" />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse;display:none;font-size:0px;max-height:0px;line-height:0"
                                        width="300">
                                        <tbody>
                                          <tr>
                                            <td>
                                              <a href="https://us.louisvuitton.com" target="_blank" title="">
                                                <img alt="" border="0" height="0"
                                                  src="https://www.louisvuitton.com/images/is/image/lv/footer_email"
                                                  style="display:none" width="0" />
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="600">
                                        <tbody>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="15"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="right">
                                              <table align="right" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important">
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="10" />
                                                    </td>
                                                    <td
                                                      style="font-family:Futura,Georgia,Arial,Helvetica;font-size:12px;line-height:normal;text-align:left;vertical-align:middle;color:rgb(43,19,15)">
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style="font-size:1px;line-height:1px!important">
                                              <img border="0" height="15"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <table align="c" bgcolor="#F1F0EC" border="0" cellpadding="0" cellspacing="0"
                                        style="border-collapse:collapse" width="640">
                                        <tbody>
                                          <tr>
                                            <td align="c">
                                              <table align="left" bgcolor="#F1F0EC" border="0" cellpadding="0"
                                                cellspacing="0" style="border-collapse:collapse" width="640">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="640">
                                                      <img border="0" height="30"
                                                        src="https://ceo-be.multimediabs.com/attachments/hosted/v2/image61041ed5-4d9c-41dd-8d70-626e70f6473f"
                                                        style="display:block" width="640" />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table align="c" border="0" cellpadding="0" cellspacing="0"
                                                style="border-collapse:collapse" width="272">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="10" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://us.louisvuitton.com/eng-us/apps" target="_blank"
                                                        title="LV Pass">
                                                        <img alt="LV Pass" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_lv.png"
                                                          style="display:block" width="22" />
                                                      </a>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="5" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://www.facebook.com/LouisVuitton/" target="_blank"
                                                        title="Facebook">
                                                        <img alt="Facebook" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_facebook.png"
                                                          style="display:block" width="22" />
                                                      </a>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="5" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://twitter.com/louisvuitton" target="_blank"
                                                        title="twitter">
                                                        <img alt="twitter" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_twitter.png"
                                                          style="display:block" width="22" />
                                                      </a>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="5" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://www.youtube.com/louisvuitton" target="_blank"
                                                        title="YouTube">
                                                        <img alt="YouTube" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_youtube.png"
                                                          style="display:none" width="22" />
                                                      </a>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="5" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://us.louisvuitton.com/eng-us/la-maison/louis-vuitton-on-snapchat"
                                                        target="_blank" title="Snapchat">
                                                        <img alt="Snapchat" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_snapchat.png"
                                                          style="display:block" width="22" />
                                                      </a>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="5" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://www.instagram.com/louisvuitton/" target="_blank"
                                                        title="instagram">
                                                        <img alt="instagram" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_instagram.png"
                                                          style="display:block" width="22" />
                                                      </a>
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" width="10">
                                                      <img border="0" height="1"
                                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                        style="display:block" width="5" />
                                                    </td>
                                                    <td style="font-size:1px;line-height:1px!important" valign="middle">
                                                      <a href="https://www.pinterest.com/LouisVuitton/" target="_blank"
                                                        title="Pinterest">
                                                        <img alt="Pinterest" border="0" height="22"
                                                          src="https://eu.louisvuitton.com/images/is/image/lv/1/LV/louis-vuitton--tpl_rs_pinterest.png"
                                                          style="display:block" width="22" />
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table align="left" bgcolor="#F1F0EC" border="0" cellpadding="0"
                                                cellspacing="0" style="border-collapse:collapse" width="640">
                                                <tbody>
                                                  <tr>
                                                    <td style="font-size:1px;line-height:1px!important" width="640">
                                                      <img border="0" height="30"
                                                        src="https://ceo-be.multimediabs.com/attachments/hosted/v2/image61041ed5-4d9c-41dd-8d70-626e70f6473f"
                                                        style="display:block" width="640" />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                            <td bgcolor="#F1F0EC" style="font-size:1px;line-height:1px!important"
                                              width="1">
                                              <img border="0" height="1"
                                                src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                                style="display:block" width="1" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table align="c" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0"
                                width="640">
                                <tbody>
                                  <tr>
                                    <td style="font-size:1px;line-height:1px">
                                      <img height="20"
                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                        style="display:block;border:0px" width="1" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="c"
                                      style="font-family:Futura,Georgia,Arial,Helvetica;font-size:10px;line-height:normal;color:rgb(0,0,0)">
                                      <font style="font-family:Futura,Georgia,Arial,Helvetica;color:rgb(0,0,0)">
                                        <a href="https://us.louisvuitton.com/eng-us/legal-notices"
                                          style="text-decoration:underline;font-family:Futura,Georgia,Arial,Helvetica;color:rgb(0,0,0)"
                                          target="_blank" title="Legal Notice">
                                          <font style="font-family:Futura,Georgia,Arial,Helvetica;color:rgb(0,0,0)">
                                            Legal Notice
                                          </font>
                                        </a>
                                        © 2022 Louis Vuitton
                                        <br />
                                        <br />
                                        You may access your personal information and modify or delete
                                        it.
                                        <br />
                                        If needed, please send an email to:
                                        <a href="mailto:eu@contact.louisvuitton.com"
                                          style="text-decoration:underline;font-family:Futura,Georgia,Arial,Helvetica;color:rgb(0,0,0)"
                                          target="_blank">
                                          <font style="font-family:Futura,Georgia,Arial,Helvetica;color:rgb(0,0,0)">
                                            eu@contact.louisvuitton.com
                                          </font>
                                        </a>
                                      </font>
                                      <br />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="font-size:1px;line-height:1px">
                                      <img height="20"
                                        src="https://www.louisvuitton.com/static/css/images/email/spacer.gif"
                                        style="display:block;border:0px" width="1" />
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
          </c>
        </div>
      </div>
    </div>
  </body>
  </html>
      `
    },
  }
  
  export default louisVuittonTemplate
  