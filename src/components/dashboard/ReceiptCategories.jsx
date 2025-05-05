"use client"

import { useState } from "react"
import { FileText, Clipboard, Receipt } from "lucide-react"

export default function ReceiptCategories() {
  const [activeCategory, setActiveCategory] = useState(null)

  // Define the categories with their respective brands
  const categories = [
    {
      id: "addons",
      title: "Add-ons",
      icon: <FileText className="w-5 h-5" />,
      brands: [
        { id: "off-white", name: "Off-White", logo: "ow.png" },
        { id: "moncler", name: "Moncler", logo: "moncler.png" },
        // { id: "offspring", name: "Offspring", logo: "offspring.png" },
        { id: "snkrs", name: "SNKRS", logo: "snkrs.png" },
      ],
    },
    {
      id: "invoices",
      title: "A4 Invoices",
      icon: <Clipboard className="w-5 h-5" />,
      brands: [
        { id: "apple", name: "Apple", logo: "apple.png" },
        { id: "farfetch", name: "Farfetch", logo: "farfetch.png" },
        { id: "nike", name: "Nike", logo: "nike.png" },
      ],
    },
    {
      id: "thermal",
      title: "Thermal Receipts",
      icon: <Receipt className="w-5 h-5" />,
      brands: [{ id: "apple-thermal", name: "Apple", logo: "apple.png" }],
    },
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId)
  }

  const handleBrandClick = (brand) => {
    // This will be implemented later when you add functionality
    console.log(`Selected brand: ${brand.name} from category: ${activeCategory}`)
    // You can add your brand selection logic here
  }

  return (
    <div className="mb-6">
      {categories.map((category) => (
        <div key={category.id} className="mb-6">
          <div
            className="relative flex justify-between items-center pb-6 cursor-pointer"
            onClick={() => handleCategoryClick(category.id)}
          >
            <h2 className="tablet:text-4xl text-3xl font-semibold tracking-tight">{category.title}</h2>
            <div className="flex items-center text-[var(--accent-text)]">{category.icon}</div>
            <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 mt-4">
            {category.brands.map((brand) => (
              <div
                key={brand.id}
                className="aspect-square bg-[var(--accent-text)] rounded-xl flex items-center justify-center p-3 cursor-pointer hover:scale-95 transition-transform duration-300"
                onClick={() => handleBrandClick(brand)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={`/assets/brand-logos/${brand.logo}`}
                    className="h-12 max-w-full object-contain"
                    alt={brand.name}
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
        </div>
      ))}
    </div>
  )
}
