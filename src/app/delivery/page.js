import Link from 'next/link'
import React from 'react'

function Delivery() {
    return (
        <div className="w-full flex tablet:flex-row flex-col gap-10 tablet:gap-0 justify-between tablet:pt-10 ">
            <h1 className=' font-semibold text-(--primary-text) text-5xl tablet:w-1/2 tablet:text-7xl tracking-tighter tablet:leading-20 drop-shadow-[0px_0px_50px_var(--accent-text)]'>Earn by promoting our products!</h1>
            <div className="flex flex-col gap-4">
                <p className='tablet:text-2xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>We are able to ship basically to any address in the world.</p>
                <p className='tablet:text-2xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>All orders will be shipped within 24 to 72 hours. Digital orders are delivered within 24 to 48 hours.</p>
                <p className='tablet:text-2xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>Express shipping (2 to 7 days) for $60.00 via TNT EXPRESS or DHL</p>
            </div>

        </div>
    )
}

export default Delivery