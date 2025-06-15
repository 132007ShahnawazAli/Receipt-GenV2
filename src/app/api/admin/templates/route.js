import { z } from 'zod';
import dbConnect from '@/lib/db/connect';
import Template, { templateValidationSchema } from '@/lib/db/models/Template';
import { NextResponse } from 'next/server';

// Get all templates (admin)
export async function GET(request) {
  try {
    // Connect to database
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const enabled = searchParams.get('enabled');
    const query = {};
    
    // Only add enabled to query if it's explicitly set
    if (enabled !== null) {
      query.enabled = enabled === 'true';
    }

    // Fetch all templates without user details
    const templates = await Template.find(query)
      .sort({ updatedAt: -1 });

    return NextResponse.json(templates);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Create a new template (admin)
export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();

    // Get request body
    const body = await request.json();

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
    
    return NextResponse.json(template, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation Error',
        details: error.errors,
      }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Delete templates (admin)
export async function DELETE(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

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

    return NextResponse.json({ message: "Template deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete template", message: error.message },
      { status: 500 }
    );
  }
} 