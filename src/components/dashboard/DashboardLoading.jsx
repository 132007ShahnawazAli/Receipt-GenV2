export default function DashboardLoading() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[var(--background)]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent-text)]"></div>
          <p className="mt-4 text-[var(--secondary-text)]">Loading dashboard...</p>
        </div>
      </div>
    )
  }
  