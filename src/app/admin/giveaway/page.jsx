'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Loader2, Download, Gift, Clock, Key, FileText } from 'lucide-react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [expirationDays, setExpirationDays] = useState(30);
  const [notes, setNotes] = useState('');
  const [giveawayKeys, setGiveawayKeys] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  // Fetch existing giveaway keys
  const fetchGiveawayKeys = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/giveaway-keys?status=${filterStatus}`);
      if (!response.ok) throw new Error('Failed to fetch keys');
      const data = await response.json();
      setGiveawayKeys(data.keys);
    } catch (error) {
      toast.error('Failed to fetch giveaway keys');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGiveawayKeys();
  }, [filterStatus]);

  // Generate new giveaway keys
  const handleGenerate = async (e) => {
    e.preventDefault();
    try {
      setGenerating(true);
      const response = await fetch('/api/admin/giveaway-keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity, expirationDays, notes }),
      });

      if (!response.ok) throw new Error('Failed to generate keys');
      
      const data = await response.json();
      toast.success(`Successfully generated ${quantity} giveaway keys`);
      
      // Download keys as txt file
      const blob = new Blob([data.keys.join('\n')], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `giveaway-keys-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Refresh the list
      fetchGiveawayKeys();
    } catch (error) {
      toast.error('Failed to generate giveaway keys');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--primary-text)]">Giveaway License Keys</h1>
            <p className="text-[var(--secondary-text)] mt-2">Generate and manage promotional license keys</p>
          </div>
        </div>

        {/* Generator Form */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
          <h2 className="text-xl font-semibold text-[var(--primary-text)] mb-4">Generate New Keys</h2>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] text-[var(--primary-text)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">
                  Expiration (days)
                </label>
                <input
                  type="number"
                  min="1"
                  value={expirationDays}
                  onChange={(e) => setExpirationDays(parseInt(e.target.value))}
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] text-[var(--primary-text)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--primary-text)] mb-2">
                Notes (optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] text-[var(--primary-text)] h-24"
                placeholder="Add any notes about this batch of keys..."
              />
            </div>
            <button
              type="submit"
              disabled={generating}
              className="w-full md:w-auto flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Gift className="w-4 h-4 mr-2" />
              )}
              Generate Keys
            </button>
          </form>
        </div>

        {/* Keys List */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[var(--primary-text)]">Generated Keys</h2>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] text-[var(--primary-text)]"
            >
              <option value="all">All Keys</option>
              <option value="redeemed">Redeemed</option>
              <option value="unredeemed">Unredeemed</option>
            </select>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-[var(--accent-text)]" />
            </div>
          ) : giveawayKeys.length > 0 ? (
            <div className="space-y-4">
              {giveawayKeys.map((key) => (
                <div
                  key={key.licenseKey}
                  className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Key className="w-4 h-4 text-[var(--accent-text)]" />
                        <span className="font-mono text-[var(--primary-text)]">{key.licenseKey}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-[var(--secondary-text)]">
                        <Clock className="w-4 h-4" />
                        <span>Expires: {new Date(key.expiresAt).toLocaleDateString()}</span>
                      </div>
                      {key.notes && (
                        <div className="flex items-center space-x-2 text-sm text-[var(--secondary-text)]">
                          <FileText className="w-4 h-4" />
                          <span>{key.notes}</span>
                        </div>
                      )}
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        key.isRedeemed
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-yellow-500/10 text-yellow-500'
                      }`}
                    >
                      {key.isRedeemed ? 'Redeemed' : 'Available'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[var(--secondary-text)]">
              No giveaway keys found
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 