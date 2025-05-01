/**
 * Prada receipt template
 */

const pradaTemplate = {
    id: "prada",
    name: "prada",
    displayName: "Prada",
    logo: "prada.png",
    enabled: true,
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Enter your email address",
      },
      {
        name: "productname",
        label: "Product Name",
        type: "text",
        required: true,
        placeholder: "Enter product name",
      },
      {
        name: "productcode",
        label: "Product Code",
        type: "text",
        required: true,
        placeholder: "Enter product code",
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
        placeholder: "Enter price (numbers only)",
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        required: true,
        placeholder: "£, $, €, etc.",
        defaultValue: "£",
      },
      {
        name: "color",
        label: "Product Color",
        type: "text",
        required: true,
        placeholder: "Enter product color",
      },
      {
        name: "size",
        label: "Product Size",
        type: "text",
        required: true,
        placeholder: "Enter product size",
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        required: true,
        placeholder: "Enter product image URL",
      },
      {
        name: "street",
        label: "Street Address",
        type: "text",
        required: true,
        placeholder: "Enter street address",
      },
      {
        name: "city",
        label: "City",
        type: "text",
        required: true,
        placeholder: "Enter city",
      },
      {
        name: "zip",
        label: "ZIP/Postal Code",
        type: "text",
        required: true,
        placeholder: "Enter ZIP/postal code",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        required: true,
        placeholder: "Enter country",
      },
      {
        name: "tax",
        label: "Tax Amount",
        type: "text",
        required: false,
        placeholder: "Enter tax amount",
        defaultValue: "360.00",
      },
    ],
  
    getHtml: (data) => {
      // Generate a random order number
      const orderNumber = `GBPR${Math.floor(Math.random() * 10000000000)}`
  
      return `
      <table style="border-collapse:collapse;border-spacing:0;min-width:600px" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" bgcolor="#FFFFFF">
      <tbody><tr>
      <td style="border-collapse:collapse;border-spacing:0;min-width:600px" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:10px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:580px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:580px"><img style="margin:0px;padding:0px;display:block;height:10px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="10" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;width:580px;font-size:0;line-height:1px;height:1px;vertical-align:top" align="center"><a href="#"> <img style="font-size:0;margin:0px;padding:0px;display:inline" src="https://i.imgur.com/71Onsqm.png" width="172" height="47" border="0" alt="Prada">
      </a>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:580px"><img style="margin:0px;padding:0px;display:block;height:10px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="10" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:10px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <span>
      <img style="font-size:0;margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NYG-JnXEw140tkzuvRIcN4dISDHj9PKwI5FrB1m5L0jrx97rVjF_R290wjXy99p5aPFzoNXehFKw5i8OS5L8wH8aqXaBF2qRdVz2bJT6fOemWhImp_Hfnhs-X57uA-lRcey2n9uq6MuualvBFEiFYCJkA26u6_XSherRXn8910_yZIGr_Wf=s0-d-e1-ft#https://assets.prada.com/content/dam/transactional/prada/banner/prada-galleria-milano-e1545421650426-600x233.jpg" width="600" border="0" alt="Prada Store">
      </span><span>
      <div style="display:none;width:0;overflow:hidden;max-height:0;min-height:0;margin:0;padding:0;font-size:0;line-height:1px;height:0px;vertical-align:top">
      <img src="https://ci3.googleusercontent.com/meips/ADKq_NYG-JnXEw140tkzuvRIcN4dISDHj9PKwI5FrB1m5L0jrx97rVjF_R290wjXy99p5aPFzoNXehFKw5i8OS5L8wH8aqXaBF2qRdVz2bJT6fOemWhImp_Hfnhs-X57uA-lRcey2n9uq6MuualvBFEiFYCJkA26u6_XSherRXn8910_yZIGr_Wf=s0-d-e1-ft#https://assets.prada.com/content/dam/transactional/prada/banner/prada-galleria-milano-e1545421650426-600x233.jpg" width="320" border="0" alt="Prada Store" style="margin:0px;padding:0px;display:inline;width:0px;max-height:0px">
      </div>
      </span><table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="left" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:480px"><img style="margin:0px;padding:0px;display:block;height:40px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="40" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:480px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#000000" align="left">
      Dear
      ${data.name},
      <br><br>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:580px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;color:#000001" align="left">
      Thanks for shopping with Prada.
      <br><br>
      We received your order and we are currently processing it. We will notify you via e-mail as soon as your order is shipped.
      <br><br>
      We hope you enjoyed your shopping experience with us and we look forward to welcoming you again on <a href="http://prada.com" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://prada.com&amp;source=gmail&amp;ust=1713796685034000&amp;usg=AOvVaw1bqxWCq7j9gXz6uughtZPn">prada.com</a>.
      <br>
      <br>Order Number <br><b>${orderNumber}</b><br>
      </td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px"><img style="margin:0px;padding:0px;display:block;height:20px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="20" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:480px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#000001;text-decoration:none" align="left">
      Please find below your order details:
      </td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px"><img style="margin:0px;padding:0px;display:block;height:30px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="30" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" bgcolor="#FFFFFF">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:40px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:400px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" bgcolor="#FFFFFF">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:400px"><img style="margin:0px;padding:0px;display:block;height:30px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="30" border="0"></td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:400px">
      <table style="border-collapse:collapse;border-spacing:0;width:400px" border="0" cellpadding="0" cellspacing="0" align="center">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="left">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:140px">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:120px" align="center"><img style="margin:0px;padding:0px;display:inline" src="${data.imageurl}" width="130" alt="Product" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:120px"><img style="margin:0px;padding:0px;display:block;height:10px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="10" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;vertical-align:top">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="right">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:230px">
      <table style="border-collapse:collapse;border-spacing:0;width:100%" border="0" cellpadding="0" cellspacing="0" align="left">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000;text-decoration:none" align="left">
      ${data.productname}
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:2.15;letter-spacing:0.3px" align="left">
      PRODUCT CODE :<br> ${data.productcode}<br>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="left">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:10px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="10" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;width:45%;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:3.3;letter-spacing:0.3px;font-weight:bold" align="left">
      PRICE:
      </td>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;width:45%;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:3.3;letter-spacing:0.3px;font-weight:bold" align="left">
      COLOR:
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:1.5;font-weight:bold" align="left">
      ${data.currency}${data.price}<br>
      </td>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:1.8;letter-spacing:0.4px" align="left">
      ${data.color}<br>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:290px"><img style="margin:0px;padding:0px;display:block;height:25px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="25" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:3.3;letter-spacing:0.3px;font-weight:bold" align="left">
      SIZE:
      </td>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#000000;text-decoration:none;line-height:3.3;letter-spacing:0.3px;font-weight:bold" align="left">
      QUANTITY:
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#000000;text-decoration:none;line-height:2.79" align="left">
      ${data.size}<br>
      </td>
      <td style="padding:0px;vertical-align:top;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#000000;text-decoration:none;line-height:2.79;letter-spacing:0.4px" align="left">
      1<br>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:400px"><img style="margin:0px;padding:0px;display:block;height:30px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="30" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:40px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:40px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:400px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:20px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="20" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000">
      Subtotal:
      </td>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000" align="right">
      ${data.currency}${data.price}<br>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:5px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="5" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000">
      Shipping costs:
      </td>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000" align="right">
      ${data.currency}0.00<br>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:5px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="5" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000">
      Taxes on sale (incl):
      </td>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000" align="right">
      ${data.currency}${data.tax || "360.00"}
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:5px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="5" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:5px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="5" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:5px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="5" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000">
      Total:
      </td>
      <td style="padding:0px;vertical-align:top;width:200px;font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#000000" align="right">
      ${data.currency}${data.price}<br>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:30px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="30" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:40px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px"><img style="margin:0px;padding:0px;display:block;height:30px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="30" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="left">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#000000">
      Payment method:
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top"><img style="margin:0px;padding:0px;display:block;height:10px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="10" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#000000">
      Credit Card
      <br>
      <br>
      </td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="left">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#000000">
      Each order is subject to prior verification of product availability. You will be informed as soon as possible via e-mail in case we are not able to satisfy entirely or partially your request.
      <br><br>
      You will be notified via e-mail once the availability of the product(s) featured in your order is confirmed, and you will be charged accordingly. The amount of pre-ordered and/or personalized products, if any, will be charged as the relevant confirmation e-mail is sent, even though such products are not yet ready to be shipped.
      <br><br>
      This e-mail is only a recap of the order we received. The sale contract will be deemed executed only when you receive the final confirmation e-mail.
      <br>
      <br>
      Best regards,
      <br>
      Prada Client Service
      </td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px"><img style="margin:0px;padding:0px;display:block;height:40px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="40" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px" colspan="1" bgcolor="#e6e9f0" align="center"><img style="margin:0px;padding:0px;display:block;height:1px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f5f7">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:480px"><img style="margin:0px;padding:0px;display:block;height:30px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="30" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:60px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="60" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
      <td>
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#000000">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:20px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      <td style="padding:0px;vertical-align:top;width:560px" align="center">
      <table style="border-collapse:collapse;border-spacing:0" border="0" cellpadding="0" cellspacing="0" align="center" width="100%">
      <tbody><tr>
      <td style="padding:0px;vertical-align:top;width:580px"><img style="margin:0px;padding:0px;display:block;height:40px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="40" border="0"></td>
      </tr>
      <tr>
      <td style="padding:0px;width:580px;font-size:0;line-height:1px;height:1px;vertical-align:top" align="Left"><a href="#"> <img style="font-size:0;margin:0px;padding:0px;display:inline" src="https://ci3.googleusercontent.com/meips/ADKq_NbhtJtg_Z-HucSBHoYNcQ1kF1HjFcBDH5o8cWt8xA19qQWaL47ONQiLFKF5AnKPPy-ZayIp7q26xnXU2-ytPLY5fm-pkVFoNKtpdTsHwGQxiyaR5nt_g-NWctUTSFJUFXinp_dCn33PGw=s0-d-e1-ft#https://assets.prada.com/content/dam/transactional/prada/logo/prada-white-79x13.png" width="79" height="13" border="0" alt="Prada">
      </a>
      </td>
      </tr>
      <tr>
      <td style="padding:0px;vertical-align:top;width:560px"><img style="margin:0px;padding:0px;display:block;height:10px" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="1" height="10" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      <td style="padding:0px;vertical-align:top;width:20px"><img style="margin:0px;padding:0px;display:block" src="https://ci3.googleusercontent.com/meips/ADKq_NZkvZSnnIvzHgs66GYJRFs1i5qfyTn-Vt5G5b2-Pc7fRXcb1vK8qLKCJ17MIUMBjQCka6Z6Hy7_jq7M7A0wQWZPK2AoECp2Yk7l=s0-d-e1-ft#https://store.prada.com/images/email/misc/spacer.gif" width="10" height="1" border="0"></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      </tbody></table>
      `
    },
  }
  
  export default pradaTemplate
  