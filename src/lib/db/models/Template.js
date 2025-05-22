import mongoose from 'mongoose';
import { z } from 'zod';

// Define the template schema
const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    default: '',
  },
  logo: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  fields: [{
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  }],
  enabled: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

// Add timestamps
// templateSchema.set('timestamps', true);

// Create index for better query performance
templateSchema.index({ slug: 1, enabled: 1 });

// Add pre-save hook to update timestamps
templateSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Validation schema using Zod
export const templateValidationSchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/),
  description: z.string().optional(),
  logo: z.string().url().or(z.string().startsWith('/')),
  subject: z.string().min(5).max(200),
  html: z.string().min(50), // Minimum 50 characters of HTML
  fields: z.array(z.object({
    name: z.string().min(1),
    type: z.enum(['text', 'number', 'email', 'date', 'select']),
    label: z.string().min(1),
    required: z.boolean().default(false),
    options: z.array(z.string()).optional(),
    defaultValue: z.any().optional(),
  })).optional(),
  enabled: z.boolean().default(true),
});

// Static methods
templateSchema.statics.findBySlug = function(slug) {
  return this.findOne({ slug });
};

templateSchema.statics.findEnabled = function() {
  return this.find({ enabled: true });
};

// Instance method
templateSchema.methods.getPreviewData = function() {
  const data = {};
  this.fields.forEach(field => {
    data[field.name] = field.defaultValue || '';
  });
  return data;
};

// Create the model
const Template = mongoose.models.Template || mongoose.model('Template', templateSchema);

export default Template;
