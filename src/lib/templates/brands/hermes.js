/**
 * Hermès receipt template
 */

const hermesTemplate = {
    id: "hermes",
    name: "Hermès",
    displayName: "Hermès",
    logo: "hermes.png",
    enabled: true,
    subject: "Thank you for your order",
  
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
        name: "orderdate",
        label: "Order Date",
        type: "text",
        required: true,
        placeholder: "May 15, 2023",
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        required: true,
        placeholder: "123 Main St",
      },
      {
        name: "cityzip",
        label: "City and ZIP/Postal Code",
        type: "text",
        required: true,
        placeholder: "Paris 75008",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        required: true,
        placeholder: "France",
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        required: true,
        placeholder: "https://example.com/product-image.jpg",
      },
      {
        name: "product_name",
        label: "Product Name",
        type: "text",
        required: true,
        placeholder: "Izmir sandal",
      },
      {
        name: "color",
        label: "Color",
        type: "text",
        required: true,
        placeholder: "Black",
      },
      {
        name: "size",
        label: "Size",
        type: "text",
        required: true,
        placeholder: "42",
      },
      {
        name: "ref",
        label: "Reference Number",
        type: "text",
        required: true,
        placeholder: "H001234",
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        required: true,
        defaultValue: "€",
      },
      {
        name: "price",
        label: "Product Price",
        type: "text",
        required: true,
        placeholder: "580.00",
      },
    ],
  
    // Generate HTML for the receipt
    generateHTML: (data) => {
      return `
      <div style="background-color:#f9f9f9;margin:0;min-width:100.0%;text-align:center;padding:0">
        <table style="border-spacing:0;font-family:sans-serif;color:#000000;background-color:#f9f9f9" border="0" width="100%" cellspacing="0" cellpadding="0" bgcolor="#f9f9f9">
          <tbody>
            <tr>
              <td style="max-width:600.0px;padding:0" align="center" bgcolor="#f9f9f9" width="100%">
                <center style="background-color:#f9f9f9!important;width:100%;table-layout:fixed">
                  <div style="background-color:#ffffff;max-width:600.0px;width:100.0%">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:640.0px" cellspacing="0" cellpadding="0" align="center">
                      <tbody>
                        <tr>
                          <td style="font-size:0;line-height:0px;padding:0" colspan="3" bgcolor="#f9f9f9" height="20">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0px;padding:0" bgcolor="#f9f9f9">&nbsp;</td>
                          <td style="width:87.5%;font-size:12.0px;color:#989898;font-family:Arial;padding:0" align="center" valign="middle" bgcolor="#f9f9f9">We thank you for your order</td>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0px;padding:0" bgcolor="#f9f9f  bgcolor="#f9f9f9">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                <center style="background-color:#f9f9f9!important;width:100%;table-layout:fixed">
                  <div style="background-color:#ffffff!important;max-width:600px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                      <tbody>
                        <tr>
                          <td style="font-size:0;line-height:0;padding:0" bgcolor="#ffffff" height="40">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                <center style="background-color:#f9f9f9!important;width:100%;table-layout:fixed">
                  <div style="background-color:#ffffff!important;max-width:600px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px" cellspacing="0" cellpadding="0" align="center">
                      <tbody>
                        <tr>
                          <td style="overflow:hidden;font-size:1;line-height:1;padding:0" align="center" bgcolor="#FFFFFF">
                            <a href="https://www.hermes.com/" style="font-size:1;line-height:1;width:86px;height:50px;text-decoration:none" target="_blank">
                              <img style="font-family:Arial;color:#ffffff;font-size:1px;text-align:center;display:block;border-width:0;width:86px;max-width:86px;height:50px" src="https://assets.hermes.com/is/image/hermesedito/LOGO%20HERMES%20GREY?wid=600&amp;fmt=png-alpha" alt="HERMES PARIS" width="86" height="50">
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                <center style="background-color:#f9f9f9!important;width:100%;table-layout:fixed">
                  <div style="background-color:#ffffff!important;max-width:600px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#f2ce8b">
                      <tbody>
                        <tr>
                          <td style="font-size:0;line-height:0;padding:0" bgcolor="#ffffff" height="40">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                <center style="background-color:#f9f9f9;width:100.0%;table-layout:fixed">
                  <div style="background-color:#ffffff;max-width:600.0px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:600.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
                      <tbody>
                        <tr>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0px;padding:0" bgcolor="#FFFFFF">&nbsp;</td>
                          <td style="height:auto;padding:0" align="center" valign="top" bgcolor="#FFFFFF">
                            <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:600.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
                              <tbody>
                                <tr>
                                  <td style="text-align:center;padding:0" align="center" valign="middle" bgcolor="#ffffff">
                                    <span style="font-family:Palatino Linotype;font-size:30px;line-height:40px;color:#444444">Dear ${data.name},</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0px;padding:0" bgcolor="#FFFFFF">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                <center style="background-color:#f9f9f9;width:100.0%;table-layout:fixed">
                  <div style="background-color:#ffffff;max-width:600.0px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:600.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                      <tbody>
                        <tr>
                          <td style="font-size:0;line-height:0px;padding:0" bgcolor="#ffffff" height="20">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                <center style="background-color:#f9f9f9;width:100.0%;table-layout:fixed">
                  <div style="background-color:#ffffff;max-width:600.0px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:600.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
                      <tbody>
                        <tr>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0px;padding:0" bgcolor="#FFFFFF">&nbsp;</td>
                          <td style="height:auto;padding:0" align="center" bgcolor="#FFFFFF">
                            <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:620.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#FFFFFF">
                              <tbody>
                                <tr>
                                  <td style="text-align:center;padding:0" align="center" bgcolor="#ffffff">
                                    <span style="font-family:Palatino Linotype;line-height:40px;color:#444444">Your order has been received and is being reviewed. 
                                      <br>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0px;padding:0" bgcolor="#FFFFFF">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                
                <!-- Product details section -->
                <center style="background-color:#f9f9f9!important;width:100%;table-layout:fixed">
                  <div style="background-color:#ffffff!important;max-width:600px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                      <tbody>
                        <tr>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff">&nbsp;</td>
                          <td style="height:auto;padding:0" align="center" valign="top" bgcolor="#ffffff">
                            <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                              <tbody>
                                <tr>
                                  <td style="text-align:center;width:20%;min-width:20%;max-width:20%;padding:0" align="center" valign="middle" bgcolor="#ffffff">
                                    <img style="border:0;max-width:100%" src="${data.imageurl}" alt="${data.product_name}" width="105">
                                  </td>
                                  <td style="width:4%;min-width:4%;max-width:4%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff">&nbsp;</td>
                                  <td style="text-align:left;width:76%;min-width:76%;max-width:76%;padding:0" align="center" valign="top" bgcolor="#ffffff">
                                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                                      <tbody>
                                        <tr>
                                          <td style="text-align:left;width:70%;min-width:70%;max-width:70%;padding:0" align="left" valign="middle" bgcolor="#ffffff">
                                            <span style="font-family:Georgia;font-size:15px;line-height:17px;color:#626262">${data.product_name}</span>
                                          </td>
                                          <td style="width:30%;min-width:30%;max-width:30%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff">&nbsp;</td>
                                        </tr>
                                        <tr>
                                          <td style="width:70%;min-width:70%;max-width:70%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff" height="10">&nbsp;</td>
                                          <td style="width:30%;min-width:30%;max-width:30%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff" height="10">&nbsp;</td>
                                        </tr>
                                        <tr>
                                          <td style="text-align:left;width:70%;min-width:70%;max-width:70%;padding:0" align="left" valign="top" bgcolor="#ffffff">
                                            <span style="font-family:Arial;font-size:12px;line-height:17px;color:#9b9b9b">Color: ${data.color} 
                                              <br>Size: ${data.size}
                                              <br>Ref: ${data.ref}
                                              <br>Qty: 1 
                                              <br>
                                              <br>
                                            </span>
                                          </td>
                                          <td style="width:30%;min-width:30%;max-width:30%;padding:0" align="right" valign="bottom" bgcolor="#ffffff">
                                            <span style="font-family:Courier New;font-size:14px;line-height:17px;color:#727272">${data.currency}${data.price}</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                
                <!-- Order total section -->
                <center style="background-color:#f9f9f9;width:100.0%;table-layout:fixed">
                  <div style="background-color:#ffffff;max-width:600.0px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:600.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                      <tbody>
                        <tr>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff">&nbsp;</td>
                          <td style="height:auto;padding:0" align="center" valign="top" bgcolor="#ffffff">
                            <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100.0%;max-width:600.0px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#ffffff">
                              <tbody>
                                <tr>
                                  <td style="text-align:left;width:70.0%;min-width:70.0%;max-width:70.0%;padding:0" align="left" valign="middle" bgcolor="#ffffff">
                                    <span style="font-family:Georgia;font-size:20.0px;line-height:23.0px;color:#4b4b4b">Total (Incl. VAT):</span>
                                  </td>
                                  <td style="text-align:right;width:30.0%;min-width:30.0%;max-width:30.0%;padding:0" align="left" valign="middle" bgcolor="#ffffff">
                                    <span style="font-family:Courier new">
                                      <a style="text-decoration:none;color:#333333">${data.currency}${data.price}</a>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0;padding:0" bgcolor="#ffffff">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
                
                <!-- Footer section -->
                <center style="background-color:#f9f9f9!important;width:100%;table-layout:fixed">
                  <div style="background-color:#f9f9f9!important;max-width:600px">
                    <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:600px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#f9f9f9">
                      <tbody>
                        <tr>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0;padding:0" bgcolor="#f9f9f9">&nbsp;</td>
                          <td style="height:auto;padding:0" align="center" bgcolor="#f9f9f9">
                            <table style="border-spacing:0;font-family:sans-serif;color:#333333;margin:0 auto;width:100%;max-width:620px;text-align:center" cellspacing="0" cellpadding="0" align="center" bgcolor="#f9f9f9">
                              <tbody>
                                <tr>
                                  <td style="text-align:center;padding:0" align="center" bgcolor="#f9f9f9">
                                    <p>Hermès Customer Service 
                                      <br>Phone number: +31 20 794 08 76
                                      <br>Monday to Friday (except National holidays) 
                                      <br>from 10.30 am to 6.30 pm 
                                      <br>and Saturday, 10.00 am to 6.00 pm 
                                      <br>
                                      <a href="mailto:service.nl@hermes.com" style="font-family:'Arial';font-size:11px;line-height:14px;color:#9a9a9a;text-decoration:underline" target="_blank">service.nl@hermes.com</a> 
                                      <br>
                                      <a href="https://www.hermes.com/" style="font-family:'Arial';font-size:11px;line-height:14px;color:#9a9a9a;text-decoration:underline" target="_blank">www.hermes.com</a>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="width:6.25%;min-width:6.25%;max-width:6.25%;font-size:0;line-height:0;padding:0" bgcolor="#f9f9f9">&nbsp;</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      `
    },
  }
  
  export default hermesTemplate
  