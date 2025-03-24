import Link from 'next/link'
import React from 'react'

function Affiliate() {
    return (
        <div className="w-full flex tablet:flex-row flex-col gap-10 tablet:gap-0 justify-between tablet:pt-10 ">
            <h1 className=' font-semibold text-(--primary-text) text-5xl tablet:w-1/3 tablet:text-7xl tracking-tighter tablet:leading-20 '>Earn by promoting our products!</h1>
            <p className='tablet:text-2xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>Contact us on our Telegram <Link href={'https://t.me/resellora'} className='text-underline decoration-1'>@resellora</Link> or through our contact form on the website for more info!</p>
        </div>
    )
}

export default Affiliate