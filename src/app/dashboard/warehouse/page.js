"use client"

export default function WarehousePage() {
  return (
    <div className="p-6 h-full">
      <div className="relative flex justify-between items-center pb-6 mb-6">
        <h1 className="tablet:text-4xl text-3xl font-semibold tracking-tight">My Warehouse</h1>
        <hr className="absolute bottom-0 left-0 right-0 text-(--accent-text)" />
      </div>

      <div className="text-center p-8 max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[var(--accent-text)]">Coming Soon</h2>
        <p className="text-xl text-gray-300 mb-8">
          We&apos;re working on building your warehouse management system. Check back soon!
        </p>
        <div className="w-full h-1 bg-zinc-800 relative mb-8">
          <div className="absolute top-0 left-0 h-full bg-[var(--accent-text)] w-3/4 animate-pulse"></div>
        </div>
        <p className="text-gray-400">
          This feature is currently under development and will be available in a future update.
        </p>
      </div>
    </div>
  )
}
