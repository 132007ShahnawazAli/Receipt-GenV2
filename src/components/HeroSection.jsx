'use client'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
function HeroSection() {
    return (
        <div className='relative w-full flex flex-col py-20 gap-20 overflow-hidden'>
            <img id="mesh" className="absolute top-0 -z-10 scale-90" src="https://cdn.prod.website-files.com/678294ec876dfc9faed1440c/6782ca8f6309baf6ea837124_Hero-Grid.svg"></img>
            <div className="w-full flex justify-between">
                <div className="flex flex-col">
                    <span className="text-(--accent-text) text-[1.2rem] font-light">HYPECEIPT</span>
                    <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20'>
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
                <div className="flex flex-col w-fit h-fit gap-4">
                    <p className='text-2xl font-light tracking-tight text-(--primary-text) w-xl pt-10'>
                        Improve your sales with our 1:1 receipts that are always up-to-date, specifically created to your own needs with your custom information.
                    </p>
                    <div className="flex justify-center items-center w-fit h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                        <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                            Buy Receipts
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-between text-4xl font-light text-(--primary-text) py-4">
                <hr className=' inset-0 m-auto w-full rotate-2 text-(--accent-text) absolute -z-10' />
                <div>
                    <p>
                        <span className="font-bold text-(--accent-text)">6K+</span> customers
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-bold text-(--accent-text)">4+</span> years on the<br /> market
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-bold text-(--accent-text)">99%</span> positive <br />rating
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection