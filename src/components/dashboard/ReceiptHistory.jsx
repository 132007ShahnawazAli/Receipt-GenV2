"use client"

import { useState, useEffect } from "react"
import { LiaHistorySolid } from "react-icons/lia"
import OrderForm from "@/components/OrderForm"
import { useAvailableBrands } from "@/components/dashboard-brands"

export default function ReceiptHistory() {
  const [receipts, setReceipts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedReceipt, setSelectedReceipt] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const availableBrands = useAvailableBrands()

  useEffect(() => {
    fetchReceipts()
  }, [])

  const fetchReceipts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/user/receipt-history")

      if (!response.ok) {
        throw new Error(`Failed to fetch receipts: ${response.status}`)
      }

      const data = await response.json()
      console.log("Fetched receipts:", data)
      setReceipts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching receipts:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleEditClick = (receipt) => {
    // Find the brand that matches the receipt's brand name
    const brandName = receipt.brandName.toLowerCase().replace(/\s+/g, "_")
    const brand = availableBrands.find(
      (b) =>
        (b.id && b.id.toLowerCase() === brandName) ||
        (b.name && b.name.toLowerCase().replace(/\s+/g, "_") === brandName),
    )

    if (!brand) {
      console.error(`Brand not found for receipt: ${receipt.brandName}`)
      return
    }

    setSelectedReceipt({
      ...receipt,
      brand,
    })
    setShowForm(true)
    // Add modal-open class to body
    document.body.classList.add("modal-open")
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedReceipt(null)
    // Remove modal-open class from body
    document.body.classList.remove("modal-open")
  }

  const handleReceiptUpdated = () => {
    // Refresh the receipts list
    fetchReceipts()
  }

  if (loading) {
    return (
      <div className="px-6 mb-6 gap-6 flex flex-col">
        <div className="relative flex justify-between items-center pb-6">
          <h2 className="tablet:text-4xl text-3xl font-semibold tracking-tight">History</h2>
          <LiaHistorySolid className="w-6 h-6 text-(--accent-text)" />
          <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
        </div>
      </div>
    )
  }

  return (
    <div className=" mb-6 gap-6 flex flex-col w-full">
      {/* Section Header */}
      <div className="relative flex justify-between items-center pb-6 w-full">
        <h2 className="tablet:text-4xl text-3xl font-semibold tracking-tight">History</h2>
        <LiaHistorySolid className="w-6 h-6 text-(--accent-text)" />
        <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-xl mb-4">
          <p>Error loading receipt history: {error}</p>
          <button
            onClick={fetchReceipts}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Data Boxes Wrapper */}
      <div className="flex flex-wrap justify-between gap-6 w-full">
        {receipts.length === 0 ? (
          <div className="text-[var(--primary-text)] bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-l md:text-xl shadow-[0px_0px_10px_-1px_#000000] w-full text-center">
            <p>No receipt history found. Generate your first receipt!</p>
          </div>
        ) : (
          receipts.map((receipt, index) => (
            <div
              key={receipt.id || index}
              className="text-[var(--primary-text)] bg-[var(--background)] tablet:px-7 px-3 py-6 border border-[var(--primary-text)]/10 rounded-xl text-l md:text-xl shadow-[0px_0px_10px_-1px_#000000] w-full md:w-[48%]"
            >
              <div className="flex justify-between">
                <div className="flex gap-8">
                  <p>{receipt.date}</p>
                  <p>{receipt.description}</p>
                </div>
                <button
                  onClick={() => handleEditClick(receipt)}
                  className="text-[var(--accent-text)] cursor-pointer hover:text-[var(--accent-text)]/80 transition-colors"
                >
                  Edit & Resend
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Form Modal for editing */}
      {showForm && selectedReceipt && (
        <OrderForm
          brand={selectedReceipt.brand}
          onClose={handleCloseForm}
          onReceiptGenerated={handleReceiptUpdated}
          initialData={selectedReceipt}
          isEditing={true}
          receiptId={selectedReceipt.id}
        />
      )}
    </div>
  )
}
