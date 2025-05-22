'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
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

const NewTemplatePage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const [activeTab, setActiveTab] = useState('editor');
  const [htmlEditorValue, setHtmlEditorValue] = useState('');
  const [showFieldPanel, setShowFieldPanel] = useState(false);
  const [fields, setFields] = useState([]);
  const [currentField, setCurrentField] = useState(null);
  const [showFieldForm, setShowFieldForm] = useState(false);
  const editorRef = useRef();
  
  const { register, handleSubmit, formState: { errors }, watch, setValue, control } = useForm({
    resolver: zodResolver(templateSchema),
    defaultValues: {
      name: 'My Store',
      slug: 'my-store-receipt',
      description: 'Default receipt template',
      logo: 'https://via.placeholder.com/150',
      subject: 'Order Confirmation - {{orderNumber}}',
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Receipt</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f9f9f9; }
    .receipt { max-width: 600px; margin: 0 auto; background: white; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    .header { text-align: center; margin-bottom: 30px; }
    .logo { max-width: 150px; margin-bottom: 15px; }
    .order-details { margin: 20px 0; }
    .order-details table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    .order-details th, .order-details td { padding: 10px; text-align: left; border-bottom: 1px solid #eee; }
    .order-details th { background-color: #f5f5f5; font-weight: 600; }
    .total { font-weight: bold; font-size: 1.2em; text-align: right; margin: 20px 0; }
    .footer { margin-top: 30px; text-align: center; font-size: 0.9em; color: #666; }
    .shipping-details { margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-radius: 5px; }
  </style>
</head>
<body>
  <div class="receipt">
    <div class="header">
      <img src="[LOGO_URL]" alt="Company Logo" class="logo">
      <h1>[STORE_NAME]</h1>
      <h2>Order Confirmation</h2>
    </div>
    
    <div class="order-details">
      <table>
        <tr>
          <th>Order #</th>
          <td>[ORDER_NUMBER]</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>[ORDER_DATE]</td>
        </tr>
        <tr>
          <th>Customer</th>
          <td>[CUSTOMER_NAME]</td>
        </tr>
      </table>
      
      <h3>Order Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[PRODUCT_NAME]</td>
            <td>[QUANTITY]</td>
            <td>$[PRICE]</td>
            <td>$[TOTAL]</td>
          </tr>
        </tbody>
      </table>
      
      <div class="total">
        <p>Total: $[TOTAL]</p>
      </div>
    </div>
    
    <div class="shipping-details">
      <h3>Shipping Address</h3>
      <p>[SHIPPING_NAME]</p>
      <p>[SHIPPING_ADDRESS]</p>
      <p>[SHIPPING_CITY], [SHIPPING_STATE] [SHIPPING_ZIP]</p>
      <p>[SHIPPING_COUNTRY]</p>
    </div>
    
    <div class="footer">
      <p>Thank you for your business!</p>
      <p>If you have any questions, please contact our support team.</p>
    </div>
  </div>
</body>
</html>`,
      enabled: true,
      fields: [
        { name: 'orderNumber', type: 'text', label: 'Order Number', required: true },
        { name: 'customerName', type: 'text', label: 'Customer Name', required: true },
        { name: 'productName', type: 'text', label: 'Product Name', required: true },
        { name: 'quantity', type: 'number', label: 'Quantity', required: true, defaultValue: 1 },
        { name: 'price', type: 'number', label: 'Price', required: true, defaultValue: 0 },
        { name: 'total', type: 'number', label: 'Total', required: true, defaultValue: 0 },
        { name: 'shippingName', type: 'text', label: 'Shipping Name', required: true },
        { name: 'shippingAddress', type: 'text', label: 'Shipping Address', required: true },
        { name: 'shippingCity', type: 'text', label: 'City', required: true },
        { name: 'shippingState', type: 'text', label: 'State/Province', required: true },
        { name: 'shippingZip', type: 'text', label: 'ZIP/Postal Code', required: true },
        { name: 'shippingCountry', type: 'text', label: 'Country', required: true },
      ]
    }
  });

  const formData = watch();

  // Update preview data when form values change
  useEffect(() => {
    const subscription = watch((value) => {
      const previewValues = {
        // Use the direct logo URL provided by the admin without any path modifications
        'logo': value.logo || 'https://via.placeholder.com/150',
        '[LOGO_URL]': value.logo || 'https://via.placeholder.com/150',
        '[STORE_NAME]': value.name || 'My Store',
        '[ORDER_NUMBER]': '12345',
        '[ORDER_DATE]': new Date().toLocaleDateString(),
        '[CUSTOMER_NAME]': 'John Doe',
        '[PRODUCT_NAME]': 'Sample Product',
        '[QUANTITY]': '1',
        '[PRICE]': '99.99',
        '[TOTAL]': '99.99',
        '[SHIPPING_NAME]': 'John Doe',
        '[SHIPPING_ADDRESS]': '123 Main St',
        '[SHIPPING_CITY]': 'New York',
        '[SHIPPING_STATE]': 'NY',
        '[SHIPPING_ZIP]': '10001',
        '[SHIPPING_COUNTRY]': 'USA'
      };
      
      // Format the template with preview data
      let formattedHtml = value.html || '';
      
      // First, ensure the logo URL is used directly without any path modifications
      if (value.logo) {
        formattedHtml = formattedHtml.replace(/src="\[LOGO_URL\]"/g, `src="${value.logo}"`);
        formattedHtml = formattedHtml.replace(/src='\[LOGO_URL\]'/g, `src='${value.logo}'`);
      }
      
      // Then replace all other placeholders
      Object.entries(previewValues).forEach(([key, val]) => {
        if (key !== '[LOGO_URL]') { // Skip logo URL as we've already handled it
          formattedHtml = formattedHtml.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), val || '');
        }
      });
      
      setPreviewData({
        ...previewValues,
        formattedHtml,
        rawHtml: value.html
      });
    });
    
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Prepare the template data
      const templateData = {
        name: data.name,
        slug: data.slug,
        description: data.description || '',
        logo: data.logo,
        subject: data.subject,
        html: data.html,
        fields: formData.fields.map(field => ({
          name: field.name,
          type: field.type,
          label: field.label,
          required: Boolean(field.required),
          options: Array.isArray(field.options) ? field.options : [],
          defaultValue: field.defaultValue || ''
        })),
        enabled: Boolean(data.enabled)
      };

      const response = await fetch('/api/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create template');
      }

      toast.success('Template created successfully');
      router.push('/admin/templates');
    } catch (error) {
      console.error('Error creating template:', error);
      toast.error(error.message || 'Failed to create template');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (index, field, value) => {
    const currentFields = watch('fields') || [];
    const updatedFields = [...currentFields];
    updatedFields[index] = { ...updatedFields[index], [field]: value };
    setValue('fields', updatedFields);
  };

  // Function to replace placeholders with preview data
  const getPreviewHtml = (html) => {
    if (!html) return '';
    
    let previewHtml = html;
    
    // Create a combined object of form data and preview data
    const allData = {
      ...formData,
      ...previewData,
      // Ensure these values are always available
      orderNumber: previewData.orderNumber || '12345',
      customerName: previewData.customerName || 'John Doe',
      productName: previewData.productName || 'Sample Product',
      quantity: previewData.quantity || 1,
      price: previewData.price || '99.99',
      total: previewData.total || '99.99',
      date: new Date().toLocaleDateString(),
      // Add any other default values needed for the preview
    };
    
    // Replace placeholders with preview data
    Object.entries(allData).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        // Skip nested objects
        return;
      }
      const placeholder = new RegExp(`\\$\\{${key}\\}`, 'g');
      previewHtml = previewHtml.replace(placeholder, value !== undefined ? String(value) : '');
    });
    
    return previewHtml;
  };

  // Add this function to handle field insertion
  const handleInsertField = (fieldName) => {
    if (editorRef?.current?.insertAtCursor) {
      editorRef.current.insertAtCursor(fieldName);
    }
  };

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
              <h1 className="text-3xl font-bold text-[var(--primary-text)] tracking-tight">Create New Template</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm text-[var(--secondary-text)] flex items-center">
                <Info className="w-4 h-4 mr-2 text-[var(--accent-text)]" />
                <span>Design your template and add dynamic fields</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Template Information Card */}
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
                        } text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-400 transition-all duration-200 shadow-sm`}
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
                        } text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-400 transition-all duration-200 shadow-sm`}
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

                <div>
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
                        } text-[var(--primary-text)] rounded-r-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-400 transition-all duration-200 shadow-sm`}
                        placeholder="https://example.com/logo.png"
                      />
                    </div>
                    {formData.logo && (
                      <div className="mt-2 p-2 border border-zinc-800 rounded-lg bg-zinc-900/50 flex items-center">
                        <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center overflow-hidden mr-3">
                          <img src={formData.logo} alt="Logo preview" className="max-w-full max-h-full object-contain" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=Error'; console.log('Using direct logo URL:', formData.logo); }} />
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
                  <p className="mt-1 text-xs text-[var(--secondary-text)]">
                    URL of your company logo to be displayed in the receipt
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Subject Template</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => handleFieldChange(null, 'subject', e.target.value)}
                    placeholder="Order Confirmation - {{orderNumber}}"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50 placeholder-zinc-400"
                  />
                  <p className="mt-1 text-sm text-[var(--secondary-text)]">
                    Use {'{{orderNumber}}'} to insert dynamic field values
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Placeholder Text</label>
                  <input
                    type="text"
                    name="placeholder"
                    value={formData.placeholder}
                    onChange={(e) => handleFieldChange(null, 'placeholder', e.target.value)}
                    placeholder="Enter placeholder text for the template"
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50 placeholder-zinc-400"
                  />
                  <p className="mt-1 text-sm text-[var(--secondary-text)]">
                    This text will be shown in the order form when no value is entered
                  </p>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                    Description <span className="text-xs text-[var(--secondary-text)] ml-1">(Optional)</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="description"
                      rows={3}
                      {...register('description')}
                      className="bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-lg focus:ring-[var(--accent-text)] focus:border-[var(--accent-text)] block w-full p-2.5 placeholder-zinc-400 transition-all duration-200 shadow-sm"
                      placeholder="A brief description of this template for internal reference"
                    />
                    <div className="mt-1.5 flex items-center justify-end">
                      <div className="text-xs text-[var(--secondary-text)]">
                        <span className="text-zinc-500">{formData.description?.length || 0}</span> characters
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
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
            </div>

            {/* Template Fields Card */}
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
                      const currentFields = formData.fields || [];
                      setValue('fields', [
                        ...currentFields,
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

              <div className="px-6 py-5">
                {/* Available Fields Section */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-[var(--primary-text)] mb-3">Available Fields</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {formData.fields?.map((field, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          const fieldPlaceholder = `{${field.name}}`;
                          const editor = document.querySelector('.cm-editor');
                          if (editor) {
                            const view = editor.cmView;
                            const state = view.state;
                            const selection = state.selection.main;
                            const doc = state.doc;
                            const newDoc = doc.replace(selection.from, selection.to, fieldPlaceholder);
                            const newState = state.update({
                              changes: { from: selection.from, to: selection.to, insert: fieldPlaceholder },
                              selection: { anchor: selection.from + fieldPlaceholder.length }
                            });
                            view.dispatch(newState);
                            setValue('html', newDoc.toString());
                          }
                        }}
                        className="flex items-center px-3 py-2 text-sm bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-[var(--primary-text)] transition-colors"
                      >
                        <span className="truncate">{field.label || field.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields List */}
                <div className="space-y-4">
                  {formData.fields?.map((field, index) => (
                    <div key={index} className="relative group bg-zinc-900/50 p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-200 shadow-sm">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-[var(--accent-text)]/40 rounded-r opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-xs font-medium text-[var(--accent-text)]">{index + 1}</span>
                          <h3 className="ml-2 text-sm font-medium text-[var(--primary-text)]">
                            {field.name ? field.name : 'New Field'}
                          </h3>
                          {field.type && (
                            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-zinc-800 text-[var(--secondary-text)]">
                              {field.type}
                            </span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const fields = [...formData.fields];
                            fields.splice(index, 1);
                            setValue('fields', fields);
                          }}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1 rounded-full hover:bg-zinc-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[var(--primary-text)]">
                            Field Name
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            value={field.name}
                            onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                            placeholder="e.g. customerName"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50 placeholder-zinc-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[var(--primary-text)]">
                            Label
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            value={field.label}
                            onChange={(e) => handleFieldChange(index, 'label', e.target.value)}
                            placeholder="e.g. Customer Name"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50 placeholder-zinc-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[var(--primary-text)]">
                            Type
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <select
                            value={field.type}
                            onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50"
                          >
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="email">Email</option>
                            <option value="date">Date</option>
                            <option value="select">Select</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[var(--primary-text)]">
                            Placeholder
                            <span className="text-xs text-[var(--secondary-text)] ml-1">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={field.placeholder || ''}
                            onChange={(e) => handleFieldChange(index, 'placeholder', e.target.value)}
                            placeholder="e.g. Enter customer name"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50 placeholder-zinc-400"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[var(--primary-text)]">
                            Default Value
                            <span className="text-xs text-[var(--secondary-text)] ml-1">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            value={field.defaultValue || ''}
                            onChange={(e) => handleFieldChange(index, 'defaultValue', e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 text-[var(--primary-text)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)]/50 placeholder-zinc-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-[var(--primary-text)]">
                            Required
                          </label>
                          <div className="flex items-center mt-2">
                            <input
                              type="checkbox"
                              id={`required-${index}`}
                              checked={field.required}
                              onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
                              className="w-4 h-4 text-[var(--accent-text)] bg-zinc-900 border-zinc-700 rounded focus:ring-[var(--accent-text)] focus:ring-offset-zinc-900"
                            />
                            <span className="ml-2 text-sm text-[var(--secondary-text)]">
                              This field is required
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Template Preview Card */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Template Preview</h2>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-[var(--secondary-text)] bg-zinc-800 px-2 py-1 rounded-md">Step 3 of 3</span>
                </div>
              </div>
              <div className="px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="border border-zinc-800 rounded-lg overflow-hidden flex">
                    <button
                      type="button"
                      className={`flex items-center py-2 px-3 text-sm font-medium ${
                        activeTab === 'editor'
                          ? 'bg-zinc-800 text-[var(--primary-text)]'
                          : 'bg-transparent text-[var(--secondary-text)] hover:text-[var(--primary-text)] hover:bg-zinc-900'
                      } transition-colors`}
                      onClick={() => setActiveTab('editor')}
                    >
                      <Code className="w-4 h-4 mr-2" />
                      HTML Editor
                    </button>
                    <button
                      type="button"
                      className={`flex items-center py-2 px-3 text-sm font-medium ${
                        activeTab === 'preview'
                          ? 'bg-zinc-800 text-[var(--primary-text)]'
                          : 'bg-transparent text-[var(--secondary-text)] hover:text-[var(--primary-text)] hover:bg-zinc-900'
                      } transition-colors`}
                      onClick={() => setActiveTab('preview')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live Preview
                    </button>
                  </div>
                  
                  {activeTab === 'preview' && (
                    <div className="flex items-center space-x-2 bg-zinc-900 rounded-lg p-1 border border-zinc-800">
                      <button className="p-1.5 rounded text-[var(--secondary-text)] hover:text-[var(--primary-text)] hover:bg-zinc-800 transition-colors" title="Mobile View">
                        <Smartphone className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 rounded text-[var(--secondary-text)] hover:text-[var(--primary-text)] hover:bg-zinc-800 transition-colors" title="Tablet View">
                        <Tablet className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 rounded text-[var(--primary-text)] bg-zinc-800 transition-colors" title="Desktop View">
                        <Monitor className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  {activeTab === 'editor' ? (
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <label className="block text-sm font-medium text-[var(--primary-text)] flex items-center">
                          <span>HTML Template</span>
                          <span className="ml-1 text-[var(--accent-text)]">*</span>
                        </label>
                        <div className="flex items-center">
                          <button 
                            type="button" 
                            className="text-xs flex items-center text-[var(--secondary-text)] hover:text-[var(--primary-text)] bg-zinc-800/50 hover:bg-zinc-800 px-2 py-1 rounded transition-colors"
                            onClick={() => {
                              navigator.clipboard.writeText(formData.html || '');
                              toast.success('HTML copied to clipboard');
                            }}
                          >
                            <Copy className="w-3.5 h-3.5 mr-1" />
                            Copy HTML
                          </button>
                        </div>
                      </div>
                      <div className="bg-zinc-900/50 p-2 rounded-lg border border-zinc-800 mb-2">
                        <div className="text-xs text-[var(--secondary-text)] bg-zinc-800/80 rounded-md px-2 py-1.5 flex items-center mb-2">
                          <Info className="w-3.5 h-3.5 mr-1.5 text-[var(--accent-text)]" />
                          Use <code className="bg-zinc-900 text-[var(--accent-text)] px-1 mx-1 rounded">{'{fieldName}'}</code> to insert dynamic field values in your template
                        </div>
                        <TemplateHtmlEditor
                          ref={editorRef}
                          value={formData.html || ''}
                          onChange={(value) => setValue('html', value)}
                          height="500px"
                        />
                      </div>
                      {errors.html && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                          {errors.html.message}
                        </p>
                      )}

                      {/* Available Fields Section Below Editor */}
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-[var(--primary-text)] mb-3">Available Fields</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {formData.fields?.map((field, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleInsertField(field.name)}
                              className="flex items-center px-3 py-2 text-sm bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-[var(--primary-text)] transition-colors"
                            >
                              <span className="truncate">{field.label || field.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden">
                      <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-2 bg-zinc-900">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-[var(--secondary-text)] truncate">
                          {formData.name || 'Template Preview'}
                        </div>
                        <button 
                          type="button"
                          className="text-[var(--secondary-text)] hover:text-[var(--primary-text)] p-1 rounded hover:bg-zinc-800 transition-colors"
                          onClick={() => {
                            // Open preview in new tab
                            const previewWindow = window.open('', '_blank');
                            previewWindow.document.write(getPreviewHtml(formData.html));
                            previewWindow.document.close();
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="relative">
                        <div className="absolute top-2 right-2 z-10 flex space-x-2">
                          <button 
                            type="button"
                            className="bg-zinc-800/80 backdrop-blur-sm text-[var(--secondary-text)] hover:text-[var(--primary-text)] p-1.5 rounded-full hover:bg-zinc-700 transition-colors"
                            title="Refresh Preview"
                            onClick={() => {
                              // Force refresh preview
                              setActiveTab('editor');
                              setTimeout(() => setActiveTab('preview'), 10);
                            }}
                          >
                            <RefreshCw className="w-4 h-4" />
                          </button>
                        </div>
                        <div 
                          className="p-4 overflow-auto h-[500px] bg-white"
                          dangerouslySetInnerHTML={{ 
                            __html: getPreviewHtml(formData.html) 
                          }} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Template Actions Card */}
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden shadow-lg rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[var(--accent-text)]" />
                  <h2 className="text-lg font-medium text-[var(--primary-text)]">Template Actions</h2>
                </div>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800 mb-4">
                  <h3 className="text-sm font-medium text-[var(--primary-text)] mb-1">Template Status</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative mr-3">
                        {Object.keys(errors).length > 0 ? (
                          <X className="w-5 h-5 text-red-500" />
                        ) : (
                          <Check className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-[var(--secondary-text)]">
                          {Object.keys(errors).length > 0 
                            ? `${Object.keys(errors).length} validation errors to fix` 
                            : 'Ready to save'}
                        </p>
                      </div>
                    </div>
                    <div>
                      {formData.fields?.length > 0 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-[var(--accent-text)]/20 text-[var(--accent-text)] border border-[var(--accent-text)]/30">
                          {formData.fields.length} fields added
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-md text-sm font-medium text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                      Saving Template...
                    </>
                  ) : (
                    <>
                      <Save className="-ml-1 mr-2 h-4 w-4" />
                      Save Template
                    </>
                  )}
                </button>
                <Link
                  href="/admin/templates"
                  className="w-full flex justify-center items-center px-4 py-3 border border-zinc-700 rounded-lg shadow-sm text-sm font-medium text-[var(--primary-text)] bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 transition-colors"
                >
                  <ArrowLeft className="-ml-1 mr-2 h-4 w-4" />
                  Cancel and Return
                </Link>
                
                <div className="pt-2 text-center">
                  <p className="text-xs text-[var(--secondary-text)]">
                    All changes are saved locally until you click Save Template
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTemplatePage;
