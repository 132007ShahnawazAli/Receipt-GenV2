/**
 * Template Management System for Receipt Generator
 *
 * This file serves as the entry point for the template system.
 * It imports all template configurations and provides utility functions
 * to access and use them.
 */

// Import all template configurations
import nikeTemplate from "./brands/nike"
import acneStudiosTemplate from "./brands/acne-studios"
import appleTemplate from "./brands/apple"
import louisVuittonTemplate from "./brands/louis-vuitton"
import zaraTemplate from "./brands/zara"
import endTemplate from "./brands/end"
import adidasTemplate from "./brands/adidas"

// Register all templates here
const templates = {
  nike: nikeTemplate,
  acne_studios: acneStudiosTemplate,
  apple: appleTemplate,
  louis_vuitton: louisVuittonTemplate,
  zara: zaraTemplate,
  end_clothing: endTemplate, 
  adidas: adidasTemplate,
  // Add more templates here as needed
}

/**
 * Get all enabled templates
 * @returns {Array} Array of enabled template objects with id, name, and logo
 */
export function getEnabledTemplates() {
  return Object.entries(templates)
    .filter(([_, template]) => template.enabled)
    .map(([id, template]) => ({
      id,
      name: template.name,
      displayName: template.displayName || template.name,
      logo: template.logo,
    }))
}

/**
 * Get template by brand ID
 * @param {string} brandId - The brand identifier
 * @returns {Object|null} The template configuration or null if not found
 */
export function getTemplateByBrandId(brandId) {
  return templates[brandId] || null
}

/**
 * Generate email subject with variable replacement
 * @param {Object} template - The template configuration
 * @param {Object} data - The form data
 * @returns {string} The formatted email subject
 */
export function generateEmailSubject(template, data) {
  if (!template || !template.subject) return "Your Receipt"

  // Replace variables in subject template (format: {variableName})
  return template.subject.replace(/\{([^}]+)\}/g, (match, key) => {
    return data[key] || match
  })
}

export default templates
