import React from 'react'
import Link from 'next/link'

function PrimaryButton({ text = "Buy Receipts", href = "/receipt-dashboard" }) {
    return (
        <div className="flex justify-center items-center tablet:w-fit w-full h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
            <Link href={href} className="text-[1.2rem] font-light tracking-tight">
                {text}
            </Link>
        </div>
    )
}

export default PrimaryButton