import { z } from 'zod';
import dbConnect from '@/lib/db/connect';
import Template, { templateValidationSchema } from '@/lib/db/models/Template';
import { NextResponse } from 'next/server';

// Get a single template by ID (admin)
export async function GET(request, context) {
  try {
    // Connect to database
    await dbConnect();

    // Get params from context
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    // For admin, fetch template with additional details
    const template = await Template.findById(id)
      .populate('createdBy', 'name email')
      .populate('updatedBy', 'name email');
    
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    return NextResponse.json(template);
  } catch (error) {
    if (error.name === 'CastError') {
      return NextResponse.json({ error: 'Invalid template ID' }, { status: 400 });
    }
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Update a template (admin)
export async function PUT(request, context) {
  try {
    // Connect to database
    await dbConnect();

    // Get params from context
    const { id } = await context.params;
    
    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }
    
    // Find the template first
    const template = await Template.findById(id);
    
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    // Get and validate request body
    const body = await request.json();
    const validatedData = templateValidationSchema.partial().parse(body);
    
    // Update template with admin privileges
    Object.assign(template, {
      ...validatedData,
      updatedBy: 'admin',
      updatedAt: new Date(),
      lastAdminEdit: new Date(), // Track admin edits
    });

    await template.save();
    
    // Return populated template
    const updatedTemplate = await Template.findById(template._id)
      .populate('createdBy', 'name email')
      .populate('updatedBy', 'name email');
    
    return NextResponse.json(updatedTemplate);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation Error',
        details: error.errors,
      }, { status: 400 });
    }
    if (error.name === 'CastError') {
      return NextResponse.json({ error: 'Invalid template ID' }, { status: 400 });
    }
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Delete a template (admin)
export async function DELETE(request, context) {
  try {
    // Connect to database
    await dbConnect();

    // Get params from context
    const { id } = await context.params;
    
    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    const template = await Template.findByIdAndDelete(id);
    
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (error.name === 'CastError') {
      return NextResponse.json({ error: 'Invalid template ID' }, { status: 400 });
    }
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
} 