import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../../src/lib/auth';
import { z } from 'zod';
import dbConnect from '@/lib/db/connect';
import Template, { templateValidationSchema } from '@/lib/db/models/Template';

export default async function handler(req, res) {
  // Connect to database
  await dbConnect();

  // Get user session
  const session = await getServerSession(req, res, authOptions);

  // Check authentication
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        return handleGetTemplate(req, res, id);
      case 'PUT':
        return handleUpdateTemplate(req, res, id, session);
      case 'DELETE':
        return handleDeleteTemplate(req, res, id);
      default:
        res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: error.message 
    });
  }
}

// Get a single template by ID
async function handleGetTemplate(req, res, id) {
  try {
    const template = await Template.findById(id);
    
    if (!template) {
      return res.status(404).json({ error: 'Template not found' });
    }

    return res.status(200).json(template);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid template ID' });
    }
    throw error;
  }
}

// Update a template
async function handleUpdateTemplate(req, res, id, session) {
  try {
    // Find the template first
    const template = await Template.findById(id);
    
    if (!template) {
      return res.status(404).json({ error: 'Template not found' });
    }

    // Validate request body
    const validatedData = templateValidationSchema.partial().parse(req.body);
    
    // Update template
    Object.assign(template, {
      ...validatedData,
      updatedBy: session.user.id,
      updatedAt: new Date(),
    });

    await template.save();
    
    return res.status(200).json(template);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation Error',
        details: error.errors,
      });
    }
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid template ID' });
    }
    throw error;
  }
}

// Delete a template
async function handleDeleteTemplate(req, res, id) {
  try {
    const template = await Template.findByIdAndDelete(id);
    
    if (!template) {
      return res.status(404).json({ error: 'Template not found' });
    }

    return res.status(204).end();
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ error: 'Invalid template ID' });
    }
    throw error;
  }
}
