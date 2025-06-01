"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [form, setForm] = useState({
    email: "",
    username: "",
    street: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [stats, setStats] = useState({ receiptsGenerated: 0, daysLeft: 0 });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchAccount();
  }, []);

  const fetchAccount = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/user/account");
      if (!res.ok) throw new Error("Failed to fetch account info");
      const data = await res.json();
      setForm({
        email: data.email || "",
        username: data.username || "",
        street: data.street || "",
        city: data.city || "",
        zipCode: data.zipCode || "",
        country: data.country || "",
      });
      // Calculate days left
      let daysLeft = 0;
      if (data.expiresAt) {
        const expires = new Date(data.expiresAt);
        const now = new Date();
        daysLeft = Math.max(0, Math.ceil((expires - now) / (1000 * 60 * 60 * 24)));
      } else if (data.plan === "lifetime") {
        daysLeft = "∞";
      }
      setStats({
        receiptsGenerated: data.receiptsGenerated || 0,
        daysLeft,
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/user/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save account info");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { signOut } = await import("next-auth/react");
      await signOut({ redirect: false });
      router.push("/dashboard-login");
    } catch {
      router.push("/dashboard-login");
    }
  };

  if (loading) {
    return (
      <div className="p-6 pb-24 min-h-screen bg-[var(--background)] text-[var(--primary-text)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
          <p className="text-[var(--accent-text)]">Loading account...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 min-h-screen bg-[var(--background)] text-[var(--primary-text)]">
      {/* Header */}
      <div className="flex items-center justify-between w-full pb-6">
        <h1 className="tablet:text-3xl text-2xl font-medium tracking-tight flex items-center gap-2">
          Account
        </h1>
        <button
          onClick={handleSignOut}
          className="px-3 py-1 rounded bg-[var(--accent-text)] text-black text-sm font-semibold hover:scale-95 transition-transform cursor-pointer"
        >
          Log out
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl overflow-hidden border border-zinc-800 bg-[#1A1A1A]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-md font-medium tracking-tight text-[var(--secondary-text)]">Generated receipts</span>
          </div>
          <div className="text-2xl font-medium text-[var(--primary-text)]">{stats.receiptsGenerated}</div>
        </div>
        <div className="p-4 rounded-xl overflow-hidden border border-zinc-800 bg-[#1A1A1A]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-md font-medium tracking-tight text-[var(--secondary-text)]">Days left</span>
          </div>
          <div className="text-2xl font-medium text-[var(--primary-text)]">{stats.daysLeft}</div>
        </div>
      </div>

      {/* Account Form */}
      <form onSubmit={handleSave} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[var(--secondary-text)] text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-zinc-800 text-[var(--primary-text)] text-sm placeholder-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-[var(--secondary-text)] text-sm font-medium mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-zinc-800 text-[var(--primary-text)] text-sm placeholder-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent transition-all"
              placeholder="Enter your username"
            />
          </div>

          {/* Street */}
          <div className="flex flex-col">
            <label htmlFor="street" className="text-[var(--secondary-text)] text-sm font-medium mb-2">
              Street
            </label>
            <input
              id="street"
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-zinc-800 text-[var(--primary-text)] text-sm placeholder-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent transition-all"
              placeholder="Enter your street address"
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label htmlFor="city" className="text-[var(--secondary-text)] text-sm font-medium mb-2">
              City
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-zinc-800 text-[var(--primary-text)] text-sm placeholder-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent transition-all"
              placeholder="Enter your city"
            />
          </div>

          {/* ZIP Code */}
          <div className="flex flex-col">
            <label htmlFor="zipCode" className="text-[var(--secondary-text)] text-sm font-medium mb-2">
              ZIP Code
            </label>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-zinc-800 text-[var(--primary-text)] text-sm placeholder-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent transition-all"
              placeholder="Enter your ZIP code"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[var(--secondary-text)] text-sm font-medium mb-2">
              Country
            </label>
            <input
              id="country"
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-[var(--background-secondary)] border border-zinc-800 text-[var(--primary-text)] text-sm placeholder-[var(--secondary-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent transition-all"
              placeholder="Enter your country"
            />
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500 text-red-500 rounded-lg">
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mt-6 p-4 bg-green-500/10 border border-green-500 text-green-500 rounded-lg">
            <p className="text-sm font-medium">Account information saved successfully!</p>
          </div>
        )}

        {/* Save Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={saving}
            className="w-full py-2 px-6 rounded-lg bg-[var(--accent-text)] text-black text-sm font-semibold hover:scale-[0.98] transition-transform cursor-pointer disabled:opacity-60 disabled:hover:scale-100"
          >
            {saving ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                Saving...
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
