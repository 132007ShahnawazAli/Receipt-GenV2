/**
 * Utility functions for working with templates
 *
 * This file contains helper functions for template management
 * that can be used across different template implementations.
 */

/**
 * Format a date according to the specified locale and options
 * @param {string|Date} date - The date to format
 * @param {string} locale - The locale to use for formatting (default: 'en-US')
 * @param {Object} options - The formatting options
 * @returns {string} The formatted date string
 */
export function formatDate(
  date,
  locale = "en-US",
  options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  },
) {
  if (!date) return ""

  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.toLocaleDateString(locale, options)
}

/**
 * Format a currency value
 * @param {number|string} value - The value to format
 * @param {string} symbol - The currency symbol to use
 * @returns {string} The formatted currency string
 */
export function formatCurrency(value, symbol = "$") {
  if (!value) return `${symbol}0`
  return `${symbol}${value}`
}

/**
 * Create a template for a new brand
 * @param {Object} config - The template configuration
 * @returns {Object} A template object with the specified configuration
 */
export function createTemplate(config) {
  // Validate required configuration properties
  const requiredProps = ["name", "logo", "fields", "getHtml"]
  for (const prop of requiredProps) {
    if (!config[prop]) {
      throw new Error(`Template configuration missing required property: ${prop}`)
    }
  }

  // Add placeholder support to fields if not already present
  if (config.fields) {
    config.fields = config.fields.map((field) => {
      // If placeholder is not defined, create a sensible default based on field type
      if (field.placeholder === undefined) {
        switch (field.type) {
          case "email":
            field.placeholder = "email@example.com"
            break
          case "url":
            field.placeholder = "https://example.com/image.jpg"
            break
          case "number":
            field.placeholder = "0.00"
            break
          case "date":
            // Date inputs don't really need placeholders
            break
          default:
            // For text and other types, use the field label as a hint
            field.placeholder = field.label
        }
      }
      return field
    })
  }

  return {
    enabled: true,
    subject: `Your ${config.name} Order`,
    ...config,
  }
}

/**
 * Validate form data against a template's field requirements
 * @param {Object} formData - The form data to validate
 * @param {Object} template - The template with field definitions
 * @returns {string|null} Error message or null if valid
 */
export function validateFormData(formData, template) {
  if (!template || !template.fields) {
    return "Invalid template configuration"
  }

  for (const field of template.fields) {
    // Check required fields
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
