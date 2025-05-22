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
      // Process template with form data
      const processedTemplate = processTemplate(template, formData.formData)

      // Ensure email is present
      if (!formData.formData.email) {
        throw new Error('Email address is required')
      }

      // Create receipt in database
      const receiptData = {
        userId: session.user.id,
        brandName: formData.formData.brandName || template.name,
        email: formData.formData.email,
        customerName: formData.formData.customerName,
        orderNumber: formData.formData.orderNumber,
        orderDate: formData.formData.orderDate ? new Date(formData.formData.orderDate) : new Date(),
        formData: JSON.stringify(formData.formData),
        receiptHtml: processedTemplate.html,
        status: 'pending',
      };

      const receipt = new Receipt(receiptData);
      await receipt.save();

      // Update user's receipt count
      await LicenseUser.findByIdAndUpdate(session.user.id, {
        $inc: { receiptsGenerated: 1 },
      });

      // Send email
      try {
        await sendReceiptEmail(formData.formData.email, processedTemplate.subject, processedTemplate.html);
        
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
          brandName: formData?.formData?.brandName || 'Unknown',
          email: formData?.formData?.email || 'unknown@example.com',
          formData: formData ? JSON.stringify(formData.formData) : '{}',
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
                <pre>${formData ? JSON.stringify(formData.formData, null, 2) : 'No form data'}</pre>
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
      message: "Internal server error",
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}

// Process template with form data
const processTemplate = (template, formData) => {
  // Create a copy of the template to avoid modifying the original
  let processedTemplate = {
    subject: template.subject,
    html: template.html
  }

  // Process subject with both single and double brackets
  if (processedTemplate.subject) {
    // Handle single brackets {variable}
    processedTemplate.subject = processedTemplate.subject.replace(/\{([^}]+)\}/g, (match, fieldName) => {
      const normalizedFieldName = fieldName.trim().toLowerCase()
      // Try to find the value in formData, case-insensitive
      const value = Object.entries(formData).find(([key]) => 
        key.toLowerCase() === normalizedFieldName
      )?.[1]
      return value || match
    })
    
    // Handle double brackets {{variable}}
    processedTemplate.subject = processedTemplate.subject.replace(/\{\{([^}]+)\}\}/g, (match, fieldName) => {
      const normalizedFieldName = fieldName.trim().toLowerCase()
      // Try to find the value in formData, case-insensitive
      const value = Object.entries(formData).find(([key]) => 
        key.toLowerCase() === normalizedFieldName
      )?.[1]
      return value || match
    })
  }

  // Process HTML content with both single and double brackets
  if (processedTemplate.html) {
    // Handle single brackets {variable}
    processedTemplate.html = processedTemplate.html.replace(/\{([^}]+)\}/g, (match, fieldName) => {
      const normalizedFieldName = fieldName.trim().toLowerCase()
      // Try to find the value in formData, case-insensitive
      const value = Object.entries(formData).find(([key]) => 
        key.toLowerCase() === normalizedFieldName
      )?.[1]
      return value || match
    })
    
    // Handle double brackets {{variable}}
    processedTemplate.html = processedTemplate.html.replace(/\{\{([^}]+)\}\}/g, (match, fieldName) => {
      const normalizedFieldName = fieldName.trim().toLowerCase()
      // Try to find the value in formData, case-insensitive
      const value = Object.entries(formData).find(([key]) => 
        key.toLowerCase() === normalizedFieldName
      )?.[1]
      return value || match
    })
  }

  return processedTemplate
}

// Generate PDF
const generatePDF = async (template) => {
  // Implementation of generatePDF function
  // This is a placeholder and should be replaced with the actual implementation
  throw new Error('PDF generation not implemented')
}

// Send email
const sendEmail = async (subject, html, email) => {
  // Implementation of sendEmail function
  // This is a placeholder and should be replaced with the actual implementation
  throw new Error('Email sending not implemented')
}
