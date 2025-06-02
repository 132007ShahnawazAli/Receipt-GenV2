"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import OrderForm from "@/components/OrderForm"
import { useAvailableBrands } from "@/components/dashboard-brands"

export default function HistoryPage() {
  const [receipts, setReceipts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showLogout, setShowLogout] = useState(false)
  const [editReceipt, setEditReceipt] = useState(null)
  const [editBrand, setEditBrand] = useState(null)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const router = useRouter()
  const { brands: availableBrands } = useAvailableBrands()

  useEffect(() => {
    fetchReceipts()
  }, [])

  const fetchReceipts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/user/receipt-history")
      if (!response.ok) throw new Error("Failed to fetch receipts")
      const data = await response.json()
      setReceipts(Array.isArray(data) ? data : [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return "No date"
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return "Invalid date"
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    } catch {
      return "Invalid date"
    }
  }

  // Group receipts by date for the chart
  const chartData = receipts.reduce((acc, r) => {
    const date = r.orderDate || r.createdAt
    if (!date) return acc
    const formattedDate = formatDate(date)
    if (formattedDate === "Invalid date") return acc
    acc[formattedDate] = (acc[formattedDate] || 0) + 1
    return acc
  }, {})
  const dotData = Object.entries(chartData).map(([date, count]) => ({ date, count, rawDate: new Date(date) }))
  dotData.sort((a, b) => a.rawDate - b.rawDate)

  // Sort receipts by date descending
  const sortedReceipts = [...receipts].sort((a, b) => {
    const dateA = new Date(a.orderDate || a.createdAt)
    const dateB = new Date(b.orderDate || b.createdAt)
    return dateB - dateA
  })

  // Log out handler
  const handleSignOut = async () => {
    try {
      const { signOut } = await import("next-auth/react")
      await signOut({ redirect: false })
      router.push("/dashboard-login")
    } catch (error) {
      // fallback
      router.push("/dashboard-login")
    }
  }

  // Find the brand for a given receipt
  const findBrandForReceipt = (receipt) => {
    if (!receipt || !availableBrands) return null
    const brandName = (receipt.brandName || "").toLowerCase().replace(/\s+/g, "_")
    return availableBrands.find(
      (b) =>
        (b.id && b.id.toLowerCase() === brandName) ||
        (b.name && b.name.toLowerCase().replace(/\s+/g, "_") === brandName),
    )
  }

  // Handle Edit & Resend click
  const handleEditResend = (receipt) => {
    const brand = findBrandForReceipt(receipt)
    // Use formData if present, otherwise fallback to the receipt object
    const initialData = receipt.formData && Object.keys(receipt.formData).length > 0 ? receipt.formData : receipt
    setEditReceipt({ ...receipt, initialData })
    setEditBrand(brand)
    setShowOrderForm(true)
    document.body.classList.add("modal-open")
  }

  // Handle OrderForm close
  const handleCloseOrderForm = () => {
    setShowOrderForm(false)
    setEditReceipt(null)
    setEditBrand(null)
    document.body.classList.remove("modal-open")
  }

  // On successful update, refresh receipts
  const handleReceiptUpdated = () => {
    fetchReceipts()
    handleCloseOrderForm()
  }

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

  const yAxisTicks = getYAxisTicks(dotData, "count")

  function cleanReceiptDescription(desc, brand, product) {
    let base = desc || product || brand || "Receipt";
    // Remove duplicate 'Receipt' at the end
    return base.replace(/(Receipt)(\s+Receipt)+$/i, "Receipt");
  }

  return (
    <div className="p-6 pb-24 min-h-screen bg-[var(--background)] text-[var(--primary-text)]">
      {/* Header */}
      <div className="flex items-center justify-between w-full pb-3">
        <h1 className="tablet:text-3xl text-2xl font-medium tracking-tight flex items-center gap-2">History</h1>
        <button
          onClick={handleSignOut}
          className="px-3 py-1 rounded bg-[var(--accent-text)] text-black text-sm font-semibold flex items-center gap-2 hover:scale-95 transition-transform cursor-pointer"
        >
          Log out
        </button>
      </div>

      {/* Chart Section */}
      <div className="mb-8 bg-[var(--background-secondary)] border border-zinc-800 rounded-2xl p-4 flex items-center justify-center min-h-[340px]">
        {loading ? (
          <div className="flex flex-col items-center gap-4 w-full justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
            <p className="text-[var(--accent-text)]">Loading history...</p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={dotData} margin={{ top: 34, right: 30, left: 30, bottom: 34 }}>
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
                    <circle cx={cx} cy={cy} r={12} fill="var(--accent-text)" fillOpacity={0.2} filter="blur(2px)" />
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
                        <span style={{ color: "#ffffff" }}>Date: </span>
                        <span style={{ color: "var(--accent-text)", fontWeight: 600 }}>{date}</span>
                        <span style={{ color: "#ffffff" }}> Receipts: </span>
                        <span style={{ color: "var(--accent-text)", fontWeight: 600 }}>{count}</span>
                      </div>
                    </div>
                  )
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Receipts List */}
      <div className="flex flex-col gap-2">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-xl mb-4">
            <p>Error loading receipt history: {error}</p>
            <button
              onClick={fetchReceipts}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : sortedReceipts.length === 0 ? (
          <div className="text-center text-[var(--secondary-text)] py-8">No receipt history found.</div>
        ) : (
          sortedReceipts.map((receipt, idx) => (
            <div
              key={receipt.id || idx}
              className="flex flex-row items-center justify-between bg-[var(--background-secondary)] border border-zinc-800 rounded-xl px-6 py-4 mb-2 shadow-sm"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[var(--secondary-text)] ">
                  {formatDate(receipt.orderDate || receipt.createdAt)}
                </span>
                <span className="text-sm font-semibold text-[var(--primary-text)]">
                  {cleanReceiptDescription(receipt.description, receipt.brandName, receipt.productName)}
                </span>
              </div>
              <button
                className="mt-3 md:mt-0 px-3 py-1 rounded bg-[var(--accent-text)] text-black text-sm font-semibold hover:scale-95 transition-transform cursor-pointer"
                onClick={() => handleEditResend(receipt)}
              >
                Edit & Resend
              </button>
            </div>
          ))
        )}
      </div>

      {/* OrderForm Modal for editing */}
      {showOrderForm && editReceipt && (
        <OrderForm
          brand={editBrand}
          onClose={handleCloseOrderForm}
          onReceiptGenerated={handleReceiptUpdated}
          initialData={editReceipt.initialData}
          isEditing={true}
          receiptId={editReceipt.id}
        />
      )}
    </div>
  )
}
