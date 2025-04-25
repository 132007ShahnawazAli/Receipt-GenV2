"use client"

import { useState } from "react"
import CheckoutModal from "./checkout/CheckoutModal"

export default function InstantAccessButton({ initialPlan = null }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="tablet:px-14 px-6 py-4 border border-[var(--primary-text)]/10 rounded-md text-xl text-center text-[var(--primary-text)] hover:bg-[var(--accent-text)]/10 transition-all shadow-[0px_0px_10px_-1px_#000000]"
      >
        Instant access
      </button>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialPlan={initialPlan} />
    </>
  )
}
