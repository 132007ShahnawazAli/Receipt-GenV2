"use client"
import React from "react"
import { Typewriter } from "react-simple-typewriter"
import PrimaryButton from "./PrimaryButton"
import { AnimatedText } from "./ScrollProvider"

function HeroSection() {
    return (
        <div className="hero-section relative w-full flex flex-col pt-10 tablet:py-20 gap-20 overflow-hidden">
            <img id="mesh" className="absolute top-0 -z-10 scale-100" src="https://cdn.prod.website-files.com/678294ec876dfc9faed1440c/6782ca8f6309baf6ea837124_Hero-Grid.svg"></img>
            <div className="w-full flex tablet:flex-row flex-col justify-between">
                <div className="flex flex-col tablet:gap-0 gap-4">
                    <AnimatedText>
                        <span className="text-(--accent-text) text-[1.2rem] font-light uppercase">Resellora</span>
                    </AnimatedText>
                    <AnimatedText delay={0.2}>
                        <h1 className="tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">
                            Step-up your <br />
                            <span className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)] inline-block min-h-[1.2em] h-[1.2em] min-w-[200px]">
                                <Typewriter
                                    words={["Receipt", "Resell", "Business"]}
                                    loop={false}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={95}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                />
                            </span> game!
                        </h1>
                    </AnimatedText>
                </div>
                <div className="flex flex-col w-fit h-fit tablet:gap-4 gap-10">
                    <AnimatedText delay={0.4}>
                        <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10">
                            Improve your sales with our 1:1 receipts that are always up-to-date, specifically created to your own needs with your custom information.
                        </p>
                    </AnimatedText>
                    <AnimatedText delay={0.6}>
                        <PrimaryButton />
                    </AnimatedText>
                </div>
            </div>
            <div className="relative flex tablet:flex-row flex-col tablet:gap-0 gap-4 justify-between text-4xl font-light text-(--primary-text) py-4">
                <AnimatedText delay={0.8}>
                    <div>
                        <p>
                            <span className="font-bold text-(--accent-text)">6K+</span> customers
                        </p>
                    </div>
                </AnimatedText>
                <AnimatedText delay={1.0}>
                    <div>
                        <p>
                            <span className="font-bold text-(--accent-text)">4+</span> years on the<br className="tablet:visible hidden" /> market
                        </p>
                    </div>
                </AnimatedText>
                <AnimatedText delay={1.2}>
                    <div>
                        <p>
                            <span className="font-bold text-(--accent-text)">99%</span> positive <br className="tablet:visible hidden" />rating
                        </p>
                    </div>
                </AnimatedText>
                <hr className="absolute bottom-0 left-0 w-full border-t-[1px] border-(--accent-text) -z-10" />
            </div>
        </div>
    )
}

export default HeroSection