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
  Edit, Mail, Clipboard, FileCode, GripVertical
} from 'lucide-react';
import Link from 'next/link';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { dracula } from '@uiw/codemirror-theme-dracula';
import TemplateHtmlEditor from '@/components/TemplateHtmlEditor';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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

// Add Modal component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" aria-hidden="true" onClick={onClose}></div>
        <div className="relative transform overflow-hidden rounded-lg bg-zinc-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500"></div>
          <div className="px-6 py-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add SortableFieldItem component
const SortableFieldItem = ({ field, index, onInsertField, onEdit }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center px-3 py-2 text-sm bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg text-[var(--primary-text)] transition-all duration-200 group"
    >
      <span className="text-xs text-[var(--secondary-text)] mr-2">{index + 1}</span>
      <span className="truncate flex-grow">{field.label || field.name}</span>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={onEdit}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--secondary-text)] hover:text-[var(--primary-text)] p-1 rounded hover:bg-zinc-700"
        >
          <Edit className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="cursor-grab active:cursor-grabbing text-[var(--secondary-text)] hover:text-[var(--primary-text)]"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const EditTemplatePage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const [activeTab, setActiveTab] = useState('editor');
  const editorRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFieldIndex, setEditingFieldIndex] = useState(null);
  const [newField, setNewField] = useState({
    name: '',
    type: 'text',
    label: '',
    placeholder: '',
    defaultValue: '',
    required: true
  });

  // Add sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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

  // Add handleDragEnd function
  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      const oldIndex = formData.fields.findIndex(field => field.name === active.id);
      const newIndex = formData.fields.findIndex(field => field.name === over.id);
      
      const newFields = arrayMove(formData.fields, oldIndex, newIndex);
      setValue('fields', newFields);
    }
  };

  // Add handleEditField function
  const handleEditField = (index) => {
    const field = formData.fields[index];
    setNewField({
      name: field.name,
      type: field.type,
      label: field.label,
      placeholder: field.placeholder || '',
      defaultValue: field.defaultValue || '',
      required: field.required
    });
    setEditingFieldIndex(index);
    setIsModalOpen(true);
  };

  // Add handleNewFieldSubmit function
  const handleNewFieldSubmit = () => {
    const currentFields = formData.fields || [];
    if (editingFieldIndex !== null) {
      // Update existing field
      const updatedFields = [...currentFields];
      updatedFields[editingFieldIndex] = newField;
      setValue('fields', updatedFields);
    } else {
      // Add new field
      setValue('fields', [...currentFields, newField]);
    }
    
    // Reset form and close modal
    setNewField({
      name: '',
      type: 'text',
      label: '',
      placeholder: '',
      defaultValue: '',
      required: true
    });
    setEditingFieldIndex(null);
    setIsModalOpen(false);
  };

  // Add handleModalClose function
  const handleModalClose = () => {
    setNewField({
      name: '',
      type: 'text',
      label: '',
      placeholder: '',
      defaultValue: '',
      required: true
    });
    setEditingFieldIndex(null);
    setIsModalOpen(false);
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
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-6">
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
                    <label htmlFor="name" className=" text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                      <span>Template Name</span>
                      <span className="ml-1 text-[var(--accent-text)]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        placeholder="My Store Receipt"
                        className={`bg-zinc-900 border ${errors.name ? 'border-red-500' : 'border-zinc-700'
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
                    <label htmlFor="slug" className=" text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                      <span>URL Slug</span>
                      <span className="ml-1 text-[var(--accent-text)]">*</span>
                      <span className="ml-2 text-xs text-[var(--secondary-text)] bg-zinc-800 px-1.5 py-0.5 rounded">URL Friendly</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="slug"
                        {...register('slug')}
                        className={`bg-zinc-900 border ${errors.slug ? 'border-red-500' : 'border-zinc-700'
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
                  <label htmlFor="logo" className=" text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
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
                        className={`bg-zinc-900 border ${errors.logo ? 'border-red-500' : 'border-zinc-700'
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
                  <label htmlFor="subject" className=" text-sm font-medium text-[var(--primary-text)] mb-1 flex items-center">
                    <span>Email Subject</span>
                    <span className="ml-1 text-[var(--accent-text)]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      className={`bg-[var(--background)] border ${errors.subject ? 'border-red-500' : 'border-zinc-700'
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
                        setEditingFieldIndex(null);
                        setIsModalOpen(true);
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
                    <DndContext
                      sensors={sensors}
                      collisionDetection={closestCenter}
                      onDragEnd={handleDragEnd}
                    >
                      <SortableContext
                        items={formData.fields?.map(field => field.name) || []}
                        strategy={verticalListSortingStrategy}
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {formData.fields?.map((field, index) => (
                            <SortableFieldItem
                              key={field.name}
                              field={field}
                              index={index}
                              onInsertField={() => handleInsertField(field.name)}
                              onEdit={() => handleEditField(index)}
                            />
                          ))}
                        </div>
                      </SortableContext>
                    </DndContext>
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
            </div>
            <div className="space-y-6">
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
                          <label className="text-sm font-medium text-[var(--primary-text)] flex items-center">
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
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-medium text-[var(--primary-text)]">Available Fields</h3>
                            <button
                              type="button"
                              onClick={() => {
                                setEditingFieldIndex(null);
                                setIsModalOpen(true);
                              }}
                              className="inline-flex items-center px-2 py-1 border border-[var(--accent-text)]/30 text-xs font-medium rounded-lg shadow-sm text-[var(--accent-text)] bg-[var(--accent-text)]/10 hover:bg-[var(--accent-text)]/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200"
                            >
                              <Plus className="w-3.5 h-3.5 mr-1" />
                              Add Field
                            </button>
                          </div>
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
                                setActiveTab('editor');
                                setTimeout(() => setActiveTab('preview'), 10);
                              }}
                            >
                              <RefreshCw className="w-4 h-4" />
                            </button>
                          </div>
                          <div 
                            className="h-[700px] overflow-auto bg-white"
                            onWheel={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
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

      {/* Add Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-[var(--primary-text)]">
              {editingFieldIndex !== null ? 'Edit Field' : 'Add New Field'}
            </h3>
            <button
              onClick={handleModalClose}
              className="text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                  Field Name <span className="text-[var(--accent-text)]">*</span>
                </label>
                <input
                  type="text"
                  value={newField.name}
                  onChange={(e) => setNewField({ ...newField, name: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-[var(--primary-text)] focus:ring-2 focus:ring-[var(--accent-text)]/50 focus:border-[var(--accent-text)]"
                  placeholder="e.g. customerName"
                />
                <p className="mt-1 text-xs text-[var(--secondary-text)]">Used in template as {'{fieldName}'}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                  Label <span className="text-[var(--accent-text)]">*</span>
                </label>
                <input
                  type="text"
                  value={newField.label}
                  onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-[var(--primary-text)] focus:ring-2 focus:ring-[var(--accent-text)]/50 focus:border-[var(--accent-text)]"
                  placeholder="e.g. Customer Name"
                />
                <p className="mt-1 text-xs text-[var(--secondary-text)]">Display name in the form</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                Type <span className="text-[var(--accent-text)]">*</span>
              </label>
              <select
                value={newField.type}
                onChange={(e) => setNewField({ ...newField, type: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-[var(--primary-text)] focus:ring-2 focus:ring-[var(--accent-text)]/50 focus:border-[var(--accent-text)]"
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="date">Date</option>
                <option value="select">Select</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                Placeholder
              </label>
              <input
                type="text"
                value={newField.placeholder}
                onChange={(e) => setNewField({ ...newField, placeholder: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-[var(--primary-text)] focus:ring-2 focus:ring-[var(--accent-text)]/50 focus:border-[var(--accent-text)]"
                placeholder="e.g. Enter customer name"
              />
              <p className="mt-1 text-xs text-[var(--secondary-text)]">Hint text shown in empty field</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--primary-text)] mb-1">
                Default Value
              </label>
              <input
                type="text"
                value={newField.defaultValue}
                onChange={(e) => setNewField({ ...newField, defaultValue: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-[var(--primary-text)] focus:ring-2 focus:ring-[var(--accent-text)]/50 focus:border-[var(--accent-text)]"
                placeholder="e.g. John Doe"
              />
              <p className="mt-1 text-xs text-[var(--secondary-text)]">Initial value for this field</p>
            </div>

            <div className="flex items-center p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
              <input
                type="checkbox"
                id="required"
                checked={newField.required}
                onChange={(e) => setNewField({ ...newField, required: e.target.checked })}
                className="h-4 w-4 text-[var(--accent-text)] border-zinc-700 rounded focus:ring-[var(--accent-text)]"
              />
              <label htmlFor="required" className="ml-3 text-sm text-[var(--primary-text)]">
                Required field
              </label>
              <div className="ml-auto">
                {newField.required ? (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-[var(--accent-text)]/20 text-[var(--accent-text)] border border-[var(--accent-text)]/30">
                    Required
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                    Optional
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleModalClose}
              className="px-4 py-2 text-sm font-medium text-[var(--primary-text)] bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleNewFieldSubmit}
              className="px-4 py-2 text-sm font-medium text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/90 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-colors"
            >
              {editingFieldIndex !== null ? 'Save Changes' : 'Add Field'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditTemplatePage;
