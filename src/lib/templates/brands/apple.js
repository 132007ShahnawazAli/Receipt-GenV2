/**
 * Apple Receipt Template Configuration
 *
 * This file defines the Apple receipt template including:
 * - Form fields and their properties
 * - Email subject format
 * - HTML generation function
 */

const appleTemplate = {
  name: "Apple",
  logo: "apple.png",
  enabled: true,
  subject: "We're processing your order {orderNumber}",
  fields: [
    { name: "email", label: "Email", type: "email", required: true, placeholder: "your.email@example.com" },
    { name: "confirmEmail", label: "Confirm Email", type: "email", required: true, placeholder: "your.email@example.com" },
    { name: "language", label: "Language", type: "text", required: true, defaultValue: "English", placeholder: "English" },
    { name: "orderNumber", label: "Order Number", type: "text", required: true, placeholder: "ML4F5L8522" },
    { name: "orderDate", label: "Order Date", type: "date", required: true },
    { name: "imageLink", label: "Product Image Link", type: "text", required: true, placeholder: "https://example.com/image.jpg" },
    { name: "productName", label: "Item", type: "text", required: true, placeholder: "MacBook Pro" },
    { name: "customerName", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "streetAddress", label: "Street", type: "text", required: true, placeholder: "123 Main St" },
    { name: "city", label: "City", type: "text", required: true, placeholder: "New York" },
    { name: "zipCode", label: "ZIP", type: "text", required: true, placeholder: "10001" },
    { name: "country", label: "Country", type: "text", required: true, placeholder: "United States" },
    { name: "subtotal", label: "Subtotal", type: "number", required: true, placeholder: "999.99" },
    { name: "shipping", label: "Shipping", type: "text", required: true, defaultValue: "Free", placeholder: "Free" },
    { name: "total", label: "Total", type: "number", required: true, placeholder: "999.99" },
    {name: "currencySymbol",label: "Currency Symbol",type: "text", required: true, placeholder: "$, €, £", defaultValue: "$",},
  ],
  getHtml: (data) => generateAppleReceiptHtml(data),
}

/**
 * Generate Apple receipt HTML
 * @param {Object} data - The form data
 * @returns {string} The HTML content for the receipt email
 */
function generateAppleReceiptHtml(data) {
  const logoUrl = `https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/${data.brandLogo}`
  const orderDate = new Date(data.orderDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return `<html><body><meta charset="UTF-8"><center>
    <table style="padding-bottom:0px; margin-bottom:0px; margin:0px;" cellspacing="0" cellpadding="0" border="0" width="100%" align="center">
       <tbody>
          <tr>
             <td align="center">
                <table cellspacing="0" cellpadding="0" border="0" width="660" align="center" class="main-table">
                   <tbody>
                      <tr>
                         <td style="padding-top:32px;" align="left" valign="top" class="apple-logo-td">
                            <img data-unique-identifier="" alt="Apple" width="auto" height="25" border="0" style="outline:none; display:block;" class="header-logo-img" src="https://email.images.apple.com/rover/aos/moe/apple_icon_2x.png">
                         </td>
                      </tr>
                      <tr>
                         <td style="padding-top:75px; padding-bottom:51px;" align="left" valign="top" class="greeting-td">
                            <h1 style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:normal; color:#333333; line-height:47px; font-size:34px; margin-top:0px; margin-left:0px; margin-right:0px; margin-bottom:2px; border-bottom:0px;" class="heading-email">
                               Thank you for your order.
                            </h1>
                            <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:24px; color:#333333; padding-top:13px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" class="sub-heading">
                               One or more of your items will be delivered by a courier service.<br>Someone must be present to receive these items.
                            </p>
                         </td>
                      </tr>
                      <tr>
                         <td style="padding-bottom:14px;" class="order-num-td">
                            <div style="color:#333333; font-weight:normal; font-size:14px; line-height:21px; margin-top:0px; margin-bottom:0px;" class="order-num">
                               <span style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px;">Order Number:</span> <span style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#0070C9;">	<a aria-label="Order Number" style="color:#0070c9; font-weight:normal;" href="https://store.apple.com/xc/uk/vieworder/ASS" rel="noreferrer nofollow noopener" target="_blank">W${data.orderNumber}</a>
                               </span>
                            </div>
                            <div style="color:#333333; font-weight:normal; font-size:14px; line-height:21px; margin-top:0px; margin-bottom:0px;" class="order-num">
                               <span style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px;">Ordered on:</span> <span style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:normal;">${data.orderDate}</span>
                            </div>
                         </td>
                      </tr>
                      <tr>
                         <td align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                            <div style="background-color:#D6D6D6 !important; font-size:1px !important; height:1px !important;"></div>
                         </td>
                      </tr>
                      <tr>
                         <td align="center" valign="top">
                            <table style="padding-top:43px;" border="0" cellpadding="0" cellspacing="0" width="100%" class="render-lineitems-table">
                               <tbody>
                                  <tr>
                                     <td>
                                        <table style="width:29%;" border="0" cellpadding="0" cellspacing="0" align="left" class="section-heading-table" width="29%">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:500; letter-spacing:0px; color:#333333; font-size:22px; line-height:27px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" align="left" valign="top" class="section-items-heading-td">
                                                    <h2 style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:500; letter-spacing:0px; color:#333333; font-size:22px; line-height:27px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" class="sectionHeading">Items to be Dispatched</h2>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table style="width:66.5%;" border="0" cellpadding="0" cellspacing="0" align="right" width="66.5%" class="product-list-table">
                                           <tbody>
                                              <tr>
                                                 <td align="left" valign="top" class="pad-lr">
                                                    <div style="padding-bottom:3px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px;">Shipment 1</div>
                                                    <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;">	<span style="font-weight:600">Delivery:</span>
                                                       Today from Store , 2 p.m. - 4 p.m. by Scheduled Courier Delivery
                                                    </div>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td align="left" valign="top">
                                                    <table border="0" cellpadding="0" cellspacing="0" align="left" width="100%">
                                                       <tbody>
                                                          <tr>
                                                             <td align="left" valign="top" class="pad-lr">
                                                                <table style="width:100%; min-width:100%;" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                                                                   <tbody>
                                                                      <tr>
                                                                         <td style="height:21px; font-size:21px; line-height:21px; min-width:100%;" align="left" height="21" valign="top" class="gap-30"><img data-unique-identifier="" width="1" height="21" border="0" style="display:block; outline:none;" alt="" class="gap-30" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                                                      </tr>
                                                                      <tr>
                                                                         <td style="min-width:100%;" align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                                                                            <div style="background-color:D6D6D6; font-size:1px !important; height:1px !important;"></div>
                                                                         </td>
                                                                      </tr>
                                                                      <tr>
                                                                         <td style="height:28px; font-size:28px; line-height:28px; min-width:100%;" align="left" height="28" valign="top" class="gap-24"><img data-unique-identifier="" width="1" height="28" border="0" style="display:block; outline:none;" alt="" class="gap-24" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                                                      </tr>
                                                                   </tbody>
                                                                </table>
                                                             </td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <table cellpadding="0" cellspacing="0" border="0" align="left" width="100%" class="line-item-table">
                                                       <tbody>
                                                          <tr>
                                                             <td style="padding-right:10px;" valign="top" width="96" align="center" class="product-image-td"><img data-unique-identifier="" style="outline:none; display:block;" width="100px" alt="image" class="product-image-img" src="${data.imageLink}"></td>
                                                             <td align="left" valign="top">
                                                                <table cellpadding="0" cellspacing="0" border="0" align="left" width="100%" class="item-details-table">
                                                                   <tbody>
                                                                      <tr>
                                                                         <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin:0;" valign="top" align="left" class="product-name-td">${data.productName}</td>
                                                                      </tr>
                                                                      <tr>
                                                                         <td style="padding-top:6px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" align="left" class="base-price-td">${data.currencySymbol}${data.total}0</td>
                                                                      </tr>
                                                                      <tr>
                                                                         <td style="padding-top:6px;" class="qty-price-divider" width="100%">
                                                                            <table style="height:1px; font-size:1px; line-height:1px; width:100%;" height="1" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                                                                               <tbody>
                                                                                  <tr>
                                                                                     <td align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                                                                                        <div style="background-color:#D6D6D6 !important; font-size:1px !important; height:1px !important;"></div>
                                                                                     </td>
                                                                                  </tr>
                                                                               </tbody>
                                                                            </table>
                                                                         </td>
                                                                      </tr>
                                                                      <tr>
                                                                         <td style="padding-top:6px;" class="qty-price-td">
                                                                            <table cellspacing="0" border="0" cellpadding="0" align="left" width="45%" class="product-quantity-table">
                                                                               <tbody>
                                                                                  <tr>
                                                                                     <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" align="left" class="product-quantity">
                                                                                        <nobr>Qty 1</nobr>
                                                                                     </td>
                                                                                  </tr>
                                                                               </tbody>
                                                                            </table>
                                                                            <table cellspacing="0" border="0" cellpadding="0" align="right" width="50%" class="total-price-table">
                                                                               <tbody>
                                                                                  <tr>
                                                                                     <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin:0;" align="right" class="total-price">${data.currencySymbol}${data.total}0</td>
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
                            <table cellspacing="0" border="0" cellpadding="0" width="100%" align="center">
                               <tbody>
                                  <tr>
                                     <td>
                                        <table style="width:66.5%;" border="0" cellpadding="0" cellspacing="0" align="right" width="66.5%" class="section-details-table">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" valign="top" align="left" class="section-details-td">
                                                    <table style="width:100%; min-width:100%;" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                                                       <tbody>
                                                          <tr>
                                                             <td style="height:30px; font-size:30px; line-height:30px; min-width:100%;" align="left" height="30" valign="top" class="gap-21"><img data-unique-identifier="" width="1" height="30" border="0" style="display:block; outline:none;" alt="" class="gap-21" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                                          </tr>
                                                          <tr>
                                                             <td style="min-width:100%;" align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                                                                <div style="background-color:D6D6D6; font-size:1px !important; height:1px !important;"></div>
                                                             </td>
                                                          </tr>
                                                          <tr>
                                                             <td style="height:30px; font-size:30px; line-height:30px; min-width:100%;" align="left" height="30" valign="top" class="gap-32"><img data-unique-identifier="" width="1" height="30" border="0" style="display:block; outline:none;" alt="" class="gap-32" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <h3 style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px;" class="subsec-heading">
                                                       Shipping Address:
                                                    </h3>
                                                    <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">${data.customerName}</div>
                                                    <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">
                                                    </div>
                                                    <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">${data.streetAddress}</div>
                                                    <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">${data.zipCode}</div>
                                                    <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">${data.country}</div>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                               </tbody>
                            </table>
                            <table style="width:100%; min-width:100%;" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                               <tbody>
                                  <tr>
                                     <td style="height:41px; font-size:41px; line-height:41px; min-width:100%;" align="left" height="41" valign="top" class="gap-40"><img data-unique-identifier="" width="1" height="41" border="0" style="display:block; outline:none;" alt="" class="gap-40" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                  </tr>
                                  <tr>
                                     <td style="min-width:100%;" align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                                        <div style="background-color:D6D6D6; font-size:1px !important; height:1px !important;"></div>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="height:1px; font-size:1px; line-height:1px; min-width:100%;" align="left" height="1" valign="top" class="gap-1"><img data-unique-identifier="" width="1" height="1" border="0" style="display:block; outline:none;" alt="" class="gap-1" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                  </tr>
                               </tbody>
                            </table>
                         </td>
                      </tr>
                      <tr>
                         <td style="padding-top:43px; padding-bottom:32px;" class="payment-section-td">
                            <table style="width:29%;" border="0" cellpadding="0" cellspacing="0" align="left" class="section-heading-table" width="29%">
                               <tbody>
                                  <tr>
                                     <td style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:500; letter-spacing:0px; color:#333333; font-size:22px; line-height:27px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" align="left" valign="top" class="section-items-heading-td">
                                        <h2 style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:500; letter-spacing:0px; color:#333333; font-size:22px; line-height:27px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" class="sectionHeading">Billing and Payment</h2>
                                     </td>
                                  </tr>
                               </tbody>
                            </table>
                            <table style="width:66.5%;" border="0" cellpadding="0" cellspacing="0" align="right" width="66.5%" class="section-details-table">
                               <tbody>
                                  <tr>
                                     <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" valign="top" align="left" class="section-details-td">
                                        <h3 style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px;" class="subsec-heading">Bill To:</h3>
                                        <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">
                                           <div style="width:100%;">${data.customerName}</div>
                                           <div style="width:100%;">						 			</div>
                                           <div style="width:100%; word-wrap:break-word;">
                                              <span class="moe-break-me"> </span>
                                           </div>
                                        </div>
                                        <h3 style="padding-top:23px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px;" class="subsec-heading">Billing Address:</h3>
                                        <div style="width:100%; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" class="gen-txt">
                                           <div style="width:100%">${data.streetAddress}</div>
                                           <div style="width:100%">${data.city} ${data.zipCode}</div>
                                           <div style="width:100%">${data.country}</div>
                                        </div>
                                     </td>
                                  </tr>
                               </tbody>
                            </table>
                         </td>
                      </tr>
                      <tr>
                         <td style="padding-bottom:42px;" align="center" class="amts-section-td">
                            <table style="width:66.5%;" border="0" cellpadding="0" cellspacing="0" align="right" width="66.5%" class="amt-row-table">
                               <tbody>
                                  <tr>
                                     <td align="center">
                                        <table style="width:100%; min-width:100%;" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                                           <tbody>
                                              <tr>
                                                 <td style="height:1px; font-size:1px; line-height:1px; min-width:100%;" align="left" height="1" valign="top" class="gap-1"><img data-unique-identifier="" width="1" height="1" border="0" style="display:block; outline:none;" alt="" class="gap-1" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                              </tr>
                                              <tr>
                                                 <td style="min-width:100%;" align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                                                    <div style="background-color:D6D6D6; font-size:1px !important; height:1px !important;"></div>
                                                 </td>
                                              </tr>
                                              <tr>
                                                 <td style="height:18px; font-size:18px; line-height:18px; min-width:100%;" align="left" height="18" valign="top" class="gap-15"><img data-unique-identifier="" width="1" height="18" border="0" style="display:block; outline:none;" alt="" class="gap-15" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="width:100%; padding-top:4px;" class="amt-row-td">
                                        <table border="0" cellpadding="0" cellspacing="0" align="left" width="49%" class="amt-label-table">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#333333; font-size:17px; line-height:24px;" valign="top" align="left" class="amt-label-td">
                                                    Bag Subtotal
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" align="right" width="49%" class="amt-value-table">
                                           <tbody>
                                              <tr>
                                                 <td nowrap="" style="white-space:nowrap; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#333333; font-size:17px; line-height:24px;" valign="top" align="right" class="amt-value-td">
                                                    <nobr>${data.currencySymbol}${data.subtotal}0</nobr>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="width:100%; padding-top:4px;" class="amt-row-td">
                                        <table border="0" cellpadding="0" cellspacing="0" align="left" width="49%" class="amt-label-table">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#339900; font-size:17px; line-height:24px;" valign="top" align="left" class="amt-label-td">
                                                    Delivery
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" align="right" width="49%" class="amt-value-table">
                                           <tbody>
                                              <tr>
                                                 <td nowrap="" style="white-space:nowrap; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#339900; font-size:17px; line-height:24px;" valign="top" align="right" class="amt-value-td">
                                                    <nobr>${data.currencySymbol}${data.shipping}</nobr>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="width:100%;" class="amt-row-td">
                                        <table style="margin-top:11px;" border="0" cellpadding="0" cellspacing="0" align="right" width="100%" class="amt-divider-table">
                                           <tbody>
                                              <tr>
                                                 <td style="background-color:#D6D6D6;" height="1" bgcolor="D6D6D6" valign="top" align="left" class="amt-divider"></td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="width:100%; padding-top:4px;" class="amt-row-td">
                                        <table border="0" cellpadding="0" cellspacing="0" align="left" width="49%" class="amt-label-table">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#333333; font-size:17px; line-height:24px; font-weight:600;" valign="top" align="left" class="amt-label-td">
                                                    Order Total
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" align="right" width="49%" class="amt-value-table">
                                           <tbody>
                                              <tr>
                                                 <td nowrap="" style="white-space:nowrap; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#333333; font-size:17px; line-height:24px; font-weight:600;" valign="top" align="right" class="amt-value-td">
                                                    <nobr>${data.currencySymbol}${data.total}</nobr>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="padding-top:16px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#666666; font-size:14px; line-height:21px;" valign="top" align="left" class="note-td"> 		Your invoice will be sent via email 2&macr;3 business days after receipt of your order.</td>
                                  </tr>
                               </tbody>
                            </table>
                         </td>
                      </tr>
                      <tr>
                         <td>
                            <table style="width:100%; min-width:100%;" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
                               <tbody>
                                  <tr>
                                     <td style="height:1px; font-size:1px; line-height:1px; min-width:100%;" align="left" height="1" valign="top" class="gap-20"><img data-unique-identifier="" width="1" height="1" border="0" style="display:block; outline:none;" alt="" class="gap-20" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                  </tr>
                                  <tr>
                                     <td style="min-width:100%;" align="left" height="1" bgcolor="D6D6D6" valign="top" class="moe-line-col">
                                        <div style="background-color:D6D6D6; font-size:1px !important; height:1px !important;"></div>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="height:43px; font-size:43px; line-height:43px; min-width:100%;" align="left" height="43" valign="top" class="gap-39"><img data-unique-identifier="" width="1" height="43" border="0" style="display:block; outline:none;" alt="" class="gap-39" src="https://email.images.apple.com/dm/groups/aos/om/global/cmon/spacer.gif"></td>
                                  </tr>
                               </tbody>
                            </table>
                            <table style="padding-bottom:18px;" border="0" cellpadding="0" cellspacing="0" width="100%" class="qa-table">
                               <tbody>
                                  <tr>
                                     <td>
                                        <table style="width:29%;" border="0" cellpadding="0" cellspacing="0" align="left" class="section-heading-table" width="29%">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:500; letter-spacing:0px; color:#333333; font-size:22px; line-height:27px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" align="left" valign="top" class="section-items-heading-td">
                                                    <h2 style="font-family:'SF UI Display Medium',system,-apple-system,-webkit-system-font,'SFNSText','Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif;; font-weight:500; letter-spacing:0px; color:#333333; font-size:22px; line-height:27px; margin-top:0; margin-left:0; margin-right:0; margin-bottom:0;" class="sectionHeading">Questions</h2>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table style="width:66.5%;" border="0" cellpadding="0" cellspacing="0" align="right" width="66.5%" class="answers-table">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;" align="left" valign="top" class="answers-td">
                                                    <h3 style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px; margin-left:0; margin-right:0;" class="answer-h3">When will I get my items?</h3>
                                                    <div style="padding-bottom:23px;" class="answer-para">
                                                       There is a ‘Delivers’ estimate above each item. This tells you when your items are expected to arrive. Once your items have dispatched, you will receive a Dispatch Notification email with a delivery reference number. You can also visit online <a class="aapl-link" style="color:#0070C9" href="https://store.apple.com/xc/uk/vieworder/W5590929503/zemlask@gmail.com/" rel="noreferrer nofollow noopener" target="_blank">Order Status</a> to view the most up-to-date status of your order.
                                                       <div style="padding-top:12px;">If you ordered multiple items and have chosen to receive separate shipments, you’ll receive a separate email as each item ships.</div>
                                                    </div>
                                                    <h3 style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px; margin-left:0; margin-right:0;" class="answer-h3">How do I view or change my order?</h3>
                                                    <div style="padding-bottom:23px;" class="answer-para">
                                                       Go to  <a style="color:#0070C9" href="https://store.apple.com/xc/uk/vieworder/W5590929503/zemlask@gmail.com/" rel="noreferrer nofollow noopener" target="_blank">Order Status</a>, then sign in to add your order to your Apple ID. You can make changes to, return, or cancel eligible items there. To learn more about shipping, changing, or returning orders, please visit the <a class="aapl-link" style="color:#0085cf" href="https://store.apple.com/uk/help/" rel="noreferrer nofollow noopener" target="_blank"> Help</a> page.
                                                       <div style="padding-top:12px;">
                                                          You can also call Apple Store Customer Service on
                                                          <nobr>0800 048 0408</nobr>
                                                          (freephone), Monday&macr;Friday 08:00&macr;20:00, Saturday&macr;Sunday 09:00&macr;18:00. Please have your Order Number available.
                                                       </div>
                                                    </div>
                                                    <h3 style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-weight:600; letter-spacing:0px; font-size:17px; line-height:26px; color:#333333; margin-top:0px; margin-bottom:0px; margin-left:0; margin-right:0;" class="answer-h3-faq">
                                                       Recycling Options.
                                                    </h3>
                                                    <div style="padding-bottom:23px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:17px; line-height:26px; color:#333333;">You can drop off old devices at an Apple Store or local collection point for recycling. <a class="aapl-link" style="color:#0070C9" aria-label="Learn more about other ways to recycle" target="_blank" href="https://www.apple.com/uk/trade-in/" rel="noreferrer nofollow noopener">Learn More ›</a></div>
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
                <table style="margin:0; padding-top:19px; padding-bottom:13px; background-color:#F2F2F2; margin-bottom:0px;" border="0" cellpadding="0" bgcolor="F2F2F2" cellspacing="0" align="center" width="100%" class="footer-container-table">
                   <tbody>
                      <tr>
                         <td align="center">
                            <table border="0" cellpadding="0" cellspacing="0" width="660" bgcolor="F2F2F2" align="center" class="footer-section-table">
                               <tbody>
                                  <tr>
                                     <td style="padding-left:16px; padding-right:16px;" class="footer-copyright-td">
                                        <table style="padding-bottom:14px; border-bottom-color:#D6D6D6; border-bottom-width:1px; border-bottom-style:solid;" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="footer-menu-table">
                                           <tbody>
                                              <tr>
                                                 <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:12px; line-height:18px;" align="center" valign="top" class="footer-menu-td-top">
                                                    <table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="auto" class="footer-menu-item-table">
                                                       <tbody>
                                                          <tr>
                                                             <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:12px; line-height:18px;" class="footer-menu-item-td">
                                                                <a color="#888888" style="color:#888888" href="https://store.apple.com/uk" rel="noreferrer nofollow noopener" target="_blank">Shop Online</a><span style="color:#D6D6D6;" color="#D6D6D6" aria-hidden="true" class="hide-line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                                             </td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="auto" class="footer-menu-item-table">
                                                       <tbody>
                                                          <tr>
                                                             <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:12px; line-height:18px;" class="footer-menu-item-td">
                                                                <a color="#888888" style="color:#888888" href="https://www.apple.com/uk/retail/" rel="noreferrer nofollow noopener" target="_blank">Find a Store</a><span style="color:#D6D6D6;" color="#D6D6D6" aria-hidden="true" class="hide-line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                                             </td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="auto" class="footer-menu-item-table">
                                                       <tbody>
                                                          <tr>
                                                             <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:12px; line-height:18px;" class="footer-menu-item-td">
                                                                <span style="white-space:nowrap; color:#888888;" class="footer-menu-phone">0800 048 0408</span>
                                                                <span style="color:#D6D6D6;" color="#D6D6D6" aria-hidden="true" class="hide-line">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                                             </td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <table style="display: inline-table;" border="0" cellpadding="0" cellspacing="0" width="auto" class="footer-menu-item-table">
                                                       <tbody>
                                                          <tr>
                                                             <td style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:12px; line-height:18px;" class="footer-menu-item-td">
                                                                <a color="#888888" style="color:#888888" href="https://store.apple.com/us/go/app" rel="noreferrer nofollow noopener" target="_blank">Get the Apple Store App</a>
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
                                  <tr>
                                     <td style="padding-left:16px; padding-right:16px;" class="footer-copyright-td">
                                        <div style="width:100%; padding-top:20px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;">
                                           Apple Distribution International Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Republic of Ireland.
                                        </div>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="padding-left:16px; padding-right:16px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;" valign="top" align="left" class="footer-copyright-td">
                                        <div style="padding-top:19px;" class="footer-copyright-div">
                                           Copyright © 2023&nbsp;<a style="text-decoration:none !important; color:#888888 !important;" color="#888888" rel="noopener noreferrer" target="_blank">Apple Inc.</a> All rights reserved.
                                        </div>
                                        <div style="padding-top:16px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; font-size:11px; line-height:16px;" class="footer-links-div">
                                           <a style="color:#555555;" target="_blank" href="https://www.apple.com/uk/legal/terms/site.html" class="footer-links-a" rel="noreferrer nofollow noopener">
                                              <nobr>Terms of Use</nobr>
                                           </a>
                                           &nbsp; <span aria-hidden="true" color="#D6D6D6">|</span>
                                           &nbsp;
                                           <a style="color:#555555;" target="_blank" href="https://www.apple.com/uk/privacy/" class="footer-links-a" rel="noreferrer nofollow noopener">
                                              <nobr>Privacy Policy</nobr>
                                           </a>
                                           &nbsp; <span aria-hidden="true" color="#D6D6D6">|</span>
                                           &nbsp;
                                           <a style="color:#555555;" target="_blank" href="https://www.apple.com/uk/shop/browse/open/salespolicies" class="footer-links-a" rel="noreferrer nofollow noopener">
                                              <nobr>Sales and Refunds</nobr>
                                           </a>
                                        </div>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="padding-left:16px; padding-right:16px; padding-top:10px; font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#6f6f6f; font-size:11px; line-height:16px;" align="left" class="moe-hide">
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px; padding-bottom:5px; padding-top:5px;">
                                           <div style="padding-bottom:5px;"><strong>Apple One (1) Year Limited Warranty &macr; (UK and Ireland)</strong></div>
                                           <div><strong>For Apple Branded Products Only</strong></div>
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:7px;font-weight:bold;">
                                           CONSUMER LAW
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;">
                                           <strong>The Apple One-Year Limited Warranty is a voluntary manufacturer’s warranty. It provides rights separate to rights provided by consumer law, including but not limited to those relating to non-conforming goods.</strong>
                                           <div style="padding-top:7px;">
                                              <strong>As such, the Apple One-Year Limited warranty benefits are in addition to, and not instead of, rights provided by consumer law.  </strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              If a product is defective consumers may, in addition to any other rights which they may have under consumer law in the UK and Ireland, avail themselves of the rights contained in:
                                           </div>
                                           <div style="padding-top:7px;">
                                              for products purchased in Ireland: the Sale of Goods Act, 1893 (in particular Sections 12, 13, 14 and 15), the Sale of Goods and Supply of Services Act, 1980 and the European Communities (Certain Aspects of the Sale of Consumer Goods and Associated Guarantees) Regulations 2003 (S.I. No. 11/2003);
                                           </div>
                                           <div style="padding-top:7px;">
                                              for products purchased in the UK: the Sale of Goods Act 1979.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>Consumers have the right to choose whether to claim service under the Apple One-Year Limited Warranty or under their consumer law rights.</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>Important: The Apple One-Year Limited Warranty terms and conditions shall not apply to consumer law claims.</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              For further information about consumer law, please visit the Apple website (<a class="aapl-link" style="color:#158CFB" target="_blank" href="https://www.apple.com/legal/warranty/statutoryrights.html" rel="noreferrer nofollow noopener">https://www.apple.com/legal/warranty/statutoryrights.html</a>) or contact your local consumer organisation.
                                           </div>
                                           <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:3px; padding-top:7px;font-weight:bold;">
                                              WHAT IS COVERED BY THIS WARRANTY?
                                           </div>
                                           <div style="padding-top:7px;">
                                              Apple Distribution International Ltd. of Hollyhill Industrial Estate Hollyhill, Cork, Republic of Ireland (or its successor in title) (<strong>“Apple”</strong>) warrants the Apple-branded hardware product and Apple-branded accessories contained in the original packaging (<strong>“Apple Product“</strong>) against defects in materials and workmanship when used in accordance with Apple's user manuals, technical specifications and other Apple Product published guidelines for a period of ONE (1) YEAR from the date of original retail purchase by the end-user purchaser (<strong>“Warranty Period“</strong>). You will be able to receive the remedies available under the One Year Limited Warranty for your Apple product via local Apple service facilities in most parts of the world (please refer to section “How to obtain warranty services“).  In the event of any defect in materials and workmanship, you will be able to direct your claims to Apple even in situations where you purchased the Apple Product from a third party.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>Please note: All claims made under the Apple One-Year Limited Warranty will be governed by the terms set out in this warranty document.</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              In addition, Apple will provide you with access to telephone technical support for a period of ninety (90) days from delivery of the Apple products.
                                           </div>
                                           <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:3px; padding-top:7px;font-weight:bold;">
                                              WHAT IS NOT COVERED BY THIS WARRANTY?
                                           </div>
                                           <div style="padding-top:7px;">
                                              This warranty does not apply to any non-Apple branded hardware products or any software, even if packaged or sold with Apple hardware.
                                           </div>
                                           <div style="padding-top:7px;">
                                              Non-Apple branded products may have the benefit of a manufacturer’s warranty, which provides benefits in addition to consumer law rights &macr; please check your product box and literature for details.
                                           </div>
                                           <div style="padding-top:7px;">
                                              Please refer to the licensing agreement accompanying the software for details of your rights with respect to the use of software.
                                           </div>
                                           <div style="padding-top:7px;">
                                              You may obtain service in the European Economic Area (EEA) countries and Switzerland without paying any shipping and handling fees. Outside this region, service options may be limited. If a given service option is not available for the Apple Product in such country, Apple or its agent shall notify you about any additional shipping and handling charges which may apply before rendering service.  Shipping and handling charges will not apply in countries where Apple does maintain an Apple Retail Store or Apple authorised Service Provider (“AASP”) (a list of current service locations is provided at <a style="color:#158CFB;" target="_blank" href="https://locate.apple.com/uk/en" rel="noreferrer nofollow noopener">locate.apple.com/uk/en</a>).
                                           </div>
                                           <div style="padding-top:7px;">
                                              When contacting Apple via telephone, call charges may apply depending on your location. Please contact your network operator for details.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>This warranty does not apply: (a) to consumable parts, such as batteries or protective coatings that are designed to diminish over time, unless failure has occurred due to a defect in materials or workmanship; (b) to cosmetic damage, including but not limited to scratches, dents and broken plastic on ports unless failure has occurred due to a defect in materials or workmanship; (c) to damage caused by use with a third party component or product that does not meet the Apple Product’s specifications (Apple Product specifications are available at https://www.apple.com under the technical specifications for each product and also available in stores); (d) to damage caused by accident, abuse, misuse,  fire, liquid contact, earthquake or other external cause; (e) to damage caused by operating the Apple Product outside the user manual, the technical specifications or other Apple Product published guidelines; (f) to damage caused by service (including upgrades and expansions) performed by anyone who is not a representative of Apple or an Apple Authorised Service Provider (“AASP”); (g) to an Apple Product that has been modified to alter functionality or capability without the written permission of Apple; (h) to defects caused by normal wear and tear or otherwise due to the normal ageing of the Apple Product; (i) if any serial number has been removed or defaced from the Apple Product; or (j) if Apple receives information from relevant public authorities that the product has been stolen or if you are unable to deactivate passcode-enabled or other security measures designed to prevent unauthorised access to the Apple Product, and you cannot prove in any way that you are the authorised user of the product (e.g. by presenting proof of purchase).</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>IMPORTANT RESTRICTIONS</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              Apple may restrict warranty service for Apple TV to countries where Apple or its Authorised Resellers sell the device.
                                           </div>
                                           <div style="padding-top:7px;">
                                              With regard to iPad devices with cellular coverage and iPhone devices, the warranty provides service coverage the European Economic Area (EEA) countries and Switzerland. Outside this region, service options may be limited due to technical issues outside of Apple control &macr; for information relating to iPad devices with cellular coverage and iPhone devices please see <a style="color:#158CFB;" target="_blank" href="https://www.apple.com/iphone/LTE/" rel="noreferrer nofollow noopener">www.apple.com/iphone/LTE/</a> and <a style="color:#158CFB;" target="_blank" href="https://www.apple.com/ipad/LTE/" rel="noreferrer nofollow noopener">www.apple.com/ipad/LTE/</a>.
                                           </div>
                                           <div style="padding-top:7px;">
                                              With regard to iPad devices, the warranty does not provide service coverage in China mainland due to differences in Wi-Fi connection outside of Apple control.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>YOUR RESPONSIBILITIES</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>IF YOUR APPLE PRODUCT IS CAPABLE OF STORING SOFTWARE PROGRAMS, DATA AND OTHER INFORMATION, YOU SHOULD MAKE PERIODIC BACKUP COPIES OF THE INFORMATION CONTAINED ON YOUR APPLE PRODUCT’S STORAGE MEDIA TO PROTECT THE CONTENTS AND AS A PRECAUTION AGAINST POSSIBLE OPERATIONAL FAILURES. </strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              Before submitting your Apple Product for warranty service you should make separate backup copy of the contents of its storage media, remove all personal information and disable all security passwords. The contents of your Apple Product’s storage media may be erased, replaced and / or reformatted in the course of service.
                                           </div>
                                           <div style="padding-top:7px;">
                                              Following warranty service, your Apple Product or a replacement product will be returned to you as your Apple Product was configured when originally sold, subject to applicable updates. Apple may install system software updates as part of warranty service that will prevent the Apple Product from reverting to an earlier version of the system software. Third party applications installed on the Apple Product may not be compatible or work with the Apple Product as a result of the system software update. You will be responsible for reinstalling all other software programs, data and information. Recovery and reinstallation of other software programs, data and information are not covered under this warranty.
                                           </div>
                                           <div style="padding-top:7px;">
                                              You may seek service in a Country / Region that is not the Country / Region of purchase, in such a case you will comply with all applicable import and export laws and regulations and be responsible for all custom duties, VAT and other associated taxes and charges.
                                           </div>
                                           <div style="padding-top:10px;">
                                              <strong>Important: Do not attempt to open the Apple Product unless the User Manual describes how it is designed for opening or remove any protective caps attached to the&nbsp;Apple Product. Opening the Apple Product or removing protective caps may&nbsp;cause damage that is not covered by this Warranty. Only Apple or an AASP should&nbsp;perform service on this Apple Product.</strong>
                                           </div>
                                           <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:3px; padding-top:7px;font-weight:bold;">
                                              WHAT WILL APPLE DO IN THE EVENT OF A WARRANTY CLAIM?
                                           </div>
                                           <div style="padding-top:7px;">
                                              If during the warranty period you submit a claim during the warranty period this warranty, Apple will, at its option:
                                              <br>
                                              <br>
                                              <strong>(i) repair</strong> the Apple Product using new or previously used parts that are equivalent to new in performance and reliability, or
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>(ii) replace</strong> the Apple Product with the same model (or with your consent a product that has similar functionality) formed from new and/or previously used parts that are equivalent to new in performance and reliability, or
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>(iii) refund your purchase price</strong> in exchange for the return of your Apple Product.
                                           </div>
                                           <div style="padding-top:7px;">
                                              When a product or part is replaced or a refund provided, any replacement item becomes your property and the replaced or refunded item becomes Apple's property.
                                           </div>
                                           <div style="padding-top:7px;">
                                              A replacement part or product or a repaired Apple Product assumes the remaining warranty of the original Apple Product or ninety (90) days from the date of replacement or repair, whichever provides longer coverage for you.
                                           </div>
                                           <div style="padding-top:7px;">
                                              For service requested in a Country / Region other than the Country / Region of purchase for the Apple Product, Apple may repair or replace products and parts with comparable products and parts that comply with local standards.
                                           </div>
                                           <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:3px; padding-top:7px;font-weight:bold;">
                                              HOW TO OBTAIN WARRANTY SERVICE
                                           </div>
                                           <div style="padding-top:7px; padding-bottom:7px;">
                                              Please access and review the following online help resources before seeking warranty service:
                                           </div>
                                        </div>
                                        <table style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;" cellspacing="0" cellpadding="3" align="center" border="1" width="600">
                                           <tbody>
                                              <tr>
                                                 <td style="padding-left:5px;" width="32%">International Support Information</td>
                                                 <td style="padding-left:5px;" width="68%"><a style="color:#158CFB;" target="_blank" href="https://www.apple.com/uk/support/" rel="noreferrer nofollow noopener">https://www.apple.com/uk/support/</a></td>
                                              </tr>
                                              <tr>
                                                 <td style="padding-left:5px;">Apple authorised Service Providers, Apple authorised Resellers and Apple Retail Store</td>
                                                 <td style="padding-left:5px;"><a style="color:#158CFB;" target="_blank" href="https://locate.apple.com/uk/en" rel="noreferrer nofollow noopener">locate.apple.com/uk/en</a></td>
                                              </tr>
                                              <tr>
                                                 <td style="padding-left:5px;">Apple Support and Service</td>
                                                 <td style="padding-left:5px;"><a style="color:#158CFB;" target="_blank" href="https://support.apple.com/en-gb/HT201232" rel="noreferrer nofollow noopener">support.apple.com/en-gb/HT201232</a></td>
                                              </tr>
                                              <tr>
                                                 <td style="padding-left:5px;">Apple Complimentary Support</td>
                                                 <td style="padding-left:5px;"><a style="color:#158CFB;" target="_blank" href="https://www.apple.com/uk/support/complimentary/" rel="noreferrer nofollow noopener">www.apple.com/uk/support/complimentary/</a></td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px; padding-bottom:2px;">
                                           <div style="padding-top:7px;">
                                              If you do not have Internet access or the Apple Product is still not functioning properly after making use of these resources, please contact an Apple representative or, if applicable, an Apple owned retail store (“Apple Retail”) or an AASP, and they will help determine whether your Apple Product requires service and, if it does, will inform you in which of the warranty service options set out below Apple will provide it.
                                           </div>
                                           <div style="padding-top:7px;">
                                              Before receiving warranty service, Apple or its agents may require that you furnish proof of purchase details, respond to questions designed to assist with diagnosing potential issues and follow Apple's procedures for obtaining warranty service, such as following instructions for packing and shipping Apple Products when receiving Mail-in service as described below.
                                           </div>
                                           <div style="padding-top:7px;">
                                              You will not need to prove that the nonconformity complained of existed at the date of delivery to obtain service and support under the Apple One-Year Limited Warranty, unless this would be incompatible with the nature of the non-conformity.
                                           </div>
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:3px; padding-top:7px;font-weight:bold;">
                                           WARRANTY SERVICE OPTIONS
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px; padding-bottom:2px;">
                                           <div style="padding-top:7px;">
                                              Apple will provide warranty service through one of the following options:
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>(i) Carry-in service.</strong> Apple may request that you return your Apple Product to an Apple Retail or AASP location offering carry-in service. Your Apple Product may be sent to an Apple Repair Service (“ARS”) location to be serviced. Once you are notified that service is complete, you will retrieve the Apple Product from the Apple Retail or AASP location without delay unless Apple notifies you that the Apple Product will be sent directly to your location from the ARS location.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>(ii) Mail-in service.</strong> If Apple elects to provide service through its mail-in service, Apple will send you prepaid waybills and if applicable, packaging material and instructions on how to properly pack and address your Apple product, so that you may ship your Apple Product to an ARS or AASP location. Instructions may be sent to you via email or in hard copy with the packaging material. Once service is complete, the ARS or AASP location will return the Apple Product to you. Apple will pay for shipping to and from your location if all instructions regarding the method of packaging and shipping the Apple Product are followed.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>(iii) Do-it-yourself (“DIY“) service. </strong>Under DIY service Apple will provide you with a replacement product or easily replaceable parts or accessories of a product, such as a mouse or keyboard, which can be replaced without using any tools. Note: Apple is not responsible for any labour costs you incur relating to DIY service. Should you require further assistance with the replacement, contact Apple on the telephone number listed below, or visit an Apple Retail or AASP location. If Apple elects to provide service through DIY service, the following process will apply:
                                           </div>
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px; padding-bottom:2px; padding-left: 30px;">
                                           <div style="padding-top:7px;">
                                              (a) Service where Apple requires return of the replaced product, part or accessory: Apple may require a credit card authorisation as security for the retail price of the replacement product, part or accessory and applicable shipping costs. Apple will ship a replacement product, part or accessory to you with instructions for replacement, if applicable, and any requirements for the return of the replaced product or part. If you follow the instructions, Apple will cancel the credit card authorisation, so you will not be charged for the product or part and shipping to and from your location. If you fail to return the replaced product, part or accessory as instructed or return a replaced product, part or accessory that is ineligible for service, Apple will charge your credit card for the authorised amount. If you are unable to provide credit card authorisation, the service may not be available to you and Apple will offer alternative arrangements for service.
                                           </div>
                                           <div style="padding-top:7px;">
                                              (b) Service where Apple does not require return of the replaced product, part or accessory: Apple will ship you free of charge a replacement product, part or accessory accompanied by instructions on installation, if applicable, and any requirements for the disposal of the replaced product, part or accessory.
                                           </div>
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px;  padding-bottom:3px; padding-top:7px;font-weight:bold;">
                                           LIMITATION OF LIABILITY
                                        </div>
                                        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;; color:#888888; font-size:11px; line-height:16px; padding-bottom:2px;">
                                           <div style="padding-top:7px;">
                                              <strong>A) Entire agreement:</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              Other than the consumer law rights to which you are entitled as set out at the beginning of this document, all warranties, conditions and other terms not set out in this warranty document are excluded from the Apple One-Year Limited Warranty. As a result, Apple does not make any other promises, conditions or warranties about the service other than set out in this warranty document.
                                           </div>
                                           <div style="padding-top:7px;">
                                              Some countries do not allow limitations on how long such warranties, conditions and/or implied terms may last, so the limitation described above may not apply to you.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>B) Disclaimer in relation to data:</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              Apple does not warrant, represent or undertake that it will be able to repair or replace any Apple Product under this warranty without risk to and / or loss of information and / or data stored on the Apple Product.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>C) Limitation of liability:</strong>
                                           </div>
                                           <div style="padding-top:7px; padding-bottom:7px;">
                                              Apple is not responsible for damage which is not Apple’s fault or any loss of data. If you are an entrepreneur, Apple is also not responsible for loss of benefits or profits.  These exclusions shall not apply to (i) death or personal injury, (ii) fraud or gross negligence; or (iii) fraudulent misrepresentation; or (iv) any other liability that can not be limited or excluded as a matter of law.
                                           </div>
                                           <div style="padding-top:7px;">
                                              <strong>GENERAL</strong>
                                           </div>
                                           <div style="padding-top:7px;">
                                              No Apple reseller, agent or employee is authorised to make any modification, extension or addition to this warranty.
                                           </div>
                                           <div style="padding-top:7px;">
                                              If any term is held to be illegal or unenforceable by force of law, it will be excluded from the warranty and the legality or enforceability of the remaining terms shall not be affected.
                                           </div>
                                           <div style="padding-top:7px;">
                                              Where the product was purchased in Ireland, this warranty is governed by and construed under the laws of Ireland and each party hereby submits to the non-exclusive jurisdiction of the Irish courts. Where the product was purchased in the UK, this warranty is governed by and construed under the laws of England and each party hereby submits to the non-exclusive jurisdiction of the English courts, unless you live in Scotland in which case the laws of Scotland will apply.
                                           </div>
                                           <div style="padding-top:7px;">
                                              ©2023 Apple Inc. All rights reserved. Apple and the Apple logo are trademarks of Apple Inc., registered in the US and other countries.
                                           </div>
                                           <p>
                                              071816-UK-Ireland-Universal-Warranty-v1.2
                                           </p>
                                        </div>
                                     </td>
                                  </tr>
                                  <tr>
                                     <td style="display:none; line-height:0px;font-size:0px;height:0px;margin:0;padding:0;" class="moe-warranty-line">
                                        For details about your Apple Limited Warranty, please view this email in a different web browser or email client.
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
 </center>`
}

export default appleTemplate