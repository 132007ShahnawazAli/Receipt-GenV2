"use client"

import { useState, useEffect, useRef } from "react"
import { BsBadgeSd } from "react-icons/bs"
import { ChevronDown } from "lucide-react"

// Utility function to generate random order numbers based on brand format
const generateOrderNumber = (brand) => {
  // Helper function to generate random digits
  const randomDigits = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("")
  }

  // Helper function to generate random letters (uppercase)
  const randomLetters = (length) => {
    return Array.from({ length }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join("")
  }

  switch (brand) {
    case "Nike":
      return randomDigits(9)

    case "Acne Studios":
      return `AS${randomDigits(8)}`

    case "Apple":
      return `W${randomDigits(9)}`

    case "Louis Vuitton":
      // Two letters (factory code) followed by four digits
      return `${randomLetters(2)}${randomDigits(4)}`

    case "Zara":
      return randomDigits(11)

    case "END. Clothing":
      return `E${randomDigits(8)}`

    case "Adidas":
      return `AD${randomDigits(9)}`

    case "SNKRS":
      return randomDigits(9)

    case "Trapstar":
      return `TRP-${new Date().getFullYear()}-${randomDigits(4)}`

    case "Amazon":
      return `${randomDigits(3)}-${randomDigits(7)}-${randomDigits(7)}`

    case "Dior":
      return `DIOR${randomDigits(6)}`

    case "Denim Tears":
      return `DT-${randomDigits(6)}`

    case "Chrome Hearts":
      return `CH-ORDER-${randomDigits(6)}`

    case "Balenciaga":
      return `BLG${randomDigits(8)}`

    case "GOAT":
      return `G${randomDigits(10)}`

    case "Dyson":
      return `DY-${new Date().getFullYear().toString().substring(2)}${randomDigits(6)}`

    case "Flight Club":
      return `FC-${randomDigits(6)}`

    case "Prada":
      return `PRD-${randomDigits(6)}`

    case "Sephora":
      return `SPH-${randomDigits(6)}`

    case "Spider":
      return `SPDR-${randomDigits(6)}`

    case "eBay":
      return `${randomDigits(2)}-${randomDigits(5)}-${randomDigits(5)}`

    case "JD Sports":
      return `JD-${randomDigits(8)}`

    case "Flannels":
      return `FLN-${randomDigits(6)}`

    case "Hermès":
      return `HRM-${randomDigits(6)}`

    case "Gallery Dept.":
      return `GD-${randomDigits(6)}`

    case "Zalando":
      return `ZLND-${randomDigits(6)}`

    default:
      return `ORDER-${randomDigits(8)}`
  }
}

export default function OrderNumberGenerator() {
  // List of all brands - sorted alphabetically
  const brands = [
    "Acne Studios",
    "Adidas",
    "Amazon",
    "Apple",
    "Balenciaga",
    "Chrome Hearts",
    "Denim Tears",
    "Dior",
    "Dyson",
    "eBay",
    "END. Clothing",
    "Flannels",
    "Flight Club",
    "Gallery Dept.",
    "GOAT",
    "Hermès",
    "JD Sports",
    "Louis Vuitton",
    "Nike",
    "Prada",
    "Sephora",
    "SNKRS",
    "Spider",
    "Trapstar",
    "Zalando",
    "Zara",
  ]

  // State for dropdown, selected brand, and generated order number
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState(brands[0]) // Default to first brand
  const [orderNumber, setOrderNumber] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const dropdownRef = useRef(null)

  // Generate an order number for the default brand on component mount
  useEffect(() => {
    const initialOrderNumber = generateOrderNumber(selectedBrand)
    setOrderNumber(initialOrderNumber)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle brand selection
  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand)
    setIsDropdownOpen(false)

    // Generate a new order number when brand changes
    setIsGenerating(true)
    setTimeout(() => {
      const newOrderNumber = generateOrderNumber(brand)
      setOrderNumber(newOrderNumber)
      setIsGenerating(false)
    }, 300)
  }

  // Generate order number
  const handleGenerateOrderNumber = () => {
    setIsGenerating(true)

    // Add a small delay to show the generating effect
    setTimeout(() => {
      const newOrderNumber = generateOrderNumber(selectedBrand)
      setOrderNumber(newOrderNumber)
      setIsGenerating(false)
    }, 500)
  }

  // Prevent scroll propagation
  const handleDropdownScroll = (e) => {
    e.stopPropagation()
  }

  return (
    <div className="mb-6 gap-6 flex flex-col">
      {/* Section Header */}
      <div className="relative flex justify-between items-center pb-6">
        <h2 className="tablet:text-3xl text-2xl font-medium tracking-tight">Order Number Generator</h2>
        <BsBadgeSd className="w-6 h-6 text-[var(--accent-text)]" />
        <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
      </div>

      {/* Data Boxes Wrapper */}
      <div className="flex flex-col justify-between gap-6">
        {/* Brand Dropdown */}
        <div className="dropdown-container relative" ref={dropdownRef}>
          <div
            className="text-[var(--primary-text)] bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000] w-full flex justify-between items-center cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className="text-[var(--primary-text)]">{selectedBrand}</p>
            <ChevronDown
              className={`w-5 h-5 text-[var(--accent-text)] transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute z-10 mt-2 w-full bg-[var(--background)] border border-[var(--primary-text)]/10 rounded-xl shadow-[0px_0px_10px_-1px_#000000] max-h-60 overflow-y-auto"
              onScroll={handleDropdownScroll}
              onClick={(e) => e.stopPropagation()}
              style={{ scrollbarWidth: "thin", scrollbarColor: "var(--accent-text) transparent" }}
              onWheel={(e) => e.stopPropagation()} // Prevent scrolling propagation
            >
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="tablet:px-7 px-3 py-3 hover:bg-[var(--accent-text)]/10 cursor-pointer text-[var(--primary-text)]"
                  onClick={() => handleSelectBrand(brand)}
                >
                  {brand}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Generate Button */}
        <div
          className="text-[var(--primary-text)] bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000] w-full item-center flex justify-center cursor-pointer transition-all duration-300 hover:border-[var(--accent-text)]"
          onClick={handleGenerateOrderNumber}
        >
          <p className="text-[var(--accent-text)]">{isGenerating ? "Generating..." : "Generate"}</p>
        </div>

        {/* Order Number Display */}
        <div className="text-[var(--primary-text)] bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-xl shadow-[0px_0px_10px_-1px_#000000] w-full item-center flex justify-start">
          <p className="text-white font-mono select-all">{orderNumber || "Select a brand and click Generate"}</p>
        </div>
      </div>

      {/* Custom CSS for dropdown scrolling */}
      <style jsx global>{`
        .dropdown-container .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .dropdown-container .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .dropdown-container .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: var(--accent-text);
          border-radius: 20px;
        }
      `}</style>
    </div>
  )
}
