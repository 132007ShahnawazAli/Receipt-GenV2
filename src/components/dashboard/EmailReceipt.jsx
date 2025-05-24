import React from 'react';
import { Mail } from "lucide-react"
import { useState } from "react"
import { useAvailableBrands } from "@/components/dashboard-brands"

function EmailReceipt() {
    const [searchQuery, setSearchQuery] = useState("");
    const { brands: availableBrands, isLoading: brandsLoading, error: brandsError } = useAvailableBrands();

    // Filtering logic (copied from dashboard page, without typewriter effect)
    const getFilteredBrands = () => {
        if (!Array.isArray(availableBrands)) return [];
        if (!searchQuery) return availableBrands;

        let processedQuery = searchQuery.toLowerCase().trim();
        if (processedQuery.includes("receipt")) {
            processedQuery = processedQuery.replace("receipt", "").trim();
        }
        if (processedQuery.includes("for")) {
            processedQuery = processedQuery.replace("for", "").trim();
        }
        const queryWords = processedQuery.split(/\s+/);
        return availableBrands.filter((brand) => {
            const brandName = (brand.displayName || brand.name).toLowerCase();
            if (brandName.includes(processedQuery)) return true;
            const hasMatchingWord = queryWords.some(
                (word) => word.length > 2 && brandName.includes(word)
            );
            if (hasMatchingWord) return true;
            const brandParts = brandName.split(/[\s-_]+/);
            const queryParts = processedQuery.split(/[\s-_]+/);
            return brandParts.some((brandPart) =>
                queryParts.some(
                    (queryPart) =>
                        brandPart.includes(queryPart) || queryPart.includes(brandPart)
                )
            );
        });
    };
    const filteredBrands = getFilteredBrands();

    return (
        <div className="flex flex-col gap-10">
            <div className="relative flex justify-between items-center pb-6">
                <h2 className="tablet:text-3xl text-2xl font-normal tracking-tight">Email Receipts</h2>
                {/* Search Bar */}
                <div className="flex items-center w-full max-w-md ml-auto">
                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search receipts..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-[var(--primary-text)] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[var(--accent-text)] transition-colors"
                                tabIndex={-1}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        )}
                    </div>
                </div>
                <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
            </div>

            {/* Filtered Brands Grid (like dashboard) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                {brandsLoading ? (
                    <div className="col-span-full flex justify-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
                    </div>
                ) : brandsError ? (
                    <div className="col-span-full bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">
                                    {brandsError.message || 'Failed to load templates. Please try again later.'}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : Array.isArray(filteredBrands) && filteredBrands.length > 0 ? (
                    filteredBrands.map((brand) => (
                        <div
                            key={brand.id}
                            className={`aspect-square bg-[var(--accent-text)] rounded-xl flex items-center justify-center p-3 cursor-pointer hover:scale-95 transition-transform duration-300`}
                        >
                            <div className="w-full h-full flex items-center justify-center flex-row">
                                <img
                                    src={brand.logo && brand.logo.startsWith && brand.logo.startsWith('http')
                                        ? brand.logo
                                        : (brand.logo ? `/assets/brand-logos/${brand.logo}` : '/placeholder-logo.png')}
                                    className="h-12 max-w-full object-contain"
                                    alt={brand.displayName || brand.name}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/placeholder-logo.png';
                                    }}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 text-gray-500">
                        No templates available. Please check back later.
                    </div>
                )}
            </div>

            {/* Responsive Flexbox Layout (Steps Section) */}
            <div className="flex flex-wrap gap-6 justify-between">
                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">1.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Choose your receipt</h3>
                    <p className="text-sm text-gray-400">Select a store to begin.</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">2.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Fill in the details</h3>
                    <p className="text-sm text-gray-400">Enter accurate info in the form.</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-bold text-[var(--accent-text)]">3.</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Submit your receipt</h3>
                    <p className="text-sm text-gray-400">Click the submit button once ready.</p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900/80 border border-[var(--accent-text)]/30 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
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