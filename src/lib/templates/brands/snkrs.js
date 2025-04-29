/**
 * SNKRS (Nike) Template Configuration
 *
 * This template generates a "Got 'Em" confirmation email from Nike SNKRS
 * for successful sneaker purchases.
 */

const snkrsTemplate = {
    id: "snkrs",
    name: "SNKRS",
    displayName: "SNKRS",
    logo: "snkrs.png",
    enabled: true,
    subject: "Got 'Em: {pname}",
  
    // Form fields configuration
    fields: [
      {
        name: "name",
        label: "Customer Name",
        type: "text",
        placeholder: "Enter customer name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter email address",
        required: true,
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        placeholder: "Enter product name (e.g. Air Jordan 1 High OG)",
        required: true,
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        placeholder: "Enter product image URL",
        required: true,
      },
    ],
  
    // HTML template generator
    getHtml: (data) => {
      return `
      <div style="min-width:100%;box-sizing:border-box;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;background-color:#fff;width:100%">
        <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;background-color:#fff;height:100%;width:100%;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3" width="100%" height="100%" valign="top" align="left" bgcolor="#FFF">
          <tbody>
            <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
              <td align="center" valign="top" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;line-height:1.3;margin:0 auto;float:none;text-align:center;border-collapse:collapse">
                <div style="text-align:center">
                  <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;width:100%;margin:0 auto;text-align:inherit;margin-left:auto;margin-right:auto" width="100%" valign="top" align="inherit">
                    <tbody>
                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;margin:24px auto auto auto;width:375px;max-width:375px" width="375" valign="top" align="center">
                            <tbody>
                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                  <div style="margin:0 3px!important">
                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center" width="100%" valign="top" align="center">
                                      <tbody>
                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                            <div style="text-align:center">
                                              <img src="https://static.nike.com/a/images/h_144/b_rgb:FFFFFF,dpr_3.0,h_96,f_auto,q_auto:eco,w_375,c_mpad,f_auto,q_auto:eco/c1cb4459-8184-476a-8481-8a1a92a94d71/snkrs.jpg" alt="SNKRS Logo" width="375" style="outline:none;text-decoration:none;max-width:100%;clear:both;display:block;border:none;margin:0 auto;float:none;text-align:center;width:375px" align="center">
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
                        </td>
                      </tr>
                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;margin:0 auto;width:375px;max-width:375px" width="375" valign="top" align="center">
                            <tbody>
                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                  <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%;margin:0 20px;overflow:hidden;max-width:calc(100% - 40px)" width="100%" valign="top" align="left">
                                    <tbody>
                                      <tr style="padding:0;vertical-align:top;text-align:left;overflow:hidden" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                          <img style="outline:none;text-decoration:none;max-width:100%;clear:both;display:block;width:375px" src="${data.imageurl}" alt="product" width="375">
                                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                            <tbody>
                                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                <td height="12px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr style="padding:0;vertical-align:top;text-align:left;overflow:hidden" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                          <div style="font-size:16px;line-height:24px;font-family:Helvetica Neue,Arial,sans-serif;text-decoration:none;font-weight:500;color:#111111">${data.pname}</div>
                                        </td>
                                      </tr>
                                      <tr style="padding:0;vertical-align:top;text-align:left;overflow:hidden" valign="top" align="left">
                                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                            <tbody>
                                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                <td height="48px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
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
                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;margin:16px auto auto auto;width:375px;max-width:375px" width="375" valign="top" align="center">
                            <tbody>
                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                  <div style="margin:0 3px!important">
                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:375px;max-width:375px;min-width:375px" width="375" valign="top" align="left">
                                      <tbody>
                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;line-height:1.3;padding-left:20px;padding-right:20px;text-align:left;border-collapse:collapse" valign="top" align="left">
                                            <p style="margin:0;Margin:0;Margin-bottom:10px;margin-bottom:0;padding:0;line-height:1.0;color:#111111;word-break:break-word;font-weight:500;text-align:left;font-size:42px;font-family:Nike Futura,Helvetica Neue,Arial,sans-serif">GOT 'EM</p>
                                            <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                              <tbody>
                                                <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                  <td height="40px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
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
                        </td>
                      </tr>
                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;margin:0 auto;width:375px;max-width:375px" width="375" valign="top" align="center">
                            <tbody>
                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                  <div style="margin:0 3px!important">
                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:375px;max-width:375px;min-width:375px" width="375" valign="top" align="left">
                                      <tbody>
                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;line-height:1.3;padding-left:20px;padding-right:20px;text-align:left;border-collapse:collapse" valign="top" align="left">
                                            <p style="Margin:0;Margin-bottom:10px;margin-bottom:0;margin:0;padding:0;color:#111111;line-height:1.45;word-break:break-word;font-weight:500;text-align:left;font-size:18px;font-family:Nike Futura,Helvetica Neue,Arial,sans-serif"></p>
                                            <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                              <tbody>
                                                <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                  <td height="12px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <p style="margin:0;Margin:0;Margin-bottom:10px;margin-bottom:0;padding:0;line-height:1.0;color:#111111;word-break:break-word;font-family:Helvetica Neue,Arial,sans-serif;font-weight:500;text-align:left;font-size:24px">Congrats, ${data.name}! You got the ${data.pname}.</p>
                                            <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                              <tbody>
                                                <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                  <td height="24px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <div style="line-height:1.75;word-break:break-word;font-family:Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:14px">
                                              <p>Your order confirmation will arrive shortly and we'll work on delivering your package to you. Keep winning by checking out more can't-miss stories and drops in SNKRS.</p>
                                            </div>
                                            <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                              <tbody>
                                                <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                  <td height="8px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <div style="text-align:left">
                                              <a href="https://www.nike.com/snkrs" style="margin:0;text-align:left;border-collapse:separate;margin-top:16px;margin-bottom:0px;display:inline-block;font-family:Helvetica Neue,Arial,sans-serif;font-size:14px;font-weight:500;line-height:1.5;text-decoration:none;text-transform:none;padding:10px 25px;border-radius:500px;word-break:break-word;color:#fff;background:#111111;border:1px solid #111111;margin-left:0;margin-right:0" target="_blank">See what's next</a>
                                              <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                                <tbody>
                                                  <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                    <td height="40px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left"></td>
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
                        </td>
                      </tr>
                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;margin:0 auto;width:375px;max-width:375px" width="375" valign="top" align="center">
                            <tbody>
                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                  <div style="margin:0 3px!important">
                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;width:100%" width="100%" valign="top" align="center">
                                      <tbody>
                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                          <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-top:1px solid #dddddd;height:1;width:375px;border-collapse:collapse" width="375" valign="top" align="left"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                        <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;margin:0 auto;width:375px;max-width:375px" width="375" valign="top" align="center">
                            <tbody>
                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                  <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;table-layout:fixed;width:375px;max-width:375px" width="375" valign="top" align="center">
                                    <tbody>
                                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                        <th style="color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;padding-bottom:0" align="left">
                                          <table align="left" style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top">
                                            <tbody>
                                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-collapse:collapse" valign="top" align="left">
                                                  <table style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%" width="100%" valign="top" align="left">
                                                    <tbody>
                                                      <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                        <th style="color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;text-align:left;line-height:1.3;margin:0 auto;width:564px;padding-left:0;padding-right:0;padding-bottom:0" width="564" align="left">
                                                          <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                                            <tbody>
                                                              <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                                <th style="color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;padding-bottom:0" align="left">
                                                                  <div style="margin:0 20px">
                                                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                                                      <tbody>
                                                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                                          <td height="40px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;font-size:40px;line-height:40px;border-collapse:collapse" valign="top" align="left">&nbsp;</td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <a href="https://www.nike.com" style="padding:0;margin:0;text-align:left;line-height:1.3;display:inline;font-family:Helvetica  style="padding:0;margin:0;text-align:left;line-height:1.3;display:inline;font-family:Helvetica Neue,Arial,sans-serif;font-size:24px;font-weight:500;text-decoration:none;color:#111111" target="_blank">Nike.com</a>
                                                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                                                      <tbody>
                                                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                                          <td height="40px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;font-size:40px;line-height:40px;border-collapse:collapse" valign="top" align="left">&nbsp;</td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:center;width:100%" width="100%" valign="top" align="center">
                                                                      <tbody>
                                                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                                          <td style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;line-height:1.3;border-top:1px solid #dddddd;height:1;width:375px;border-collapse:collapse" width="375" valign="top" align="left"></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                                                      <tbody>
                                                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                                          <td height="40px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;font-size:40px;line-height:40px;border-collapse:collapse" valign="top" align="left">&nbsp;</td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <div style="display:block;color:#ababab;font-family:Helvetica Neue,Arial,sans-serif;font-size:12px;font-weight:normal;text-decoration:none;text-transform:none">© 2024 Nike, Inc. All Rights Reserved.</div>
                                                                    <table style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;text-align:left;width:100%" width="100%" valign="top" align="left">
                                                                      <tbody>
                                                                        <tr style="padding:0;vertical-align:top;text-align:left" valign="top" align="left">
                                                                          <td height="16px" style="word-break:break-word;vertical-align:top;color:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:400;padding:0;margin:0;text-align:left;font-size:16px;line-height:16px;border-collapse:collapse" valign="top" align="left">&nbsp;</td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table>
                                                                    <div style="display:block;color:#ababab;font-family:Helvetica Neue,Arial,sans-serif;font-size:12px;font-weight:normal;text-decoration:none;text-transform:none">NIKE Retail B.V., Colosseum 1, 1213 NL, Hilversum, The Netherlands</div>
                                                                  </div>
                                                                </th>
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      `
    },
  }
  
  export default snkrsTemplate
  