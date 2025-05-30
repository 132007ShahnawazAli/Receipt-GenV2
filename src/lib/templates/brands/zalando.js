const zalandoTemplate = {
  name: "Zalando",
  displayName: "Zalando",
  logo: "zalando.png",
  subject: "Deine Bestellung bei Zalando - Bestellnummer {ordernumber}",
  enabled: true,
  fields: [
    { name: "name", label: "Customer Name", type: "text", required: true, placeholder: "John Doe" },
    { name: "deliverydate", label: "Delivery Date", type: "text", required: true, placeholder: "May 5, 2025" },
    { name: "tddeliverydate", label: "To Delivery Date", type: "text", required: true, placeholder: "May 7, 2025" },
    { name: "street", label: "Street Address", type: "text", required: true, placeholder: "123 Main Street" },
    { name: "zipcity", label: "ZIP/City", type: "text", required: true, placeholder: "12345 Berlin" },
    { name: "orderdate", label: "Order Date", type: "text", required: true, placeholder: "May 2, 2025" },
    { name: "price", label: "Price", type: "text", required: true, placeholder: "100.00" },
    { name: "currency", label: "Currency", type: "text", required: true, placeholder: "€" },
    { name: "Brand", label: "Brand", type: "text", required: true, placeholder: "Nike" },
    { name: "pname", label: "Product Name", type: "text", required: true, placeholder: "Air Max 90" },
    { name: "sizee", label: "Size", type: "text", required: true, placeholder: "M" },
    { name: "imageurl", label: "Product Image URL", type: "url", required: true, placeholder: "https://example.com/image.jpg" },
    { name: "link", label: "Product Link", type: "url", required: true, placeholder: "https://example.com/product" },
  ],
  getHtml: (data) => `
    ${zalandoTemplateHtml(data)}
  `,
};

function zalandoTemplateHtml(data) {
  return `


    
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html lang="de"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Zalando</title><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="format-detection" content="telephone=no" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="x-apple-disable-message-reformatting" /><meta name="color-scheme" content="light dark only"><meta name="supported-color-schemes" content="light dark only"><link type="image/x-icon" href="https://secure-skin.ztat.net/s/6n1/zalando/img/MAIN/zalando.ico" rel="icon" /><style type="text/css">
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    a,
    a:link,
    a:visited {
    text-decoration: none;
    color: #1A1A1A;
    }
    a:hover {
    text-decoration: underline;
    }
    #footer a {
    color: #FFFFFE !important;
    }
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td {
    line-height: 100%;
    }
    .ExternalClass {
    width: 100%;
    }
    body {
    -webkit-text-size-adjust: none;
    -ms-text-size-adjust: none;
    Margin:0;
    }
    a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    }
    [office365] div {
    display: block !important;
    }
    .gmailfix {
    display:none;
    display:none!important;
    }
    /* Targeting FAQ container for Gmail */
    .gs li, u+.gs li, u+body .gs li,  u+.body .gs li  {Margin: 0!important;}
    u+.body .darkmode_grey p+table {max-width:none !important;text-align:left !important;}
    u+.body .darkmode_faq p+table {background-color:#505153 !important;max-width:none !important;text-align:left !important;}
    /* Targeting FAQ container */
    .faq_td > table {max-width:none !important;}
    .faq_td p, ul, li{Margin: 0!important;}
    .faq_td u + .body .darkmode_grey table {max-width:none !important;text-align:left !important;}
    .faq_td u + .body .darkmode_faq table {background-color:#505153 !important;max-width:none !important;text-align:left !important;}
    .faq_td li {padding-bottom:16px;padding-right:24px;font-family:HelveticaNow,Helvetica,sans-serif;text-align:left;font-size:14px;line-height:20px;letter-spacing:0px;color:#FFFFFE;mso-padding-alt:0px !important;}
    .faq_td .mobile-full {align:left !important;width:auto !important;float:left !important;} 
    .faq_td .mobile-full td {vertical-align:top;valign:top;}
    .faq_td .mobile-full img {display:block!important;}
  </style><style>
    /* Fonts from ZDS. Tiempos cannot be bold */
    @font-face {
    font-family: Tiempos;
    font-weight: 400;
    font-style: normal;
    src: url(https://mosaic02.ztat.net/nsg/dx-ui/fonts/TiemposText-Regular.v1.woff2) format("woff2"),
    url(https://mosaic02.ztat.net/nsg/dx-ui/fonts/TiemposText-Regular.v1.woff) format("woff");
    }
    @font-face {
    font-family: HelveticaNow;
    font-weight: 400;
    font-style: normal;
    src: url(https://mosaic02.ztat.net/nsg/dx-ui/fonts/HelveticaNowText-Regular.v1.woff2) format("woff2"),
    url(https://mosaic02.ztat.net/nsg/dx-ui/fonts/HelveticaNowText-Regular.v1.woff) format("woff");
    }
    @font-face {
    font-family: HelveticaNow;
    font-weight: 700;
    font-style: normal;
    font-weight: bold;
    src: url(https://mosaic02.ztat.net/nsg/dx-ui/fonts/HelveticaNowText-Bold.v1.woff2) format("woff2"),
    url(https://mosaic02.ztat.net/nsg/dx-ui/fonts/HelveticaNowText-Bold.v1.woff)  format("woff");
    }
    /* Media queries */
    @media screen and (max-width: 600px) {
    .full-width {width: 100% !important;max-width: 100% !important;}
    .hide {display: none !important;overflow: hidden !important;max-height: 0px !important;}
    .show {display: inherit !important;}
    .revert {display: revert !important;}
    .width_50 {width: 50% !important;}
    .width_50_item {width: 50% !important;max-width: 100% !important;}
    .remove_border {border:none !important;}
    .inline_block {display:inline-block !important;}
    .inline_table {display:inline-table !important;}
    .paddingLeftRight18 {padding-left:18px !important;padding-right:18px !important;}
    .remove_paddingLeft {padding-left:0px !important;}
    .remove_paddingRight {padding-right:0px !important;}
    .paddingRight {padding-right:24px !important;}
    .paddingLeft {padding-left:24px !important;}
    }
    /* DARK MODE STYLES */
    @media (prefers-color-scheme: dark ) {
    /* Custom Dark Mode Images */
    .darkmode_image{ display:block!important;overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; width:inherit !important; line-height: auto !important; Margin-top:0px !important; visibility:inherit !important; }
    .darkmode_image_inline { display:inline !important; max-height:inherit !important; max-width:inherit !important; width:inherit !important; line-height: auto !important; visibility: visible !important; }
    .lightmode_image { display:none; display:none!important; }
    /* Custom Dark Mode Colors */ 
    .darkmode { background-color: #1A1A1A !important;}
    .darkmode_button {border: 1px solid #FFFFFE !important;}
    .darkmodeButtonPrimary {background-color:#FFFFFE !important;border:2px solid #FFFFFE !important;}
    .darkmodeButtonPrimaryLink {color:#1A1A1A !important;}
    .darkmodeButtonSecondary {background-color:#1A1A1A !important;border:2px solid #FFFFFE !important;}
    .darkmodeButtonSecondaryLink {color:#FFFFFE !important;}
    .darkmodeButtonTertiary {background-color:#1A1A1A !important;border:1px solid #FFFFFE !important;}
    .darkmodeButtonTertiaryLink {color:#FFFFFE !important;}
    .darkmode_nwsl_banner {background-color: #f7f7f7;color:#1A1A1A !important;}
    .darkmode_nwsl_banner td {color:#1A1A1A !important;}
    .darkmode_nwsl_banner a {color:#1A1A1A !important;}
    .darkmode_grey {background-color: #505153;}
    .darkmode_faq {background-color:#505153 !important;max-width:none !important;text-align:left !important;}
    .darkmode_price_red {color: #D9000C !important;}
    .darkmode_price_old {color: #FFFFFE !important;}
    p, span, a, td{ color: #FFFFFE !important; }
    .ctaLink {text-decoration:none;}
    .link {border-bottom: 2px solid #FFFFFE !important;}
    .link_small {border-bottom: 1px solid #FFFFFE !important;}
    .darkmodeDesignerText {color: #FFFFFE !important;}
    .darkmodeStatementBackground {background-color:#1A1A1A !important;}
    .background  {background: none!important;height: auto!important;}
    }
    /* Duplicating styles with data-ogsc to target Outlook app */
    [data-ogsc] .darkmode_image { display:block!important; width: auto !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; Margin-top:0px !important; visibility:inherit !important; }
    [data-ogsc] .darkmode_image_inline { display:inline !important; max-height:inherit !important; max-width:inherit !important; width:inherit !important; line-height: auto !important; visibility: visible !important; }
    [data-ogsc] .lightmode_image { display:none; display:none!important;}
    [data-ogsc] .darkmode { background-color: #1A1A1A !important;}
    [data-ogsc] .darkmode_button {border: 1px solid #FFFFFE !important;}
    [data-ogsc] .darkmodeButtonPrimary {background-color:#FFFFFE !important;border:2px solid #FFFFFE !important;}
    [data-ogsc] .darkmodeButtonPrimaryLink {color:#1A1A1A !important;}
    [data-ogsc] .darkmodeButtonSecondary {background-color:#1A1A1A !important;border:2px solid #FFFFFE !important;}
    [data-ogsc] .darkmodeButtonSecondaryLink {color:#FFFFFE !important;}
    [data-ogsc] .darkmodeButtonTertiary {background-color:#1A1A1A !important;border:1px solid #FFFFFE !important;}
    [data-ogsc] .darkmodeButtonTertiaryLink {color:#FFFFFE !important;}
    [data-ogsc] .darkmode_nwsl_banner {background-color: #f7f7f7;color:#1A1A1A !important;}
    [data-ogsc] .darkmode_nwsl_banner td {color:#1A1A1A !important;}
    [data-ogsc] .darkmode_nwsl_banner a {color:#1A1A1A !important;}
    [data-ogsc] .darkmode_grey {background-color: #505153}
    [data-ogsc] .darkmode_faq {background-color:#505153 !important;max-width:none !important;text-align:left !important;}
    [data-ogsc] .darkmode_price_red {color: #D9000C !important;}
    [data-ogsc] .darkmode_price_old {color: #FFFFFE !important}
    [data-ogsc] p, [data-ogsc] span, [data-ogsc] a {color: #FFFFFE !important;}
    [data-ogsc] .ctaLink {text-decoration:none;}
    [data-ogsc] .link {border-bottom: 2px solid #FFFFFE !important;}
    [data-ogsc] .link_small {border-bottom: 1px solid #FFFFFE !important;}
    [data-ogsc] .darkmodeDesignerText {color: #FFFFFE !important;}
    [data-ogsc] .darkmodeStatementBackground {background-color:#1A1A1A !important;}
    [data-ogsc] .background {background: none!important;height: auto!important;}
  </style></head><body class="body" bgcolor="#f2f2f2" style="Margin:0;padding:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;background-color:#f2f2f2;"><table class="hide darkmode" border="0" cellpadding="0" cellspacing="0" width="100%" align="center" bgcolor="#f2f2f2" aria-hidden="true"><tr><td height="40" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><style>
    @media screen and (max-width: 575px) {
    .full-width {width: 100% !important;max-width: 100% !important;}
    .hide {display: none !important;overflow: hidden !important;max-height: 0px !important;}
    .show {display: inherit !important;}
    .width_50 {width: 50% !important;}
    .width_50_item {width: 50% !important;max-width: 100% !important;}
    .remove_border {border:none !important;}
    .inline_block {display:inline-block !important;}
    .inline_table {display:inline-table !important;}
    .paddingLeftRight18 {padding-left:18px !important;padding-right:18px !important;}
    .remove_paddingLeft {padding-left:0px !important;}
    .remove_paddingRight {padding-right:0px !important;}
    .paddingRight {padding-right:24px !important;}
    .paddingLeft {padding-left:24px !important;}
    }
  </style><table class="darkmode" border="0" cellpadding="0" cellspacing="0" width="100%" align="center" bgcolor="#f2f2f2" role="presentation"><!--[if (gte mso 9)|(IE)]><table class="darkmode" border="0" cellpadding="0" cellspacing="0" width="100%" align="center" bgcolor="#f2f2f2" role="presentation"><tr><td><![endif]--><tr><td><table class="remove_border darkmode" border="0" cellpadding="0" cellspacing="0" width="100%" align="center" style="max-width:642px;border:1px solid #EAEAEA;" bgcolor="#FFFFFE" role="presentation"><!--[if (gte mso 9)|(IE)]><table border="0" cellpadding="0" cellspacing="0" width="642" align="center" role="presentation"><tr><td><![endif]--><tr><td align="center" style="max-width:642px;"><div style="display:none;font-size:0px;color:#999999;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
  
      Deine Bestellübersicht
  </div><table border="0" cellpadding="0" cellspacing="0" width="100%" align="center" style="max-width:600px;" ><tr><td width="100%" align="center" style="max-width:600px;"><img style="display:none!important" alt="" title="" src="https://probe.zalando.com/images/probe.png?t_id=0a718a22-b670-11ef-b4e1-bf6aeebd8a80&amp;m_id=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;mo_src=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;block_id=no_outfit+no_rv+yes_anchor_outfits" /></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td class="background" valign="top" style="background-image: url('https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/white_header_bg.png');background-size: cover;background-position: top center; background-repeat: repeat;"><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0"><tr><td height="16" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:20px;line-height:28px;letter-spacing:-0.2px;text-align:center;color:#1A1A1A;text-decoration:none;padding-left:24px;"><a href="https://www.zalando.de?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=logo&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=logo" target="_blank"><img class="lightmode_image" src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/zalando_logo_rebranded.png"
                style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:20px;line-height:28px;letter-spacing:-0.2px;text-align:center;color:#1A1A1A;text-decoration:none;display:block;" border="0" alt="Zalando" title="" width="132" /><!--[if !mso]><! --><div class="darkmode_image" style="display:none;overflow:hidden;float:left;width:0px;max-height:0px;max-width:0px;line-height:0px;visibility:hidden;" align="center"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/zalando_logo_rebranded_dark.png" style="display:block;" 
                  border="0" alt="Zalando" title="" width="132" /></div><!--<![endif]--></a></td></tr></table><table role="presentation" class="full-width" align="right" border="0" cellpadding="0" cellspacing="0"><tr><td height="16" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="padding-left:24px;padding-right:24px;"><table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0" ><tr><td align="center" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-align:center;font-weight:bold;color:#6328E0;text-transform:capitalize;padding-right:12px;"><a class="link_small" href="https://www.zalando.de/damen-home/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=header_cta_women&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=header_cta_women" 
                    style="font-weight:bold;text-decoration:none;color:#6328E0;border-bottom: 1px solid #6328E0;text-transform:capitalize;"
                    target="_blank" >Damen</a></td><td align="center" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-align:center;font-weight:bold;color:#6328E0;text-transform:capitalize;padding-left:12px;padding-right:12px;border-right:1px solid #D0D1D3;border-left:1px solid #D0D1D3;"><a class="link_small" href="https://www.zalando.de/herren-home/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=header_cta_men&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=header_cta_men" 
                    style="font-weight:bold;text-decoration:none;color:#6328E0;border-bottom: 1px solid #6328E0;text-transform:capitalize;"
                    target="_blank" >Herren</a></td><td align="center" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-align:center;font-weight:bold;color:#6328E0;text-transform:capitalize;padding-left:12px;padding-right:12px;border-right:1px solid #D0D1D3;border-left:1px solid #D0D1D3;"><a class="link_small" href="https://www.zalando.de/kinder-home/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=header_cta_kids&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=header_cta_kids" 
                      style="font-weight:bold;text-decoration:none;color:#6328E0;border-bottom: 1px solid #6328E0;text-transform:capitalize;"
                      target="_blank" >Kinder</a></td><td align="center" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-align:center;font-weight:bold;color:#6328E0;text-transform:capitalize;padding-left:12px;padding-right:12px;"><a class="link_small" href="https://www.zalando.de/beauty/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=header_cta_beauty&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=header_cta_beauty" 
                      style="font-weight:bold;text-decoration:none;color:#6328E0;border-bottom: 1px solid #6328E0;text-transform:capitalize;"
                      target="_blank" >beauty</a></td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="12" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="12" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td width="100%" align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:24px;line-height:32px;letter-spacing:-0.24px;text-align:left;font-weight:bold;color:#1A1A1A;padding-left:24px;padding-right:24px;">
       
  
      
      
          
              
  
                              Voraussichtliche Zustellung:<br/>
                                  ${data.deliverydate} - ${data.tddeliverydate}
                              
                          
  
          
          
      
  

    </td></tr><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;text-align:left;font-weight:bold;color:#1A1A1A;padding-left:24px;padding-right:24px;">
          Hallo ${data.name},
      </td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="left" style="font-family:Tiempos,Times New Roman,serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;text-align:left;color:#1A1A1A;padding-left:24px;padding-right:24px;">
          

  
  
    
      
        
          wir freuen uns, dass du etwas Schönes gefunden hast!
          
            <br /><br />
            Sobald dein Paket auf dem Weg zu dir ist, erhältst du von uns eine Versandbestätigung per Mail.
          
        
        
      
      
    
  



      </td></tr><tr><td aria-hidden="true"  height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#5068EF"><tr><td aria-hidden="true" class="hide">&nbsp;</td><td><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td colspan="2" aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td colspan="2" align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:24px;line-height:32px;letter-spacing:-0.24px;font-weight:bold;color:#FFFFFE !important;padding-left:24px;padding-right:24px;"><b>Bezahlung per Rechnung: Wie geht es weiter?</b></td></tr><tr><td colspan="2" aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td colspan="2" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#FFFFFE !important;padding-left:24px;padding-right:24px;"><b>Mehr Zeit</b>: Nach Versand deines letzten Pakets hast du 14 Tage Zeit, um alles anzuprobieren und zu entscheiden, was du behalten möchtest, bevor du bezahlst.<br/><br/><b>Mehr Auswahl:</b> In wenigen Tagen erhältst du per E-Mail einen Zahlungslink, mit dem du deine Rechnung per Kredit-/Debitkarte, PayPal oder Banküberweisung begleichen kannst.</td></tr><tr><td colspan="2" aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td><td aria-hidden="true" class="hide">&nbsp;</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="16" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ><tr><td width="30%" align="left" valign="top" style="padding-left:24px;padding-right:24px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;color:#1A1A1A;font-weight:bold;padding-bottom:4px;">Lieferadresse</td></tr><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;" >${data.name}<br />${data.street}<br/>${data.zipcity}</td></tr></table></td><td align="right" valign="top" width="50%" style="padding-left:24px;padding-right:24px;" ><table role="presentation" class="full-width" border="0" cellpadding="0" cellspacing="0" align="left"><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;color:#1A1A1A;font-weight:bold;padding-bottom:4px;">Bestelldatum</td></tr><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;" >${data.orderdate}</td></tr><tr><td aria-hidden="true" height="16" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" class="full-width" border="0" cellpadding="0" cellspacing="0" align="right"><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;color:#1A1A1A;font-weight:bold;padding-bottom:4px;">Bestellnummer</td></tr><tr><td><a class="link" href="https://www.zalando.de/" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:-0.16px;text-align:left;font-weight:bold;color:#6328E0;text-decoration:none;border-bottom: 2px solid #6328E0;mso-margin-bottom-alt:5px;mso-border-bottom-alt:2px solid #6328E0;">101036359466225</a></td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="padding-left:24px;padding-right:24px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#D0D1D3" aria-hidden="true"><tr><td height="1" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:20px;line-height:28px;letter-spacing:-0.2px;text-align:left;font-weight:bold;color:#1A1A1A;padding-left:24px;">Dein <a style="color:#1a1a1a;text-decoration:none;">${data.Brand}</a> Artikel</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="4" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" ><tr><td><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td width="18" valign="middle" style="padding-left:24px;padding-right:6px;text-align:center;" ><img class="lightmode_image" src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/icon_truck.png" width="18" style="display:inline-block;" border="0" alt="&#10004;" title=""/><!--[if !mso]><! --><div class="darkmode_image" style="display:none; overflow:hidden; float:left; width:0px; max-height:0px; max-width:0px; line-height:0px; visibility:hidden;" align="center"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/icon_truck_white.png" width="18" style="display:inline-block;" border="0" alt="&#10004;" title="" /></div><!--<![endif]--></td><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-right:24px;">
                      
                          
  
                                  Standard-Lieferung
                                  
                              
                          
  
                  </td></tr><tr><td aria-hidden="true" style="font-size:0px;line-height:0px;">&nbsp;</td><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-right:24px;" ><span style="display:inline-block;">
                              
                              
                              
                                  ${data.deliverydate} - ${data.tddeliverydate}
                              
                          </span></td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td width="77" align="left" valign="top" style="padding-left:24px;padding-right:12px;"><a href="${data.link}" target="_blank"><img src="${data.imageurl}" alt="&nbsp;" width="77" style="display:block;background-color:#f7f7f7;line-height:111px;font-size:1px;"></a></td><td align="left" valign="top" style="padding-right:24px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr ><td style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;">${data.Brand}</td></tr><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;text-decoration:none;color:#1A1A1A;">
                    
                    
                      ${data.pname}
                    
                  </td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;">Größe:&nbsp;${data.sizee}</td></tr><tr><td style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#66676E;">Stück:&nbsp;1</td></tr></table></td><td align="right" valign="top" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;">
                
                ${data.price} ${data.currency}
                
                
              </td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left"><table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:-0.16px;text-align:left;font-weight:bold;color:#6328E0;text-decoration:none;border-bottom: 2px solid #6328E0;mso-margin-bottom-alt:5px;mso-border-bottom-alt:2px solid #6328E0;"><a class="link" href="https://www.zalando.de/reco-catalog/SIF22T09J-Q11/cmVjby1jYXRhbG9nPXJlcy1yZWNvLXByb2R1Y3RzLW1haWxpbmcteHNlbGwtdG8tcHJvZHVjdC1tb3Jl?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=complete_the_look&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=complete_the_look" 
                            target="_blank"
                             style="color:#6328E0;text-decoration:none;" >Mach den Look komplett</a></td></tr></table></td></tr></table></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="12" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="padding-left:24px;padding-right:24px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#D0D1D3" aria-hidden="true"><tr><td height="1" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="12" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-left:24px;" >Zahlungsart</td><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-right:24px;" align="right">
              
                  Rechnung
              
          </td></tr><tr><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-left:24px;" >Zwischensumme</td><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-right:24px;" align="right">${data.price} ${data.currency}</td></tr><tr><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-left:24px;" >Versand</td><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;color:#1A1A1A;padding-right:24px;" align="right">Kostenlos</td></tr><tr><td aria-hidden="true" colspan="2" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td width="50%" align="left" valign="top" style="padding-left:24px;"><span style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:18px;line-height:24px;letter-spacing:-0.18px;font-weight:bold;color:#1A1A1A;" >Gesamtsumme</span>&nbsp;<span style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;color:#66676E;text-align:left;" >inkl. MwSt.</span></td><td width="50%" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:18px;line-height:24px;letter-spacing:-0.18px;font-weight:bold;color:#1A1A1A;padding-right:24px;" align="right" valign="top">${data.price} ${data.currency}</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="36" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></th:block><table role="presentation" align="left" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td height="48" align="center" style="padding-left:24px;padding-right:24px;"><table class="darkmode" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="left" bgcolor="#1A1A1A"><tr><td class="darkmodeButtonPrimary" height="48" align="center" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:16px;line-height:48px;mso-line-height-alt:16px;letter-spacing:-0.16px;text-align:center;color:#FFFFFE;border: 2px solid #1A1A1A;font-weight:bold;background-color: #1A1A1A;padding-left:12px;padding-right:12px;"><a class="darkmodeButtonPrimaryLink" href="https://www.zalando.de/" target="_blank" style="color:#FFFFFE;line-height:48px;mso-line-height-alt:16px;font-weight:bold;text-decoration:none;width:100%;display:inline-block;">
                          Bestellung ansehen
                      </a></td></tr></table></td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td aria-hidden="true" height="12" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;color:#66676E;text-align:left;padding-left:24px;padding-right:24px;" >Zalando-Login erforderlich</td></tr><tr><td aria-hidden="true" height="16" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="left"><tr><td align="left" valign="top" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:24px;line-height:32px;letter-spacing:-0.24px;text-align:left;font-weight:bold;color:#1A1A1A;padding-left:24px;padding-right:24px;">Mach den Look komplett</td></tr><tr><td align="left" valign="top" style="font-family:Tiempos,Times New Roman,serif;font-size:24px;line-height:32px;letter-spacing:-0.24px;text-align:left;color:#1A1A1A;padding-left:24px;padding-right:24px;">Mach daraus ein Outfit</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" align="left" role="presentation"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="center"><tr><td style="padding-right:18px;padding-left:18px;"><!--[if (gte mso 9)|(IE)]><table role="presentation" width="100%"><tr><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" ><![endif]--><table role="presentation" class="full-width" border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;"><tr><td width="50%" align="left" valign="top" style="padding-left:6px;padding-right:6px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="left"><tr><td align="left" valign="top"><table class="full-width" style="background-color:#1A1A1A;width:100%;"  width="100%"><tr><td aria-hidden="true" valign="bottom" style="padding:2px;"><a href="https://www.zalando.de/siksilk-weste-black-sif22t09j-q11.html?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=anchor_outfit_item_SIF22T09J-Q11&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=anchor_outfit_item_SIF22T09J-Q11" target="_blank"><img class="full-width" src="https://img01.ztat.net/article/spp-media-p1/d22c3af4f81e420d803544a4d5ec772a/c1c9d1561a6d432e91db0885b96c50ca.jpg?imwidth=280" width="139" style="display:block;width:100%;line-height:200px;font-size:1px;" border="0" alt="&nbsp;"></a></td></tr><tr><td valign="top" style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#FFFFFE;padding: 3px 8px 8px 8px;">  
                                    Dein Artikel  
                                  </td></tr></table></td></tr></table></td><td width="50%" align="left" valign="top" style="padding-left:6px;padding-right:6px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="left"><tr><td aria-hidden="true" valign="bottom"><a href="https://www.zalando.de/nike-sportswear-m-nsw-prem-essntl-sust-tee-t-shirt-print-dark-grey-heather-ni122o0rh-c11.html?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=outfit_item_NI122O0RH-C11&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=outfit_item_NI122O0RH-C11" target="_blank"><img class="full-width" src="https://img01.ztat.net/article/spp-media-p1/ff7d21f8cb384df394de73fa8937db08/1a5ea56ccff94690a9b78ea10d591bec.jpg?imwidth=280&amp;filter=packshot" width="139" style="display:block;width:100%;line-height:200px;font-size:1px;" border="0" alt="&nbsp;"></a></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="center" style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;text-align:left;"><span style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;" >Nike Sportswear</span></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;padding-right:24px;color:#1A1A1A;"><span class="darkmode_price_red" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;font-weight:bold;color: #D9000C !important;">
                                  
                                  27,95 ${data.currency}
                                </span><br/><span class="darkmode_price_old" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-align:left;color:#1A1A1A;">
                                  Ursprünglich:
                                  <strike class="darkmode_price_old" style="color:#1A1A1A;">39,95 ${data.currency}</strike><th:span style="color: #D9000C !important;"> bis zu -30%</th:span></span></td></tr><tr><td aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]><td width="50%" valign="top"><![endif]--><table role="presentation" class="full-width"  border="0" cellpadding="0" cellspacing="0" width="100%" align="left" style="width:100%;max-width:300px;display:inline-block;vertical-align:top;"><tr><td width="50%" align="left" valign="top" style="padding-left:6px;padding-right:6px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="left"><tr><td aria-hidden="true" valign="bottom"><a href="https://www.zalando.de/only-and-sons-onscam-stage-cuff-cargohose-chinchilla-os322e08g-b13.html?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=outfit_item_OS322E08G-B13&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=outfit_item_OS322E08G-B13" target="_blank"><img class="full-width" src="https://img01.ztat.net/article/spp-media-p1/500bccc1890b4c5696d43064b7b409d1/944ac8cd28f24a199cbb6d581c23d90d.jpg?imwidth=280&amp;filter=packshot" width="139" style="display:block;width:100%;line-height:200px;font-size:1px;" border="0" alt="&nbsp;"></a></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="center" style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;text-align:left;"><span style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;" >Only &amp; Sons</span></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;padding-right:24px;color:#1A1A1A;"><span class="darkmode_price_red" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;font-weight:bold;color: #D9000C !important;">
                                  
                                  27,99 ${data.currency}
                                </span><br/><span class="darkmode_price_old" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-align:left;color:#1A1A1A;">
                                  Ursprünglich:
                                  <strike class="darkmode_price_old" style="color:#1A1A1A;">39,99 ${data.currency}</strike><th:span style="color: #D9000C !important;"> bis zu -30%</th:span></span></td></tr><tr><td aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td><td width="50%" align="left" valign="top" style="padding-left:6px;padding-right:6px;"><table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" align="left"><tr><td aria-hidden="true" valign="bottom"><a href="https://www.zalando.de/nike-sportswear-air-force-1-07-sneaker-low-white-ni112n022-a11.html?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=outfit_item_NI112N022-A11&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=outfit_item_NI112N022-A11" target="_blank"><img class="full-width" src="https://img01.ztat.net/article/spp-media-p1/a71aebc276324ea99d6f18ecd6922e69/1bf776c1cdcf49d0a4e171905b050aed.jpg?imwidth=280&amp;filter=packshot" width="139" style="display:block;width:100%;line-height:200px;font-size:1px;" border="0" alt="&nbsp;"></a></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="center" style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;text-align:left;"><span style="font-family:Tiempos,Times New Roman,serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;" >Nike Sportswear</span></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;padding-right:24px;color:#1A1A1A;"><span style="color:#1A1A1A;">119,95 ${data.currency}</span></td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left"><table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td aria-hidden="true" align="left" width="36" style="padding-right:4px;"><img class="lightmode_image" src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/plus-flag-pill-lightmode.png" alt="PLUS" width="36" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;display:block;font-style:italic;"/><!--[if !mso]><! --><div class="darkmode_image" style="display:none;overflow:hidden;float:left;max-height:0px; max-width:0px;line-height:0px;visibility:hidden;"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/plus-flag-pill-darkmode.png" alt="PLUS" width="36" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;display:block;font-style:italic;"/></div><!--<![endif]--></td></tr></table><table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#1A1A1A;">Premium-Lieferung</td></tr></table></td></tr><tr><td aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></tr></table><![endif]--></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td colspan="2" align="left" style="font-family:Tiempos,Times New Roman,serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;text-align:left;color:#1A1A1A;padding-left:24px;padding-right:24px;" >Liebe Grüße und bis bald</td></tr><tr><td aria-hidden="true" align="left" width="12" style="padding-left:24px;font-family:Tiempos,Times New Roman,serif;font-size:16px;line-height:24px;letter-spacing:-0.16px;text-align:left;color:#1A1A1A;padding-right:6px;">dein Zalando Team</td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table class="darkmode_grey" cellpadding="0" cellspacing="0"  border="0" width="100%" align="left" bgcolor="#1A1A1A" role="presentation" style="text-align:left !important;"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" class="faq_td" style="padding-left:24px;"><p class="mso-margin0" style="font-family:Tiempos,Times New Roman,serif;font-size:24px;line-height:32px;letter-spacing:-0.24px;text-align:left;color:#FFFFFE;margin:0!important;padding-bottom:24px;">Fragen &amp; Antworten</p><table align="center" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; Margin: 0 auto; width: 100%; max-width: 600px; text-align: center; font-size: 0; letter-spacing: 0"><tr><td><!--[if (gte mso 9)|(IE)]><table width="100%"  cellpadding="0" cellspacing="0" border="0"><tr valign="top"><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="48%"><![endif]--><table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; display: inline-block; vertical-align: top; max-width: 280px; font-size: 14px; letter-spacing: 0.6px; line-height:22px" class="mobile-full"><tbody><tr valign="top"><td align="left" valign="top" class="mobile-full"><ul style="padding-left:0px; margin: 0;"><li class="mso-margin0" style="list-style:none; margin-bottom:10px"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: inherit; letter-spacing: inherit;"><tr><td width="1" valign="top" align="left"><img  width="1"  height="0"  src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/article_24x24_2x.png"  alt="" /></td><td><a style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#FFFFFE;text-decoration:underline;" href="https://www.zalando.de/faq/where-is-my-parcel.html?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=faq_parcel_tracking&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=faq_parcel_tracking"><span>Wie lange dauert der Versand? </span></a></td></tr></table></li><li class="mso-margin0" style="list-style:none; margin-bottom:10px"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: inherit; letter-spacing: inherit;"><tr><td width="1" valign="top" align="left"><img  width="1"  height="0"  src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/article_24x24_2x.png"  alt="" /></td><td><a style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#FFFFFE;text-decoration:underline;" href="https://www.zalando.de/faq/Payments?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=faq_payments&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=faq_payments"><span>Wie funktioniert die Zahlung? </span></a></td></tr></table></li><li class="mso-margin0" style="list-style:none; margin-bottom:10px"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: inherit; letter-spacing: inherit;"><tr><td width="1" valign="top" align="left"><img  width="1"  height="0"  src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/article_24x24_2x.png"  alt="" /></td><td><a style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#FFFFFE;text-decoration:underline;" href="https://www.zalando.de/faq/can-i-cancel-or-modify-my-order-after-i-placed-it.html?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=faq_order_modifying&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=faq_order_modifying"><span>Kann ich die Bestellung ändern oder stornieren? </span></a></td></tr></table></li></ul></td></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td><td valign="top" width="2%"><![endif]--><table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; display: inline-block; vertical-align: top; max-width: 20px;" class="mobile-full"><tr valign="top"><td align="left" valign="top" class="mobile-full"></td></tr></table><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]><td valign="top" width="48%"><![endif]--><table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; display: inline-block; vertical-align: top; max-width: 280px; font-size: 14px; letter-spacing: 0.6px; line-height:22px" class="mobile-full"><tbody><tr valign="top"><td align="left" valign="top" class="mobile-full"><ul style="padding-left:0px; margin: 0;"><li class="mso-margin0" style="list-style:none; margin-bottom:10px"><table cellpadding="0" cellspacing="0" border="0" width="100%" style="font-size: inherit; letter-spacing: inherit;"><tr><td width="1" valign="top" align="left"><img  width="1"  height="0"  src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/help_24x24_2x.png"  alt="" /></td><td><a style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;text-align:left;color:#FFFFFE;text-decoration:underline;" href="https://www.zalando.de/faq/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=faq&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=faq"><span>Hilfe & Kontakt </span></a></td></tr></table></li></ul></td></tr></tbody></table><!--[if (gte mso 9)|(IE)]></td><td valign="top" width="2%"><![endif]--><table width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; display: inline-block; vertical-align: top; max-width: 20px;" class="mobile-full"><tr valign="top"><td align="left" valign="top" class="mobile-full"></td></tr></table><!--[if (gte mso 9)|(IE)]></td><![endif]--><!--[if (gte mso 9)|(IE)]></tr></table><![endif]--></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="16" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#6328E0"><tr><td style="padding-left:24px;padding-right:24px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="left"><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;font-weight:bold;color:#FFFFFE!important;" >Finde Inspiration</td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left"><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="left"><tr><td align="left" style="padding-right:6px;"><a href="https://www.instagram.com/zalando/" target="_blank"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/icon_instagram.png" style="display:block;" width="35" border="0" alt="" /></a></td><td align="left" style="padding-right:6px;"><a href="https://www.facebook.com/zalando" target="_blank"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/icon_facebook.png" style="display:block;" width="35" border="0" alt="" /></a></td><td align="left" style="padding-right:6px;"><a href="https://www.tiktok.com/@zalando" target="_blank"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/99062661-c7bc-4592-8260-c25ef7ff7d43/icon_tiktok.png" style="display:block;" width="35" border="0" alt="" /></a></td></tr></table></td></tr></table><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="right"><tr><td align="right" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:14px;line-height:20px;letter-spacing:0px;font-weight:bold;color:#FFFFFE!important;">Einfach shoppen</td></tr><tr><td aria-hidden="true" height="8" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td align="right" style="padding-left:6px;text-align:right;"><a href="https://play.google.com/store/apps/details?id=de.zalando.mobile" target="_blank"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/13c11237-166f-4413-8a00-0616712add40/logo_android.png" style="display:block;" width="35" border="0" alt="" /></a></td><td align="right" style="padding-left:6px;text-align:right;"><a href="https://apps.apple.com/de/app/zalando-fashion-and-shopping/id585629514" target="_blank"><img src="https://mosaic01.ztat.net/cuo/messages/810d1d00-4312-43e5-bd31-d8373fdd24c7/13c11237-166f-4413-8a00-0616712add40/logo_apple.png" style="display:block;" width="35" border="0" alt="" /></a></td></tr></table></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table><table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" ><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-decoration:none;color:#FFFFFE!important;"><b>Impressum</b><br/><a href="https://www.zalando.de?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=footer_home&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=footer_home" target="_blank" style="color:#FFFFFE !important;text-decoration:underline;">Zalando.de</a> ist ein Angebot der Zalando SE
                      <br/>
                      Zalando SE, Valeska-Gert-Straße 5, 10243 Berlin, Deutschland | Vorstand:
                      Robert Gentz & David Schröder (beide Co-Vorstandsvorsitzende), Dr. Astrid Arndt, Dr. Sandra Dembeck, David Schneider | Vorsitzender des Aufsichtsrats:
                      Kelly Bennett | Eingetragen beim Amtsgericht Charlottenburg Berlin, HRB 158855 B | Umsatzsteuer-ID: DE 260543043 | Steuernummer: 37/132/45004 | WEEE-Reg.-Nr. DE: 72754189 | <a href="https://www.zalando.de/zalando-impressum/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=footer_more_details&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=footer_more_details" target="_blank" style="color:#FFFFFE !important;text-decoration:underline;">Weitere Details</a></td></tr><tr><td aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr><tr><td align="left" style="font-family:HelveticaNow,Helvetica,sans-serif;font-size:12px;line-height:16px;letter-spacing:0px;text-decoration:none;color:#FFFFFE!important;">
                      Alle Preise sind inklusive Mehrwertsteuer. Das Angebot ist nur gültig, solange der Vorrat reicht. Preisänderungen sind jederzeit möglich. „Ursprünglich“ bezieht sich auf den Erstverkaufspreis oder die unverbindliche Preisempfehlung des Artikels.
                      Zalando SE hat ihre Forderungen aus dem oben genannten Kauf an Zalando Payments GmbH abgetreten.
                      <br/><br/>
                      Verantwortlicher für eigene Inhalte der Zalando SE gem. § 55 RStV: Robert Gentz
                      
                      
                          <br/><br/>
                          Dies ist eine automatische E-Mail. Bitte antworte nicht hierauf, da uns deine Nachricht auf diesem Wege nicht erreicht. In unseren Hilfethemen erfährst du, wie du mit uns <a href="https://www.zalando.de/faq/?wmc=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;cd084=footer_contact&amp;cd085=f5231ab9-2122-4dee-bf56-b3b27ae7b7a8&amp;wt_cd=3a92be2b96bc592674db5eded8348a32&amp;tm_hem=f5590f2c6bc7c96f72a1a48326ce4016&amp;otid=default&amp;utm_source=CRM&amp;utm_medium=Email&amp;utm_campaign=CRM49_TMS_DE.ONL_MIX_NMT_TM009_009_241209.&amp;utm_content=footer_contact" target="_blank" style="color:#FFFFFE !important;text-decoration:underline;">Kontakt</a> aufnehmen kannst.
                      
                  </td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%" aria-hidden="true"><tr><td aria-hidden="true" height="24" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></td></tr></table><a name="footer"></a></td></tr><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></table></td></tr><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></table><table class="hide darkmode" border="0" cellpadding="0" cellspacing="0" width="100%" align="center" bgcolor="#f2f2f2" aria-hidden="true"><tr><td height="40" style="font-size:0px;line-height:0px;">&nbsp;</td></tr></table></body></html>
      
  

`;
}

export default zalandoTemplate;