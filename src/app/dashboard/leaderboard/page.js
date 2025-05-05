"use client"

import { Trophy } from "lucide-react"

export default function LeaderboardPage() {
  return (
    <div className="p-6 h-full">
      <div className="relative flex justify-between items-center pb-6 mb-6">
        <h1 className="tablet:text-4xl text-3xl font-semibold tracking-tight">Leaderboard</h1>
        <hr className="absolute bottom-0 left-0 right-0 text-(--accent-text)" />
      </div>

      <div className="text-center p-8 max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Trophy size={64} className="text-[var(--accent-text)]" />
        </div>
        <h2 className="text-4xl font-bold mb-6 text-[var(--accent-text)]">Leaderboard Coming Soon</h2>
        <p className="text-xl text-gray-300 mb-8">
          We&apos;re building a competitive leaderboard to showcase top performers. Stay tuned!
        </p>
        <div className="w-full h-1 bg-zinc-800 relative mb-8">
          <div className="absolute top-0 left-0 h-full bg-[var(--accent-text)] w-1/2 animate-pulse"></div>
        </div>
        <p className="text-gray-400">
          Compare your performance with others and climb the ranks when this feature launches.
        </p>
      </div>
    </div>
  )
}
