/**
 * Amazon Order Confirmation Email Template
 */

function getHtml(data) {
    return `
    <div id="yiv1283512995">
      <div>
        <table id="yiv1283512995rio_container" style="width:525px;margin:0px auto;padding:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse">
          <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                <table id="yiv1283512995rio_inner_container" style="width:100%;margin:0px;padding:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse">
                  <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                    <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                      <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                        <table style="margin:0px;padding:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse">
                          <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                              <td style="width:525px;border:0!important;padding:0!important;border-collapse:collapse!important;margin:0 auto;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                <table style="padding:16px 16px 12px;margin:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse">
                                  <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                    <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                      <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                        <br>
                                        <a href="" title="Visit Amazon.com" style="color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0;border:0;outline:0;font-style:inherit;vertical-align:baseline" rel="noreferrer noopener" target="_blank">
                                          <img alt="Amazon.com" src="https://m.media-amazon.com/images/G/01/automated/2022/Amazon_logo_US.png" height="30" style="min-height:30px;width:auto;max-width:100%;display:block;border:0;background-color:rgb(255,255,255);margin:0;padding:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;line-height:100%;text-decoration:none">
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style="padding:8px;border-spacing:0px;margin:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse">
                                  <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                    <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                      <td style="width:525px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                        <table style="border-radius:4px;padding:12px 8px 16px;margin-top:0px;margin-right:0px;margin-left:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse;margin-bottom:0px!important">
                                          <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(15,17,17);font-size:22px;font-weight:700;line-height:28px;display:block;font-family:Arial,sans-serif;font-style:normal;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                    Hello ${data.name},
                                                  </span>
                                                </p>
                                              </td>
                                            </tr>
                                            <tr style="min-height:4px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="display:block;font-family:Arial,sans-serif;font-size:15px;color:rgb(15,17,17);font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                    Thank you for shopping with us. We'll send a confirmation when your items ship.
                                                  </span>
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table style="padding:12px 8px 16px;border-radius:4px 4px 0px 0px;margin-right:0px;margin-left:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse;margin-bottom:0px!important;margin-top:8px!important">
                                          <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(15,17,17);font-size:18px;font-weight:700;line-height:22px;display:block;font-family:Arial,sans-serif;font-style:normal;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">Order Confirmation</span>
                                                </p>
                                              </td>
                                            </tr>
                                            <tr style="min-height:12px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(86,89,89);font-size:15px;display:block;font-family:Arial,sans-serif;font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">Arriving:</span>
                                                </p>
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(15,17,17);font-size:15px;font-weight:700;display:block;font-family:Arial,sans-serif;font-style:normal;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">${data.arriving}</span>
                                                </p>
                                              </td>
                                            </tr>
                                            <tr style="min-height:20px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(86,89,89);font-size:15px;display:block;font-family:Arial,sans-serif;font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                    Ship to:
                                                  </span>
                                                </p>
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(15,17,17);font-size:15px;font-weight:700;display:block;font-family:Arial,sans-serif;font-style:normal;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">${data.name}</span>
                                                </p>
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(15,17,17);font-size:15px;font-weight:700;display:block;font-family:Arial,sans-serif;font-style:normal;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">${data.street}
                                                    ${data.city}, ${data.zip}</span>
                                                </p>
                                              </td>
                                            </tr>
                                            <tr style="min-height:20px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(86,89,89);font-size:15px;display:block;font-family:Arial,sans-serif;font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">Order # </span>
                                                </p>
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="color:rgb(15,17,17);font-size:15px;font-weight:700;display:block;font-family:Arial,sans-serif;font-style:normal;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                    <a href="" style="color:rgb(0,113,133)!important;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;font-style:normal;margin:0;padding:0;border:0;outline:0;vertical-align:baseline" rel="noreferrer noopener" target="_blank">
                                                      128-4999268-5911325
                                                    </a>
                                                  </span>
                                                </p>
                                              </td>
                                            </tr>
                                            <tr style="min-height:20px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <a href="" style="color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;border-radius:100px;display:inline-block;vertical-align:middle;background:rgb(255,216,20);border:1px solid rgb(252,210,0)!important;margin:0;padding:0;outline:0;font-style:inherit" rel="noreferrer noopener" target="_blank">
                                                  <span style="color:rgb(15,17,17);font-size:13px;font-weight:400;display:table-cell;padding:8px 16px;line-height:18px;vertical-align:middle;text-align:center;font-family:Arial,sans-serif;margin:0;border:0;outline:0;font-style:inherit">
                                                    View or manage order
                                                  </span>
                                                </a>
                                              </td>
                                            </tr>
                                            <tr style="min-height:20px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline"></td>
                                            </tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <table style="margin:0px;padding:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse">
                                                  <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                                    <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                                      <td style="border-radius:4px;display:table-cell;width:131px;min-height:131px;vertical-align:middle;text-align:center;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit">
                                                        <a href="" title="" style="background-color:transparent;color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0;border:0;outline:0;font-style:inherit;vertical-align:baseline" rel="noreferrer noopener" target="_blank">
                                                          <img src="${data.imageurl}" alt="Product" style="max-height:115px;max-width:115px;margin:auto;display:block;padding:8px;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;height:auto;line-height:100%;text-decoration:none">
                                                        </a>
                                                      </td>
                                                      <td style="width:8px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline"></td>
                                                      <td style="vertical-align:middle;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit">
                                                        <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                          <span style="display:block;font-family:Arial,sans-serif;font-size:15px;color:rgb(15,17,17);font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                            <a href="" style="color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0;border:0;outline:0;font-style:inherit;vertical-align:baseline" rel="noreferrer noopener" target="_blank">
                                                              <span style="display:inline;font-family:Arial,sans-serif;font-size:15px;color:rgb(15,17,17);font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                                ${data.pname}
                                                              </span>
                                                            </a>
                                                          </span>
                                                        </p>
                                                        <p style="margin-top:4px!important;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                          <span style="color:rgb(86,89,89);font-size:13px;display:block;font-family:Arial,sans-serif;font-style:normal;font-weight:400;line-height:20px;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                            Qty : 1
                                                          </span>
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr style="min-height:12px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline"></td>
                                            </tr>
                                            <tr style="min-height:12px;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block"></tr>
                                          </tbody>
                                        </table>
                                        <table style="color:rgb(73,77,77);padding:12px 8px;margin-top:0px;margin-right:0px;margin-left:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse;border-radius:0px 0px 4px 4px!important;margin-bottom:0px!important">
                                          <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                            <tr style="display:table-row;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                              <td style="width:100%;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="line-height:20px;color:rgb(86,89,89);font-size:15px;display:block;font-family:Arial,sans-serif;font-style:normal;font-weight:400;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                    Order Total:
                                                  </span>
                                                </p>
                                              </td>
                                              <td style="width:100%;white-space:nowrap!important;text-align:right;margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <span style="line-height:20px;color:rgb(15,17,17);font-size:15px;font-weight:700;display:block;font-family:Arial,sans-serif;font-style:normal;margin:0;padding:0;border:0;outline:0;vertical-align:baseline">
                                                    ${data.currency}${data.total}
                                                  </span>
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <table style="border-radius:4px;padding:12px 8px 16px;margin-right:0px;margin-left:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse;margin-bottom:0px!important;margin-top:8px!important">
                                          <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                            <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                              <td id="yiv1283512995marketingContent" style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                <div style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                  <table style="width:100%;margin:0px;padding:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block;border-collapse:collapse" id="yiv1283512995CardInstanceylPkbBz_L90fc1tX56MohA">
                                                    <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                                      <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                                        <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                                          <table width="100%" style="margin:0px;padding:0px;border:0px;outline:0px;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;display:block;border-collapse:collapse">
                                                            <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                                              <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                                                <td style="text-align:left;font-family:Arial,sans-serif;font-size:18px;font-weight:700;color:rgb(15,17,17);line-height:22px;padding:12px 8px;margin:0;border:0;outline:0;font-style:inherit;vertical-align:baseline">Frequently bought together with items in your order</td>
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
                                  </tbody>
                                </table>
                                <table style="color:rgb(86,89,89);font-family:Arial,sans-serif;font-size:13px;font-style:normal;font-weight:400;line-height:18px;display:block;padding:32px 16px;margin:0px;border:0px;outline:0px;vertical-align:baseline;border-collapse:collapse">
                                  <tbody style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                    <tr style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline;display:block">
                                      <td style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">
                                        <p style="margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:inherit;vertical-align:baseline">The payment for your invoice is processed by Amazon Payments, Inc. P.O. Box 81226 Seattle, Washington 98108-1226. If you need more information, please contact (866) 216-1075</p>
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
    `
  }
  
  const amazonTemplate = {
    name: "Amazon",
    logo: "amazon.png",
    enabled: true,
    subject: "Your Amazon.com order has been received",
    fields: [
      { name: "email", label: "Email Address", type: "email", required: true, placeholder: "your.email@example.com" },
      { name: "name", label: "Customer Name", type: "text", required: true, placeholder: "John Doe" },
      { name: "street", label: "Street Address", type: "text", required: true, placeholder: "123 Main St" },
      { name: "city", label: "City", type: "text", required: true, placeholder: "New York" },
      { name: "zip", label: "ZIP Code", type: "text", required: true, placeholder: "10001" },
      { name: "pname", label: "Product Name", type: "text", required: true, placeholder: "Product Name" },
      { name: "imageurl", label: "Product Image URL", type: "url", required: true, placeholder: "https://example.com/image.jpg" },
      { name: "arriving", label: "Arrival Date", type: "date", required: true, placeholder: "YYYY-MM-DD" },
      { name: "currency", label: "Currency Symbol", type: "text", required: true, defaultValue: "$", placeholder: "$" },
      { name: "total", label: "Order Total", type: "number", required: true, placeholder: "99.99", step: "0.01" },
      { name: "orderDate", label: "Order Date", type: "date", required: true, placeholder: "YYYY-MM-DD" }
    ],
    getHtml: (data) => getHtml(data)
  }
  
  export default amazonTemplate
  