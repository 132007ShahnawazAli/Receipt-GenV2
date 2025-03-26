import Link from 'next/link'
import React from 'react'

function Reviews() {
    return (
        <div className="px-8 sm:px-14 w-full flex tablet:flex-row flex-col gap-10 tablet:gap-0 justify-between tablet:pt-10 ">
            <div className="relative h-fit w-fit">
                <div className="absolute h-64 w-64 rounded-full bg-(--accent-text) opacity-40 blur-[100px]" />
                <h1 className=' font-semibold text-(--primary-text) text-5xl tablet:w-[33vw] tablet:text-7xl tracking-tighter tablet:leading-20'>REVIEWS</h1>
            </div>
            <p className='tablet:text-2xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>Coming Soon</p>
        </div>
    )
}

export default Reviews