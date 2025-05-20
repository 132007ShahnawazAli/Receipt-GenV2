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
import snkrsTemplate from "./brands/snkrs"
import trapstarTemplate from "./brands/trapstar"
import amazonTemplate from "./brands/amazon"
import diorTemplate from "./brands/dior"
import denimTearsTemplate from "./brands/denimtears"
import chromeHeartsTemplate from "./brands/chromehearts"
import balenciagaTemplate from "./brands/balenciaga"
import goatTemplate from "./brands/goat"
import dysonTemplate from "./brands/dyson"
import flightClubTemplate from "./brands/flightclub"
import pradaTemplate from "./brands/prada"
import sephoraTemplate from "./brands/sephora"
import spiderTemplate from "./brands/spider"
import ebayTemplate from "./brands/ebay"
import jdSportsTemplate from "./brands/jdsports"
import flannelsTemplate from "./brands/flannels"
import hermesTemplate from "./brands/hermes";
import galleryDeptTemplate from "./brands/gallery-dept";
import zalandoTemplate from "./brands/zalando";
import chewforeverTemplate from "./brands/chewforever";

// Register all templates here
const templates = {
  nike: nikeTemplate,
  acne_studios: acneStudiosTemplate,
  apple: appleTemplate,
  louis_vuitton: louisVuittonTemplate,
  zara: zaraTemplate,
  end_clothing: endTemplate,
  adidas: adidasTemplate,
  snkrs: snkrsTemplate,
  trapstar: trapstarTemplate,
  amazon: amazonTemplate,
  dior: diorTemplate,
  denimtears: denimTearsTemplate,
  chromehearts: chromeHeartsTemplate,
  balenciaga: balenciagaTemplate,
  goat: goatTemplate,
  dyson: dysonTemplate,
  flightclub: flightClubTemplate,
  prada: pradaTemplate,
  sephora: sephoraTemplate,
  spider: spiderTemplate,
  ebay: ebayTemplate,
  jd_sports: jdSportsTemplate,
  flannels: flannelsTemplate,
  hermes: hermesTemplate,
  gallery_dept: galleryDeptTemplate,
  zalando: zalandoTemplate,
  chewforever: chewforeverTemplate
}

// Export templates object
export { templates }

/**
 * Get all enabled templates
 * @returns {Array} Array of enabled template objects with id, name, and logo
 */
export function getEnabledTemplates() {
  const seenNames = new Set()
  return Object.entries(templates)
    .filter(([_, template]) => template.enabled)
    .map(([id, template]) => ({
      id,
      name: template.name,
      displayName: template.displayName || template.name,
      logo: template.logo,
    }))
    .filter(template => {
      if (seenNames.has(template.name)) {
        return false
      }
      seenNames.add(template.name)
      return true
    })
}

/**
 * Get template by brand ID
 * @param {string} brandId - The brand identifier
 * @returns {Object|null} The template configuration or null if not found
 */
export function getTemplateByBrandId(brandId) {
  if (!brandId) return null;
  
  const normalizedId = String(brandId).toLowerCase().trim();
  
  // First try direct match (case-insensitive)
  const directMatch = Object.entries(templates).find(
    ([key]) => key.toLowerCase() === normalizedId
  );
  
  if (directMatch) return directMatch[1];
  
  // Handle special cases and aliases
  const specialCases = {
    'trapstar_london': 'trapstar',
    'denim_tears': 'denimtears',
    'chrome_hearts': 'chromehearts',
    'flight_club': 'flightclub',
    'sp5der': 'spider',
    'jdsports': 'jd_sports',
    'flannels_london': 'flannels',
    'herms': 'hermes',
    'chew_forever': 'chewforever'
  };
  
  if (specialCases[normalizedId]) {
    return templates[specialCases[normalizedId]] || null;
  }
  
  // Try to find by display name (case-insensitive)
  const displayNameMatch = Object.entries(templates).find(
    ([_, template]) => 
      template.name && 
      template.name.toLowerCase() === normalizedId
  );
  
  return displayNameMatch ? displayNameMatch[1] : null;
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
