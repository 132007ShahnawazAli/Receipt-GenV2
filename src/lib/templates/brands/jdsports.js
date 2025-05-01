// JD Sports receipt template
import { formatCurrency } from "../template-utils"

const jdSportsTemplate = {
  id: "jdsports",
  name: "JD Sports",
  description: "JD Sports order confirmation receipt",
  subject: "Thank you for your order, {name}",
  enabled: true,
  logo: "jd.png",
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "street",
      label: "Street Address",
      type: "text",
      required: true,
    },
    {
      name: "city",
      label: "City",
      type: "text",
      required: true,
    },
    {
      name: "zip",
      label: "Postal/Zip Code",
      type: "text",
      required: true,
    },
    {
      name: "orderdate",
      label: "Order Date",
      type: "text",
      required: true,
    },
    {
      name: "orderdate3d",
      label: "Expected Delivery Date",
      type: "text",
      required: true,
    },
    {
      name: "productname",
      label: "Product Name",
      type: "text",
      required: true,
    },
    {
      name: "productlink",
      label: "Product Image URL",
      type: "text",
      required: true,
    },
    {
      name: "link",
      label: "Product Link",
      type: "text",
      required: true,
    },
    {
      name: "price",
      label: "Product Price",
      type: "text",
      required: true,
    },
    {
      name: "size",
      label: "Product Size",
      type: "text",
      required: true,
    },
    {
      name: "currency",
      label: "Currency Symbol",
      type: "text",
      required: true,
      default: "£",
    },
  ],
  getHtml: (data) => {
    // Format the data
    const formattedData = {
      ...data,
      price: formatCurrency(data.price, ""),
    }

    // Generate the HTML
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    </head>
    <body>
    <div style="margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#f7f7f7">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#000000;line-height:20px;table-layout:fixed" width="100%">
            <tbody><tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Helvetica,Arial,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                        <tbody><tr>
                            <td height="60" bgcolor="#535A6B" style="color:#ffffff;font-size:16px;text-align:center"><strong>FREE DELIVERY ON ORDERS OVER ${formattedData.currency}100</strong></td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Helvetica,Arial,sans-serif;font-size:14px;color:#000000;width:600px" width="600">
                        <tbody><tr>
                            <td align="left" style="padding:30px"><img alt="JD logo" border="0" src="https://i1.adis.ws/i/jpl/uk-logo-mens-v2-3f6a1e5091d1297e3b2a643b65bb50ec?qlt=100" style="display:block;margin-bottom:10px"></td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Helvetica,Arial,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                        <tbody><tr>
                            <td align="left" style="color:#000000;font-size:45px;font-weight:900;line-height:45px;padding-left:30px;padding-bottom:30px;padding-right:30px">Thank you for your<br> order, ${formattedData.name}</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Helvetica,Arial,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                        <tbody><tr>
                            <td align="left" style="color:#000000;font-size:20px;font-weight:900;line-height:24px;padding-left:30px;padding-bottom:30px;padding-right:30px">Order number: 516239844<br>Order Date: ${formattedData.orderdate}</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Helvetica,Arial,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                        <tbody><tr>
                            <td align="left" style="color:#000000;font-size:20px;font-weight:500;line-height:24px;padding-left:30px;padding-bottom:40px;padding-right:30px">We'll let you know once your item(s) have been dispatched. Please note: One or more items in your order may be delivered in seperate packages</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Helvetica,Arial,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                        <tbody><tr>
                            <td bgcolor="#F7F7F7" height="15">&nbsp;</td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="600" border="0" align="center" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse" bgcolor="#ffffff">
                        <tbody><tr>
                            <td style="vertical-align:top">
                                <table width="300" border="0" align="left" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse;vertical-align:top">
                                    <tbody><tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                                                <tbody>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;padding-bottom:20px;color:#000000;font-size:24px;font-weight:900;line-height:24px;padding-top:30px">Delivery Method</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;color:#000000;font-size:18px;font-weight:500;line-height:24px"><span style="font-weight:900">Home - Standard Delivery</span><br>Expected delivery<br>on or before <span style="font-weight:900">${formattedData.orderdate3d}</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                      </tr>
                                </tbody></table>
    
                            </td>
                            <td>
    
                                <table width="300" border="0" align="right" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse">
                                    <tbody><tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                                                <tbody>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;padding-bottom:20px;color:#000000;font-size:24px;font-weight:900;line-height:24px;padding-top:30px">Delivery Address</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;color:#000000;font-size:18px;font-weight:500;line-height:24px;padding-bottom:30px">${formattedData.name}<br>${formattedData.street}<br><br>${formattedData.city}<br>${formattedData.zip}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            
            <tr>
                <td style="padding-top:5px;font-size:5px;line-height:5px">&nbsp;</td>
            </tr>
            <tr>
                <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:13px;color:#000000;line-height:20px;border-collapse:collapse;width:600px" width="600" bgcolor="#ffffff">
                        <tbody><tr>
                            <td style="padding-top:15px;font-size:24px;line-height:24px;text-align:left;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-weight:700;padding-left:30px;padding-top:30px;padding-bottom:30px" bgcolor="#ffffff">Items (1)</td>
                        </tr>
                        <tr>
                                <td>
                                    <table width="600" border="0" align="center" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse">
                                        <tbody><tr>
                                            <td style="padding-left:30px;padding-bottom:30px">
                                                <table width="350" border="0" align="left" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse">
                                                    <tbody><tr>
                                                        <td>
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="350">
                                                                <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:13px;color:#000000;line-height:20px;border-collapse:collapse;width:350px" width="350">
                                                                                    <tbody><tr>
                                                                                        <td width="35" height="31"><img src="https://i1.adis.ws/i/jpl/uk-logo-mens-v2-3f6a1e5091d1297e3b2a643b65bb50ec?qlt=100" width="35" height="31" style="display:block;border:0"></td>
                                                                                        <td style="font-size:20px;line-height:24px;text-align:left;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-weight:700;text-transform:uppercase;font-weight:700;text-transform:uppercase;padding-left:10px" bgcolor="#ffffff">Delivered By JD Sports</td>
                                                                                    </tr>
                                                                                </tbody></table>
                                                                            </td>
                                                                        </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                      </tr>
                                                </tbody></table>
    
                            </td>
                            <td style="padding-bottom:30px">
    
                                                <table width="220" border="0" align="right" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse">
                                                    <tbody><tr>
                                                        <td>
                                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="220">
                                                                <tbody>
                                                                    <tr>
                                                                    <td style="text-align:left;color:#000000;font-size:18px;font-weight:900;line-height:21px;padding-bottom:30px;text-align:right;padding-right:30px">#516239844</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
                <td align="center">
                    <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:13px;color:#000000;line-height:20px;border-collapse:collapse;width:600px" width="600">
    
                        <tbody><tr>
                            <td align="center" style="padding:15px 0px">
                                <table align="left" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" style="font-size:13px;line-height:18px;font-family:GothamMedium,Arial,Helvetica,sans-serif;color:#ffffff;border-collapse:collapse;width:120px" width="120">
                                    <tbody><tr>
                                        <td align="center" valign="top" style="padding-left:30px;padding-right:30px">
                                            <a href="${formattedData.link}" target="_blank" ><img src="${formattedData.productlink}" style="display:block" width="120" border="0"></a>
                                        </td>
                                    </tr>
                                </tbody></table>
    
                            </td>
                            <td>
    
    
                                <table align="left" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-size:13px;line-height:18px;color:#000000;font-family:GothamMedium,Arial,Helvetica,sans-serif;border-collapse:collapse;width:420px" width="420">
                                    <tbody><tr>
                                        <td align="left" style="font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;color:#000000">${formattedData.productname}<br>
                                            <strong>${formattedData.currency}${formattedData.price}</strong></td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;line-height:21px;color:#000000;padding-top:30px"><strong>Size: ${formattedData.size} | Qty: 1</strong></td>
                                    </tr>
                                </tbody></table>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
                     
            <tr>
                <td style="padding-top:5px;font-size:5px;line-height:5px">&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                                <tbody><tr>
                                    <td align="left" style="border-bottom:#f7f7f7 2px solid;padding:30px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:21px;color:#000000">Subtotal</td>
                                    <td align="right" style="border-bottom:#f7f7f7 2px solid;padding:30px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:21px;color:#000000"><strong>${formattedData.currency}${formattedData.price}.0</strong></td>
                                </tr>
                        
                        <tr>
                            <td align="left" style="border-bottom:#f7f7f7 2px solid;padding:30px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:21px;color:#000000">Delivery</td>
                            <td align="right" style="border-bottom:#f7f7f7 2px solid;padding:30px 15px;font-size:18px;color:#000000;line-height:21px;color:#000000"><strong>${formattedData.currency}0.00</strong></td>
                        </tr>
                        <tr>
                            <td align="left" style="border-bottom:#f7f7f7 2px solid;padding:30px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:24px;color:#000000"><strong>Total</strong></td>
                            <td align="right" style="border-bottom:#f7f7f7 2px solid;padding:30px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:24px;color:#000000"><strong>${formattedData.currency}${formattedData.price}.0</strong></td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
            <tr>
                <td style="padding-top:5px;font-size:5px;line-height:5px">&nbsp;</td>
            </tr>
            <tr>
                <td>
                    <table width="600" border="0" align="center" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse" bgcolor="#ffffff">
                        <tbody><tr>
                            <td>
                                <table width="300" border="0" align="left" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse">
                                    <tbody><tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                                                <tbody>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;padding-bottom:20px;color:#000000;font-size:24px;font-weight:900;line-height:24px;padding-top:30px">Billing Address</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;color:#000000;font-size:18px;font-weight:500;line-height:24px;padding-bottom:30px">${formattedData.name}<br>${formattedData.street}<br><br>${formattedData.city}<br>${formattedData.zip}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                      </tr>
                                </tbody></table>
    
                            </td>
                            <td valign="top">
    
                                <table valign="top" width="300" border="0" align="right" cellspacing="0" cellpadding="0" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#000000;line-height:16px;border-collapse:collapse;vertical-align:top">
                                    <tbody><tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                                                <tbody>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;padding-bottom:20px;color:#000000;font-size:24px;font-weight:900;line-height:24px;padding-top:30px">Payment Type</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align:left;padding-left:30px;color:#000000;font-size:18px;font-weight:500;line-height:24px;padding-bottom:30px">Visa</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    
            <tr>
                <td style="padding-top:5px;font-size:5px;line-height:5px">&nbsp;</td>
            </tr>
                <tr>
                    <td>
                        <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                            <tbody><tr>
                                <td align="center" style="padding:40px 25px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:24px;line-height:24px;color:#000000;font-weight:900;text-align:left">Need help with your order?</td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:20px;border-bottom:#f7f7f7 2px solid">
                                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                                        <tbody><tr>
                                            <td width="12%" align="right"><a href="https://www.jdsports.co.uk/pages/faqs/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r1_c1.png" style="display:block" border="0"></a></td>
                                            <td width="78%" style="font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:22px;line-height:26px;color:#000000;font-weight:700;text-align:left;padding-left:25px"><a style="display:block;text-decoration:none;color:#000000" href="https://www.jdsports.co.uk/pages/faqs/" target="_blank">FAQs</a></td>
                                            <td width="10%"><a href="https://www.jdsports.co.uk/pages/faqs/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r1_c3.png" style="display:block" border="0"></a></td>
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:20px;border-bottom:#f7f7f7 2px solid;padding-top:20px">
                                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                                        <tbody><tr>
                                            <td width="12%" align="right"><a href="https://www.jdsports.co.uk/customer-service/contact/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r3_c1.png" style="display:block" border="0"></a></td>
                                            <td width="78%" style="font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:22px;line-height:26px;color:#000000;font-weight:700;text-align:left;padding-left:25px"><a style="display:block;text-decoration:none;color:#000000" href="https://www.jdsports.co.uk/customer-service/contact/" target="_blank">Contact Us</a></td>
                                            <td width="10%"><a href="https://www.jdsports.co.uk/customer-service/contact/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r1_c3.png" style="display:block" border="0"></a></td>
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:20px;border-bottom:#f7f7f7 2px solid;padding-top:20px">
                                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                                        <tbody><tr>
                                            <td width="12%" align="right"><a href="https://www.jdsports.co.uk/customer-service/delivery/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r5_c1.png" style="display:block" border="0"></a></td>
                                            <td width="78%" style="font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:22px;line-height:26px;color:#000000;font-weight:700;text-align:left;padding-left:25px"><a style="display:block;text-decoration:none;color:#000000" href="https://www.jdsports.co.uk/customer-service/delivery/" target="_blank">Delivery</a></td>
                                            <td width="10%"><a href="https://www.jdsports.co.uk/customer-service/delivery/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r1_c3.png" style="display:block" border="0"></a></td>
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-top:20px;padding-bottom:15px">
                                    <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:14px;color:#000000;line-height:20px;width:600px" width="600">
                                        <tbody><tr>
                                            <td width="12%" align="right"><a href="https://www.jdsports.co.uk/page/delivery-returns/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r7_c1.png" style="display:block" border="0"></a></td>
                                            <td width="78%" style="font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:22px;line-height:26px;color:#000000;font-weight:700;text-align:left;padding-left:25px"><a style="display:block;text-decoration:none;color:#000000" href="https://www.jdsports.co.uk/page/delivery-returns/" target="_blank">Returns</a></td>
                                            <td width="10%"><a href="https://www.jdsports.co.uk/page/delivery-returns/" target="_blank"><img src="https://reporting.jdsports.co.uk/images/footer_r1_c3.png" style="display:block" border="0"></a></td>
                                        </tr>
                                    </tbody></table>
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
                <tr>
                        <td>
                            <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:24px;width:600px;text-align:left" width="600">
                                <tbody><tr>
                                    <td align="center" style="padding:20px 15px 0px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;color:#000000;text-align:left">To unsubscribe from marketing communication please <a href="#" style="color:#000000;text-decoration:underline" target="_blank">click here</a></td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                <tr>
                    <td>
                        <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;font-family:GothamUltra,Arial,Helvetica,sans-serif;font-size:18px;color:#000000;line-height:24px;width:600px;text-align:left" width="600">
                            <tbody><tr>
                                <td align="center" style="padding:20px 15px;font-family:GothamMedium,Arial,Helvetica,sans-serif;font-size:18px;line-height:24px;color:#000000;text-align:left">JD Sports Fashion Plc, Edinburgh House, Hollinsbrook Way, Pilsworth, Bury, Lancashire, BL9 8RR
                                    <br> Copyright © 2024 JD Sports Fashion Plc. All rights reserved.</td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
        </tbody></table>
    </body>
</html>
    `
  },
}

export default jdSportsTemplate
