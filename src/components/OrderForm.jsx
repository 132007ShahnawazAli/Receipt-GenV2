"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function OrderForm({ brand, onClose }) {
  const [formData, setFormData] = useState({
    customerName: "",
    deliveryAddress: "",
    currencySymbol: "",
    productName: "",
    orderDate: "",
    shipping: "",
    productSize: "",
    subtotal: "",
    total: "",
    email: "",
    productImageUrl: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    //  send the data to your backend
    alert("Order submitted successfully!")
    onClose()
  }

  return (
    <div className="bg-(--background) rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-2xl font-bold capitalize">{brand.name} Email Receipt</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-(--secondary-text)">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Customer Name</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-(--secondary-text) mb-1">Delivery Address</label>
          <textarea
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            required
            className="w-full p-2 border border-(--secondary-text) rounded-md"
            rows="3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Currency Symbol</label>
            <input
              type="text"
              name="currencySymbol"
              value={formData.currencySymbol}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
              placeholder="e.g. $, €, £"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Order Date</label>
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Shipping</label>
            <input
              type="text"
              name="shipping"
              value={formData.shipping}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Product Size</label>
            <input
              type="text"
              name="productSize"
              value={formData.productSize}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Subtotal</label>
            <input
              type="number"
              name="subtotal"
              value={formData.subtotal}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-(--secondary-text) mb-1">Total</label>
            <input
              type="number"
              name="total"
              value={formData.total}
              onChange={handleChange}
              required
              className="w-full p-2 border border-(--secondary-text) rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-(--secondary-text) mb-1">Product Image URL</label>
          <input
            type="url"
            name="productImageUrl"
            value={formData.productImageUrl}
            onChange={handleChange}
            required
            className="w-full p-2 border border-(--secondary-text) rounded-md"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-(--accent-text) hover:bg-(--accent-text)/80 text-black font-bold rounded-md transition-colors"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  )
}

