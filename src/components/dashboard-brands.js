"use client"

import { useState, useEffect } from "react"
import { getEnabledTemplates } from "@/lib/templates"

/**
 * Custom hook to get available brands with templates
 * @returns {Array} Array of available brands
 */
export function useAvailableBrands() {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    // Get all enabled templates from the template system
    const enabledTemplates = getEnabledTemplates()

    // Map templates to brand objects
    const availableBrands = enabledTemplates.map((template) => ({
      id: template.id,
      name: template.name,
      displayName: template.displayName || template.name,
      logo: template.logo,
    }))

    setBrands(availableBrands)
  }, [])

  return brands
}

/**
 * Component to display available brands in the dashboard
 */
export default function DashboardBrands({ onSelectBrand }) {
  const availableBrands = useAvailableBrands()

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-9 xl:grid-cols-10 gap-3">
      {availableBrands.map((brand) => (
        <div
          key={brand.id}
          className="aspect-square bg-[var(--accent-text)] rounded-xl flex items-center justify-center p-3 cursor-pointer hover:scale-95 transition-transform duration-300"
          onClick={() => onSelectBrand && onSelectBrand(brand)}
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={`https://res.cloudinary.com/drbew77vx/image/upload/v1743604967/resolora-receipt-logos/${brand.logo}`}
              className="h-12 max-w-full object-contain"
              alt={brand.displayName || brand.name}
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/placeholder.svg?height=32&width=32"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
