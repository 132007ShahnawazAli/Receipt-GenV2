"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useSession } from "next-auth/react"
import { getTemplateByBrandId } from "@/lib/templates"

export default function OrderForm({
  brand,
  template: passedTemplate = null,
  onClose,
  onReceiptGenerated,
  initialData = null,
  isEditing = false,
  receiptId = null,
}) {
  const { data: session } = useSession()
  const [formData, setFormData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [template, setTemplate] = useState(passedTemplate)
  const [isTemplateLoaded, setIsTemplateLoaded] = useState(false)

  // Initialize form data with template defaults
  const initializeFormData = (templateData) => {
    // Start with basic required fields
    let initialFormData = {
      email: session?.user?.email || "",
      brandId: brand?.id || brand?.name?.toLowerCase().replace(/\s+/g, "_"),
      templateId: templateData._id || templateData.id,
    };

    // Add template fields with their defaults
    if (templateData.fields && Array.isArray(templateData.fields)) {
      templateData.fields.forEach((field) => {
        // Set default value based on field type
        if (field.type === 'number') {
          initialFormData[field.name] = field.defaultValue !== '' ? Number(field.defaultValue) : '';
        } else if (field.type === 'date') {
          initialFormData[field.name] = field.defaultValue || new Date().toISOString().split("T")[0];
        } else {
          initialFormData[field.name] = field.defaultValue || '';
        }
      });
    }

    // If we have initial data (for editing), merge it
    if (initialData) {
      if (initialData.formData) {
        // Parse and merge form data
        const parsedFormData = typeof initialData.formData === 'string' 
          ? JSON.parse(initialData.formData) 
          : initialData.formData;

        Object.entries(parsedFormData).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            initialFormData[key] = value;
          }
        });
      } else {
        // Merge direct properties
        Object.entries(initialData).forEach(([key, value]) => {
          if (value !== null && value !== undefined && 
              !['id', 'date', 'description', 'brand', 'receiptId', 'formData'].includes(key)) {
            initialFormData[key] = value;
          }
        });
      }
    }

    return initialFormData;
  };

  // Load template and initialize form data
  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        if (passedTemplate) {
          setTemplate(passedTemplate);
          setFormData(initializeFormData(passedTemplate));
          setIsTemplateLoaded(true);
        } else if (brand) {
          const templateId = brand._id || brand.id;
          
          if (!templateId) {
            throw new Error('No template ID found for brand');
          }

          const response = await fetch(`/api/templates/${templateId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch template');
          }
          const templateData = await response.json();
          
          if (templateData) {
            setTemplate(templateData);
            setFormData(initializeFormData(templateData));
            setIsTemplateLoaded(true);
          }
        }
      } catch (error) {
        console.error('Error fetching template:', error);
        setError('Failed to load template. Please try again.');
      }
    };

    fetchTemplate();
  }, [passedTemplate, brand, session, initialData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    // Get the field definition
    const fieldDef = template?.fields?.find(f => f.name === name);
    
    // Process the value based on field type
    let processedValue = value;
    if (fieldDef) {
      if (fieldDef.type === 'number') {
        processedValue = value === '' ? '' : Number(value);
      } else if (fieldDef.type === 'date') {
        processedValue = value;
      } else {
        processedValue = value;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  const validateForm = () => {
    if (!template?.fields) return null;

    for (const field of template.fields) {
      if (!field.required) continue;

      const value = formData[field.name];
      
      // Check if required field is empty
      if (value === undefined || value === null || value === '') {
        return `${field.label} is required`;
      }

      // Type-specific validation
      switch (field.type) {
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return `Please enter a valid email for ${field.label}`;
          }
          break;

        case 'number':
          if (isNaN(Number(value))) {
            return `${field.label} must be a valid number`;
          }
          break;

        case 'date':
          if (isNaN(Date.parse(value))) {
            return `${field.label} must be a valid date`;
          }
          break;
      }
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isTemplateLoaded || !formData) {
      setError("Please wait for the form to load completely");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Validate form
      const validationError = validateForm();
      if (validationError) {
        throw new Error(validationError);
      }

      // Prepare the payload
      const payload = {
        ...formData,
        templateId: brand._id || brand.id,
        brandName: brand.displayName || brand.name,
        brandLogo: brand.logo
      };

      // Send to appropriate endpoint
      const endpoint = isEditing ? "/api/user/update-receipt" : "/api/generate-receipt";
      if (isEditing) {
        payload.receiptId = receiptId;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Failed to ${isEditing ? 'update' : 'generate'} receipt`);
      }

      if (onReceiptGenerated) {
        onReceiptGenerated();
      }

      onClose();
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'generating'} receipt:`, error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state if template or form data isn't loaded
  if (!isTemplateLoaded || !formData) {
    return (
      <div className="fixed inset-0 z-50" style={{ isolation: "isolate" }}>
        <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-[var(--background)] text-[var(--primary-text)] rounded-lg w-full max-w-lg p-6">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50" style={{ isolation: "isolate" }}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-[var(--background)] text-[var(--primary-text)] rounded-lg w-full max-w-lg relative flex flex-col max-h-[90vh]">
          <div className="flex-none p-6 flex justify-between items-center border-b border-[var(--secondary-text)]">
            <h2 className="text-3xl font-semibold capitalize">
              {isEditing ? "Update" : "New"} {brand.displayName || brand.name} Receipt
            </h2>
            <button
              onClick={onClose}
              className="cursor-pointer text-[var(--accent-text)] hover:text-[var(--accent-text)]/50"
            >
              <X size={24} />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {error && (
                <div className="p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm">{error}</div>
              )}

              <div className="flex flex-col gap-4">
                {template?.fields?.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">{field.label}</label>

                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder || ""}
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                        rows="3"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        placeholder={field.placeholder || ""}
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    )}
                  </div>
                ))}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/80 text-black font-bold rounded-md transition-colors disabled:opacity-70"
                  >
                    {loading
                      ? isEditing
                        ? "Updating Receipt..."
                        : "Generating Receipt..."
                      : isEditing
                        ? "Update & Resend"
                        : "Submit Order"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
