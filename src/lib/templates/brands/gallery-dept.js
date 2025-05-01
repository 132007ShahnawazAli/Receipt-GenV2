/**
 * Gallery Dept receipt template
 */

const galleryDeptTemplate = {
    id: "gallery-dept",
    name: "Gallery Dept",
    displayName: "Gallery Dept",
    logo: "gallerydept.png",
    enabled: true,
    subject: "Thank you for your purchase!",
  
    // Define form fields based on variables in curly braces from the HTML
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "John Doe",
      },
      {
        name: "ordernumber",
        label: "Order Number",
        type: "text",
        required: true,
        placeholder: "GD-12345678",
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        required: true,
        placeholder: "123 Main St",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        required: true,
        placeholder: "Los Angeles",
      },
      {
        name: "zip",
        label: "ZIP/Postal Code",
        type: "text",
        required: true,
        placeholder: "90210",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        required: true,
        placeholder: "United States",
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        required: true,
        placeholder: "https://example.com/product-image.jpg",
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        required: true,
        placeholder: "Vintage Washed T-Shirt",
      },
      {
        name: "size",
        label: "Size",
        type: "text",
        required: true,
        placeholder: "Medium",
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        required: true,
        defaultValue: "$",
      },
      {
        name: "price",
        label: "Product Price",
        type: "text",
        required: true,
        placeholder: "195.00",
      },
      {
        name: "shipping",
        label: "Shipping Cost",
        type: "text",
        required: true,
        placeholder: "15.00",
      },
      {
        name: "tax",
        label: "Tax Amount",
        type: "text",
        required: true,
        placeholder: "19.50",
      },
      {
        name: "total",
        label: "Total Amount",
        type: "text",
        required: true,
        placeholder: "229.50",
      },
    ],
  
    // Generate HTML for the receipt
    generateHTML: (data) => {
      return `
      <table style="width:100%;border-spacing:0;border-collapse:collapse;margin:40px 0 20px">
        <tbody><tr>
          <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
            <center>
              <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                <tbody><tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                    <table style="width:100%;border-spacing:0;border-collapse:collapse">
                      <tbody><tr>
                        <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                            <img width="150" alt="Gallery Dept - online" src="https://cdn.shopify.com/s/files/1/0057/7408/2148/files/Gallerydept_logo.png?10918">
                        </td>
                        <td align="right" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;text-transform:uppercase;font-size:14px;color:#999">
                          <span style="font-size:16px">
                            Order #${data.ordernumber}
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </center>
          </td>
        </tr>
      </tbody></table>
  
      <table style="width:100%;border-spacing:0;border-collapse:collapse">
        <tbody><tr>
          <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding-bottom:40px;border-width:0">
            <center>
              <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                <tbody><tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                    <h2 style="font-weight:normal;font-size:24px;margin:0 0 10px">Thank you for your purchase! </h2>
                    <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                      Hi ${data.name}, <br><br>We're getting your order ready to be shipped. It usually takes 2-5 business days. We will notify you when it has been sent.
                    </p>
                    <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                      <tbody><tr>
                        <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;line-height:0em"> </td>
                      </tr>
                      <tr>
                        <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                          <table style="border-spacing:0;border-collapse:collapse;float:left;margin-right:15px">
                            <tbody><tr>
                              <td bgcolor="#000000" align="center" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;border-radius:4px"><a style="font-size:16px;text-decoration:none;display:block;color:#fff;padding:20px 25px" href="https://gallerydept.com" target="_blank">View your order</a></td>
                            </tr>
                          </tbody></table>
                          <table style="border-spacing:0;border-collapse:collapse;margin-top:19px">
                            <tbody><tr>
                              <td align="center" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;border-radius:4px">or <a style="font-size:16px;text-decoration:none;color:#000000" href="https://gallerydept.com" target="_blank">Visit our store</a>
                              </td>
                            </tr>
                          </tbody></table>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </center>
          </td>
        </tr>
      </tbody></table>
  
      <table style="width:100%;border-spacing:0;border-collapse:collapse">
        <tbody><tr>
          <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:40px 0">
            <center>
              <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                <tbody><tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                    <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Order summary</h3>
                  </td>
                </tr>
              </tbody></table>
              <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                <tbody><tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                    <table style="width:100%;border-spacing:0;border-collapse:collapse">
                      <tbody><tr style="width:100%">
                        <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                          <table style="border-spacing:0;border-collapse:collapse">
                            <tbody><tr><td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                              <img style="margin-right:15px;border-radius:8px;border:1px solid #e5e5e5" height="60" width="60" align="left" src="${data.imageurl}">
                            </td>
                            <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;width:100%">
                              <span style="font-size:16px;font-weight:600;line-height:1.4;color:#555">${data.pname} × 1</span><br>
                              <span style="font-size:14px;color:#999">${data.size}</span><br>
                            </td>
                            <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;white-space:nowrap">
                              <p align="right" style="color:#555;line-height:150%;font-size:16px;font-weight:600;margin:4px 0 0 15px">
                                ${data.currency}${data.price}
                              </p>
                            </td>
                          </tr></tbody></table>
                        </td>
                      </tr>
                      </tbody></table>
                      <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:15px;border-top-width:1px;border-top-color:#e5e5e5;border-top-style:solid">
                        <tbody><tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;width:40%"></td>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                            <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                              <tbody><tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:2px 0">
                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:4px 0 0">
                                    <span style="font-size:16px">Subtotal</span>
                                  </p>
                                </td>
                                <td align="right" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:2px 0">
                                  <strong style="font-size:16px;color:#555">${data.currency}${data.price}</strong>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:2px 0">
                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:4px 0 0">
                                    <span style="font-size:16px">Shipping</span>
                                  </p>
                                </td>
                                <td align="right" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:2px 0">
                                  <strong style="font-size:16px;color:#555">${data.currency}${data.shipping}</strong>
                                </td>
                              </tr>
                              <tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:2px 0">
                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:4px 0 0">
                                    <span style="font-size:16px">Taxes</span>
                                  </p>
                                </td>
                                <td align="right" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:2px 0">
                                  <strong style="font-size:16px;color:#555">${data.currency}${data.tax}</strong>
                                </td>
                              </tr>
                            </tbody></table>
                            <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px;border-top-width:2px;border-top-color:#e5e5e5;border-top-style:solid">
                              <tbody><tr>
                                <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:20px 0 0">
                                  <p style="color:#777;line-height:1.2em;font-size:16px;margin:4px 0 0">
                                    <span style="font-size:16px">Total</span>
                                  </p>
                                </td>
                                <td align="right" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:20px 0 0">
                                  <strong style="font-size:24px;color:#555">${data.currency}${data.total}</strong>
                                </td>
                              </tr>
                            </tbody></table>
                            <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                              <tbody><tr><td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;border-bottom-width:1px;border-bottom-color:#e5e5e5;border-bottom-style:solid;height:1px;padding:0" colspan="2"></td></tr>
                              <tr><td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:10px" colspan="2"></td></tr>
                            </tbody></table>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </center>
            </td>
          </tr>
        </tbody></table>
  
        <table style="width:100%;border-spacing:0;border-collapse:collapse">
          <tbody><tr>
            <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:40px 0">
              <center>
                <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                  <tbody><tr>
                    <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                      <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Customer information</h3>
                    </td>
                  </tr>
                </tbody></table>
                <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                  <tbody><tr>
                    <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                      <table style="width:100%;border-spacing:0;border-collapse:collapse">
                        <tbody><tr>
                          <td valign="top" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding-bottom:40px;width:50%">
                            <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping address</h4>
                            <p style="color:#777;line-height:150%;font-size:16px;margin:0">${data.name}<br>${data.street}
                              <br>${data.city}  <br>${data.zip}<br>${data.country}</p>
                          </td>
                          <td valign="top" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding-bottom:40px;width:50%">
                            <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Billing address</h4>
                            <p style="color:#777;line-height:150%;font-size:16px;margin:0">${data.name}<br>${data.street}
                              <br>${data.city}  <br>${data.zip}<br>${data.country}</p>
                          </td>
                        </tr>
                      </tbody></table>
                      <table style="width:100%;border-spacing:0;border-collapse:collapse">
                        <tbody><tr>
                          <td valign="top" style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding-bottom:40px;width:50%">
                            <h4 style="font-weight:500;font-size:16px;color:#555;margin:0 0 5px">Shipping method</h4>
                            <p style="color:#777;line-height:150%;font-size:16px;margin:0">Standard Shipping</p>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                </tbody></table>
              </center>
            </td>
          </tr>
        </tbody></table>
  
        <table style="width:100%;border-spacing:0;border-collapse:collapse;border-top-width:1px;border-top-color:#e5e5e5;border-top-style:solid">
          <tbody><tr>
            <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;padding:35px 0">
              <center>
                <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
                  <tbody><tr>
                    <td style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif">
                      <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Return Policy</h3>
                      <p style="color:#999;line-height:150%;font-size:14px;margin:0">We at the Gallery Department are devoted to quality. Many of our products are vintage, pre-distressed, and hand made, making each unique with subtle variances.</p>
                      <p style="color:#999;line-height:150%;font-size:14px;margin:15px 0 0">Items purchased online are returnable within 7 days of delivery for exchange or credit. Credit issued from online orders will not be accepted in-store. To initiate your return for an online purchase, please visit our return portal online. Once we receive your return, a credit will be sent via email that can be used towards your next purchase online. Shipping costs are non-refundable and return shipping costs will be the responsibility of the customer.</p>
                      <p style="color:#999;line-height:150%;font-size:14px;margin:15px 0 0">Items purchased in-store at one of our locations are returnable within 7 days of purchase for exchange or credit with proof of purchasue.</p>
                      <p style="color:#999;line-height:150%;font-size:14px;margin:15px 0 0">Returned/exchanged items must be in original condition, unworn with original packaging and tags.</p>
                      <p style="color:#999;line-height:150%;font-size:14px;margin:15px 0 0">For further assistance, please email <a style="font-size:14px;text-decoration:none;color:#000000" href="mailto:web@gallerydepartment.com" target="_blank">web@gallerydepartment.com</a>. Our team will get back to you within 1-2 business days.</p>
                    </td>
                  </tr>
                </tbody></table>
              </center>
            </td>
          </tr>
        </tbody></table>
      `
    },
  }
  
  export default galleryDeptTemplate
  