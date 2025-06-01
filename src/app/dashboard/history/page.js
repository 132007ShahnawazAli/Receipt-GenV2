"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import OrderForm from "@/components/OrderForm";
import { useAvailableBrands } from "@/components/dashboard-brands";

export default function HistoryPage() {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [editReceipt, setEditReceipt] = useState(null);
  const [editBrand, setEditBrand] = useState(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const router = useRouter();
  const { brands: availableBrands } = useAvailableBrands();

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/user/receipt-history");
      if (!response.ok) throw new Error("Failed to fetch receipts");
      const data = await response.json();
      setReceipts(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";
      return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    } catch {
      return "Invalid date";
    }
  };

  // Group receipts by date for the chart
  const chartData = receipts.reduce((acc, r) => {
    const date = r.orderDate || r.createdAt;
    if (!date) return acc;
    const formattedDate = formatDate(date);
    if (formattedDate === "Invalid date") return acc;
    acc[formattedDate] = (acc[formattedDate] || 0) + 1;
    return acc;
  }, {});
  const dotData = Object.entries(chartData).map(([date, count]) => ({ date, count, rawDate: new Date(date) }));
  dotData.sort((a, b) => a.rawDate - b.rawDate);

  // Sort receipts by date descending
  const sortedReceipts = [...receipts].sort((a, b) => {
    const dateA = new Date(a.orderDate || a.createdAt);
    const dateB = new Date(b.orderDate || b.createdAt);
    return dateB - dateA;
  });

  // Log out handler
  const handleSignOut = async () => {
    try {
      const { signOut } = await import("next-auth/react");
      await signOut({ redirect: false });
      router.push("/dashboard-login");
    } catch (error) {
      // fallback
      router.push("/dashboard-login");
    }
  };

  // Find the brand for a given receipt
  const findBrandForReceipt = (receipt) => {
    if (!receipt || !availableBrands) return null;
    const brandName = (receipt.brandName || "").toLowerCase().replace(/\s+/g, "_");
    return availableBrands.find(
      (b) =>
        (b.id && b.id.toLowerCase() === brandName) ||
        (b.name && b.name.toLowerCase().replace(/\s+/g, "_") === brandName)
    );
  };

  // Handle Edit & Resend click
  const handleEditResend = (receipt) => {
    const brand = findBrandForReceipt(receipt);
    // Use formData if present, otherwise fallback to the receipt object
    const initialData = receipt.formData && Object.keys(receipt.formData).length > 0 ? receipt.formData : receipt;
    setEditReceipt({ ...receipt, initialData });
    setEditBrand(brand);
    setShowOrderForm(true);
    document.body.classList.add("modal-open");
  };

  // Handle OrderForm close
  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
    setEditReceipt(null);
    setEditBrand(null);
    document.body.classList.remove("modal-open");
  };

  // On successful update, refresh receipts
  const handleReceiptUpdated = () => {
    fetchReceipts();
    handleCloseOrderForm();
  };

  return (
    <div className="p-6 pb-24 min-h-screen bg-[var(--background)] text-[var(--primary-text)]">
      {/* Header */}
      <div className="flex items-center justify-between w-full pb-3">
        <h1 className="tablet:text-3xl text-2xl font-medium tracking-tight flex items-center gap-2">
          History
        </h1>
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
            <LineChart data={dotData} margin={{ top: 34, right: 30, left: 30, bottom: 34 }}>
              <CartesianGrid stroke="#444" strokeDasharray="0" vertical={false} horizontal={true} />
              <XAxis dataKey="date" hide axisLine={false} tickLine={false} />
              <YAxis
                dataKey="count"
                tick={{ fill: '#888', fontSize: 15 }}
                axisLine={false}
                tickLine={false}
                domain={[0, (dataMax) => {
                  const baseMax = 34;
                  const max = dotData.length ? Math.max(...dotData.map(d => d.count), baseMax) : baseMax;
                  const niceMax = Math.ceil(max / 4) * 4;
                  return niceMax;
                }]}
                ticks={(() => {
                  const baseMax = 34;
                  const max = dotData.length ? Math.max(...dotData.map(d => d.count), baseMax) : baseMax;
                  const niceMax = Math.ceil(max / 4) * 4;
                  return Array.from({ length: 5 }, (_, i) => Math.round(i * (niceMax / 4)));
                })()}
                width={40}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="var(--accent-text)"
                strokeWidth={3}
                dot={({ cx, cy }) => (
                  <circle cx={cx} cy={cy} r={6} fill="var(--accent-text)" />
                )}
                activeDot={({ cx, cy }) => (
                  <circle cx={cx} cy={cy} r={7} fill="var(--accent-text)" />
                )}
                isAnimationActive={true}
              />
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (!active || !payload || !payload.length) return null;
                  const date = payload[0].payload?.date;
                  const count = payload[0].value;
                  return (
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}>
                      <div style={{
                        position: 'relative',
                        background: '#181818',
                        borderRadius: 8,
                        padding: '10px 22px',
                        color: 'var(--primary-text)',
                        minWidth: 240,
                        fontSize: 16,
                        fontWeight: 500,
                        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.18)',
                        textAlign: 'center',
                        border: '1px solid #222',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 8,
                        marginTop: 16,
                      }}>
                        <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '14px solid #181818', zIndex: 1, }} />
                        <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '11px solid transparent', borderRight: '11px solid transparent', borderBottom: '16px solid #222', zIndex: 0, }} />
                        <span style={{ color: 'var(--secondary-text)', fontWeight: 400 }}>Date:</span>
                        <span style={{ color: 'var(--accent-text)', fontWeight: 700, margin: '0 6px 0 2px' }}>{date}</span>
                        <span style={{ color: 'var(--secondary-text)', fontWeight: 400 }}>Receipts:</span>
                        <span style={{ color: 'var(--accent-text)', fontWeight: 700, marginLeft: 2 }}>{count}</span>
                      </div>
                    </div>
                  );
                }}
              />
            </LineChart>
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
                  {receipt.description || receipt.productName || 'Receipt'}
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
  );
}
