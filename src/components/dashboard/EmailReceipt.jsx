import React from 'react';
import { Mail } from "lucide-react"
import { useState } from "react"
import { useAvailableBrands } from "@/components/dashboard-brands"

function EmailReceipt({ onBrandClick = () => {} }) {
    const [searchQuery, setSearchQuery] = useState("");
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const brandsPerPage = 9;
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
    // Sort brands alphabetically by displayName or name
    const filteredBrands = getFilteredBrands().slice().sort((a, b) => {
        const nameA = (a.displayName || a.name || '').toLowerCase();
        const nameB = (b.displayName || b.name || '').toLowerCase();
        return nameA.localeCompare(nameB);
    });
    // Pagination logic: slice brands for current page
    const totalPages = Math.ceil(filteredBrands.length / brandsPerPage);
    const paginatedBrands = filteredBrands.slice((currentPage - 1) * brandsPerPage, currentPage * brandsPerPage);

    return (
        <div className="flex flex-col gap-6">
            {/* Search Bar and title */}
            <div className="relative flex md:flex-row flex-col justify-between gap-4 ">
                <h2 className="tablet:text-3xl text-2xl font-medium tracking-tight">Email Receipts</h2>
                {/* Search Bar */}
                <div className="flex items-center w-full md:w-[calc(50%-0.75rem)] ml-auto">
                    <div className="relative w-full">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search receipts..."
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 rounded-lg bg-(--background-secondary) border border-zinc-800 text-[var(--primary-text)] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent-text)] transition-all"
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
            </div>

            {/* Responsive Flexbox Layout (Steps Section) */}
            <div className="flex flex-wrap gap-6 justify-between">
                <div className="p-5 rounded-xl bg-(--background-secondary) border border-zinc-800 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-semibold text-[var(--accent-text)]">1.</span>
                    </div>
                    <h3 className="text-md font-medium tracking-tight text-(--primary-text) mb-2">Choose your receipt</h3>
                    <p className="text-sm font-medium tracking-tight text-(--secondary-text)">Select a store to begin.</p>
                </div>

                <div className="p-5 rounded-xl bg-(--background-secondary) border border-zinc-800 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-semibold text-[var(--accent-text)]">2.</span>
                    </div>
                    <h3 className="text-md font-medium tracking-tight text-(--primary-text) mb-2">Fill in the details</h3>
                    <p className="text-sm font-medium tracking-tight text-(--secondary-text)">Enter accurate info in the form.</p>
                </div>

                <div className="p-5 rounded-xl bg-(--background-secondary) border border-zinc-800 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-semibold text-[var(--accent-text)]">3.</span>
                    </div>
                    <h3 className="text-md font-medium tracking-tight text-(--primary-text) mb-2">Submit your receipt</h3>
                    <p className="text-sm font-medium tracking-tight text-(--secondary-text)">Click the submit button once ready.</p>
                </div>

                <div className="p-5 rounded-xl bg-(--background-secondary) border border-zinc-800 flex-1 min-w-[250px]">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-semibold text-[var(--accent-text)]">4.</span>
                    </div>
                    <h3 className="text-md font-medium tracking-tight text-(--primary-text) mb-2">Wait a few seconds</h3>
                    <p className="text-sm font-medium tracking-tight text-(--secondary-text)">We&apos;ll generate your receipt instantly.</p>
                </div>
            </div>

            {/* Filtered Brands Table/List (Professional, like screenshot) */}
            <div className="w-full mt-2 flex flex-col gap-2">
                {/* Header Row */}
                <div className="flex items-center justify-between px-6 py-5 border rounded-xl border-zinc-800 bg-[#535353] text-[var(--secondary-text)] font-medium text-sm">
                    <div className="flex-1 text-left">Store</div>
                    <div className="min-w-[6rem] flex items-center gap-4">
                        <div className="w-px h-6 bg-zinc-400 self-center" />
                        <span>Action</span>
                    </div>
                </div>
                {/* Brand Rows */}
                {brandsLoading ? (
                    <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
                    </div>
                ) : brandsError ? (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-xl">
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
                    <div className="flex flex-col gap-2">
                        {paginatedBrands.map((brand, idx) => {
                            const displayName = brand.displayName || brand.name || '';
                            // If the name already ends with 'receipt' (case-insensitive), don't add it again
                            const showName = /receipt$/i.test(displayName.trim()) ? displayName : `${displayName} Receipt`;
                            return (
                                <div
                                    key={brand.id || (brand.name + '-' + idx)}
                                    className="flex items-center justify-between px-6 py-4 bg-[var(--background-secondary)] rounded-xl group shadow-sm border border-zinc-800"
                                >
                                    <div className="flex-1 min-w-0 truncate text-[var(--primary-text)] text-sm font-medium">{showName}</div>
                                    <div className="min-w-[6rem] flex items-center gap-4">
                                        <div className="w-px h-8 bg-zinc-800 self-center" />
                                        <button
                                            className="px-3 py-1.5 rounded-sm font-semibold text-sm bg-[var(--accent-text)] text-(--background) cursor-pointer hover:scale-95 transition-all"
                                            onClick={() => onBrandClick(brand)}
                                        >
                                            Generate
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                        {/* Pagination UI (if needed) */}
                        {totalPages > 1 && (
                            <div className="flex mt-4 justify-center">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        // Only first button has rounded left, only last has rounded right
                                        className={`w-10 h-10 flex items-center justify-center font-semibold text-base border border-zinc-700 transition-colors cursor-pointer
                                            ${currentPage === i + 1
                                                ? 'bg-[var(--accent-text)] text-black'
                                                : 'bg-[var(--background-secondary)] text-[var(--primary-text)]'}
                                            ${i === 0 ? 'rounded-l-lg' : ''} ${i === totalPages - 1 ? 'rounded-r-lg' : ''}`}
                                        style={{ outline: 'none' }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500">
                        No templates available. Please check back later.
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmailReceipt;