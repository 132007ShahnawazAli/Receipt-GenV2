const sephoraTemplate = {
  id: "sephora",
  name: "Sephora",
  displayName: "Sephora",
  logo: "sephora.png",
  subject: "Sephora - Your E-Receipt",
  enabled: true,

  // Define form fields
  fields: [
    {
      name: "name",
      label: "Customer Name",
      type: "text",
      required: true,
      placeholder: "Enter customer name"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "Enter email address"
    },
    {
      name: "productname",
      label: "Product Name",
      type: "text",
      required: true,
      placeholder: "Enter product name"
    },
    {
      name: "price",
      label: "Price",
      type: "text",
      required: true,
      placeholder: "Enter price"
    },
    {
      name: "currency",
      label: "Currency",
      type: "text",
      required: false,
      placeholder: "$",
      defaultValue: "$"
    },
    {
      name: "tax",
      label: "Tax",
      type: "text",
      required: false,
      placeholder: "Enter tax amount",
      defaultValue: "0.00"
    },
    {
      name: "imageurl",
      label: "Product Image URL",
      type: "text",
      required: true,
      placeholder: "Enter image URL"
    },
    {
      name: "street",
      label: "Street Address",
      type: "text",
      required: true,
      placeholder: "Enter street address"
    },
    {
      name: "city",
      label: "City",
      type: "text",
      required: true,
      placeholder: "Enter city"
    },
    {
      name: "zip",
      label: "ZIP/Postal Code",
      type: "text",
      required: true,
      placeholder: "Enter ZIP/postal code"
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      required: true,
      placeholder: "Enter country"
    },
    {
      name: "orderdate",
      label: "Order Date",
      type: "text",
      required: true,
      placeholder: "Enter order date (e.g., May 15, 2024)"
    }
  ],

  // Generate HTML from form data
  getHtml: (data) => {
    // Calculate total from price and tax
    const priceNum = Number.parseFloat(data.price) || 0
    const taxNum = Number.parseFloat(data.tax) || 0
    const total = (priceNum + taxNum).toFixed(2)
  
    // Generate a random transaction number
    const transactionNum = Math.floor(Math.random() * 9000) + 1000
  
    // Combine city and zip for the cityzip field
    const cityzip = `${data.city}, ${data.zip}`
  
    return `
  <div style="padding:0px;margin:0px;min-width:100%;background-color:rgb(255,255,255)">
    <img src="https://ci3.googleusercontent.com/meips/ADKq_NaHzigOio2_hModR2H0epni26Rj1su7OzNOw4dPi42F_fWUGovYlMOJfnW6GKmGHAnYjOKxXuEbyPWJHrISQR2Ni2Dldgf6zSvLkNE_8Dw5pIorBwLX8d_72Hbqxy7Ni4lQGkX6FJVSZ_0mDvO_PLI6QghzldFCDcjB0xfeO4Kxw_njax4lsHz9DYlNIcwzQq_uAFoMTUuFAIOrBHhdfWn_0BZQWNNbKgpu_xlCz7vM3nzjvI6PxF1oWqEYN1OIqZ9GvHJl8jNLoMbK4dUB3Z2PzK860pF2kHa0x-qc8DBBHjaewNSDXB3qrgoYyQ9CBLyPLOB21LpHNOlOlgW3AYPUByOJQ8g8CEfgTA=s0-d-e1-ft#https://beauty.sephora.com/O/AQEAAZcF2gAndjYxMDAwMDAxOC1lZjhhLTIyN2MtNjk3ZS0wYTE0MzRiNWMzOGQw2gAkMDI5MGYyNjItODI1My00YjJhLTAwMDAtNGM1YTQyOTYzYWEx2gAkMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwAw0OcLvVvTQMSU-eNZyibTaHEEb5uWjTNFhYY1liTJR81Rs" style="display:none;max-height:0px;font-size:0px;overflow:hidden">
    
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
      <tbody><tr>
        <td align="center" bgcolor="#ffffff" style="vertical-align:top;padding:0px">
          
          <table width="700" border="0" cellspacing="0" cellpadding="0" style="min-width:700px;width:700px;background-color:rgb(255,255,255)" bgcolor="#ffffff">
            <tbody><tr>
              <td align="center" valign="top">
                <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%">
                  
                  <tbody><tr>
                    <td align="center" valign="top">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody><tr>
                          <td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:16px;padding:12px 0px 0px;color:rgb(85,85,85)">
                            <div style="display:none;max-height:0px;overflow:hidden;font-family:Arial,Helvetica,sans-serif">${data.name}, thanks for shopping at Sephora. Your e-receipt is enclosed.<div style="display:none;max-height:0px;overflow:hidden;font-family:Arial,Helvetica,sans-serif">‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr>&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
    </div></div>
                          </td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td align="center">
    
     
    
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
    <tbody><tr>
    <td align="center" bgcolor="#ffffff" style="vertical-align:top;padding:0px">
    
    <table width="700" border="0" cellspacing="0" cellpadding="0" style="min-width:700px;width:700px;background-color:rgb(255,255,255)" bgcolor="#ffffff">
      <tbody><tr>
        <td align="center" valign="top">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
      
    
    <tbody><tr>
      <td align="center" valign="top">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody><tr>
       <td align="center" valign="top" style="padding:0px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgb(255,255,255)"><a href="#" target="_blank"><img src="/assets/sephora-logo.png" alt="SEPHORA" width="700" height="auto" style="display:block;border:0px"></a></td>
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
                    <td align="center"><table width="700" border="0" align="center" cellpadding="0" cellspacing="0">
    
    <tbody><tr>
      <td align="left" style="font-size:40px;line-height:48px;font-family:Helvetica,Arial,sans-serif;padding:30px 0px 0px 20px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:39px;color:rgb(0,0,0)"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:black" href="#" target="_blank">Thanks for shopping with us!</a></span></td>
    </tr>
    <tr>
      <td align="left" style="padding:30px 0px 30px 20px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:20px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">Hi ${data.name},<br>Here's the receipt from your visit on ${data.orderdate}.<br>P.S. We appreciate you choosing paperless. Enjoy your new beauty!<br><br>View your in-store &amp; online purchases <span style="text-decoration:underline;font-family:Helvetica,Arial,sans-serif">here</span> &gt;</a></span></td>
    </tr>
        
        
        
    <tr>
      <td align="center" style="padding:30px"><a style="text-decoration:none;color:rgb(0,0,0)" href="#" target="_blank"><span style="font-family:Georgia,serif;font-size:40px;color:rgb(0,0,0)">Transaction Details</span></a></td>
    </tr>
    <tr>
      <td align="center"><table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
        <td style="background-color:rgb(244,244,244)"><table width="640" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td width="500" style="padding-left:5px;padding-top:15px;padding-bottom:15px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px"><b style="font-family:Helvetica,Arial,sans-serif">ITEM</b></span></td>
        <td width="140" align="right" style="padding-top:15px;padding-bottom:15px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px"><b style="font-family:Helvetica,Arial,sans-serif">AMOUNT</b></span></td>
      </tr>
    </tbody></table>
    </td>
      </tr>
      
      
      <tr>
        <td valign="top" align="left" style="padding-left:5px;padding-top:10px;padding-bottom:10px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgb(203,203,203)"><table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
        <td align="center" width="200"><a href="#" target="_blank"><img src="${data.imageurl}" width="150" border="0" alt="${data.productname}"></a></td>
        <td width="440" align="center" valign="middle"><table width="350" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td style="padding-right:15px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:20px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">${data.productname}</a></span></td>
      </tr>
      <tr>
        <td style="padding-bottom:10px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:16px;text-decoration:none!important;color:rgb(119,119,119)"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(119,119,119)" href="#" target="_blank">ITEM </a></span></td>
      </tr>
      <tr>
        <td><table width="440" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
        <td width="300"><span style="font-family:Helvetica,Arial,sans-serif;font-size:16px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">Price: ${data.currency}${data.price}</a></span></td>
        <td width="140" align="right" style="padding-right:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:16px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">${data.currency}${data.price}</a></span></td>
      </tr>
    </tbody></table>
    </td>
      </tr>
      <tr>
        <td><span style="font-family:Helvetica,Arial,sans-serif;font-size:16px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">Qty: 1</a></span></td>
      </tr>
    </tbody></table></td>
    </tr>
    </tbody></table></td>
      </tr>
      
    </tbody></table></td>
    </tr>
    
    <tr>
      <td style="padding-top:20px;padding-bottom:20px"><table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">Subtotal: ${data.currency}${data.price}</span></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">Taxes: ${data.currency}${data.tax}</span></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:20px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px"><b style="font-family:Helvetica,Arial,sans-serif">Total: ${data.currency}${total}</b></span></td>
      </tr>
      
      
      
        
      </tbody></table>
      </td>
      </tr>
      
    <tr>
        <td><table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
        <td align="right" style="padding-bottom:20px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Trans Type: PURCHASE</span>
        </td>
      </tr>
      </tbody></table></td>
      </tr>
      <tr>
      <td style="padding-bottom:20px"><table width="640" border="0" cellspacing="0" cellpadding="0" align="center"> 
      <tbody><tr>
      <td><table border="0" cellspacing="0" cellpadding="0" align="right">
    <tbody><tr>
        <td align="right" style="padding-bottom:5px"><table border="0" cellspacing="0" cellpadding="0" align="right">
    <tbody><tr>
    <td style="padding-right:10px" align="right" valign="middle"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Debit Card</span></td>
    <td align="right" valign="middle"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Payment:  ************4156</span></td>
    </tr>
    </tbody></table></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Card Entry: CONTACTLESS</span></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Amount: ${data.currency}${data.price}</span></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Auth #: EI56SW</span></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">Application Label:Interac</span></td>
      </tr>
      <tr>
        <td align="right" style="padding-bottom:5px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px;color:rgb(119,119,119)">AID: A00000027710100100000001</span></td>
      </tr>
      </tbody></table></td>
      </tr>
      </tbody></table>
      </td>
      </tr>
      <tr>
        <td align="center"><table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody><tr><td style="border-top-width:1px;border-top-style:solid;border-top-color:rgb(170,170,170)">&nbsp;</td></tr>
        </tbody></table></td>
        </tr>
      <tr>
      <td align="center" style="padding-top:20px;padding-bottom:20px"><table width="640" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
        <td align="center"><img src="https://ci3.googleusercontent.com/meips/ADKq_NaxgFrIdgHUL0RnsuW5iWXO_L0Ei11ASKytZJwl4iwUDS4PpVpCWHDadi7K9ElPj4tf1yAuqctOc-InxWKcv8XN9Wajajif5gm2BKloXlhsXfk3KO_ZUM6i-XRMjVBdqBweenhXJUzETLPDVQyBBfI=s0-d-e1-ft#http://sephora.csbarcode.epsilon.com/linear/linear.aspx?S=13&amp;CS=1&amp;D=9900054847083441983203" alt="Barcode" style="display:block" border="0"></td>
      </tr>
      <tr>
        <td align="center" style="padding-top:10px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">Transaction #${transactionNum}</span></td>
      </tr>
      <tr>
        <td align="center" style="padding-bottom:20px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">Store #548</span></td>
      </tr>
      <tr>
        <td align="center"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">NAME: ${data.name}</span></td>
      </tr>
      <tr>
        <td align="center" style="padding-bottom:30px"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">DATE: ${data.orderdate}</span></td>
      </tr>
      <tr>
        <td align="center"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px"><b style="font-family:Helvetica,Arial,sans-serif"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">SEPHORA RICHMOND</a></b></span></td>
      </tr>
      <tr>
        <td align="center"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">${data.street}</a></span></td>
      </tr>
      <tr>
        <td align="center"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px"><a style="text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:rgb(0,0,0)" href="#" target="_blank">${cityzip}</a></span></td>
      </tr>
      <tr>
        <td align="center"><span style="font-family:Helvetica,Arial,sans-serif;font-size:18px">${data.country}</span></td>
      </tr>
    </tbody></table>
    </td>
    </tr>
    <tr>
      <td align="center" style="padding:30px"><a style="text-decoration:none;color:rgb(0,0,0)" href="#" target="_blank"><span style="font-family:Georgia,serif;font-size:40px;color:rgb(0,0,0)">You Might Also Like</span></a></td>
    </tr>
      <tr>
        <td align="center" style="padding-bottom:30px"><table width="570" border="0" cellspacing="0" cellpadding="0" align="center">
      <tbody><tr>
        <td align="center"><a href="#"></a></td>
        <td align="center"><a href="#"></a></td>
      </tr>
    </tbody></table></td>
      </tr>
    <tr>
      <td align="center"><a href="#" target="_blank"><img style="display:block" border="0" src="https://ci3.googleusercontent.com/meips/ADKq_NbVsGaFw2_ND0RJEj9jOpM6vMc2rN8pNTevpsxSk412mxGERNEvgK3lRey_nTx0bNZ8HMZMckYM28tii1xbd833RSdJrzT6gTVslOFfbb5vFFNjOiIbKMBHaaWNWTOXRNasfwIkfEZFcL1jN9MLhuapHiL1QNkGYE7u0KSvGUEdlzEtLZpOkh-9iBE0lz2nUnVMNa_En62Iag=s0-d-e1-ft#https://images.harmony.epsilon.com/ContentHandler/images/de0a3226-d396-4c2c-b3a8-3ede2f831505/images/2020_EReceipt_04_v3_CA_EN.png" width="700" height="350" alt="Take the Survey"></a></td>
    </tr>
    <tr>
      <td align="center"><a href="#" target="_blank"><img style="display:block" border="0" src="https://ci3.googleusercontent.com/meips/ADKq_NZmj6cz6ib-Kh2W5tBf_M0iHaktSdSj6EIH6rFPVkpOkCWJ6ptOmAGbAuo1uBqoi7uj-ye2elNHC57oW2w0e2NOoXr_c-8FsFxa8Y-265u3rXQnYewobUB377OHRpR_wEDFsJg-UmbzpgUTaiJOfhGsvFKJX6i1JEIluTYjc5WxExGo19C5EQTa-AoR9EjIrEBF=s0-d-e1-ft#https://images.harmony.epsilon.com/ContentHandler/images/de0a3226-d396-4c2c-b3a8-3ede2f831505/images/2020_EReceipt_03_v2.jpg" width="700" height="350" alt="Download the app"></a></td>
    </tr>
    
    </tbody></table></td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top:30px">
    
     
    
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
    <tbody><tr>
    <td align="center" bgcolor="#ffffff" style="vertical-align:top;padding:0px">
    
    <table width="700" border="0" cellspacing="0" cellpadding="0" style="min-width:700px;width:700px;background-color:rgb(255,255,255)" bgcolor="#ffffff">
      <tbody><tr>
        <td align="center" valign="top">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          
    <tbody><tr>
    <td align="center" valign="top" bgcolor="#000000" style="border-top-width:1px;border-top-style:solid;padding:0px 20px;border-top-color:rgb(255,255,255)">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tbody><tr>
    <td align="center" valign="top" style="border-top-width:1px;border-top-style:solid;border-top-color:rgb(255,255,255)">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tbody><tr>
       <td align="center" valign="top" bgcolor="#000000">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tbody><tr>
       <td align="center" valign="top" style="padding:53px 0px 45px;color:rgb(255,255,255)"><a href="#" style="text-decoration:none;color:rgb(255,255,255)" target="_blank"><span style="font-size:40px;font-family:Georgia,serif">We Belong to Something Beautiful</span></a></td>
      </tr>
      <tr>
      <td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:16px;color:rgb(255,255,255)"><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Makeup</span></a><span style="font-family:Arial,Helvetica,sans-serif">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Skincare</span></a><span style="font-family:Arial,Helvetica,sans-serif">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Hair</span></a><span style="font-family:Arial,Helvetica,sans-serif">&nbsp;&nbsp;<wbr>|&nbsp;&nbsp;</span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Fragrance</span></a><span style="font-family:Arial,Helvetica,sans-serif">&nbsp;&nbsp;|&nbsp;&nbsp;</span><span style="font-family:Arial,Helvetica,sans-serif"></span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Find a Store</span></a><span style="font-family:Arial,Helvetica,sans-serif">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(245,62,77)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif;color:rgb(245,62,77)">Get a Free Sample</span></a></td>
      </tr>
    <tr>
    <td align="center" valign="top">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
     <tbody><tr>
       <td align="center" valign="top" style="padding:15px 0px 14px"><table width="416" align="center" border="0" cellspacing="0" cellpadding="0">
     <tbody><tr>
      <th align="left" valign="top">
       <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tbody><tr>
      <td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:16px;color:rgb(255,255,255)"><span style="font-family:Arial,Helvetica,sans-serif"></span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Privacy Policy</span></a><span style="font-family:Arial,Helvetica,sans-serif">&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(255,255,255)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Contact Us</span></a></td>
      </tr>
    </tbody></table>
       </th>
      </tr>
    </tbody></table></td>
      </tr>
    </tbody></table>	
    </td>	
    </tr>
    <tr>
      <td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:16px;padding:0px 10px 27px;letter-spacing:0.5px;color:rgb(255,255,255)">©2024 Sephora USA, Inc., 350 Mission Street, Floor 7 San Francisco, <br>CA 94105. All&nbsp;rights&nbsp;reserved.<br><a href="#" style="text-decoration:none;font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)" target="_blank"><span style="font-family:Arial,Helvetica,sans-serif">Web Version</span></a></td>
    </tr>
    <tr>
      <td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:15px;padding:0px 10px 20px;letter-spacing:0.5px;color:rgb(172,172,172)">Price and availability information is subject to change without notice, per our <a style="font-family:Arial,Helvetica,sans-serif;color:rgb(173,173,173)" href="#" target="_blank">Terms of Use</a>.</td>
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
                </tbody></table>
                <table align="center" bgcolor="#000000" border="0" cellpadding="0" cellspacing="0" width="700">
                  <tbody><tr>
                    <td align="center" valign="top" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:15px;padding:0px 10px 65px;letter-spacing:0.5px;color:rgb(172,172,172)">
                    
                        
                    You are receiving this one-time transactional email because you requested a digital receipt at a Sephora retail location.
                    <br><br>    
                    Please retain a copy of your receipt and we will gladly return or exchange your new or gently used purchase at any Sephora location in accordance with the Sephora Return Policy below.
                    <br><br>
                    * NO PURCHASE OF ANY KIND IS NECESSARY TO ENTER OR WIN THESE SWEEPSTAKES. Sweepstakes run through 12/31/2024 and is a series of monthly sweepstakes. Odds of winning depend on number of entries received for each monthly Sweepstakes. Sweepstakes is open only to current legal residents of Canada who have reached the age of majority in the Province or Territory in which they reside as of the date of entry.  Sweepstakes is void outside of Canada, and where prohibited or restricted by law. Sweepstakes is subject to applicable federal, provincial and local laws. Limit 1 entry/month. Sponsored by Sephora USA, Inc. For complete rules, click <a style="font-family:Arial,Helvetica,sans-serif;color:rgb(173,173,173)" href="#" target="_blank">here</a>.
                    <br><br>
                    For information on our return policy, please visit <a style="text-decoration:underline;font-family:Arial,Helvetica,sans-serif;color:rgb(173,173,173)" href="#" target="_blank">https://www.sephora.com/ca/en/<wbr>beauty/returns-exchanges</a>.
      
                    </td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table>
        </td>
      </tr>
    </tbody></table><div class="yj6qo"></div><div class="adL">
    
    </div><div style="display:none;white-space:nowrap;font-style:normal;font-variant-caps:normal;font-weight:normal;font-stretch:normal;font-size:15px;font-family:courier;font-size-adjust:none;font-kerning:auto;font-variant-alternates:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-east-asian:normal;font-feature-settings:normal;line-height:0" class="adL"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div><div class="adL">
        
    </div></div>
    `
  }
}

export default sephoraTemplate
  