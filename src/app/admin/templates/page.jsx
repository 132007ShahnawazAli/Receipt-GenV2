'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2, Eye, Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/components/Modal';
import OrderForm from '@/components/OrderForm';

const TemplatesPage = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [openFormModalOpen, setOpenFormModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      console.log('Fetching templates from admin API...');
      const response = await fetch('/api/admin/templates');
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Failed to fetch templates');
      }
      
      const data = await response.json();
      console.log('Fetched templates:', data);
      setTemplates(data);
    } catch (error) {
      console.error('Error fetching templates:', error);
      toast.error('Failed to load templates: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this template? This action cannot be undone.')) {
      return;
    }

    setDeletingId(id);
    try {
      const response = await fetch(`/api/admin/templates?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete template');
      }

      setTemplates(templates.filter(template => template._id !== id));
      toast.success('Template deleted successfully');
    } catch (err) {
      console.error('Error deleting template:', err);
      toast.error(err.message || 'Failed to delete template');
    } finally {
      setDeletingId(null);
    }
  };

  const duplicateTemplate = async (template) => {
    try {
      const response = await fetch('/api/admin/templates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...template,
          name: `${template.name} (Copy)`,
          slug: `${template.slug}-copy-${Date.now()}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to duplicate template');
      }

      const newTemplate = await response.json();
      setTemplates([...templates, newTemplate]);
      toast.success('Template duplicated successfully');
      
      router.push(`/admin/templates/edit/${newTemplate._id}`);
    } catch (err) {
      console.error('Error duplicating template:', err);
      toast.error(err.message || 'Failed to duplicate template');
    }
  };

  const handlePreview = (template) => {
    setSelectedTemplate(template);
    setPreviewModalOpen(true);
  };

  const handleOpenForm = (template) => {
    setSelectedTemplate(template);
    setOpenFormModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header with gradient accent */}
        <div className="relative mb-10 pb-4 border-b border-zinc-800">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500"></div>
          <div className="flex flex-col justify-between pt-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-[var(--primary-text)] tracking-tight">Templates</h1>
              <p className="mt-2 text-sm text-[var(--secondary-text)]">
                Manage your email templates for order confirmations, receipts, and more.
              </p>
            </div>
            <Link
              href="/admin/templates/new"
              className="inline-flex items-center px-5 py-2.5 mt-4 text-sm font-medium text-black bg-[var(--accent-text)] rounded-lg shadow-md hover:bg-[var(--accent-text)]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] md:mt-0 transform hover:scale-105"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Template
            </Link>
          </div>
        </div>

        {templates && templates.length === 0 ? (
          <div className="p-10 text-center bg-gradient-to-b from-zinc-900/50 to-zinc-900/20 rounded-xl shadow-[0px_0px_15px_-1px_#000000] border border-[var(--accent-text)]/20 backdrop-blur-sm">
            <div className="w-20 h-20 mx-auto rounded-full bg-[var(--accent-text)]/10 flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-[var(--accent-text)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mt-2 text-2xl font-medium text-[var(--primary-text)]">No templates yet</h3>
            <p className="mt-3 text-[var(--secondary-text)] max-w-md mx-auto">Create your first template to start generating professional receipts for your customers.</p>
            <div className="mt-8">
              <Link
                href="/admin/templates/new"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-lg text-sm font-medium rounded-lg text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transform hover:scale-105"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Your First Template
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <div key={template._id} className="group bg-gradient-to-b from-zinc-900 to-zinc-950 overflow-hidden rounded-xl border border-zinc-800 hover:border-[var(--accent-text)] transition-all duration-300 hover:shadow-[0px_0px_20px_-1px_var(--accent-text-rgb)/20] transform hover:-translate-y-1">
                {/* Template Header with Gradient Accent */}
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-medium text-[var(--primary-text)] truncate" title={template.name}>
                        {template.name}
                      </h3>
                      {template.enabled ? (
                        <span className="px-2.5 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-[var(--accent-text)]/20 text-[var(--accent-text)] border border-[var(--accent-text)]/30">
                          Enabled
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                          Disabled
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--secondary-text)] mb-4 truncate" title={template.description || template.slug}>
                      {template.description || template.slug}
                    </p>
                  </div>
                </div>
                
                {/* Template Preview Card */}
                <div className="mx-5 mb-4 h-32 bg-white rounded-lg border border-zinc-800/50 flex items-center justify-center overflow-hidden cursor-pointer group/preview" onClick={() => handlePreview(template)}>
                  <div className="relative w-full h-full">
                    {/* Display the actual logo image with fallback to brand name */}
                    {template.logo ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-(--primary-text)">
                        <img 
                          src={template.logo} 
                          alt={template.name}
                          className="max-w-[80%] max-h-[80%] object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div 
                          className="hidden text-2xl font-bold text-gray-800 text-center px-4"
                          style={{ wordBreak: 'break-word' }}
                        >
                          {template.name}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-2xl font-bold text-gray-800 text-center px-4" style={{ wordBreak: 'break-word' }}>
                          {template.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-3">
                  <Link
                    href={`/admin/templates/edit/${template._id}`}
                    className="flex items-center justify-center px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-[var(--primary-text)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:ring-offset-1 focus:ring-offset-zinc-900"
                  >
                    <Edit className="w-4 h-4 mr-2" /> Edit
                  </Link>
                  
                  <button
                    onClick={() => handleOpenForm(template)}
                    className="flex items-center justify-center px-4 py-2.5 bg-[var(--accent-text)]/10 hover:bg-[var(--accent-text)]/20 text-[var(--accent-text)] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:ring-offset-1 focus:ring-offset-zinc-900"
                  >
                    <Plus className="w-4 h-4 mr-2" /> Open Form
                  </button>
                </div>
                
                {/* Secondary Actions */}
                <div className="px-5 pb-5 flex justify-between">
                  <button
                    onClick={() => duplicateTemplate(template)}
                    className="flex items-center justify-center text-sm text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Duplicate
                  </button>
                  
                  <button
                    onClick={() => handleDelete(template._id)}
                    className="flex items-center justify-center text-sm text-red-400 hover:text-red-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={deletingId === template._id}
                  >
                    {deletingId === template._id ? (
                      <><Loader2 className="w-4 h-4 mr-1.5 animate-spin" /> Deleting...</>
                    ) : (
                      <><Trash2 className="w-4 h-4 mr-1.5" /> Delete</>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <Modal
          isOpen={previewModalOpen}
          onClose={() => setPreviewModalOpen(false)}
          title={selectedTemplate ? `Preview: ${selectedTemplate.name}` : 'Preview Template'}
          size="large"
        >
          {selectedTemplate && (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Preview Panel */}
              <div className="flex-1 min-w-0">
                <div className="sticky top-0 z-10 bg-[var(--background)] pb-3 mb-3 border-b border-zinc-800">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-[var(--primary-text)]">Template Preview</h3>
                    <div className="flex items-center space-x-3">
                      {/* Device Selector */}
                      <div className="flex items-center space-x-2 bg-zinc-800/50 rounded-lg p-1">
                        <button className="p-1.5 rounded text-[var(--primary-text)] bg-zinc-700 hover:bg-zinc-600 transition-colors" title="Mobile View">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button className="p-1.5 rounded text-[var(--primary-text)] hover:bg-zinc-700 transition-colors" title="Tablet View">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button className="p-1.5 rounded text-[var(--primary-text)] hover:bg-zinc-700 transition-colors" title="Desktop View">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Open in New Tab Button */}
                      <button 
                        className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-[var(--primary-text)] transition-colors"
                        title="Open in New Tab"
                        onClick={() => {
                          // Create a new window with the template HTML
                          const newWindow = window.open('', '_blank');
                          newWindow.document.write(selectedTemplate.html || '<div style="padding: 20px; text-align: center; color: #666;">No HTML content defined</div>');
                          newWindow.document.close();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Template Preview Frame */}
                <div className="relative rounded-lg overflow-hidden border border-zinc-700 bg-white">
                  {/* Email Frame Header */}
                  <div className="bg-zinc-100 border-b border-zinc-300 px-4 py-2 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="mx-auto text-xs text-zinc-500 font-medium">
                      {selectedTemplate.name} - Preview
                    </div>
                  </div>
                  
                  {/* Template Content */}
                  <div 
                    className="p-6 overflow-auto max-h-[60vh] bg-white text-black"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedTemplate.html || '<div style="padding: 40px; text-align: center; color: #666; font-family: system-ui, sans-serif;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 20px;"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg><h3 style="margin-bottom: 10px; font-size: 18px;">No HTML content defined</h3><p>This template does not have any HTML content yet.</p></div>' 
                    }} 
                  />
                </div>
              </div>
              
              {/* Details Panel */}
              <div className="w-full lg:w-80 flex-shrink-0">
                {/* Template Details */}
                <div className="bg-zinc-900/50 p-5 rounded-lg border border-zinc-800 mb-5">
                  <h3 className="text-lg font-medium text-[var(--primary-text)] mb-4 pb-2 border-b border-zinc-800">Template Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--secondary-text)]">Name</h4>
                      <p className="mt-1 text-[var(--primary-text)]">{selectedTemplate.name}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--secondary-text)]">Slug</h4>
                      <p className="mt-1 text-[var(--primary-text)] font-mono text-sm bg-zinc-800/50 px-2 py-1 rounded">{selectedTemplate.slug}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--secondary-text)]">Status</h4>
                      <div className="mt-1">
                        {selectedTemplate.enabled ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--accent-text)]/20 text-[var(--accent-text)] border border-[var(--accent-text)]/30">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-text)] mr-1.5"></span>
                            Enabled
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/50">
                            <span className="w-2 h-2 rounded-full bg-zinc-600 mr-1.5"></span>
                            Disabled
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--secondary-text)]">Brand</h4>
                      <p className="mt-1 text-[var(--primary-text)]">{selectedTemplate.brand || 'N/A'}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--secondary-text)]">Last Updated</h4>
                      <p className="mt-1 text-[var(--primary-text)]">
                        {selectedTemplate.updatedAt ? new Date(selectedTemplate.updatedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
                        }) : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Form Fields */}
                <div className="bg-zinc-900/50 p-5 rounded-lg border border-zinc-800">
                  <h3 className="text-lg font-medium text-[var(--primary-text)] mb-4 pb-2 border-b border-zinc-800">Form Fields</h3>
                  <div className="space-y-3">
                    {selectedTemplate.fields && selectedTemplate.fields.length > 0 ? (
                      selectedTemplate.fields.map((field, index) => (
                        <div key={index} className="p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:border-zinc-600 transition-colors">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium text-[var(--primary-text)]">{field.label}</h4>
                              <div className="flex items-center mt-1">
                                <span className="text-xs px-1.5 py-0.5 bg-zinc-700 rounded text-zinc-300 font-mono">{field.name}</span>
                                <span className="ml-2 text-xs px-1.5 py-0.5 bg-purple-900/30 text-purple-300 rounded border border-purple-700/30">{field.type}</span>
                                {field.required && 
                                  <span className="ml-2 text-xs px-1.5 py-0.5 bg-red-900/30 text-red-300 rounded border border-red-700/30">Required</span>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6">
                        <svg className="w-10 h-10 mx-auto text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <p className="mt-2 text-[var(--secondary-text)]">No fields defined</p>
                        <p className="mt-1 text-xs text-zinc-500">Fields will appear here once added to the template.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>

        <Modal
          isOpen={openFormModalOpen}
          onClose={() => setOpenFormModalOpen(false)}
          title={selectedTemplate ? `Generate Receipt with ${selectedTemplate.name}` : 'Template Form'}
          size="large"
        >
          {selectedTemplate && (
            <div className="relative">
              {/* Header with gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500"></div>
              
              <div className="pt-4">
                <div className="mb-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-text)]/10 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-[var(--accent-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[var(--primary-text)]">Fill out the form to generate a receipt</h3>
                    <p className="text-sm text-[var(--secondary-text)]">Using template: <span className="text-[var(--accent-text)]">{selectedTemplate.name}</span></p>
                  </div>
                </div>
                
                <OrderForm
                  template={selectedTemplate}
                  brand={{
                    id: selectedTemplate._id || selectedTemplate.id,
                    name: selectedTemplate.name,
                    displayName: selectedTemplate.displayName || selectedTemplate.name,
                    logo: selectedTemplate.logo || 'default-logo.png'
                  }}
                  onClose={() => setOpenFormModalOpen(false)}
                  onReceiptGenerated={() => {
                    setOpenFormModalOpen(false);
                    toast.success('Receipt generated successfully!', {
                      icon: '🧾',
                      style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                      },
                    });
                  }}
                />
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default TemplatesPage;
