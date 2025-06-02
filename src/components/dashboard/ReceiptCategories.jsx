import React from 'react';

export default function ReceiptCategories() {
  // Showcase-only data
  const showcaseCategories = [
    {
      title: 'A4 Invoices',
      receipts: [
        'END. Clothing A4 Invoice',
        'Farfetch A4 Invoice',
        'Moncler A4 Invoice',
        'Nike A4 Invoice',
        'Stadium Goods A4 Invoice',
      ],
    },
    {
      title: 'Thermal Receipts',
      receipts: [
        'Apple Thermal Receipt',
        'Flannels Thermal',
        'Popmart Thermal',
        'Sunglass Hut Thermal',
        'Sephora Thermal',
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {showcaseCategories.map((category, idx) => (
        <div key={category.title}>
          <h2 className="tablet:text-3xl text-2xl font-medium tracking-tight pb-4">{category.title}</h2>
          <div className="w-full flex flex-col gap-2">
            {/* Header Row */}
            <div className="flex items-center justify-between px-6 py-5 border rounded-xl border-zinc-800 bg-[#535353] text-[var(--secondary-text)] font-medium text-sm">
              <div className="flex-1 text-left">Store</div>
              <div className="min-w-[6rem] flex items-center gap-4">
                <div className="w-px h-6 bg-zinc-400 self-center" />
                <span>Action</span>
              </div>
            </div>
            {/* Showcase Rows */}
            {category.receipts.map((receipt, i) => (
              <div
                key={receipt}
                className="flex items-center justify-between px-6 py-4  bg-[var(--background-secondary)] rounded-xl group shadow-sm border border-zinc-800"
              >
                <div className="flex-1 min-w-0 truncate text-[var(--primary-text)] text-sm font-medium">{receipt}</div>
                <div className="min-w-[6rem] flex items-center gap-4">
                  <div className="w-px h-8 bg-zinc-800 self-center" />
                  <button
                    className="px-3 py-1.5 rounded-sm font-semibold text-sm bg-[var(--accent-text)] text-(--background) cursor-not-allowed hover:scale-95 transition-all"
                    disabled
                  >
                    Generate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
