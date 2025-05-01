/**
 * Chrome Hearts Email Receipt Template
 */

const chromeHeartsTemplate = {
  name: "Chrome Hearts",
  displayName: "Chrome Hearts",
  enabled: true,
  logo: "chromehearts.png",
  subject: "Chrome Hearts e-Receipt",

  // Form fields configuration
  fields: [
    {
      name: "name",
      label: "Customer Name",
      type: "text",
      required: true,
      placeholder: "John Doe",
      defaultValue: "John Doe",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "customer@example.com",
      defaultValue: "customer@example.com",
    },
    {
      name: "pname",
      label: "Product Name",
      type: "text",
      required: true,
      placeholder: "CH Plus Ring",
      defaultValue: "CH Plus Ring",
    },
    {
      name: "size",
      label: "Size",
      type: "text",
      required: true,
      placeholder: "8",
      defaultValue: "8",
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      required: true,
      placeholder: "1250",
      defaultValue: "1250",
    },
    {
      name: "tax",
      label: "Tax",
      type: "number",
      required: true,
      placeholder: "100",
      defaultValue: "100",
    },
    {
      name: "shipping",
      label: "Shipping",
      type: "number",
      required: true,
      placeholder: "0",
      defaultValue: "0",
    },
    {
      name: "total",
      label: "Total",
      type: "number",
      required: true,
      placeholder: "1350",
      defaultValue: "1350",
    },
    {
      name: "currency",
      label: "Currency Symbol",
      type: "text",
      required: true,
      placeholder: "$",
      defaultValue: "$",
    },
    {
      name: "orderdate",
      label: "Order Date",
      type: "text",
      required: true,
      placeholder: "04/30/2024",
      defaultValue: "04/30/2024",
    },
  ],

  // Method to generate HTML with placeholders replaced
  getHtml: (data) => `
<center>
    <table>
      <tbody>
        <tr>
          <td width="640">
            <div style="display:none;max-height:0;overflow:hidden">Chrome Hearts e-Receipt</div>

            <table style="background-color:#ffffff!important" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
              <tbody>
                <tr>
                  <td align="center" valign="top" bgcolor="#ffffff">
                    <table style="max-width:640px;margin:0 auto;padding:0;background-color:#ffffff!important" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                      <tbody>
                        <tr>
                          <td align="center" valign="top" bgcolor="#ffffff">
                            <table style="max-width:640px;border-spacing:0;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td align="center" valign="top">
                                    <a href="https://www.chromehearts.com" id="m_4901485509116728929logo" rel="noopener" target="_blank">
                                      <img style="display:block;max-width:390px;width:100%" src="https://ci3.googleusercontent.com/meips/ADKq_NZlxcMw_ZC6sf-ElQ_BCJOkq0h5OIkurpsHTSNw0mBUaKIFKKICUxzw2Q5h01hDL81BYiR_C0Jjp9cbthXAeWKbPf3OiMedgtWs0nPOV3me6aKyFt4cOrdbqkI=s0-d-e1-ft#https://chwebcdn.azureedge.net/retail/assets/images/ch_scroll_eml.png" alt="Chrome Hearts" width="100%" border="0">
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table style="border-spacing:0;border-collapse:collapse" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                <tr>
                                  <td style="font-size:0;line-height:0;border-collapse:collapse" width="100%" height="25"> </td>
                                </tr>
                                <tr>
                                  <td style="font-family:Dosis,Arial,sans-serif;color:black;font-size:28px;text-align:center" align="center" valign="top">EMAIL RECEIPT</td>
                                </tr>
                                <tr>
                                  <td style="font-size:0;line-height:0;border-collapse:collapse" width="100%" height="10"> </td>
                                </tr>
                                <tr>
                                  <td align="center" valign="top">
                                    <table style="width:600px;height:2px;background-color:#ffffff" border="0" width="600" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
                                      <tbody>
                                        <tr>
                                          <td style="height:1px;font-size:0px;border-top-width:1px;border-top-style:dotted;border-top-color:#afafaf" height="1"> </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="font-size:0;line-height:0;border-collapse:collapse" width="100%" height="25"> </td>
                                </tr>
                              </tbody>
                            </table>
                           <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-spacing:0;border-collapse:collapse">
                                                          <tbody>
                                                             <tr>
                                                                <td align="left" style="font-family:Arial,Helvetica,Verdana,sans-serif;color:#000000;font-size:16px" valign="top">
                                                                   <pre>TRANSACTION.:   30013-LN01R2-53091     DATE.:  ${data.orderdate} <br>REGISTER....:   LN01R2                 TIME.:   20:00    <br>ACCOUNT NO..:   C0107453               CASHIER: Maria Lewis  <br>CUSTOMER....:   ${data.name}                           <br><br>REP  STYLE NAME & PART NUM   QTY     PRICE          TOTAL<br>------------------------------<wbr>---------------------------<br>Maria Lewis   ${data.pname}1       ${data.currency}${data.price}     ${data.currency}${data.total}<br>${data.pname} -  - ${data.size}                                 <br>S-White-V:C22-1BF; PrntClr:White :CH <br><br>TOTAL ITEMS                   1    <br>------------------------------<wbr>---------------------------<br>    SUBTOTAL                                      ${data.currency}${data.price}<br>    TAX TOTAL                                     ${data.currency}${data.tax}<br>    SHIPPING CHARGE                               ${data.currency}${data.shipping}<br>    TOTAL                                         ${data.currency}${data.total}<br><br>    Signature:  ______________________________<wbr>__<br><br>==============================<wbr>===========================<br>     <br>                                                         <br>                                                         <br>                <B: 300131R197271517>  <br>                 <a href="http://www.chromehearts.com" target="_blank">www.chromehearts.com</a>                    <br><br></pre>
                                                                </td>
                                                             </tr>
                                                          </tbody>
                                                       </table>

                            <table style="max-width:640px;border-spacing:0;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                <tr>
                                  <td style="font-family:Arial,Helvetica,Verdana,sans-serif;color:#0c2a55;font-size:12px;line-height:16px;padding-bottom:10px;padding-left:10px;padding-right:10px;text-align:center" align="center" valign="top"> </td>
                                </tr>
                              </tbody>
                            </table>

                            <table style="max-width:640px;border-spacing:0;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                <tr>
                                  <td style="font-family:Arial,Helvetica,Verdana,sans-serif;color:#0c2a55;font-size:12px;line-height:16px;padding-bottom:10px;padding-left:10px;padding-right:10px;text-align:center" align="center" valign="top">
                                    <img src="https://ci3.googleusercontent.com/meips/ADKq_NbqXRPqxtSbiIw_YksWNU-YASdRgrOtlTgun2I7FlDdInpUoRdQkUdUEuqeSGkxn8cyH1t7ByjBPesgfn7SVI0RDTeYwRAsXH2XgAtIIZ20LFzAeSc5f1A-iYxXl2RHi2lIrtWPsmyJP2wJW68Fxcc=s0-d-e1-ft#https://barcodemicroservice20210628143723.azurewebsites.net/api/barcode?code=300131R197271517" border="0">
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table style="max-width:640px;border-spacing:0;border-collapse:collapse" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
                              <tbody>
                                <tr>
                                  <td style="font-family:Arial,Helvetica,Verdana,sans-serif;color:#0c2a55;font-size:12px;line-height:16px;padding-bottom:10px;padding-left:10px;padding-right:10px;text-align:center" align="center" valign="top">© 2024 Chrome Hearts 
                                    <br>
                                    <br>Please do not reply to this email.
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

            <div style="white-space:nowrap;font:15px courier;line-height:0">                    &nbsp;                                      </div>
          </td>
        </tr>
      </tbody>
    </table>
  </center>
    `,
}

export default chromeHeartsTemplate
