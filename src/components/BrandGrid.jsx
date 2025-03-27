"use client"

import Image from "next/image"

export default function BrandGrid({ brands, onBrandClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="bg-white bg-opacity-10 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition-all duration-300 h-40"
          onClick={() => onBrandClick(brand)}
        >
          <div className="text-center">
            <div className=" mx-auto mb-2 relative">
              <img
                src={`/assets/brand-logos/${brand.logo}`}
                alt={`${brand.name} logo`}
                fill
                className="object-contain h-40"
              />
            </div>
            <h3 className="text-white font-medium">{brand.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

