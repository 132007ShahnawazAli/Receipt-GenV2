'use client'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
function HeroSection() {
    return (
        <div className='relative w-full flex flex-col pt-10 tablet:py-20 gap-20 overflow-hidden'>
            <img id="mesh" className="absolute top-0 -z-10 scale-90" src="https://cdn.prod.website-files.com/678294ec876dfc9faed1440c/6782ca8f6309baf6ea837124_Hero-Grid.svg"></img>
            <div className="w-full flex tablet:flex-row flex-col justify-between">
                <div className="flex flex-col tablet:gap-0 gap-4">
                    <span className="text-(--accent-text) text-[1.2rem] font-light">HYPECEIPT</span>
                    <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>
                        Step-up your <br />
                        <span className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)]"><Typewriter
                            words={['Receipt', 'Resell', 'Business']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={95}
                            deleteSpeed={100}
                            delaySpeed={1000}
                        /></span> game!
                    </h1>
                </div>
                <div className="flex flex-col w-fit h-fit tablet:gap-4 gap-10">
                    <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-sm pt-10'>
                        Improve your sales with our 1:1 receipts that are always up-to-date, specifically created to your own needs with your custom information.
                    </p>
                    <div className="flex justify-center items-center tablet:w-fit w-full h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                        <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                            Buy Receipts
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative flex tablet:flex-row flex-col tablet:gap-0 gap-4 justify-between text-4xl font-light text-(--primary-text) py-4">
                <hr className=' inset-0 m-auto w-full rotate-2 text-(--accent-text) absolute -z-10 tablet:visible hidden' />
                <div>
                    <p>
                        <span className="font-bold text-(--accent-text)">6K+</span> customers
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-bold text-(--accent-text)">4+</span> years on the<br className="tablet:visible hidden"/> market
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-bold text-(--accent-text)">99%</span> positive <br className="tablet:visible hidden"/>rating
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection