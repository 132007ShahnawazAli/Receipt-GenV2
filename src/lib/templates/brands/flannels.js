// Flannels receipt template
import { formatCurrency } from "../template-utils"

const flannelsTemplate = {
  id: "flannels",
  name: "Flannels",
  description: "Flannels order confirmation receipt",
  subject: "Thank you for your order!",
  enabled: true,
  logo: "flannels.png",
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
      name: "country",
      label: "Country",
      type: "text",
      required: true,
    },
    {
      name: "estorderdate",
      label: "Estimated Delivery Date",
      type: "text",
      required: true,
    },
    {
      name: "ordedate",
      label: "Order Date",
      type: "text",
      required: true,
    },
    {
      name: "ordernumber",
      label: "Order Number",
      type: "text",
      required: true,
    },
    {
      name: "imageurl",
      label: "Product Image URL",
      type: "text",
      required: true,
    },
    {
      name: "brand",
      label: "Product Brand",
      type: "text",
      required: true,
    },
    {
      name: "productcode",
      label: "Product Code",
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
      name: "currency",
      label: "Currency Symbol",
      type: "text",
      required: true,
      default: "£",
    },
    {
      name: "delivery",
      label: "Delivery Cost",
      type: "text",
      required: true,
      default: "0.00",
    },
    {
      name: "total",
      label: "Total Amount",
      type: "text",
      required: true,
    },
  ],
  getHtml: (data) => {
    // Format the data
    const formattedData = {
      ...data,
      price: formatCurrency(data.price, ""),
      delivery: formatCurrency(data.delivery, ""),
      total: formatCurrency(data.total, ""),
    }

    // Generate the HTML
    return `
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
</head>
<body>
<table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;text-align:left;width:100%!important;background-color:rgb(255,255,255);color:rgb(35,40,43)">
  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
      <td align="center" valign="top" style="font-family:Helvetica,Helvetica,Arial,sans-serif">
        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="max-width:none;margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
          <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:0px;text-align:center;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <a href="https://www.flannels.com" style="font-family:Helvetica,Arial,sans-serif" target="_blank">
                          <img src="https://www.flannels.com/images/core/FLAN-email-logo-light-4.png" width="auto" height="60" alt="Flannels" border="0" style="height:60px;width:auto;padding:0px;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-style:italic;font-weight:700;line-height:28px;text-decoration:none;color:inherit">
                          <div align="center" style="display:none;overflow:hidden;float:left;width:0px;max-height:0px;max-width:0px;line-height:0;font-family:Helvetica,Arial,sans-serif">
                            <img src="https://www.flannels.com/images/core/FLAN-email-logo-dark-4.png" width="auto" height="60" alt="Flannels" border="0" style="height:60px;width:auto;padding:0px;font-family:Helvetica,Arial,sans-serif;font-size:24px;font-style:italic;font-weight:700;line-height:28px;text-decoration:none;color:inherit">
                          </div>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:30px 35px;text-align:left;font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
                        <h1 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:22px;font-weight:700;line-height:24px">THANK YOU FOR YOUR ORDER!</h1>
                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 10px;font-size:16px;font-weight:400;line-height:20px">We have now received your order and will contact you again when your order has processed.</p>
                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:20px">Please note that for orders with more than one piece, they may ship separately depending on where the stock is located.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:0px 15px 10px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                          <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                              <td style="padding:30px 20px 20px;font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(248,248,248);color:rgb(35,40,43)">
                                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="text-align:center;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="padding:6px 0px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:block;height:6px;font-size:6px;line-height:6px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;min-width:100%!important"> </div>
                                      </td>
                                      <td width="18" style="width:18px;padding-bottom:9px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:inline-block;font-size:13px;font-weight:700;text-align:center;text-decoration:none;width:18px;border-radius:36px;line-height:18px;font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(0,0,0);color:rgb(0,0,0)"> </div>
                                      </td>
                                      <td style="padding:6px 0px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:block;height:6px;font-size:6px;line-height:6px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;min-width:100%!important;background-color:rgb(0,0,0)"> </div>
                                      </td>
                                      <td style="padding:6px 0px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:block;height:6px;font-size:6px;line-height:6px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;min-width:100%!important;background-color:rgb(225,225,225)"> </div>
                                      </td>
                                      <td width="14" style="width:14px;padding-top:2px;padding-bottom:11px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:inline-block;font-size:13px;font-weight:700;text-align:center;text-decoration:none;width:14px;border-radius:28px;line-height:14px;font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(225,225,225);color:rgb(225,225,225)"> </div>
                                      </td>
                                      <td style="padding:6px 0px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:block;height:6px;font-size:6px;line-height:6px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;min-width:100%!important;background-color:rgb(225,225,225)"> </div>
                                      </td>
                                      <td style="padding:6px 0px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:block;height:6px;font-size:6px;line-height:6px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;min-width:100%!important;background-color:rgb(225,225,225)"> </div>
                                      </td>
                                      <td width="14" style="width:14px;padding-top:2px;padding-bottom:11px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:inline-block;font-size:13px;font-weight:700;text-align:center;text-decoration:none;width:14px;border-radius:28px;line-height:14px;font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(225,225,225);color:rgb(225,225,225)"> </div>
                                      </td>
                                      <td style="padding:6px 0px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <div style="display:block;height:6px;font-size:6px;line-height:6px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;min-width:100%!important"> </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="text-align:center;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px;letter-spacing:0.48px;color:rgb(0,0,0)">RECEIVED</p>
                                      </td>
                                      <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px;letter-spacing:0.48px;color:rgb(136,136,136)">PROCESSED</p>
                                      </td>
                                      <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px;letter-spacing:0.48px;color:rgb(136,136,136)">&nbsp;SHIPPED&nbsp;</p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <hr style="max-width:436px;margin:0px auto 20px;border-style:solid;border-width:1px 0px 0px;font-family:Helvetica,Helvetica,Arial,sans-serif;border-color:rgb(225,225,225)">
                                <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;line-height:22px;font-weight:400;text-align:center">LATEST ESTIMATED DELIVERY</h3>
                                <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-weight:700;font-size:26px;line-height:24px;text-align:center;text-transform:uppercase;color:rgb(0,0,0)">${formattedData.estorderdate}</h3>
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
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:0px 15px 10px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                          <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                              <td style="padding:30px 20px 20px;border:1px solid rgb(238,238,238);font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
                                <h2 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:18px;font-weight:700;line-height:22px">YOUR DELIVERY DETAILS</h2>
                                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="vertical-align:top;padding-right:8.5px;padding-left:0px;width:33%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:700;line-height:22px">Delivery Address</h3>
                                      </td>
                                      <td style="vertical-align:top;padding-right:0px;width:67%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:400;line-height:22px">${formattedData.name}<br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.street}</a>
                                          <br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.city}</a>
                                          <br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.zip}</a>
                                          <br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.country}</a>
                                          </p>
                                      </td>
                                    </tr>
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="vertical-align:top;padding-right:8.5px;padding-left:0px;width:33%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:700;line-height:22px">Delivery Service</h3>
                                      </td>
                                      <td style="vertical-align:top;padding-right:0px;width:67%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:400;line-height:22px">Standard Delivery Service</p>
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
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:0px 15px 10px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                          <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                              <td style="padding:30px 20px 20px;border:1px solid rgb(238,238,238);font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
                                <h2 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:18px;font-weight:700;line-height:22px">YOUR PAYMENT DETAILS</h2>
                                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="vertical-align:top;padding-right:8.5px;padding-left:0px;width:33%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:700;line-height:22px">Invoice Address</h3>
                                      </td>
                                      <td style="vertical-align:top;padding-right:0px;width:67%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:400;line-height:22px">${formattedData.name}<br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.street}</a>
                                          <br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.city}</a>
                                          <br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.zip}</a>
                                          <br>
                                          <a style="font-family:Helvetica,Arial,sans-serif">${formattedData.country}</a>
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
              </td>
            </tr>
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:0px 15px 10px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                          <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                              <td style="padding:30px 20px 20px;border:1px solid rgb(238,238,238);font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
                                <h2 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:18px;font-weight:700;line-height:22px">YOUR ORDER DETAILS</h2>
                                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="vertical-align:top;padding-right:8.5px;padding-left:0px;width:33%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:700;line-height:22px">Order Received</h3>
                                      </td>
                                      <td style="vertical-align:top;padding-right:0px;width:67%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:400;line-height:22px">${formattedData.ordedate}</p>
                                      </td>
                                    </tr>
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="vertical-align:top;padding-right:8.5px;padding-left:0px;width:33%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <h3 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:700;line-height:22px">Order Number</h3>
                                      </td>
                                      <td style="vertical-align:top;padding-right:0px;width:67%;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 15px;font-size:16px;font-weight:400;line-height:22px">${formattedData.ordernumber}</p>
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
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:0px 15px 10px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                          <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                              <td style="padding:30px 20px 20px;border:1px solid rgb(238,238,238);font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(255,255,255);color:rgb(35,40,43)">
                                <h2 style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:18px;font-weight:700;line-height:22px">ORDER SUMMARY</h2>
                                <table valign="top" cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="border-top-width:1px;border-top-style:solid;border-bottom-width:1px;border-bottom-style:solid;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;border-top-color:rgb(238,238,238);border-bottom-color:rgb(238,238,238)">
                                  <thead style="border-bottom-width:1px;border-bottom-style:solid;font-family:Helvetica,Helvetica,Arial,sans-serif;border-bottom-color:rgb(238,238,238)">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <th colspan="2" style="text-align:left;padding:8px 10px 6px 0px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:22px">Item</p>
                                      </th>
                                      <th style="text-align:left;padding:8px 10px 6px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:22px">Qty</p>
                                      </th>
                                      <th style="text-align:left;padding:8px 0px 6px 10px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:22px">Price</p>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <td style="padding:20px 10px 20px 0px;vertical-align:top;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <img src="${formattedData.imageurl}" alt="Product Image" width="80" height="80" style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      </td>
                                      <td style="padding:20px 10px;vertical-align:top;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 6px;font-size:16px;line-height:2f0px;font-weight:700">${formattedData.brand}
</p>
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 6px;font-size:16px;font-weight:400;line-height:20px">productCode: ${formattedData.productcode}</p>
                                      </td>
                                      <td style="padding:20px 10px;vertical-align:top;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;line-height:20px;text-align:center;font-weight:700">1</p>
                                      </td>
                                      <td style="padding:20px 0px 20px 10px;vertical-align:top;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:20px">
                                          <span style="font-weight:700;font-family:Helvetica,Arial,sans-serif">${formattedData.currency}${formattedData.price}</span>
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table align="right" cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin-top:20px;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important">
                                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <th style="text-align:left;vertical-align:top;padding:6px 11px 6px 0px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:20px;text-align:right">1 ITEMS</p>
                                      </th>
                                      <th style="text-align:left;vertical-align:top;padding:6px 0px 6px 11px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:20px;text-align:right">${formattedData.currency}${formattedData.price}</p>
                                      </th>
                                    </tr>
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <th style="text-align:left;vertical-align:top;padding:6px 11px 6px 0px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:20px;text-align:right">DELIVERY <br>
                                          <em style="font-family:Helvetica,Arial,sans-serif">(Standard Delivery Service)</em>
                                        </p>
                                      </th>
                                      <th style="text-align:left;vertical-align:top;padding:6px 0px 6px 11px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;font-size:16px;font-weight:400;line-height:20px;text-align:right">${formattedData.currency}${formattedData.delivery}</p>
                                      </th>
                                    </tr>
                                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                                      <th style="text-align:left;vertical-align:top;padding:6px 11px 6px 0px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;line-height:20px;text-align:right;font-size:18px;font-weight:700">TOTAL</p>
                                      </th>
                                      <th style="text-align:left;vertical-align:top;padding:6px 0px 6px 11px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px;line-height:20px;text-align:right;font-size:18px;font-weight:700">${formattedData.currency}${formattedData.total}</p>
                                      </th>
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
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td align="center" valign="top" style="padding:30px 15px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <div style="font-size:0px;line-height:0;font-family:Helvetica,Helvetica,Arial,sans-serif">
                          <a href="" style="width:100%;margin-bottom:20px;border-radius:0px;box-sizing:border-box;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:54px;text-align:center;text-decoration:none;border:1px solid rgb(0,0,0);background-color:rgb(0,0,0);color:rgb(255,255,255)" target="_blank">VIEW YOUR ORDER</a>
                        </div>
                        <div style="font-size:0px;line-height:0;font-family:Helvetica,Helvetica,Arial,sans-serif">
                          <a href="" style="width:100%;margin-bottom:20px;border-radius:0px;box-sizing:border-box;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;line-height:54px;text-align:center;text-decoration:none;border:1px solid rgb(0,0,0);background-color:transparent;color:rgb(0,0,0)" target="_blank">VISIT THE HELP CENTRE</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif;background-color:rgb(248,248,248);color:rgb(35,40,43)">
              <td style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100%" style="margin:0px auto;font-family:Helvetica,Helvetica,Arial,sans-serif;width:100%!important;max-width:600px!important">
                  <tbody style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Helvetica,Arial,sans-serif">
                      <td style="padding:20px 34px;font-family:Helvetica,Helvetica,Arial,sans-serif">
                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px">This confirmation of receipt of order is subject to stock availability and does not constitute a binding contract. This email does not constitute or represent confirmation of the purchase. This will be issued when your order has been processed by our warehouse team.</p>
                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px">
                          <a href="https://www.flannels.com/customerservices/termsandconditions/websitetermsandconditions" style="font-family:Helvetica,Arial,sans-serif" target="_blank">Terms and conditions</a> and our <a href="https://www.flannels.com/customerservices/otherinformation/securityandprivacy" style="font-family:Helvetica,Arial,sans-serif" target="_blank">privacy policy</a> apply.
                        </p>
                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px">Wareshop2 Limited (company number: 09870840, VAT number: GB 231 5087 33 of Unit A, Brook Park East, Shirebrook, NG20 8RY) is the selling entity on behalf of <a href="https://www.flannels.com" style="font-family:Helvetica,Arial,sans-serif" target="_blank">
                            <span>Flannels</span>
                          </a>. </p>
                        <p style="font-family:Helvetica,Arial,sans-serif;margin:0px 0px 20px;font-size:16px;font-weight:400;line-height:20px">©2022 <a href="https://www.flannels.com" style="font-family:Helvetica,Arial,sans-serif" target="_blank">SportsDirect.com Retail Ltd</a>
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
</body>
</html>
    `
  },
}

export default flannelsTemplate
