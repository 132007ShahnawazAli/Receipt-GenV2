"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { X } from "lucide-react"
import { useSession } from "next-auth/react"
import { getTemplateByBrandId } from "@/lib/templates"
import { toast } from "react-hot-toast"
import { Spinner } from "./ui/Spinner"

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
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize form data with default values
  useEffect(() => {
    if (template?.fields) {
      const initialFormData = {}
      template.fields.forEach((field) => {
        // Use initialData if provided, otherwise use field's defaultValue or empty string
        initialFormData[field.name] = initialData?.[field.name] || field.defaultValue || ''
      })
      
      // Always add email field with user's email if not already present
      if (!initialFormData.email && session?.user?.email) {
        initialFormData.email = session.user.email
      }
      
      setFormData(initialFormData)
    }
  }, [template?.fields, initialData, session?.user?.email])

  // Optimize field change handler
  const handleFieldChange = useCallback((field, name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when field is modified
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }, [formErrors])

  // Memoize form fields to prevent unnecessary re-renders
  const formFields = useMemo(() => {
    if (!template?.fields) return []
    
    // Always include email field
    const fields = [...template.fields]
    if (!fields.find(f => f.type === 'email')) {
      fields.unshift({
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'Enter email address',
        value: session?.user?.email || ''
      })
    }
    
    return fields.map((field) => {
      // Get the current value from formData (which includes default values)
      const currentValue = formData?.[field.name] || ''
      
      return {
        ...field,
        value: currentValue,
        onChange: (e) => handleFieldChange(field, field.name, e.target.value),
        // Only use placeholder if it was explicitly defined by admin
        placeholder: field.placeholder || ''
      }
    })
  }, [template?.fields, formData, handleFieldChange, session?.user?.email])

  // Load template and initialize form data
  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        if (passedTemplate) {
          setTemplate(passedTemplate)
          setIsTemplateLoaded(true)
        } else if (brand) {
          const templateId = brand._id || brand.id
          
          if (!templateId) {
            throw new Error('No template ID found for brand')
          }

          const response = await fetch(`/api/templates/${templateId}`)
          if (!response.ok) {
            throw new Error('Failed to fetch template')
          }
          const templateData = await response.json()
          
          if (templateData) {
            setTemplate(templateData)
            setIsTemplateLoaded(true)
          }
        }
      } catch (error) {
        console.error('Error fetching template:', error)
        setError('Failed to load template. Please try again.')
        toast.error('Failed to load template. Please try again.')
      }
    }

    fetchTemplate()
  }, [passedTemplate, brand])

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

  // Memoize the form fields to prevent unnecessary re-renders
  const memoizedFormFields = useMemo(() => {
    if (!template?.fields) return []
    
    return template.fields.map((field) => ({
      ...field,
      value: formData?.[field.name] || '',
      onChange: (e) => handleChange(e),
    }))
  }, [template?.fields, formData, handleChange])

  // Memoize the form validation
  const validateForm = useCallback(() => {
    if (!template?.fields || !formData) return {}
    
    const errors = {}
    template.fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        errors[field.name] = `${field.label} is required`
      }
    })
    return errors
  }, [template?.fields, formData])

  // Optimize form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    
    if (!template?._id) {
      toast.error('Template configuration is missing')
      return
    }

    if (!brand?._id) {
      toast.error('Brand information is missing')
      return
    }

    // Ensure email is present
    if (!formData?.email) {
      toast.error('Email address is required')
      return
    }

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    try {
      // Add brand and template info to form data
      const submissionData = {
        templateId: template._id,
        formData: {
          ...formData,
          brandName: brand.displayName || brand.name,
          brandId: brand._id,
          email: formData.email, // Ensure email is included
        },
        brandId: brand._id,
      }

      const response = await fetch('/api/generate-receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to generate receipt')
      }

      const data = await response.json()
      onReceiptGenerated(data)
      onClose()
      toast.success('Receipt generated successfully')
    } catch (error) {
      console.error('Error generating receipt:', error)
      toast.error(error.message || 'Failed to generate receipt. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }, [template, formData, brand, validateForm, onReceiptGenerated, onClose])

  // Show loading state if template or form data isn't loaded
  if (!isTemplateLoaded || !formData || !template?.fields) {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>

        {!isTemplateLoaded ? (
          <div className="min-h-[200px] flex items-center justify-center">
            <Spinner className="h-8 w-8" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-8">{error}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Receipt" : "Generate Receipt"}
            </h2>
            
            {/* Form fields */}
            {formFields.map((field) => (
              <div key={field.name} className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={field.placeholder}
                  className={`w-full px-3 py-2 border rounded-md ${
                    formErrors[field.name]
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                />
                {formErrors[field.name] && (
                  <p className="text-red-500 text-sm">{formErrors[field.name]}</p>
                )}
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="h-4 w-4" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{isEditing ? "Update Receipt" : "Generate Receipt"}</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
