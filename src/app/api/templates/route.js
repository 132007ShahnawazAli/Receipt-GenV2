import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { z } from 'zod';
import dbConnect from '@/lib/db/connect';
import Template, { templateValidationSchema } from '@/lib/db/models/Template';
import { NextResponse } from 'next/server';

// Get all templates
export async function GET(request) {
  try {
    // Connect to database
    await dbConnect();

    // Get user session
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const enabled = searchParams.get('enabled');
    const query = {};
    
    if (enabled !== undefined) {
      query.enabled = enabled === 'true';
    }

    const templates = await Template.find(query).sort({ updatedAt: -1 });
    return NextResponse.json(templates);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}

// Create a new template
export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();

    // Get user session
    const session = await getServerSession(authOptions);

    // Check authentication
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get request body
    const body = await request.json();

    // Validate request body
    const validatedData = templateValidationSchema.parse(body);
    
    // Create new template
    const template = new Template({
      ...validatedData,
      createdBy: session.user.id,
      updatedBy: session.user.id,
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
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error.message },
      { status: 500 }
    );
  }
}
