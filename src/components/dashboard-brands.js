"use client"

import { useState, useEffect } from "react"
import { getEnabledTemplates } from "@/lib/templates"

// Custom hook to get available brands with templates
export function useAvailableBrands() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    // Get all enabled templates
    const templates = getEnabledTemplates()

    // Map templates to brand objects
    const brandsList = templates.map((template) => ({
      id: template.id,
      name: template.name,
      displayName: template.name,
      logo: template.logo,
    }))

    setBrands(brandsList)
  }, [])

  return brands
}
