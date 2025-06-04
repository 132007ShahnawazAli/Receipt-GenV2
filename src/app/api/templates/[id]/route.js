import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';
import dbConnect from '@/lib/db/connect';
import Template, { templateValidationSchema } from '@/lib/db/models/Template';
import { NextResponse } from 'next/server';


// Get a single template by ID
export async function GET(request, context) {
  try {
    // Connect to database
    await dbConnect();

    // Get user session
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get params from context
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    const template = await Template.findById(id);
    
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

// Update a template
export async function PUT(request, context) {
  try {
    // Connect to database
    await dbConnect();

    // Get user session
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
    
    // Update template
    Object.assign(template, {
      ...validatedData,
      updatedBy: session.user.id,
      updatedAt: new Date(),
    });

    await template.save();
    
    return NextResponse.json(template);
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

// Delete a template
export async function DELETE(request, context) {
  try {
    // Connect to database
    await dbConnect();

    // Get user session
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
