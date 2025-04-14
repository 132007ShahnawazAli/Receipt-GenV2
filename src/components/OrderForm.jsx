"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { useSession } from "next-auth/react"

export default function OrderForm({ brand, onClose, onReceiptGenerated }) {
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
    orderNumber: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateForm = () => {
    // Basic validation
    if (!formData.email.trim()) return "Email is required"
    if (!formData.orderNumber.trim()) return "Order number is required"
    if (!formData.orderDate) return "Order date is required"
    if (!formData.productImageUrl.trim()) return "Image link is required"
    if (!formData.productName.trim()) return "Item name is required"

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
      
      // Notify parent component that a receipt was generated
      if (onReceiptGenerated) {
        onReceiptGenerated();
      }
      
      // Close the form immediately after successful generation
        onClose()
      
    } catch (error) {
      console.error("Error generating receipt:", error)
      setError(error.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50" style={{ isolation: "isolate" }}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-[var(--background)] text-[var(--primary-text)] rounded-lg w-full max-w-lg relative flex flex-col max-h-[90vh]">
          <div className="flex-none p-6 flex justify-between items-center border-b border-[var(--secondary-text)]">
            <h2 className="text-3xl font-semibold capitalize">{brand.name} Receipt</h2>
            <button
              onClick={onClose}
              className="cursor-pointer text-[var(--accent-text)] hover:text-[var(--accent-text)]/50"
            >
              <X size={24} />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {error && (
                  <div className="p-2 bg-red-500/10 border border-red-500 text-red-500 rounded text-sm">{error}</div>
                )}

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-[.7px]-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Customer Name</label>
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Order Number</label>
                      <input
                        type="text"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        placeholder="e.g. 0000000000"
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      rows="3"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Order Date</label>
                      <input
                        type="date"
                        name="orderDate"
                        value={formData.orderDate}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">
                        Currency Symbol
                      </label>
                      <input
                        type="text"
                        name="currencySymbol"
                        value={formData.currencySymbol}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                        placeholder="e.g. $, €, £"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Product Name</label>
                      <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Shipping</label>
                      <input
                        type="text"
                        name="shipping"
                        value={formData.shipping}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Product Size</label>
                      <input
                        type="text"
                        name="productSize"
                        value={formData.productSize}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Subtotal</label>
                      <input
                        type="number"
                        name="subtotal"
                        value={formData.subtotal}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Total</label>
                      <input
                        type="number"
                        name="total"
                        value={formData.total}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">Image Link</label>
                    <input
                      type="url"
                      name="productImageUrl"
                      value={formData.productImageUrl}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-[.7px] border-[var(--secondary-text)] rounded-md bg-[var(--background)] text-[var(--primary-text)] shadow-[0px_0px_6px_-1px_#000000]"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-4 bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/80 text-black font-bold rounded-md transition-colors disabled:opacity-70"
                    >
                      {loading ? "Generating Receipt..." : "Submit Order"}
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}
