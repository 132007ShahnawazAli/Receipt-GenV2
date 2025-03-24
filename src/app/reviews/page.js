import Link from 'next/link'
import React from 'react'

function Reviews() {
    return (
        <div className="w-full flex tablet:flex-row flex-col gap-10 tablet:gap-0 justify-between tablet:pt-10 ">
            <h1 className=' font-semibold text-(--primary-text) text-5xl tablet:w-1/2 tablet:text-7xl tracking-tighter tablet:leading-20 drop-shadow-[0px_0px_50px_var(--accent-text)]'>REVIEWS</h1>
            <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>Coming Soon</p>
        </div>
    )
}

export default Reviews