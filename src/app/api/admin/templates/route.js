import { z } from 'zod';
import dbConnect from '@/lib/db/connect';
import Template, { templateValidationSchema } from '@/lib/db/models/Template';
import { NextResponse } from 'next/server';

// Get all templates (admin)
export async function GET(request) {
  try {
    console.log('Admin templates GET request received');
    
    // Connect to database
    await dbConnect();
    console.log('Database connected');

    const { searchParams } = new URL(request.url);
    const enabled = searchParams.get('enabled');
    const query = {};
    
    // Only add enabled to query if it's explicitly set
    if (enabled !== null) {
      query.enabled = enabled === 'true';
    }

    console.log('Fetching templates with query:', query);

    // Fetch all templates without user details
    const templates = await Template.find(query)
      .sort({ updatedAt: -1 });

    console.log(`Found ${templates.length} templates`);

    return NextResponse.json(templates);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Create a new template (admin)
export async function POST(request) {
  try {
    console.log('Admin templates POST request received');
    
    // Connect to database
    await dbConnect();
    console.log('Database connected');

    // Get request body
    const body = await request.json();
    console.log('Received template data:', body);

    // Validate request body
    const validatedData = templateValidationSchema.parse(body);
    
    // Create new template with admin privileges
    const template = new Template({
      ...validatedData,
      createdBy: 'admin',
      updatedBy: 'admin',
      isAdminCreated: true, // Additional flag for admin-created templates
    });

    await template.save();
    console.log('Template created with ID:', template._id);
    
    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation Error:', error.errors);
      return NextResponse.json({
        error: 'Validation Error',
        details: error.errors,
      }, { status: 400 });
    }
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Delete templates (admin)
export async function DELETE(request) {
  try {
    console.log('Admin templates DELETE request received');
    await dbConnect();
    console.log('Database connected');

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    console.log('Deleting template with ID:', id);

    if (!id) {
      return NextResponse.json(
        { error: "Template ID is required" },
        { status: 400 }
      );
    }

    const template = await Template.findByIdAndDelete(id);
    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    console.log('Template deleted successfully');
    return NextResponse.json({ message: "Template deleted successfully" });
  } catch (error) {
    console.error("Error deleting template:", error);
    return NextResponse.json(
      { error: "Failed to delete template", message: error.message },
      { status: 500 }
    );
  }
} 