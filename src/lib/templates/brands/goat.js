/**
 * GOAT Receipt Template
 *
 * This template generates a receipt for GOAT orders.
 */

const goatTemplate = {
    name: "GOAT",
    displayName: "GOAT",
    logo: "goat.png",
    enabled: true,
    subject: "Your GOAT Order Confirmation",
  
    // Define form fields for the template
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "John Doe",
        required: true,
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        placeholder: "Nike Air Force 1 '07",
        required: true,
      },
      {
        name: "sizee",
        label: "Size",
        type: "text",
        placeholder: "US 10",
        required: true,
      },
      {
        name: "color",
        label: "Color",
        type: "text",
        placeholder: "White",
        required: true,
      },
      {
        name: "price",
        label: "Price",
        type: "number",
        placeholder: "120.00",
        required: true,
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        placeholder: "$",
        required: true,
        defaultValue: "$",
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        placeholder: "123 Main St",
        required: true,
      },
      {
        name: "city",
        label: "City",
        type: "text",
        placeholder: "New York",
        required: true,
      },
      {
        name: "zip",
        label: "ZIP/Postal Code",
        type: "text",
        placeholder: "10001",
        required: true,
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        placeholder: "United States",
        required: true,
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        placeholder: "https://example.com/image.jpg",
        required: true,
      },
    ],
  
    // Generate HTML for the receipt
    getHtml: function (data) {
      // Ensure all required data is available
      const {
        name = "",
        pname = "",
        sizee = "",
        color = "",
        price = "0.00",
        currency = "$",
        street = "",
        city = "",
        zip = "",
        country = "",
        imageurl = "",
        brandLogo = this.logo,
      } = data
  
      // Calculate total (same as price in this case)
      const total = price
  
      return `
  <div style="margin:0;padding:0;box-sizing:border-box">
      <div dir="ltr">
        <div class="gmail_quote">
          <div dir="ltr" class="gmail_attr"><br></div><br><br>
          <div>
            <div bgcolor="#ffffff" marginwidth="0" marginheight="0" style="height:auto;padding:0;margin:0">
              <table align="center" style="font-size:0.0em" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="100%">
                <tbody>
                  <tr>
                    <td align="center" valign="top" bgcolor="#ffffff" width="100%">
                      <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif,normal;font-size:10px;font-weight:200;color:black;display:none!important;max-height:0px!important">
                        <tbody>
                          <tr>
                            <td align="center" style="font-family:Helvetica,Arial,sans-serif,normal;font-size:10px;font-weight:200;color:black">
                              You ordered the ${pname}
                            </td>
                          </tr>
                        </tbody>
                      </table>
  
                      <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif,normal;font-size:10px;font-weight:200;color:black">
                        <tbody>
                          <tr>
                            <td height="0"></td>
                          </tr>
                        </tbody>
                      </table>
  
                      <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;border:1px solid #000000">
                        <tbody>
                          <tr>
                            <td align="center" width="100%">
                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                                <tbody>
                                  <tr>
                                    <td width="100%" style="padding:10px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td align="center" width="100%">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="left" width="50%" style="padding-left:40px;font-family:Helvetica,Arial,sans-serif,normal;letter-spacing:3px;font-size:50px">
                                              <a href="https://goat.com/" target="_blank">
                                                <img src="https://sneakers-email-assets.s3.amazonaws.com/Logos/GOAT_emaillogo.png" width="40" height="9" border="0" style="max-width:40px;color:#000000;display:block" alt="GOAT">
                                              </a>
                                            </td>
  
                                            <td align="right" width="50%" style="padding-right:40px">
                                              <a href="https://goat.com/sneakers" style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif,normal;letter-spacing:2.3px;font-size:10px;line-height:24px;font-weight:500;text-transform:uppercase;text-decoration:underline;color:#000000" target="_blank">
                                                shop
                                              </a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:10px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" height="1" style="border-top:1px solid #000000"></td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:27.5px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" align="center" valign="middle" style="font-family:Georgia,Helvetica,Arial,sans-serif,normal;font-size:22px;color:#000000;font-weight:100;letter-spacing:0.3px;line-height:25px;padding:0px 10%">
                                      Thank you for your order
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="100%" style="padding:10px 0px"></td>
                                  </tr>
                                  <tr>
                                    <td width="100%" align="center" valign="middle" style="font-family:Helvetica,Arial,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:.4px;line-height:18px;padding:0px 10%">
                                      Your item(s) have been pre-authenticated by our specialists and are shipping directly to you from GOAT.
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:17.5px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td align="center" width="100%" style="padding:0px 40px">
                                      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #000000">
                                        <tbody>
                                          <tr>
                                            <td align="center" width="100%" style="padding:20px 0px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:14px;text-decoration:underline;color:#000000;font-weight:500;letter-spacing:2px;line-height:24px;text-transform:uppercase">
                                              <a href="#" style="text-decoration:underline;color:#000000;font-weight:500;letter-spacing:2px;line-height:24px" target="_blank">
                                                Order #511637332
                                              </a>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="1" style="border-top:1px solid #000000"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td align="center" width="100%" style="padding:0px 60px">
                                              <img src="${imageurl}" width="383" style="display:block;width:100%;max-width:383px">
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="25%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px">
                                                      <a style="color:#000000;text-decoration:none"></a>
                                                    </td>
                                                    <td align="left" width="75%" style="padding:0px 10px 0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:500;letter-spacing:2px;line-height:18px;text-transform:uppercase">${pname}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:15px 0px"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:20px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td align="left" width="100%" style="padding:0px 40px 15px 40px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:14px;color:#000000;font-weight:500;letter-spacing:2.3px;line-height:24px;text-transform:uppercase">
                                      item summary
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td align="center" width="100%" style="padding:0px 40px">
                                      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #000000">
                                        <tbody>
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="35%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      product name
                                                    </td>
                                                    <td align="left" width="65%" style="padding:0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">${pname}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="1" style="border-top:1px solid #b6b6b6"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="35%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      size
                                                    </td>
                                                    <td align="left" width="65%" style="padding:0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      ${sizee}
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="1" style="border-top:1px solid #b6b6b6"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="35%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      color
                                                    </td>
                                                    <td align="left" width="65%" style="padding:0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      ${color}
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="1" style="border-top:1px solid #b6b6b6"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="35%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      return policy
                                                    </td>
                                                    <td align="left" width="65%">
                                                      <a href="#" style="padding:0px 10px 0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase;text-decoration:underline" target="_blank">
                                                        returnable for site credit
                                                      </a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:20px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td align="left" width="100%" style="padding:0px 40px 15px 40px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:14px;color:#000000;font-weight:500;letter-spacing:2.3px;line-height:24px;text-transform:uppercase">
                                      order summary
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td align="center" width="100%" style="padding:0px 40px">
                                      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #000000">
                                        <tbody>
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="65%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      subtotal
                                                    </td>
                                                    <td align="right" width="35%" style="padding:0px 15px 0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">${currency}${price}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="1" style="border-top:1px solid #b6b6b6"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="65%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      shipping
                                                    </td>
                                                    <td align="right" width="35%" style="padding:0px 15px 0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">${currency}0.00</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="1" style="border-top:1px solid #b6b6b6"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:7.5px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="65%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#b6b6b6;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      verification
                                                    </td>
                                                    <td align="right" width="35%" style="padding:0px 15px 0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      free
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" height="0" style="border-top:1px solid #000000"></td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                                                <tbody>
                                                  <tr>
                                                    <td align="left" width="65%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:500;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                                      total paid
                                                    </td>
                                                    <td align="right" width="35%" style="padding:0px 15px 0px 5px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:500;letter-spacing:2px;line-height:18px;text-transform:uppercase">${currency}${price}</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:5px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="left" width="100%" style="padding:0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                              Visa ENDING IN 5654
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:20px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td align="left" width="100%" style="padding:0px 40px 15px 40px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:14px;color:#000000;font-weight:500;letter-spacing:2.3px;line-height:24px;text-transform:uppercase">
                                      shipping address
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td align="center" width="100%" style="padding:0px 40px;text-decoration:none;color:#000000">
                                      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="border:1px solid #000000">
                                        <tbody>
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="left" width="100%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:500;letter-spacing:2px;line-height:18px;text-transform:uppercase">${name}</td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                          <tr>
                                            <td align="left" width="100%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                              <a style="color:#000000;text-decoration:none">${street}</a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" width="100%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                              <a style="color:#000000;text-decoration:none">${city}</a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" width="100%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                              <a style="color:#000000;text-decoration:none">${zip}</a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td align="left" width="100%" style="padding:0px 5px 0px 20px;font-family:Helvetica Neue,Helvetica,sans-serif,normal;font-size:12px;color:#000000;font-weight:400;letter-spacing:2px;line-height:18px;text-transform:uppercase">
                                              <a style="color:#000000;text-decoration:none">${country}</a>
                                            </td>
                                          </tr>
  
                                          <tr>
                                            <td width="100%" style="padding:10px 0px"></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
  
                                  <tr>
                                    <td width="100%" style="padding:20px 0px"></td>
                                  </tr>
  
                                  <tr>
                                    <td align="center" width="100%" style="background-color:#000000">
                                      <table align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px">
                                        <tbody>
                                          <tr>
                                            <td align="center" width="100%">
                                              <table align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                <tbody>
                                                  <tr>
                                                    <td width="100%" style="padding:20px 0px"></td>
                                                  </tr>
  
                                                  <tr>
                                                    <td align="center" width="100%" style="background-color:#000000">
                                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                          <tr>
                                                            <td width="100%" align="center">
                                                              <a href="mailto:support@goat.com" style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif,normal;letter-spacing:1px;font-size:10px;line-height:15px;color:#ffffff;font-weight:400;text-decoration:underline;text-transform:uppercase" target="_blank">
                                                                support@goat.com</a>
                                                              <span style="text-decoration:none;color:#ffffff;font-size:11px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif,normal;font-weight:500;line-height:0px">  |  </span>
                                                              <a href="https://goat.com" style="font-family:Helvetica Neue,Helvetica,Arial,sans-serif,normal;letter-spacing:1px;font-size:10px;line-height:15px;color:#ffffff;font-weight:400;text-decoration:underline;text-transform:uppercase" target="_blank">
                                                                download goat app
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
  
                                                  <tr>
                                                    <td width="100%" style="padding:12.5px 0px;background-color:#000000"></td>
                                                  </tr>
  
                                                  <tr>
                                                    <td align="center" width="100%" style="background-color:#000000">
                                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                          <tr>
                                                            <td width="100%" align="center">
                                                              © GOAT All Rights Reserved
                                                              <span style="color:#ffffff;letter-spacing:.5px;font-size:10px;font-weight:300;text-decoration:none">  |  </span>
                                                              <a href="#" style="color:#ffffff;text-decoration:underline" target="_blank">
                                                                Terms
                                                              </a>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
  
                                                  <tr>
                                                    <td width="100%" style="padding:15px 0px;background-color:#000000"></td>
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
            </div>
          </div>
        </div>
      </div>
  </div>
      `
    },
  }
  
  export default goatTemplate
  