"use client"

import { useEffect, useState } from "react"
import { getEnabledTemplates } from "@/lib/templates"

/**
 * Custom hook to get brands that have templates enabled
 *
 * This hook filters the brand list based on the enabled templates
 * in the template management system.
 */
export function useAvailableBrands() {
  const [availableBrands, setAvailableBrands] = useState([])

  useEffect(() => {
    // Get enabled templates from the template system
    const enabledTemplates = getEnabledTemplates()

    // Map to brand format expected by the BrandGrid component
    const brands = enabledTemplates.map((template) => ({
      id: enabledTemplates.indexOf(template) + 1, // Generate sequential IDs for backwards compatibility
      name: template.id, // Use template ID as name for lookup
      logo: template.logo,
      displayName: template.name, // Original brand name for display
    }))

    setAvailableBrands(brands)
  }, [])

  return availableBrands
}
