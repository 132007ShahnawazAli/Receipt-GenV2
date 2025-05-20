'use client';

import { useState, useEffect, useRef } from 'react';
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
  Edit, Mail, Clipboard, FileCode
} from 'lucide-react';
import Link from 'next/link';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { dracula } from '@uiw/codemirror-theme-dracula';
import TemplateHtmlEditor from '@/components/TemplateHtmlEditor';

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
  const editorRef = useRef(null);
  
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
          // Ensure we have default values for all required fields
          fields: data.fields || []
        });
        
        // Set initial preview data
        const previewData = {};
        data.fields?.forEach(field => {
          previewData[field.name] = field.defaultValue || '';
        });
        setPreviewData({
          ...previewData,
          name: data.name || 'Your Company',
          logo: data.logo || 'https://via.placeholder.com/150',
          orderNumber: '#' + Math.floor(100000 + Math.random() * 900000),
          date: new Date().toLocaleDateString(),
          productName: 'Sample Product',
          quantity: 1,
          price: '99.99',
          total: '99.99',
          customerName: 'John Doe',
          shippingName: 'John Doe',
          shippingAddress: '123 Main St',
          shippingCity: 'New York',
          shippingState: 'NY',
          shippingZip: '10001',
          shippingCountry: 'United States'
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

  // Update preview data when form changes
  useEffect(() => {
    if (!isLoading) {
      const preview = { ...previewData };
      preview.name = formData.name || 'Your Company';
      preview.logo = formData.logo || 'https://via.placeholder.com/150';
      setPreviewData(preview);
    }
  }, [formData.name, formData.logo, isLoading]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`/api/templates/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update template');
      }


      const result = await response.json();
      toast.success('Template updated successfully');
      router.push('/admin/templates');
    } catch (error) {
      console.error('Error updating template:', error);
      toast.error(error.message || 'Failed to update template');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to replace placeholders with preview data
  const getPreviewHtml = (html) => {
    if (!html) return '';
    
    let previewHtml = html;
    // Generate realistic sample data for preview
    const sampleData = {
      ...previewData,
      // Use the direct logo URL provided by the admin without any path modifications
      logo: formData.logo || 'https://via.placeholder.com/150',
      orderNumber: `#${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      customerName: 'John Doe',
      customerEmail: 'john.doe@example.com',
      shippingAddress: '123 Main Street, Apt 4B',
      shippingCity: 'New York',
      shippingState: 'NY',
      shippingZip: '10001',
      shippingCountry: 'United States',
      items: [
        { name: 'Product 1', quantity: 2, price: '$49.99', total: '$99.98' },
        { name: 'Product 2', quantity: 1, price: '$29.99', total: '$29.99' }
      ],
      subtotal: '$129.97',
      tax: '$10.40',
      shipping: '$5.99',
      total: '$146.36',
      paymentMethod: 'Credit Card (VISA ****1234)'
    };
    
    // Add all form fields to sample data
    formData.fields?.forEach(field => {
      if (!sampleData[field.name]) {
        if (field.type === 'date') {
          sampleData[field.name] = new Date().toISOString().split('T')[0];
        } else if (field.type === 'number') {
          sampleData[field.name] = '42';
        } else if (field.type === 'email') {
          sampleData[field.name] = 'customer@example.com';
        } else if (field.type === 'select' && field.options?.length) {
          sampleData[field.name] = field.options[0];
        } else {
          sampleData[field.name] = field.defaultValue || `Sample ${field.label}`;
        }
      }
    });
    
    // First, ensure the logo URL is used directly without any path modifications
    if (formData.logo) {
      previewHtml = previewHtml.replace(/src="\[LOGO_URL\]"/g, `src="${formData.logo}"`);
      previewHtml = previewHtml.replace(/src='\[LOGO_URL\]'/g, `src='${formData.logo}'`);
    }
    
    // Replace all placeholders in the HTML
    Object.keys(sampleData).forEach(key => {
      previewHtml = previewHtml.replace(new RegExp(`\{${key}\}`, 'g'), sampleData[key]);
    });
    
    return previewHtml;
  };

  // Add this function to handle field insertion
  const handleInsertField = (fieldName) => {
    if (editorRef?.current?.insertAtCursor) {
      editorRef.current.insertAtCursor(fieldName);
    }
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
        {/* Header with gradient accent */}
        <div className="relative mb-8 pb-4 border-b border-zinc-800">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500"></div>
          <div className="flex flex-col justify-between pt-4 md:flex-row md:items-center">
            <div className="flex items-center">
              <Link 
                href="/admin/templates" 
                className="flex items-center text-[var(--secondary-text)] hover:text-[var(--primary-text)] mr-4 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-1" /> Back
              </Link>
              <h1 className="text-3xl font-bold text-[var(--primary-text)] tracking-tight">Edit Template</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm text-[var(--secondary-text)] flex items-center">
                <Info className="w-4 h-4 mr-2 text-[var(--accent-text)]" />
                <span>Editing template: <span className="text-[var(--accent-text)]">{formData.name}</span></span>
              </div>
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
                <div className="flex items-center">
                  <span className="text-xs text-[var(--secondary-text)] bg-zinc-800 px-2 py-1 rounded-md">Step 1 of 3</span>
                </div>
              </div>
              
              <div className="px-6 py-5 space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                      <span>Template Name</span>
                      <span className="ml-1 text-[var(--accent-text)]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        placeholder="My Store Receipt"
                        className={`bg-zinc-900 border ${
                          errors.name ? 'border-red-500' : 'border-zinc-700'
                        } text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                      <span>URL Slug</span>
                      <span className="ml-1 text-[var(--accent-text)]">*</span>
                      <span className="ml-2 text-xs text-[var(--secondary-text)] bg-zinc-800 px-1.5 py-0.5 rounded">URL Friendly</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="slug"
                        {...register('slug')}
                        className={`bg-zinc-900 border ${
                          errors.slug ? 'border-red-500' : 'border-zinc-700'
                        } text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm`}
                        placeholder="my-store-receipt"
                      />
                      {errors.slug && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                          {errors.slug.message}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-[var(--secondary-text)]">
                        Used in the URL: /receipts/<span className="text-[var(--accent-text)]">{formData.slug || 'my-store-receipt'}</span>
                      </p>
                    </div>
                  </div>
              </div>

              <div className="mt-4">
                <label htmlFor="logo" className="block text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                  <span>Logo URL</span>
                  <span className="ml-1 text-[var(--accent-text)]">*</span>
                </label>
                <div className="relative">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-700 bg-zinc-800 text-[var(--secondary-text)] text-sm">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <input
                      type="url"
                      id="logo"
                      {...register('logo')}
                      className={`bg-zinc-900 border ${
                        errors.logo ? 'border-red-500' : 'border-zinc-700'
                      } text-[var(--primary-text)] rounded-r-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm`}
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                  {formData.logo && (
                    <div className="mt-2 p-2 border border-zinc-800 rounded-lg bg-zinc-900/50 flex items-center">
                      <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center overflow-hidden mr-3">
                        <img src={formData.logo} alt="Logo preview" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Error'; }} />
                      </div>
                      <div className="text-xs text-[var(--secondary-text)]">Logo preview</div>
                    </div>
                  )}
                </div>
                {errors.logo && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                    {errors.logo.message}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                  <span>Email Subject</span>
                  <span className="ml-1 text-[var(--accent-text)]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className={`bg-[var(--background)] border ${
                      errors.subject ? 'border-red-500' : 'border-zinc-700'
                    } text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm`}
                    placeholder="Order Confirmation - {{orderNumber}}"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                      {errors.subject.message}
                    </p>
                  )}
                  <div className="mt-1.5 flex items-center">
                    <div className="text-xs text-[var(--secondary-text)] bg-zinc-800/80 rounded-md px-2 py-1 flex items-center">
                      <Info className="w-3.5 h-3.5 mr-1.5 text-[var(--accent-text)]" />
                      Use <code className="bg-zinc-900 text-[var(--accent-text)] px-1 mx-1 rounded">{'{fieldName}'}</code> to insert dynamic field values
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="description" className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                  Description <span className="text-xs text-[var(--secondary-text)] ml-1">(Optional)</span>
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    rows={3}
                    {...register('description')}
                    className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm"
                    placeholder="A brief description of this template for internal reference"
                  />
                  <div className="mt-1.5 flex items-center justify-end">
                    <div className="text-xs text-[var(--secondary-text)]">
                      <span className="text-zinc-500">{formData.description?.length || 0}</span> characters
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start mt-4 p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <div className="flex items-center h-5">
                  <input
                    id="enabled"
                    type="checkbox"
                    {...register('enabled')}
                    className="w-4 h-4 text-[var(--accent-text)] bg-zinc-900 border-zinc-700 rounded focus:ring-[var(--accent-text)] focus:ring-offset-zinc-900"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="enabled" className="font-medium text-[var(--primary-text)]">
                    Enable this template
                  </label>
                  <p className="text-[var(--secondary-text)]">When disabled, this template won't be available for use.</p>
                </div>
                <div className="ml-auto">
                  {formData.enabled ? (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-[var(--accent-text)]/20 text-[var(--accent-text)] border border-[var(--accent-text)]/30">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                      Disabled
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Layout className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Template Fields</h2>
                  <span className="ml-2 text-xs text-[var(--secondary-text)] bg-zinc-800 px-2 py-0.5 rounded-full">{formData.fields?.length || 0} fields</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-[var(--secondary-text)] bg-zinc-800 px-2 py-1 rounded-md mr-3">Step 2 of 3</span>
                  <button
                    type="button"
                    onClick={() => {
                      const fields = formData.fields || [];
                      setValue('fields', [
                        ...fields,
                        { name: '', type: 'text', label: '', required: false }
                      ]);
                    }}
                    className="inline-flex items-center px-3 py-1.5 border border-[var(--accent-text)]/30 text-xs font-medium rounded-lg shadow-sm text-[var(--accent-text)] bg-[var(--accent-text)]/10 hover:bg-[var(--accent-text)]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200"
                  >
                    <Plus className="-ml-0.5 mr-1.5 h-4 w-4" />
                    Add Field
                  </button>
                </div>
              </div>

              <div className="space-y-4 px-6 py-5">
                {formData.fields?.length === 0 && (
                  <div className="text-center py-8 border border-dashed border-zinc-700 rounded-lg bg-zinc-900/30">
                    <div className="mx-auto w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-3">
                      <Layout className="w-6 h-6 text-[var(--secondary-text)]" />
                    </div>
                    <h3 className="text-[var(--primary-text)] font-medium mb-1">No Fields Added Yet</h3>
                    <p className="text-[var(--secondary-text)] text-sm max-w-md mx-auto mb-4">
                      Add fields to your template to make it dynamic and customizable.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        const fields = formData.fields || [];
                        setValue('fields', [
                          ...fields,
                          { name: '', type: 'text', label: '', required: false }
                        ]);
                      }}
                      className="inline-flex items-center px-4 py-2 border border-[var(--accent-text)]/30 text-sm font-medium rounded-lg shadow-sm text-[var(--accent-text)] bg-[var(--accent-text)]/10 hover:bg-[var(--accent-text)]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200"
                    >
                      <Plus className="-ml-0.5 mr-1.5 h-4 w-4" />
                      Add Your First Field
                    </button>
                  </div>
                )}
                
                {formData.fields?.map((field, index) => (
                  <div key={index} className="relative group bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-200 shadow-sm">
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-[var(--accent-text)]/40 rounded-r opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs font-medium text-[var(--accent-text)]">{index + 1}</span>
                        <h3 className="ml-2 text-sm font-medium text-[var(--primary-text)]">
                          {field.name ? field.name : 'New Field'}
                        </h3>
                        {/* Insert at cursor button */}
                        {field.name && (
                          <button
                            type="button"
                            className="ml-2 px-2 py-1 rounded-full bg-[var(--accent-text)]/20 text-[var(--accent-text)] font-mono text-xs hover:bg-[var(--accent-text)]/60 transition cursor-pointer"
                            title={`Insert {{${field.name}}} at cursor in editor`}
                            onClick={() => handleInsertField(field.name)}
                          >
                            {"{" + "{" + field.name + "}" + "}"}
                          </button>
                        )}
                      </div>
                        {field.type && (
                          <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-zinc-800 text-[var(--secondary-text)]">
                            {field.type}
                          </span>
                        )}
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                      <div className="md:col-span-4">
                        <label className="block text-xs font-medium text-[var(--secondary-text)] mb-1">
                          Field Name <span className="text-[var(--accent-text)]">*</span>
                        </label>
                        <input
                          type="text"
                          {...register(`fields.${index}.name`)}
                          className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2 placeholder-zinc-500 transition-all duration-200 shadow-sm text-sm"
                          placeholder="orderNumber"
                        />
                      </div>
                      <div className="md:col-span-4">
                        <label className="block text-xs font-medium text-[var(--secondary-text)] mb-1">
                          Display Label <span className="text-[var(--accent-text)]">*</span>
                        </label>
                        <input
                          type="text"
                          {...register(`fields.${index}.label`)}
                          className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2 placeholder-zinc-500 transition-all duration-200 shadow-sm text-sm"
                          placeholder="Order Number"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-medium text-[var(--secondary-text)] mb-1">
                          Type
                        </label>
                        <select
                          {...register(`fields.${index}.type`)}
                          className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2 placeholder-zinc-500 transition-all duration-200 shadow-sm text-sm"
                        >
                          <option value="text">Text</option>
                          <option value="number">Number</option>
                          <option value="email">Email</option>
                          <option value="date">Date</option>
                          <option value="select">Select</option>
                        </select>
                      </div>
                      <div className="md:col-span-2 flex items-end">
                        <div className="flex items-center h-5 bg-zinc-900/70 px-3 py-2 rounded-lg border border-zinc-800">
                          <input
                            type="checkbox"
                            id={`required-${index}`}
                            {...register(`fields.${index}.required`)}
                            className="w-4 h-4 text-[var(--accent-text)] bg-zinc-900 border-zinc-700 rounded focus:ring-[var(--accent-text)] focus:ring-offset-zinc-900"
                          />
                          <label htmlFor={`required-${index}`} className="ml-2 block text-xs text-[var(--primary-text)]">
                            Required
                          </label>
                        </div>
                      </div>
                    </div>

                    {formData.fields?.[index]?.type === 'select' && (
                      <div className="mt-4 border-t border-zinc-800 pt-4">
                        <label className="block text-xs font-medium text-[var(--secondary-text)] mb-1 flex items-center">
                          <span>Options</span>
                          <span className="ml-1.5 text-xs text-[var(--secondary-text)] bg-zinc-800 px-1.5 py-0.5 rounded">One per line</span>
                        </label>
                        <textarea
                          rows={3}
                          className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-500 transition-all duration-200 shadow-sm text-sm"
                          placeholder="Option 1
Option 2
Option 3"
                          value={formData.fields[index]?.options?.join('\n') || ''}
                          onChange={(e) => {
                            const fields = [...(formData.fields || [])];
                            fields[index].options = e.target.value.split('\n').filter(Boolean);
                            setValue('fields', fields);
                          }}
                        />
                        {formData.fields[index]?.options?.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {formData.fields[index]?.options?.map((option, optionIndex) => (
                              <span key={optionIndex} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-zinc-800 text-[var(--secondary-text)]">
                                {option}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {formData.fields?.[index]?.type !== 'select' && (
                      <div className="mt-4 border-t border-zinc-800 pt-4">
                        <label className="block text-xs font-medium text-[var(--secondary-text)] mb-1">
                          Default Value <span className="text-xs text-[var(--secondary-text)]">Optional</span>
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-700 bg-zinc-800 text-[var(--secondary-text)] text-sm">
                            <span className="text-xs">Default</span>
                          </span>
                          <input
                            type={formData.fields[index]?.type === 'number' ? 'number' : 'text'}
                            {...register(`fields.${index}.defaultValue`)}
                            className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-r-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2 placeholder-zinc-500 transition-all duration-200 shadow-sm text-sm"
                            placeholder={formData.fields[index]?.type === 'number' ? '0' : 'Default value'}
                          />
                        </div>
                        <p className="mt-1 text-xs text-[var(--secondary-text)]">
                          This value will be used when no value is provided
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Template Preview</h2>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-[var(--secondary-text)] bg-zinc-800 px-2 py-1 rounded-md mr-3">
                    {formData.fields?.length || 0} dynamic fields available
                  </span>
                </div>
              </div>
              
              <div className="border-b border-zinc-800">
                <div className="flex">
                  <button
                    type="button"
                    className={`px-4 py-3 text-sm font-medium relative ${
                      activeTab === 'editor' 
                        ? 'text-[var(--accent-text)]' 
                        : 'text-[var(--secondary-text)] hover:text-[var(--primary-text)]'
                    }`}
                    onClick={() => setActiveTab('editor')}
                  >
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-1.5" />
                      HTML Editor
                    </div>
                    {activeTab === 'editor' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-text)]"></div>}
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-3 text-sm font-medium relative ${
                      activeTab === 'preview' 
                        ? 'text-[var(--accent-text)]' 
                        : 'text-[var(--secondary-text)] hover:text-[var(--primary-text)]'
                    }`}
                    onClick={() => setActiveTab('preview')}
                  >
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1.5" />
                      Live Preview
                    </div>
                    {activeTab === 'preview' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--accent-text)]"></div>}
                  </button>
                </div>
              </div>

              {activeTab === 'editor' ? (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-[var(--primary-text)] flex items-center">
                      <Code2 className="w-4 h-4 mr-1.5 text-[var(--accent-text)]" />
                      HTML Content <span className="text-[var(--accent-text)] ml-0.5">*</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-[var(--secondary-text)] bg-zinc-800 px-2 py-1 rounded-md">
                        <span className="font-mono">{'{'}</span>fieldName<span className="font-mono">{'}'}</span> to insert dynamic values
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative border border-zinc-700 rounded-lg overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-800 border-b border-zinc-700 flex items-center px-3">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                        <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-[var(--secondary-text)]">HTML Template Editor</span>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <TemplateHtmlEditor
                        ref={editorRef}
                        value={watch('html')}
                        onChange={(value) => setValue('html', value, { shouldValidate: true })}
                        fields={watch('fields')}
                        height="500px"
                      />
                    </div>
                  </div>
                  
                  {errors.html && (
                    <div className="mt-2 flex items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-1.5 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-500">{errors.html.message}</p>
                    </div>
                  )}
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-[var(--secondary-text)] flex items-center">
                      <Info className="w-3.5 h-3.5 mr-1.5 text-[var(--accent-text)]" />
                      <span>Available fields: </span>
                      <div className="flex flex-wrap gap-1 ml-1">
                        {formData.fields?.map((field, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleInsertField(field.name)}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-zinc-800 text-[var(--accent-text)] hover:bg-[var(--accent-text)]/20 transition-colors cursor-pointer"
                            title={`Insert {{${field.name}}} at cursor position`}
                          >
                            {'{'}{field.name}{'}'}
                          </button>
                        ))}
                        {!formData.fields?.length && (
                          <span className="text-zinc-500">No fields defined yet</span>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('preview')}
                      className="text-xs text-[var(--accent-text)] hover:underline flex items-center"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      Switch to preview
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-1.5 text-[var(--accent-text)]" />
                      <span className="text-sm font-medium text-[var(--primary-text)]">Live Template Preview</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab('editor')}
                        className="text-xs text-[var(--accent-text)] hover:underline flex items-center"
                      >
                        <Edit className="w-3.5 h-3.5 mr-1" />
                        Back to editor
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
                    <div className="bg-zinc-800 border-b border-zinc-700 py-2 px-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-1.5 text-[var(--accent-text)]" />
                        <span className="text-xs font-medium text-[var(--primary-text)]">
                          {formData.name || 'Template Preview'}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          className="text-xs bg-zinc-700 hover:bg-zinc-600 text-[var(--primary-text)] px-2 py-1 rounded flex items-center transition-colors"
                          onClick={() => {
                            const previewHtml = getPreviewHtml(formData.html || '');
                            if (previewHtml) {
                              navigator.clipboard.writeText(previewHtml);
                              toast.success('Preview HTML copied to clipboard');
                            }
                          }}
                        >
                          <Clipboard className="w-3 h-3 mr-1" />
                          Copy HTML
                        </button>
                      </div>
                    </div>
                    
                    <div 
                      className="p-4 overflow-auto max-h-[500px] bg-white"
                      dangerouslySetInnerHTML={{ 
                        __html: getPreviewHtml(formData.html || '') 
                      }} 
                    />
                  </div>
                  
                  <div className="mt-4 bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
                    <h3 className="text-sm font-medium text-[var(--primary-text)] mb-2 flex items-center">
                      <Info className="w-4 h-4 mr-1.5 text-[var(--accent-text)]" />
                      Dynamic Field Values
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {formData.fields?.map((field, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-zinc-800/50 px-3 py-2 rounded border border-zinc-700">
                          <div className="flex items-center">
                            <span className="text-xs font-mono text-[var(--accent-text)]">{'{'}{field.name}{'}'}</span>
                            <span className="mx-2 text-zinc-500">→</span>
                            <span className="text-xs text-[var(--secondary-text)]">{field.label}</span>
                          </div>
                          <span className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">{field.type}</span>
                        </div>
                      ))}
                      {!formData.fields?.length && (
                        <div className="col-span-full text-center py-3 text-[var(--secondary-text)] text-sm">
                          No fields defined yet. Add fields to make your template dynamic.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

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
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this template? This action cannot be undone.')) {
                          // Handle delete logic here
                        }
                      }}
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
      </div>
      </form>
    </div>
  );
};

export default EditTemplatePage;
