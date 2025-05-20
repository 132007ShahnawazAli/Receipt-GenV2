'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { 
  Loader2, Save, ArrowLeft, Plus, Trash2, Eye, Code, Code2,
  Settings, Layout, FileText, Check, X, ChevronDown, 
  ChevronUp, ExternalLink, Copy, Smartphone, Tablet, 
  Monitor, RefreshCw, HelpCircle, AlertCircle, Info,
  Edit, Mail, Clipboard, FileCode, GripVertical
} from 'lucide-react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import Link from 'next/link';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { dracula } from '@uiw/codemirror-theme-dracula';

// Form validation schema
const templateSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  description: z.string().optional(),
  logo: z.string().min(1, 'Logo URL is required'),
  subject: z.string().min(5, 'Subject is required').max(200),
  html: z.string().min(50, 'HTML content is too short'),
  fields: z.array(z.object({
    name: z.string().min(1, 'Field name is required'),
    type: z.enum(['text', 'number', 'email', 'date', 'select']),
    label: z.string().min(1, 'Label is required'),
    required: z.boolean().default(false),
    options: z.array(z.string()).optional(),
    defaultValue: z.any().optional(),
  })).optional(),
  enabled: z.boolean().default(true),
});

const EditTemplatePage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const [activeTab, setActiveTab] = useState('editor');
  
  const [isDragging, setIsDragging] = useState(false);
  const [draggedField, setDraggedField] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
    resolver: zodResolver(templateSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      logo: '',
      subject: '',
      html: '',
      enabled: true,
      fields: []
    }
  });

  const formData = watch();

  // Load template data
  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await fetch(`/api/templates/${id}`);
        if (!response.ok) throw new Error('Failed to fetch template');
        
        const data = await response.json();
        reset({
          ...data,
          fields: data.fields || []
        });
        
        setPreviewData({
          name: data.name || 'Your Company',
          logo: data.logo || 'https://via.placeholder.com/150',
        });
      } catch (error) {
        console.error('Error loading template:', error);
        toast.error('Failed to load template');
        router.push('/admin/templates');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchTemplate();
    }
  }, [id, reset, router]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/templates/${id || ''}`, {
        method: id ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to save template');
      }

      toast.success(`Template ${id ? 'updated' : 'created'} successfully`);
      router.push('/admin/templates');
    } catch (error) {
      console.error('Error saving template:', error);
      toast.error(error.message || 'Failed to save template');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to replace placeholders with preview data
  const getPreviewHtml = (html) => {
    if (!html) return '';
    
    // Replace placeholders with preview data
    let previewHtml = html;
    
    // Replace all field placeholders
    Object.keys(previewData).forEach(key => {
      const value = previewData[key];
      const regex = new RegExp(`{${key}}`, 'g');
      previewHtml = previewHtml.replace(regex, value);
    });
    
    return previewHtml;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--background)]">
        <div className="flex flex-col items-center">
          <Loader2 className="w-10 h-10 animate-spin text-[var(--accent-text)]" />
          <p className="mt-4 text-[var(--secondary-text)]">Loading template...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8 pb-4 border-b border-zinc-800">
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[var(--primary-text)] tracking-tight">Edit Template</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href="/admin/templates" 
                className="flex items-center px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-[var(--primary-text)] rounded-md transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Template Information</h2>
                </div>
              </div>
              
              <div className="px-6 py-5 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                      <span>Template Name</span>
                      <span className="text-[var(--accent-text)] ml-0.5">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm"
                        placeholder="Invoice Template"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Layout className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Dynamic Fields</h2>
                </div>
              </div>
              
              <div className="p-6">
                {formData.fields?.length === 0 && (
                  <div className="text-center py-8">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-zinc-900 mb-4">
                      <Plus className="h-6 w-6 text-[var(--accent-text)]" />
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-[var(--primary-text)]">No fields added yet</h3>
                    <p className="mt-1 text-sm text-[var(--secondary-text)]">Add fields to make your template dynamic.</p>
                    <button
                      type="button"
                      onClick={() => {
                        const fields = [...(formData.fields || [])];
                        setValue('fields', [
                          ...fields,
                          { name: '', type: 'text', label: '', required: false }
                        ]);
                      }}
                      className="inline-flex items-center px-4 py-2 border border-[var(--accent-text)]/30 text-sm font-medium rounded-lg shadow-sm text-[var(--accent-text)] bg-[var(--accent-text)]/10 hover:bg-[var(--accent-text)]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200 mt-4"
                    >
                      <Plus className="-ml-0.5 mr-1.5 h-4 w-4" />
                      Add Your First Field
                    </button>
                  </div>
                )}
                
                <Reorder.Group 
                  axis="y" 
                  values={formData.fields || []} 
                  onReorder={(newOrder) => setValue('fields', newOrder)}
                  className="space-y-4"
                >
                  {formData.fields?.map((field, index) => (
                    <Reorder.Item 
                      key={field.name || index} 
                      value={field}
                      className="list-none"
                    >
                      <motion.div 
                        className={`relative group bg-zinc-900/50 p-4 border rounded-lg transition-all duration-200 shadow-sm ${isDragging && draggedField === index ? 'border-[var(--accent-text)] shadow-lg' : 'border-zinc-800 hover:border-zinc-700'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        layout
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div 
                              className="mr-2 cursor-grab text-zinc-500 hover:text-[var(--accent-text)] transition-colors p-1 rounded hover:bg-zinc-800/50"
                              onMouseDown={() => {
                                setIsDragging(true);
                                setDraggedField(index);
                              }}
                              onMouseUp={() => {
                                setIsDragging(false);
                                setDraggedField(null);
                              }}
                            >
                              <GripVertical className="w-4 h-4" />
                            </div>
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs font-medium text-[var(--accent-text)]">{index + 1}</span>
                            <h3 className="ml-2 text-sm font-medium text-[var(--primary-text)]">
                              {field.name ? field.name : 'New Field'}
                            </h3>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              const fields = [...(formData.fields || [])];
                              fields.splice(index, 1);
                              setValue('fields', fields);
                            }}
                            className="text-zinc-500 hover:text-red-400 transition-colors p-1 rounded-full hover:bg-zinc-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 lg:col-span-4">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Template Actions</h2>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-[var(--primary-text)]">Delete Template</h3>
                      <p className="text-xs text-[var(--secondary-text)] mt-1">
                        This action cannot be undone. All data will be permanently deleted.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1.5 border border-red-500/30 text-xs font-medium rounded-lg shadow-sm text-red-500 bg-red-500/10 hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
                    >
                      <Trash2 className="-ml-0.5 mr-1.5 h-3.5 w-3.5" />
                      Delete Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sticky bottom-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-sm border-t border-zinc-800 p-4 mt-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-text)] mr-2"></div>
                <span className="text-sm text-[var(--primary-text)]">Editing: <span className="font-medium">{formData.name || 'Template'}</span></span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Link
                  href="/admin/templates"
                  className="inline-flex items-center px-4 py-2 border border-zinc-700 text-sm font-medium rounded-lg shadow-sm text-[var(--primary-text)] bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-700 transition-all duration-200"
                >
                  <X className="-ml-0.5 mr-1.5 h-4 w-4 text-[var(--secondary-text)]" />
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-4 py-2 border border-[var(--accent-text)]/30 text-sm font-medium rounded-lg shadow-sm text-[var(--accent-text)] bg-[var(--accent-text)]/10 hover:bg-[var(--accent-text)]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="-ml-0.5 mr-1.5 h-4 w-4" />
                      Save Template
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTemplatePage;
