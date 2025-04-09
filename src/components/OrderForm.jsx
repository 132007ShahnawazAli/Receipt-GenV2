"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useSession } from "next-auth/react"

export default function OrderForm({ brand, onClose }) {
  const { data: session } = useSession()
  const [formData, setFormData] = useState({
    customerName: "",
    deliveryAddress: "",
    currencySymbol: "",
    productName: "",
    orderDate: new Date().toISOString().split("T")[0],
    shipping: "Free",
    productSize: "",
    subtotal: "",
    total: "",
    email: session?.user?.email || "",
    productImageUrl: "",
    cardLastFour: "4677",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    // Basic validation
    if (!formData.customerName.trim()) return "Customer name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.deliveryAddress.trim()) return "Delivery address is required"
    if (!formData.currencySymbol.trim()) return "Currency symbol is required"
    if (!formData.productName.trim()) return "Product name is required"
    if (!formData.orderDate) return "Order date is required"
    if (!formData.productSize.trim()) return "Product size is required"
    if (!formData.subtotal) return "Subtotal is required"
    if (!formData.total) return "Total is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) return "Please enter a valid email"

    // URL validation for product image
    if (formData.productImageUrl) {
      try {
        new URL(formData.productImageUrl)
      } catch (e) {
        return "Please enter a valid URL for the product image"
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
          brandName: brand.name,
          brandLogo: brand.logo,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate receipt")
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error generating receipt:", error)
      setError(error.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[var(--background)] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-2xl font-bold capitalize">{brand.name} Email Receipt</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-[var(--secondary-text)]">
          <X size={24} />
        </button>
      </div>

      {success ? (
        <div className="p-6 text-center">
          <div className="mb-4 text-[var(--accent-text)] text-5xl">✓</div>
          <h3 className="text-xl font-bold mb-2">Receipt Generated!</h3>
          <p className="mb-4">Your receipt has been generated and sent to your email.</p>
          <p className="text-sm text-[var(--secondary-text)]">This window will close automatically...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && <div className="p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm">{error}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Customer Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Delivery Address</label>
            <textarea
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              required
              className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              rows="3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Currency Symbol</label>
              <input
                type="text"
                name="currencySymbol"
                value={formData.currencySymbol}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
                placeholder="e.g. $, €, £"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Order Date</label>
              <input
                type="date"
                name="orderDate"
                value={formData.orderDate}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Shipping</label>
              <input
                type="text"
                name="shipping"
                value={formData.shipping}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Product Size</label>
              <input
                type="text"
                name="productSize"
                value={formData.productSize}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Subtotal</label>
              <input
                type="number"
                name="subtotal"
                value={formData.subtotal}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Total</label>
              <input
                type="number"
                name="total"
                value={formData.total}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--secondary-text)] mb-1">Product Image URL</label>
            <input
              type="url"
              name="productImageUrl"
              value={formData.productImageUrl}
              onChange={handleChange}
              required
              className="w-full p-2 border border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)]"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/80 text-black font-bold rounded-md transition-  hover:bg-[var(--accent-text)]/80 text-black font-bold rounded-md transition-colors disabled:opacity-70"
            >
              {loading ? "Generating Receipt..." : "Submit Order"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
