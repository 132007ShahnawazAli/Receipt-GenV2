'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Lock } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error('Invalid password');
      }

      await response.json();
      toast.success('Login successful');
      router.push('/admin/templates');
    } catch (error) {
      toast.error('Invalid password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl border border-zinc-800 overflow-hidden shadow-[0px_0px_15px_-1px_#000000]">
          {/* Gradient accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent-text)] via-purple-500 to-blue-500"></div>
          
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[var(--accent-text)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-[var(--accent-text)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--primary-text)]">Admin Access</h2>
              <p className="mt-2 text-sm text-[var(--secondary-text)]">
                Enter your password to access the admin panel
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[var(--primary-text)] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] focus:border-transparent text-[var(--primary-text)] placeholder-zinc-400"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-black bg-[var(--accent-text)] hover:bg-[var(--accent-text)]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-text)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 