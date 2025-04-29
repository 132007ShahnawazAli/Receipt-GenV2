"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { useSession } from "next-auth/react"
import { getTemplateByBrandId } from "@/lib/templates"

export default function OrderForm({ brand, onClose, onReceiptGenerated }) {
  const { data: session } = useSession()
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [template, setTemplate] = useState(null)

  // Get the template configuration when brand changes
  useEffect(() => {
    if (brand) {
      // Use the brand ID directly if it exists, otherwise generate it
      const brandId = brand.id || brand.name.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "")
      console.log("Brand ID in OrderForm:", brandId) // Add logging to debug
      const templateConfig = getTemplateByBrandId(brandId)

      if (templateConfig) {
        setTemplate(templateConfig)

        // Initialize form data with default values and email from session
        const initialData = {
          email: session?.user?.email || "",
        }

        // Add default values from template fields
        templateConfig.fields.forEach((field) => {
          if (field.defaultValue !== undefined) {
            initialData[field.name] = field.defaultValue
          }
        })

        // Set current date for date fields if not specified
        templateConfig.fields.forEach((field) => {
          if (field.type === "date" && !initialData[field.name]) {
            initialData[field.name] = new Date().toISOString().split("T")[0]
          }
        })

        setFormData(initialData)
      }
    }
  }, [brand, session])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    if (!template) return "Template configuration not found"

    // Check required fields based on template configuration
    for (const field of template.fields) {
      if (field.required && (!formData[field.name] || formData[field.name].trim() === "")) {
        return `${field.label} is required`
      }

      // Validate email fields
      if (field.type === "email" && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData[field.name])) {
          return `Please enter a valid email for ${field.label}`
        }
      }

      // Validate URL fields
      if (field.type === "url" && formData[field.name]) {
        try {
          new URL(formData[field.name])
        } catch (e) {
          return `Please enter a valid URL for ${field.label}`
        }
      }
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/generate-receipt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          brandName: brand.displayName || brand.name,
          brandLogo: brand.logo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate receipt")
      }

      // Notify parent component that a receipt was generated
      if (onReceiptGenerated) {
        onReceiptGenerated()
      }

      // Close the form immediately after successful generation
      onClose()
    } catch (error) {
      console.error("Error generating receipt:", error)
      setError(error.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // If template isn't loaded yet, show loading state
  if (!template) {
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
    )
  }

  return (
    <div className="fixed inset-0 z-50" style={{ isolation: "isolate" }}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-[var(--background)] text-[var(--primary-text)] rounded-lg w-full max-w-lg relative flex flex-col max-h-[90vh]">
          <div className="flex-none p-6 flex justify-between items-center border-b border-[var(--secondary-text)]">
            <h2 className="text-3xl font-semibold capitalize">{brand.displayName || brand.name} Receipt</h2>
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
                {/* Dynamically render form fields based on template configuration */}
                {template.fields.map((field) => (
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
                    {loading ? "Generating Receipt..." : "Submit Order"}
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
