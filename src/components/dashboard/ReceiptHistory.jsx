"use client"

import { useState, useEffect } from "react"
import { LiaHistorySolid } from "react-icons/lia"
import OrderForm from "@/components/OrderForm"
import { useAvailableBrands } from "@/components/dashboard-brands"
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

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

  // Prepare data for dot chart (group by date, count receipts per day)
  const chartData = receipts.reduce((acc, r) => {
    const date = r.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
  const dotData = Object.entries(chartData).map(([date, count]) => ({ date, count }));

  // Sort dotData by date ascending
  dotData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Show only the 4 most recent receipts in the right box
  const recentReceipts = receipts.slice(0, 4);

  if (loading) {
    return (
      <div className="px-6 mb-6 gap-6 flex flex-col">
        <div className="relative flex justify-between items-center ">
          <h2 className="tablet:text-3xl text-2xl font-normal tracking-tight">History</h2>
          <LiaHistorySolid className="w-6 h-6 text-(--accent-text)" />
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6 gap-6 flex flex-col w-full">
      {/* Section Header */}
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

      {/* Chart + History Box Layout */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Dot Chart */}
        <div className="flex-1 bg-[var(--background-secondary)] border border-zinc-800 rounded-2xl min-h-[340px] flex items-center justify-center">
          {/* Increased chart width and height for more space and professional look */}
          <ResponsiveContainer width="100%" height={340}>
            <ScatterChart margin={{ top: 48, right: 48, left: 48, bottom: 48 }}>
              <CartesianGrid stroke="#444" strokeDasharray="0" vertical={false} horizontal={true} />
              <XAxis dataKey="date" hide axisLine={false} tickLine={false} />
              <YAxis 
                dataKey="count"
                tick={{ fill: '#888', fontSize: 15 }} 
                axisLine={false} 
                tickLine={false} 
                // Always show 5 equally spaced constraints (ticks/lines) with constant unit gap, regardless of data distribution
                domain={[0, (dataMax) => {
                  // Find the max value (at least 4 for spacing)
                  const max = dotData.length ? Math.max(...dotData.map(d => d.count), 4) : 4;
                  // Round up to nearest nice number for clean spacing
                  const niceMax = Math.ceil(max / 4) * 4;
                  return niceMax;
                }]} 
                ticks={(() => {
                  // Calculate 5 linearly spaced ticks from 0 to niceMax (constant unit gap)
                  const max = dotData.length ? Math.max(...dotData.map(d => d.count), 4) : 4;
                  const niceMax = Math.ceil(max / 4) * 4;
                  return Array.from({length: 5}, (_, i) => Math.round(i * (niceMax / 4)));
                })()}
                width={40}
              />
              <Tooltip 
                cursor={false}
                // Clean, professional tooltip: formatted receipt date and count
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  // Get date from data object, not label
                  const rawDate = payload[0].payload?.date;
                  let formattedDate = 'Unknown';
                  if (rawDate) {
                    const dateObj = new Date(rawDate);
                    formattedDate = isNaN(dateObj) ? 'Unknown' : dateObj.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
                  }
                  const count = payload[0].value;
                  return (
                    <div style={{ background: '#181818', borderRadius: 8, padding: '10px 16px', color: 'var(--primary-text)', minWidth: 120 }}>
                      <div style={{ fontSize: 13, color: 'var(--secondary-text)', marginBottom: 2 }}>Receipt Date</div>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{formattedDate}</div>
                      <div style={{ fontSize: 13, color: 'var(--secondary-text)', marginBottom: 2 }}>Receipts generated</div>
                      <div style={{ fontWeight: 600, color: 'var(--accent-text)', fontSize: 14 }}>{count}</div>
                    </div>
                  );
                }}
              />
              <Scatter data={dotData} fill="var(--accent-text)" shape="circle" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        {/* History Box */}
        <div className="w-full md:w-[340px] bg-[var(--background-secondary)] border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
          <div className="flex flex-col gap-2 flex-1">
            {recentReceipts.length === 0 ? (
              <div className="text-center text-[var(--secondary-text)] py-8">No receipt history found.</div>
            ) : (
              recentReceipts.map((receipt, idx) => (
                <button
                  key={receipt.id || idx}
                  onClick={() => handleEditClick(receipt)}
                  className="flex flex-col items-start text-left py-2 border-b border-zinc-800 last:border-b-0 hover:bg-zinc-900/40 rounded transition-colors"
                >
                  <span className="text-xs text-[var(--secondary-text)] mb-1">{receipt.date}</span>
                  <span className="text-base font-semibold text-[var(--primary-text)]">{receipt.description}</span>
                </button>
              ))
            )}
          </div>
          <Link
            href="/dashboard/warehouse"
            className="mt-4 w-full block text-center bg-[var(--accent-text)] text-black font-semibold py-2 rounded-lg hover:bg-[var(--accent-text)]/90 transition-colors"
          >
            View full history
          </Link>
        </div>
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
