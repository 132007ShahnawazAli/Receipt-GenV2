import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { connectToDatabase } from "@/lib/mongodb"
import Template from "@/lib/db/models/Template"
import LicenseUser from "@/models/LicenseUser"
import Receipt from "@/models/Receipt"
import { sendReceiptEmail } from "@/lib/email"

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ message: "You must be logged in" }, { status: 401 })
    }

    // Connect to database
    await connectToDatabase()

    // Check license
    const licenseUser = await LicenseUser.findOne({ licenseKey: session.user.licenseKey })

    if (!licenseUser || !licenseUser.isActive) {
      return NextResponse.json({ message: "Active subscription required" }, { status: 403 })
    }

    if (licenseUser.plan === "monthly" && licenseUser.expiresAt && new Date(licenseUser.expiresAt) < new Date()) {
      return NextResponse.json({ message: "Your subscription has expired" }, { status: 403 })
    }

    // Get form data
    const formData = await request.json()
    
    if (!formData.templateId) {
      return NextResponse.json({
        success: false,
        message: 'No template ID provided',
        error: 'MISSING_TEMPLATE_ID'
      }, { status: 400 });
    }
    
    // Get template
    const template = await Template.findOne({ 
      _id: formData.templateId,
      enabled: true 
    });
    
    if (!template) {
      return NextResponse.json({
        success: false,
        message: 'Template not found or disabled',
        error: 'TEMPLATE_NOT_FOUND',
      }, { status: 404 });
    }

    try {
      // Generate email subject
      const subject = template.subject || `Your ${template.name} Receipt`;
      
      // Get template HTML
      let html = template.html;
      
      // Process template with form data
      const replacementData = {};
      
      // First, add all form data values
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'templateId') return; // Skip templateId
        
        // Preserve the exact value from form data
        if (value != null && value !== '') {
          if (value instanceof Date) {
            replacementData[key] = value.toLocaleDateString();
          } else {
            replacementData[key] = value;
          }
        }
      });
      
      // Then, add template field defaults only for missing fields
      if (template.fields && Array.isArray(template.fields)) {
        template.fields.forEach(field => {
          const fieldName = field.name;
          // Only use default if form data doesn't have this field
          if (!(fieldName in formData) || formData[fieldName] === '') {
            replacementData[fieldName] = field.defaultValue || 'N/A';
          }
        });
      }
      
      // Replace placeholders in template
      let processedHtml = html;
      
      // Replace each field's placeholder
      Object.entries(replacementData).forEach(([fieldName, value]) => {
        const placeholder = `{{${fieldName}}}`;
        processedHtml = processedHtml.replace(
          new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          value
        );
      });
      
      // Clean up any remaining placeholders
      processedHtml = processedHtml.replace(/\{\{[^}]+\}\}/g, 'N/A');
      
      html = processedHtml;
      
      // Create receipt in database
      const receiptData = {
        userId: session.user.id,
        brandName: formData.brandName || template.name,
        email: formData.email,
        customerName: formData.customerName,
        orderNumber: formData.orderNumber,
        orderDate: formData.orderDate ? new Date(formData.orderDate) : new Date(),
        formData: JSON.stringify(formData),
        receiptHtml: html,
        status: 'pending',
      };
      
      // Add optional fields
      const optionalFields = [
        'productName', 'productSize', 'productImageUrl', 'subtotal',
        'shipping', 'tax', 'total', 'currencySymbol', 'streetAddress',
        'city', 'zipCode', 'country', 'cardLastFour'
      ];
      
      optionalFields.forEach(field => {
        if (formData[field] !== undefined) {
          receiptData[field] = formData[field];
        }
      });
      
      const receipt = new Receipt(receiptData);
      await receipt.save();
      
      // Update user's receipt count
      await LicenseUser.findByIdAndUpdate(session.user.id, {
        $inc: { receiptsGenerated: 1 },
      });
      
      // Send email
      try {
        await sendReceiptEmail(formData.email, subject, html);
        
        // Update receipt status to sent
        receipt.status = 'sent';
        await receipt.save();
        
        return NextResponse.json({
          success: true,
          message: 'Receipt generated and sent successfully',
          receiptId: receipt._id
        });
        
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        
        // Update receipt status to error
        receipt.status = 'error';
        receipt.error = emailError.message;
        await receipt.save();
        
        return NextResponse.json({
          success: false,
          message: 'Receipt generated but failed to send email',
          error: 'EMAIL_SEND_ERROR',
          receiptId: receipt._id,
          details: emailError.message
        }, { status: 500 });
      }
      
    } catch (templateError) {
      console.error("Error in template processing:", templateError);
      
      // Save error receipt for debugging
      try {
        const errorReceipt = new Receipt({
          userId: session?.user?.id || null,
          brandName: formData?.brandName || 'Unknown',
          email: formData?.email || 'unknown@example.com',
          formData: formData ? JSON.stringify(formData) : '{}',
          status: 'error',
          error: templateError.message || 'Unknown error',
          receiptHtml: `
            <html>
              <body>
                <h1>Error Generating Receipt</h1>
                <h2>${templateError.message || 'Unknown error'}</h2>
                <h3>Error Details:</h3>
                <pre>${templateError.stack || 'No stack trace available'}</pre>
                <h3>Form Data:</h3>
                <pre>${formData ? JSON.stringify(formData, null, 2) : 'No form data'}</pre>
              </body>
            </html>
          `
        });
        
        await errorReceipt.save();
        
        return NextResponse.json({
          success: false,
          message: 'Failed to generate receipt',
          error: templateError.message || 'Unknown error',
          errorType: 'TEMPLATE_PROCESSING_ERROR',
          receiptId: errorReceipt._id,
          details: process.env.NODE_ENV === 'development' ? templateError.stack : undefined
        }, { status: 500 });
        
      } catch (saveError) {
        console.error('Failed to save error receipt:', saveError);
        
        return NextResponse.json({
          success: false,
          message: 'Failed to generate receipt and save error details',
          error: 'CRITICAL_ERROR',
          originalError: templateError.message,
          saveError: saveError.message
        }, { status: 500 });
      }
    }
  } catch (error) {
    console.error("Error in generate-receipt route:", error);
    return NextResponse.json({ 
      success: false,
      message: "Internal server error" 
    }, { status: 500 });
  }
}
