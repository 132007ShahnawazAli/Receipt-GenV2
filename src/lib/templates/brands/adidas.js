/**
 * Adidas Receipt Template
 *
 * This template generates a receipt email in the style of Adidas's order confirmation emails.
 */

const getHtml = (data) => {
    // Format the price with 2 decimal places
    const formattedPrice = Number.parseFloat(data.price || 0).toFixed(2)
  
    // Calculate tax (assuming 20% tax rate)
    const tax = (Number.parseFloat(data.price || 0) * 0.2).toFixed(2)
  
    // Calculate total (price + tax)
    const total = (Number.parseFloat(data.price || 0) + Number.parseFloat(tax)).toFixed(2)
  
    return `
  <div dir="ltr">
      <center>
      <table id="body" style="border-collapse:collapse;box-sizing:border-box;height:100%;margin:0;min-height:100%;min-width:100%;padding:0;text-align:left;width:100%" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td align="center" valign="top">
      <table style="min-width:100%" role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td>
      <table style="border-collapse:collapse;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;background:#000000" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;padding:0px 7.5px" valign="middle">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-size:14px;max-width:640px!important;width:100%;color:#ffffff" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:5px 0" valign="middle">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td id="preheader-snippet-text" style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-size:12px;text-align:left">
      <a href="#" id="preheader-snippet-link" name="preheader-snippet-link" style="color:#ffffff;text-decoration:underline" rel="noopener" target="_blank">It's official</a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:5px 0;text-align:left" valign="middle">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td id="preheader-browser-view-text" style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-size:12px;text-align:right">
      <a href="#" id="preheader-browser-view-link" name="preheader-browser-view-link" style="color:#ffffff;text-decoration:underline" target="_blank">View this email online</a>
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
      <table style="min-width:100%" role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td>
      <table style="background-color:#0a3bff;border-collapse:collapse;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif" valign="bottom">
      <table style="border-collapse:collapse;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;padding:15px 0;width:76px" valign="bottom">
      <table style="border-collapse:collapse;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;text-align:center">
      <a href="#" id="header-adidas-logo-link" name="header-adidas-logo-link" target="_blank">
      <img id="header-adidas-logo-image" style="border:0;height:60px;width:90px;max-width:100%;outline:none;padding-bottom:2px;padding-left:0px;text-decoration:none;vertical-align:bottom;object-fit:cover" src="https://ci3.googleusercontent.com/meips/ADKq_Nalsznsr5YvIqVThaJtN3bZ2iyJgRmFv0EU07Wv1LjfusIJk4TSaDF9mEB7yp6sxiJFSYX8w7_CW2JgoF5d2x3jOUsA7neL6Qd4TdG8QsBYy7UDkQZzdv-Q-8w0jQrVoViu968tpW5INBKqxuibiLdueltUPpwT7scXfFn9DFi5rtc=s0-d-e1-ft#https://image.staging.link.adidas.com/lib/fe6515707c62007e7715/m/34/29ca9bae-87e1-4725-94c8-ed3d3d8af900.png" alt="Adidas Logo" width="100" height="72" name="header-adidas-logo-image" align="center">
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
      </td>
      </tr>
      </tbody>
      </table>
      <table style="min-width:100%" role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td>
      <table style="background-repeat:repeat-x;border-collapse:collapse;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;background-color:#eceef0" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdiHausDIN,Helvetica,Arial,sans-serif;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif" align="center" valign="top">
      <a name="body-banner-Image-link" id="body-banner-Image-link" style="color:#ffffff;text-transform:uppercase;text-decoration:none;display:block" href="#" rel="noopener" target="_blank">
      <span id="htmplar-b2xjaWNpbmdB-desktop" style="width:100%">
      <img style="border:0;height:auto;max-width:100%;outline:none;text-decoration:none;vertical-align:bottom;width:100%" src="https://ci3.googleusercontent.com/meips/ADKq_NaHT1aJimeA4y93KLgYuKltRYgofdYdXtXzNhprzn_UvRmvEm_KuUlf-yb52rEssFZAeFJDl5TjXCmN5cirbxn_Tm48yXinZ7qgRzcy21HTHAGhWmIaZc5cxtDKd2hpxf3hrAClqhCCCNFYqsw_2LlFBRkhUZERh8rqHpNf_xDXWas=s0-d-e1-ft#https://image.staging.link.adidas.com/lib/fe6515707c62007e7715/m/38/171360fa-a57c-4ca3-b8c2-cf3b51908f63.gif" alt="mainbody-Banner-image" align="center">
      </span>
      </a>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <table style="background-color:#eceef0;border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:0px 7.5px 0px 7.5px" valign="top">
      <table style="border-collapse:collapse;color:#585858;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;text-align:left;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" valign="top">
      <table id="htmplar-caption-welcome-to-br-the-team" style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;width:100%" border="0" cellspacing="0" cellpadding="0" align="left">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;width:100%" border="0" cellspacing="0" cellpadding="0" align="top">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:0px 0px 0px 0px" valign="top">
      <div>
      <h2 id="htmplar-b2xjaWNpbmdB-desktop" style="font-family:AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-size:32px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:40px;letter-spacing:2px;color:#0a3bff;margin:40px 0px 40px 0px;text-align:center">WE'VE GOT YOU</h2>
      <p id="htmplar-aXd0IG4gLnR0" style="color:#000000;text-decoration:underline;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-weight:bold;margin:40px 0px 0px 0px;font-size:13px;padding:0px 0px 10px 0px;text-align:left">ORDER
      <a name="body-order-number-link" id="body-order-number-link" style="color:#000000;text-decoration:underline;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-weight:bold;font-size:13px;margin:10px 0px 0px 0px;padding:0px 0px 10px 0px;text-align:center" href="#" rel="noopener" target="_blank">${data.ordernumber || "AD-12345678"}</a>
      </p>
      <p id="htmplar-aXd0IG4gLnR0" style="color:#000000;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-size:16px;margin:10px 0;padding:0;text-align:left;padding-top:0px">You waited. You wanted. You got them. Thanks for your order.
      <br>
      <br>Until they're in your possession, we'll keep you posted every step of the way. From ordered to shipped to delivered - we got you. Can't wait? Check the order status in the app.
      </p>
      <table style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;width:100%!important;text-transform:uppercase;border-collapse:separate;font-size-adjust:none;font-stretch:normal" border="0" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:20px 0px;font-size-adjust:none;font-stretch:normal">
      <table style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;text-align:left;border-collapse:collapse;font-size-adjust:none;font-stretch:normal" border="0" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td id="body-CTA1-text" style="font:16px AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif,AdiHaus,Helvetica,Arial,sans-serif;padding:10px 20px 12px;text-align:left;color:#ffffff;font-size-adjust:none;font-stretch:normal;background-color:#0a3bff">
      <a name="body-CTA1-link" id="body-CTA1-link" style="text-align:left;color:#ffffff;text-transform:uppercase;text-decoration:none;display:block;background-color:#0a3bff" href="#" rel="noopener" target="_blank">
      <span style="font-family:AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;background-color:#0a3bff;text-transform:uppercase;line-height:1.15;font-size:13px;font-weight:bold;letter-spacing:1.6px;text-decoration:none;vertical-align:middle;display:inline-block">CHECK ORDER</span>
      </a>
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
      <table style="min-width:100%" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td>
      <table style="border-collapse:collapse;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;background-color:#eceef0" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;padding:0px 7.5px" valign="top">
      <table style="border-collapse:collapse;color:#000000;font:16px/1.25 AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;text-align:left;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" valign="top">
      <div>
      <h2 style="color:#0d0d0d;display:block;font-size:24px;font:AdihausDIN;font-weight:500;letter-spacing:normal;margin:20px 0px;padding:0;text-align:left">WHAT YOU ORDERED</h2>
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" cellspacing="0" cellpadding="0" align="left">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:0 10px 20px 0;padding-bottom:20px;text-align:left" valign="top">
      <img id="product-item-image" style="width:150px;display:block" src="${data.imageurl || "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a05ff049da4861b42bae8c01087e1e_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg"}" alt="Cart Image" width="150" name="product-item-image" border="0">
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-bottom:20px;text-align:left" valign="top">
      <span id="product-name-text" style="text-transform:uppercase">${data.pname || "Stan Smith Shoes"}</span>
      <br>
      <span id="product-totalprice-text">${data.currency || "€"}${formattedPrice}</span>
      <br>
      <br>
      <span id="product-color-text">Color: ${data.color || "Cloud White / Green"}</span>
      <br>
      <span id="product-size-text">Size: ${data.size || "UK 9"}</span>
      <br>
      <span id="product-quantity-text">Quantity: 1</span>
      <br>
      <span id="product-articleno-text">Article No: ${data.articelno || "FX5502"}</span>
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
      </td>
      </tr>
      </tbody>
      </table>
      <table style="min-width:100%" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td>
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;background-color:#eceef0" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:0px 7.5px" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-left:0" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="display:inline-block;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-top:20px;padding-bottom:20px;font-size:24px" valign="top">
      <h2 style="color:#000;display:block;font:24px AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-weight:500;letter-spacing:normal;line-height:22px;margin:0;padding:0;text-align:left;text-transform:uppercase">ORDER SUMMARY</h2>
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
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;background-color:#eceef0" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding:0px 7.5px" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-left:0" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" valign="top">&nbsp;</td>
      </tr>
      </tbody>
      </table>
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-top:10px;width:30%;padding-right:10px" valign="top">
      <h2 style="color:#000;display:block;font:16px AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-weight:bold;letter-spacing:normal;line-height:22px;margin:0;padding:0;text-align:left;text-transform:uppercase;white-space:nowrap">DELIVERY ADDRESS</h2>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-top:10px;width:30%;padding-right:10px" valign="top">
      <h2 style="color:#000;display:block;font:16px AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-weight:bold;letter-spacing:normal;line-height:22px;margin:0;padding:0;text-align:left;text-transform:uppercase;white-space:nowrap">BILLING ADDRESS</h2>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-top:10px;width:35%" valign="top">
      <h2 style="color:#000;display:block;font:16px AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;font-weight:bold;letter-spacing:normal;line-height:22px;margin:0;padding:0;text-align:left;text-transform:uppercase">ORDER SUMMARY</h2>
      </td>
      </tr>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-right:20px;padding-bottom:20px" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-left:0" valign="top">
      <table id="htmplar-caption" style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;margin:0 7px;margin-left:0;margin-right:0;overflow:hidden;text-align:center" border="0" cellspacing="0" cellpadding="0" align="left">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000" align="left" valign="top">
      <span id="ordersum-ship-text" style="color:#000000">
      <span id="ordersum-ship-row1-text">${data.name || "John Doe"}
      <br>
      </span>
      <span id="ordersum-ship-row2-text">${data.street || "123 Main St"}
          <br>
  ${data.city || "Berlin"}
  <br>
     ${data.zip || "10115"} 
     <br>
     ${data.country || "Germany"}
      <br>
      </span>
      <br>
      <span id="ordersum-ship-bold-row1-label-text" style="font-weight:bold;color:#000000">Via:</span>
      <span id="ordersum-ship-bold-row1-text" style="font-weight:bold;color:#000000">Standard Delivery
      <br>
      </span>
      </span>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-right:20px;padding-bottom:20px" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-left:0" valign="top">
      <table id="htmplar-caption" style="border-collapse:collapse;font:16px/1  valign="top">
      <table id="htmplar-caption" style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;margin:0 7px;margin-left:0;margin-right:0;overflow:hidden;text-align:center" border="0" cellspacing="0" cellpadding="0" align="left">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000" align="left" valign="top">
      <span id="ordersum-bill-text" style="color:#000000">
      <span id="ordersum-bill-row2-text">${data.name || "John Doe"}
      <br>${data.street || "123 Main St"}<br>
  ${data.city || "Berlin"}  <br> ${data.zip || "10115"}<br> ${data.country || "Germany"}
      <br>
      </span>
      <br>
      <span id="ordersum-bill-bold-row1-label-text" style="font-weight:bold;color:#000000">Via:</span>
      <span id="ordersum-bill-bold-row1-text" style="font-weight:bold;color:#000000">PayPal
      <br>
      </span>
      </span>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-bottom:20px" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;max-width:640px!important;width:100%" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;padding-left:0" valign="top">
      <table id="htmplar-caption" style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;margin:0 7px;margin-left:0;margin-right:0;overflow:hidden;text-align:center;width:100%" border="0" cellspacing="0" cellpadding="0" align="left">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" align="left" valign="top">
      <table style="border-collapse:collapse;font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif" border="0" cellspacing="0" cellpadding="0" align="top">
      <tbody>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px;width:60%" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:left">Products</h2>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:right">${data.currency || "€"}${formattedPrice}</h2>
      </td>
      </tr>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:left">Delivery</h2>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:right">FREE</h2>
      </td>
      </tr>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:left">Tax</h2>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:right">${data.currency || "€"}${tax}</h2>
      </td>
      </tr>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px;padding-top:20px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:600;letter-spacing:normal;margin:0;padding:0;text-align:left">Total</h2>
      </td>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000;padding-right:10px;padding-top:20px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:600;letter-spacing:normal;margin:0;padding:0;text-align:right">${data.currency || "€"}${total}</h2>
      </td>
      </tr>
      <tr>
      <td style="font:16px/1.25 AdihausDIN,AdiHaus,Helvetica,Arial,sans-serif;color:#000000;padding-right:10px;padding-bottom:20px" valign="top">
      <h2 style="display:block;font-size:16px;font-weight:normal;letter-spacing:normal;margin:0;padding:0;text-align:left;color:#000">(Inclusive of Tax)</h2>
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
      </div>
    `
  }
  
  // Define the template configuration
  const adidasTemplate = {
    name: "Adidas",
    displayName: "Adidas",
    logo: "adidas.png",
    subject: "Your Adidas Order Confirmation - Order #{ordernumber}",
    enabled: true,
    fields: [
      {
        name: "ordernumber",
        label: "Order Number",
        type: "text",
        required: true,
        placeholder: "AD-12345678",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "customer@example.com",
      },
      {
        name: "name",
        label: "Customer Name",
        type: "text",
        required: true,
        placeholder: "John Doe",
      },
      {
        name: "pname",
        label: "Product Name",
        type: "text",
        required: true,
        placeholder: "Stan Smith Shoes",
      },
      {
        name: "price",
        label: "Price",
        type: "text",
        required: true,
        placeholder: "89.95",
      },
      {
        name: "currency",
        label: "Currency Symbol",
        type: "text",
        required: true,
        placeholder: "€",
      },
      {
        name: "color",
        label: "Color",
        type: "text",
        required: true,
        placeholder: "Cloud White / Green",
      },
      {
        name: "size",
        label: "Size",
        type: "text",
        required: true,
        placeholder: "UK 9",
      },
      {
        name: "articelno",
        label: "Article Number",
        type: "text",
        required: true,
        placeholder: "FX5502",
      },
      {
        name: "imageurl",
        label: "Product Image URL",
        type: "url",
        required: true,
        placeholder:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a05ff049da4861b42bae8c01087e1e_9366/Stan_Smith_Shoes_White_FX5502_01_standard.jpg",
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
        placeholder: "Berlin",
      },
      {
        name: "zip",
        label: "ZIP/Postal Code",
        type: "text",
        required: true,
        placeholder: "10115",
      },
      {
        name: "country",
        label: "Country",
        type: "text",
        required: true,
        placeholder: "Germany",
      },
    ],
    getHtml,
  }
  
  export default adidasTemplate
  