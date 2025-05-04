import React from 'react';
import { Mail } from "lucide-react"

function EmailReceipt() {
    return (
        <div className="flex flex-col gap-10">
            <div className="relative flex justify-between items-center pb-6">
                <h2 className="tablet:text-4xl text-3xl font-semibold tracking-tight">Email Receipts</h2>
                <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[var(--accent-text)]" />
                </div>
                <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
            </div>

            {/* Responsive Flexbox Layout */}
            <div className="flex flex-wrap gap-6 justify-between">
                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">1.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Choose your receipt</h3>
                    <p className="text-sm text-gray-400">Select a store to begin.</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">2.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Fill in the details</h3>
                    <p className="text-sm text-gray-400">Enter accurate info in the form.</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">3.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Submit your receipt</h3>
                    <p className="text-sm text-gray-400">Click the submit button once ready.</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">4.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Wait a few seconds</h3>
                    <p className="text-sm text-gray-400">We&apos;ll generate your receipt instantly.</p>
                </div>
            </div>
        </div>
    );
}

export default EmailReceipt;