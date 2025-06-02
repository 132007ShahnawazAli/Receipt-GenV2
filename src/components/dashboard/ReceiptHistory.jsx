"use client"

import { useState, useEffect } from "react"
import { LiaHistorySolid } from "react-icons/lia"
import OrderForm from "@/components/OrderForm"
import { useAvailableBrands } from "@/components/dashboard-brands"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import Link from "next/link"

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
      console.log("Raw API response:", data)

      // Ensure we have valid data
      if (!Array.isArray(data)) {
        console.error("API did not return an array:", data)
        setError("Invalid data format received from server")
        return
      }

      setReceipts(data)
    } catch (error) {
      console.error("Error fetching receipts:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

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
  const chartData = receipts.reduce((acc, r) => {
    // Use orderDate if available, otherwise fall back to createdAt
    const date = r.orderDate || r.createdAt
    if (!date) return acc

    const formattedDate = formatDate(date)
    if (formattedDate === "Invalid date") return acc

    acc[formattedDate] = (acc[formattedDate] || 0) + 1
    return acc
  }, {})

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

  const handleReceiptUpdated = () => {
    // Refresh the receipts list
    fetchReceipts()
  }

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

  if (receipts.length === 0) {
    return (
      <div className="px-6 mb-6 gap-6 flex flex-col">
        <div className="relative flex justify-between items-center ">
          <h2 className="tablet:text-3xl text-2xl font-normal tracking-tight">History</h2>
          <LiaHistorySolid className="w-6 h-6 text-(--accent-text)" />
        </div>
        <div className="text-center text-[var(--secondary-text)] py-8">No receipt history found.</div>
      </div>
    )
  }

  const yAxisTicks = getYAxisTicks(dotData, "count")

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Dot Chart */}
        <div className="md:col-span-2 col-span-1 bg-[var(--background-secondary)] border border-zinc-800 rounded-2xl min-h-[340px] flex items-center justify-center p-4">
          {/* Professional smooth line chart with glowing points and custom tooltip */}
          {/*
            To increase the vertical gap between Y-axis grid lines:
            - Increase the height below (default: 340)
            - Increase the top/bottom margin below (default: 34)
            Example: height={420}, margin={{ top: 60, bottom: 60, left: 30, right: 30 }}
          */}
          <ResponsiveContainer width="100%" height={380}> {/* Chart height controls vertical spacing */}
            <AreaChart data={dotData} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}> {/* Margins control padding inside chart */}
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
                          padding: "12px 20px",
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
                        <span style={{ color: "var(--accent-text)", fontWeight: 600 }}>{date}</span>
                        <span style={{ color: "#EDEDED" }}> Receipts: </span>
                        <span style={{ color: "var(--accent-text)", fontWeight: 600 }}>{count}</span>
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
              <div className="text-center text-[var(--secondary-text)] py-8">No receipt history found.</div>
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
