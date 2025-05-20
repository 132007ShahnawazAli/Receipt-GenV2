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

  try {
    switch (req.method) {
      case 'GET':
        return handleGetTemplates(req, res);
      case 'POST':
        return handleCreateTemplate(req, res, session);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
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

// Get all templates
async function handleGetTemplates(req, res) {
  const { enabled } = req.query;
  const query = {};
  
  if (enabled !== undefined) {
    query.enabled = enabled === 'true';
  }

  const templates = await Template.find(query).sort({ updatedAt: -1 });
  return res.status(200).json(templates);
}

// Create a new template
async function handleCreateTemplate(req, res, session) {
  try {
    // Validate request body
    const validatedData = templateValidationSchema.parse(req.body);
    
    // Create new template
    const template = new Template({
      ...validatedData,
      createdBy: session.user.id,
      updatedBy: session.user.id,
    });

    await template.save();
    
    return res.status(201).json(template);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation Error',
        details: error.errors,
      });
    }
    throw error;
  }
}
