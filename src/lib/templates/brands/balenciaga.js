/**
 * Balenciaga Order Confirmation Template
 */

const balenciagaTemplate = {
  name: "Balenciaga",
  displayName: "Balenciaga",
  enabled: true,
  logo: "balenciaga.png",
  subject: "Balenciaga - Order Registration",

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
      placeholder: "Triple S Sneakers",
      defaultValue: "Triple S Sneakers",
    },
    {
      name: "color",
      label: "Color",
      type: "text",
      required: true,
      placeholder: "Black",
      defaultValue: "Black",
    },
    {
      name: "price",
      label: "Price",
      type: "number",
      required: true,
      placeholder: "850",
      defaultValue: "850",
    },
    {
      name: "total",
      label: "Total",
      type: "number",
      required: true,
      placeholder: "850",
      defaultValue: "850",
    },
    {
      name: "currency",
      label: "Currency Symbol",
      type: "text",
      required: true,
      placeholder: "£",
      defaultValue: "£",
    },
    {
      name: "street",
      label: "Street Address",
      type: "text",
      required: true,
      placeholder: "123 Fashion Street",
      defaultValue: "123 Fashion Street",
    },
    {
      name: "cityzip",
      label: "City and Zip/Postal Code",
      type: "text",
      required: true,
      placeholder: "London SW1A 1AA",
      defaultValue: "London SW1A 1AA",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      required: true,
      placeholder: "United Kingdom",
      defaultValue: "United Kingdom",
    },
    {
      name: "pimage",
      label: "Product Image URL",
      type: "url",
      required: true,
      placeholder: "https://example.com/product-image.jpg",
      defaultValue: "https://placeholder.svg?height=200&width=200",
    },
  ],

  // Method to generate HTML with placeholders replaced
  getHtml: (data) => `
  <html>
  <head>
  <meta charset="utf-8" />
  </head>
  <body>
  <div dir="ltr">
  <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="min-width:601px" width="100%">
  <tbody>
  <tr>
  <td align="center" border="0" cellpadding="0" cellspacing="0" style="min-width:601px" width="100%">
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="45" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:45px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-left:1px solid #000;border-right:1px solid #000">
  <tbody>
  <tr>
  <td align="center">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:1px solid #000">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="14" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:14px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:598px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;color:#000000">
  <a href="https://www.balenciaga.com" target="_blank">
  <img border="0" height="16" src="https://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/73c19a3b-e950-4a7b-92a3-3b6c9767e6c7.png" style="font-size:0;margin:0px;padding:0px;display:block" width="137" />
  </a>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #000">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="14" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:14px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:440px">
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="80" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:80px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px">
  <strong>
  ORDER REGISTRATION
  </strong>
  <br/>
  <br/>
  Dear ${data.name},
  <br/>
  Thank you for your order with Balenciaga.
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="80" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:80px" width="1" />
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
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-top:1px solid #000">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:440px">
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="40" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:40px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px">
  We are pleased to confirm that your order EUQ0PRBPB123222348 has been registered and will be processed accordingly.
  <br/>
  You can follow the status of your order on our website, either in our dedicated Client Service area or by accessing the
  <a href="https://www.balenciaga.com/en-gb/account" style="color:#000000;text-decoration:underline" target="_blank">
  My Account
  </a>
  section if you already have an account.
  </p>
  </td>
  </tr>
  <tr>
  <td align="center" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:10px;margin-bottom:10px">
  We will confirm the shipment of your order by email.
  <br/>
  <br/>
  If you are a registered client, you may cancel your order via your account within 30 minutes after placing it.
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="40" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:40px" width="1" />
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
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-top:1px solid #000">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:440px">
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="12" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:12px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:0;margin-bottom:0">
  <b>
  ORDER DETAILS
  </b>
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="12" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:12px" width="1" />
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
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-top:1px solid #000">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="center" style="width  width="100%">
  <tbody>
  <tr>
  <td align="center" style="width:200px;background-color:#ffffff;vertical-align:middle">
  <img src="${data.pimage}" width="200" />
  </td>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="font-family:Arial,Helvetica,sans-serif;width:290px;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;margin-left:10px;margin-right:5px;margin-top:10px;margin-bottom:10px;text-transform:uppercase">
  <strong>
  ${data.pname}
  </strong>
  <br/>
  ${data.currency} ${data.total}.00
  </p>
  </td>
  </tr>
  <tr>
  <td align="left" style="font-family:Arial,Helvetica,sans-serif;width:290px;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;margin-left:10px;margin-right:5px;margin-top:10px;margin-bottom:5px">
  Colour: ${data.color}
  <br/>
  Quantity: 1
  </p>
  </td>
  </tr>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="12" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:12px" width="1" />
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
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-top:1px solid #000">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:580px">
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="40" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:40px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;vertical-align:top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="center" style="width:170px">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  Subtotal:
  </p>
  </td>
  <td align="left" style="width:250px;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:right;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  ${data.currency} ${data.total}.00
  </p>
  </td>
  </tr>
  <tr>
  <td align="center" style="width:170px">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  Shipping fees:
  </p>
  </td>
  <td align="left" style="width:250px;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:right;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  ${data.currency} 0
  </p>
  </td>
  </tr>
  <tr>
  <td align="center" style="width:170px">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  </p>
  </td>
  <td align="left" style="width:250px;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:right;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  </p>
  </td>
  </tr>
  <tr>
  <td align="center" style="width:170px">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:left;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  <strong>
  TOTAL (incl. VAT):
  </strong>
  </p>
  </td>
  <td align="left" style="width:250px;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:right;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-top:5px;margin-bottom:5px">
  <strong>
  ${data.currency} ${data.total}.00
  </strong>
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="40" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:40px" width="1" />
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
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-top:1px solid #000">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:440px">
  <table align="center" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="40" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:40px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#666666;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  <b>
  Shipping Address
  </b>
  </p>
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  ${data.name}
  <br/>
  ${data.street}
  <br/>
  ${data.cityzip}
  <br/>
  ${data.country}
  <br/>
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="20" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:20px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#666666;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  <b>
  Billing Address
  </b>
  <br/>
  </p>
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  ${data.name}
  <br/>
  ${data.street}
  <br/>
  ${data.cityzip}
  <br/>
  ${data.country}
  <br/>
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="20" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:20px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#666666;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  <b>
  Payment method
  </b>
  </p>
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  Credit card
  </p>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="20" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:20px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="100%">
  <tbody>
  <tr>
  <td align="left" style="padding:0px;width:440px;font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;vertical-align:top">
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#666666;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  <b>
  Shipping method
  </b>
  </p>
  <p style="font-family:Arial,Helvetica,sans-serif;font-size:14px;text-align:center;line-height:20px;color:#000000;margin-left:10px;margin-right:10px;margin-bottom:0;margin-top:0;padding-bottom:0;padding-top:0">
  STANDARD
  </p>
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
  <br/>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-top:1px solid #000">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="15" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:15px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="24" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:24px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0" width="440">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:16px;color:#000000">
  Should you need any further information, please call us at
  <a href="tel:+44%2020%2033%2018%2060%2027" style="margin-right:0px;text-decoration:underline;color:#000000" target="_blank">
  +44 20 33 18 60 27
  </a>
  or
  <a href="https://www.balenciaga.com/en-gb/contactus" style="text-decoration:underline;color:#000000" target="_blank">
  email us
  </a>
  .
  <br/>
  By contacting Client Service, you agree that your data will be transferred outside your country.
  <br/>
  <br/>
  Balenciaga Client Service
  </td>
  </tr>
  </tbody>
  </table>
  <div>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-top:1px solid #000">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top;width:599px">
  <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="12" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:12px" width="1" />
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:center;width:599px">
  <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0">
  <tbody>
  <tr>
  <td align="center" style="padding:0px;vertical-align:center;width:599px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#181212">
  © 2024 Balenciaga
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;border-bottom:1px solid #000">
  <tbody>
  <tr>
  <td style="padding:0px;vertical-align:top;width:599px">
  <img border="0" height="12" src="http://image.news.balenciaga.com/lib/fe3e15707564047f701372/m/1/51a78701-58a5-4e28-b13f-fdcd57ed0b3a.gif" style="margin:0px;padding:0px;display:block;height:12px" width="1" />
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
  </body>
  </html>
    `,
}

export default balenciagaTemplate
