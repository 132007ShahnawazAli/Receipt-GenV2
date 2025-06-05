"use client"

import { useState, useEffect } from "react"
import { LiaHistorySolid } from "react-icons/lia"
import OrderForm from "@/components/OrderForm"
import { useAvailableBrands } from "@/components/dashboard-brands"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import Link from "next/link"
import { useRouter } from 'next/navigation'

// Utility to generate 5 evenly spaced Y-axis ticks
function getYAxisTicks(data, key = "count") {
  if (!Array.isArray(data) || data.length === 0) return [0, 1, 2, 3, 4]
  const maxY = Math.max(...data.map((d) => d[key] ?? 0))
  const getNiceMax = (value) => {
    if (value <= 4) return 4
    const exponent = Math.floor(Math.log10(value))
    const fraction = value / Math.pow(10, exponent)
    let niceFraction
    if (fraction <= 1) niceFraction = 1
    else if (fraction <= 2) niceFraction = 2
    else if (fraction <= 5) niceFraction = 5
    else niceFraction = 10
    return niceFraction * Math.pow(10, exponent)
  }
  const niceMax = getNiceMax(maxY)
  const interval = niceMax / 4
  return Array.from({ length: 5 }, (_, i) => Math.round(i * interval))
}

function cleanReceiptDescription(desc, brand, product) {
  let base = desc || product || brand || "Receipt";
  // Remove duplicate 'Receipt' at the end
  return base.replace(/(Receipt)(\s+Receipt)+$/i, "Receipt");
}

export default function ReceiptHistory() {
  const [receipts, setReceipts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedReceipt, setSelectedReceipt] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [dataReady, setDataReady] = useState(false)
  const availableBrands = useAvailableBrands()
  const router = useRouter()

  const fetchReceipts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/user/receipt-history", {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch receipts: ${response.status}`)
      }

      const data = await response.json()

      if (!Array.isArray(data)) {
        console.error("API did not return an array:", data)
        setError("Invalid data format received from server")
        return
      }

      setReceipts(data)
      setDataReady(true)
    } catch (error) {
      console.error("Error fetching receipts:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // Initial data fetch
  useEffect(() => {
    const initializeData = async () => {
      await fetchReceipts()
      // After data is ready, we can trigger the logo animation
      // You might want to emit an event or call a function here to start the logo animation
      if (window.startLogoAnimation) {
        window.startLogoAnimation()
      }
    }
    
    initializeData()

    // Set up periodic refresh every 30 seconds after initial load
    const refreshInterval = setInterval(fetchReceipts, 30000)
    return () => clearInterval(refreshInterval)
  }, [])

  // Format date to "May 26, 2025" format
  const formatDate = (dateString) => {
    if (!dateString) return "No date"

    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) {
        console.log("Invalid date string:", dateString)
        return "Invalid date"
      }
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch (error) {
      console.error("Error formatting date:", error)
      return "Invalid date"
    }
  }

  // Prepare data for dot chart (group by date, count receipts per day)
  const chartData = receipts.length > 0 ? receipts.reduce((acc, r) => {
    // Use orderDate if available, otherwise fall back to createdAt
    const date = r.orderDate || r.createdAt
    if (!date) return acc

    const formattedDate = formatDate(date)
    if (formattedDate === "Invalid date") return acc

    acc[formattedDate] = (acc[formattedDate] || 0) + 1
    return acc
  }, {}) : {
    // If no receipts, show empty chart with current date
    [formatDate(new Date())]: 0
  }

  const dotData = Object.entries(chartData).map(([date, count]) => ({
    date,
    count,
    rawDate: new Date(date),
  }))

  // Sort dotData by date ascending
  dotData.sort((a, b) => a.rawDate - b.rawDate)

  // Show only the 5 most recent receipts in the right box
  const recentReceipts = [...receipts]
    .filter((r) => r.orderDate || r.createdAt)
    .sort((a, b) => {
      const dateA = new Date(a.orderDate || a.createdAt)
      const dateB = new Date(b.orderDate || b.createdAt)
      return dateB - dateA
    })
    .slice(0, 5)

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

  const handleReceiptUpdated = async () => {
    try {
      // Show the generating state (full-screen loader)
      setIsGenerating(true)
      
      // Wait a moment for any backend processing
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Fetch fresh data
      await fetchReceipts()
      
      // Force router refresh to update all components
      router.refresh()
      
      // Close the form
      handleCloseForm()
      
      // Trigger logo animation after data is ready
      if (window.playLogoAnimation) {
        await window.playLogoAnimation()
      }
    } finally {
      setIsGenerating(false)
    }
  }

  // If data is not ready yet, show nothing (the main app loader should be visible)
  if (!dataReady && loading) {
    return null
  }

  // Show error state
  if (error) {
    return (
      <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-xl mb-4">
        <p>Error loading receipt history: {error}</p>
        <button
          onClick={fetchReceipts}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  const yAxisTicks = getYAxisTicks(dotData, "count")

  return (
    <>
      {/* Full-screen loader during receipt generation */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center">
          <div className="bg-[var(--background-secondary)] p-8 rounded-2xl flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
            <p className="text-[var(--primary-text)] text-lg font-medium">Updating Dashboard...</p>
          </div>
        </div>
      )}

      <div className="mb-6 gap-6 flex flex-col w-full relative">
        {/* Regular loading overlay */}
        {loading && !isGenerating && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
          </div>
        )}
        {/* Chart + History Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* Dot Chart */}
          <div className="md:col-span-2 col-span-1 bg-[var(--background-secondary)] border border-zinc-800 rounded-2xl min-h-[340px] flex items-center justify-center p-4">
            <ResponsiveContainer width="100%" height={380}>
              <AreaChart data={dotData.length ? dotData : [{ date: formatDate(new Date()), count: 0, rawDate: new Date() }]} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent-text)" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="var(--accent-text)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#444" strokeDasharray="0" vertical={false} horizontal={true} />
                <XAxis dataKey="date" hide axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="count"
                  tick={{ fill: "#888", fontSize: 15 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, yAxisTicks[4]]}
                  ticks={yAxisTicks}
                  width={40}
                />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="var(--accent-text)"
                  strokeWidth={3}
                  fill="url(#areaGradient)"
                  dot={({ cx, cy }) => (
                    <g>
                      <circle cx={cx} cy={cy} r={6} fill="var(--accent-text)" />
                    </g>
                  )}
                  activeDot={({ cx, cy }) => (
                    <g>
                      {/* Outer glow effect */}
                      <circle cx={cx} cy={cy} r={10} fill="var(--accent-text)" fillOpacity={0.5} filter="blur(1px)" />
                      {/* Main dot */}
                      <circle cx={cx} cy={cy} r={7} fill="var(--accent-text)" />
                    </g>
                  )}
                  isAnimationActive={true}
                />
                <Tooltip
                  cursor={false}
                  position={{ x: undefined, y: undefined }}
                  content={({ active, payload, coordinate }) => {
                    if (!active || !payload || !payload.length) return null
                    const date = payload[0].payload?.date
                    const count = payload[0].value

                    return (
                      <div
                        className="custom-tooltip"
                        style={{
                          position: "absolute",
                          left: coordinate?.x,
                          top: coordinate?.y - 70,
                          transform: "translateX(-50%)",
                          pointerEvents: "none",
                          zIndex: 10,
                        }}
                      >
                        <div
                          style={{
                            background: "#1a1a1a",
                            borderRadius: 8,
                            padding: "6px 12px",
                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: 500,
                            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            border: "1px solid #333",
                            position: "relative",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {/* Triangle pointer at bottom */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: -8,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 0,
                              height: 0,
                              borderLeft: "8px solid transparent",
                              borderRight: "8px solid transparent",
                              borderTop: "8px solid #1a1a1a",
                              zIndex: 1,
                            }}
                          />
                          {/* Border triangle */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: -9,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 0,
                              height: 0,
                              borderLeft: "9px solid transparent",
                              borderRight: "9px solid transparent",
                              borderTop: "9px solid #333",
                              zIndex: 0,
                            }}
                          />
                          <span style={{ color: "#EDEDED" }}>Date: </span>
                          <span style={{ color: "var(--accent-text)", fontWeight: 600, fontSize: 14 }}>{date}</span>
                          <span style={{ color: "#EDEDED" }}> Receipts: </span>
                          <span style={{ color: "var(--accent-text)", fontWeight: 600, fontSize: 14 }}>{count}</span>
                        </div>
                      </div>
                    )
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* History Box */}
          <div className="md:col-span-1 col-span-1 w-full bg-[var(--background-secondary)] border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between min-h-[220px]">
            <div className="flex flex-col gap-2 flex-1">
              {recentReceipts.length === 0 ? (
                <div className="text-center text-[var(--secondary-text)] py-8 flex flex-col items-center gap-3">
                  <span className="text-base">No receipt history found</span>
                  <span className="text-sm opacity-75 px-4">Generate your first receipt to start building your history</span>
                </div>
              ) : (
                recentReceipts.map((receipt, idx) => (
                  <button
                    key={receipt.id || idx}
                    onClick={() => handleEditClick(receipt)}
                    className="flex flex-col items-start text-left py-2 border-b border-zinc-800 last:border-b-0 hover:bg-zinc-900/40 rounded transition-colors"
                  >
                    <span className="text-xs text-[var(--secondary-text)] mb-1">
                      {formatDate(receipt.orderDate || receipt.createdAt)}
                    </span>
                    <span className="text-base font-semibold text-[var(--primary-text)]">
                      {cleanReceiptDescription(receipt.description, receipt.brandName, receipt.productName)}
                    </span>
                  </button>
                ))
              )}
            </div>
            <Link
              href="/dashboard/history"
              className="mt-4 w-full block text-center text-sm bg-[var(--accent-text)] text-black font-semibold py-1 rounded hover:bg-[var(--accent-text)]/90 transition-colors"
            >
              View full history
            </Link>
          </div>
        </div>

        {/* Order Form Modal for editing */}
        {showForm && selectedReceipt && (
          <OrderForm
            brand={selectedReceipt.brand}
            onClose={() => {
              handleCloseForm()
              fetchReceipts() // Refresh when modal closes
            }}
            onReceiptGenerated={async () => {
              await handleReceiptUpdated() // Wait for the update to complete
              handleCloseForm()
            }}
            initialData={selectedReceipt}
            isEditing={true}
            receiptId={selectedReceipt.id}
          />
        )}
      </div>
    </>
  )
}
