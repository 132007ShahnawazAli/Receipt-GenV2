/**
 * Chew Forever Order Confirmation Email Template
 */

function getHtml(data) {
  // Ensure we have all required data with defaults
  const orderNumber = data.ordernumber || '123456';
  const productName = data.pname || 'Product Name';
  const price = data.price || '0.00';
  const imageUrl = data.imageurl || 'https://via.placeholder.com/60';
  const name = data.name || 'Customer Name';
  const street = data.street || '123 Main St';
  const city = data.city || 'New York';
  const zip = data.zip || '10001';
  const country = data.country || 'United States';
  
  return `
  <table style="width:100%;border-spacing:0;border-collapse:collapse;margin:40px 0 20px">
    <tbody>
      <tr>
        <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
          <center>
            <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
              <tbody>
                <tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                    <table style="width:100%;border-spacing:0;border-collapse:collapse">
                      <tbody>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <h1 style="font-weight:normal;font-size:30px;color:#333;margin:0">
                              <a href="https://chewforever.com" style="font-size:30px;color:#333;text-decoration:none" target="_blank">
                                Chew Forever
                              </a>
                            </h1>
                          </td>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                          </td>
                        </tr>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;text-transform:uppercase;font-size:14px;color:#999" align="right" colspan="2">
                            <span style="font-size:16px">
                              Order #${orderNumber}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="width:100%;border-spacing:0;border-collapse:collapse">
    <tbody>
      <tr>
        <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding-bottom:40px;border-width:0">
          <center>
            <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
              <tbody>
                <tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                    <h2 style="font-weight:normal;font-size:24px;margin:0 0 10px">
                      Thank you for your purchase!
                    </h2>
                    <p style="color:#777;line-height:150%;font-size:16px;margin:0">${name}<br>${street}<br>${city} ${zip}<br>${country}</p>
                    <p style="color:#777;line-height:150%;font-size:16px;margin:0">
                      We're getting your order ready to be shipped. We will notify you when it has been sent.
                    </p>
                    
                    <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                      <tbody>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:0em">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <table style="border-spacing:0;border-collapse:collapse;float:left;margin-right:15px">
                              <tbody>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-radius:4px" align="center" bgcolor="#1990C6">
                                    <a href="#" style="font-size:16px;text-decoration:none;display:block;color:#fff;padding:20px 25px" target="_blank">
                                      View your order
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            
                            <table style="border-spacing:0;border-collapse:collapse;margin-top:19px">
                              <tbody>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;border-radius:4px" align="center">
                                    or 
                                    <a href="https://chewforever.com" style="font-size:16px;text-decoration:none;color:#1990c6" target="_blank">
                                      Visit our store
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
          </center>
        </td>
      </tr>
    </tbody>
  </table>

  <table style="width:100%;border-spacing:0;border-collapse:collapse">
    <tbody>
      <tr>
        <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:40px 0">
          <center>
            <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
              <tbody>
                <tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                    <h3 style="font-weight:normal;font-size:20px;margin:0 0 25px">Order summary</h3>
                  </td>
                </tr>
              </tbody>
            </table>
            <table style="width:560px;text-align:left;border-spacing:0;border-collapse:collapse;margin:0 auto">
              <tbody>
                <tr>
                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                    <table style="width:100%;border-spacing:0;border-collapse:collapse">
                      <tbody>
                        <tr style="width:100%">
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <table style="border-spacing:0;border-collapse:collapse">
                              <tbody>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                                    <img src="${imageUrl}" align="left" width="60" height="60" style="margin-right:15px;border-radius:8px;border:1px solid #e5e5e5">
                                  </td>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;width:100%">
                                    <span style="font-size:16px;font-weight:600;line-height:1.4;color:#555">
                                      ${productName} × ${data.quantity || 1}
                                    </span>
                                    <br>
                                    <span style="font-size:14px;color:#999"></span>
                                  </td>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;white-space:nowrap">
                                    <p style="color:#555;line-height:150%;font-size:16px;font-weight:600;margin:4px 0 0 15px" align="right">
                                      €${price}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:15px;border-top-width:1px;border-top-color:#e5e5e5;border-top-style:solid">
                      <tbody>
                        <tr>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;width:40%"></td>
                          <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif">
                            <table style="width:100%;border-spacing:0;border-collapse:collapse;margin-top:20px">
                              <tbody>
                                <tr>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0">
                                    <p style="color:#777;line-height:1.2em;font-size:16px;margin:4px 0 0">
                                      <span style="font-size:16px">Subtotal</span>
                                    </p>
                                  </td>
                                  <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:2px 0" align="right">
                                    <strong style="font-size:16px;color:#555">€${price}</strong>
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
          </center>
        </td>
      </tr>
    </tbody>
  </table>
  `
}

const chewforeverTemplate = {
  name: "Chew Forever",
  displayName: "Chew Forever",
  logo: "chewforever.png",
  enabled: true,
  fields: [
    {
      name: "orderNumber",
      label: "Order Number",
      type: "text",
      required: true,
      placeholder: "e.g. #123456"
    },
    {
      name: "name",
      label: "Customer Name",
      type: "text",
      required: true,
      placeholder: "e.g. John Doe"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "customer@example.com"
    },
    {
      name: "productName",
      label: "Product Name",
      type: "text",
      required: true,
      placeholder: "e.g. Chewing Gum Pack"
    },
    {
      name: "price",
      label: "Price (€)",
      type: "number",
      required: true,
      step: "0.01",
      placeholder: "e.g. 19.99"
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      required: true,
      default: 1,
      min: 1
    },
    {
      name: "imageUrl",
      label: "Product Image URL",
      type: "url",
      required: false,
      placeholder: "https://example.com/image.jpg"
    },
    {
      name: "street",
      label: "Street Address",
      type: "text",
      required: true,
      placeholder: "e.g. 123 Main St"
    },
    {
      name: "city",
      label: "City",
      type: "text",
      required: true,
      placeholder: "e.g. New York"
    },
    {
      name: "zip",
      label: "ZIP/Postal Code",
      type: "text",
      required: true,
      placeholder: "e.g. 10001"
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      required: true,
      placeholder: "e.g. United States"
    }
  ],
  getHtml: (data) => getHtml({
    ...data,
    ordernumber: data.orderNumber || '123456',
    pname: data.productName || 'Product Name',
    price: parseFloat(data.price || 0).toFixed(2),
    imageurl: data.imageUrl || 'https://via.placeholder.com/60',
    name: data.name || 'Customer Name',
    street: data.street || '123 Main St',
    city: data.city || 'New York',
    zip: data.zip || '10001',
    country: data.country || 'United States'
  })
}

export default chewforeverTemplate
