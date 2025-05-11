import React from "react"
import PrimaryButton from "./PrimaryButton"
import { AnimatedText } from "./ScrollProvider"

function BestSellersSection() {
    return (
        <div className="bestsellers-section border-t-[1px] border-b-[1px] border-y-gray-800 flex tablet:gap-0 gap-4 tablet:flex-row flex-col justify-between tablet:items-center py-10 ">
            <div className="flex flex-col tablet:gap-10 gap-4">
                <AnimatedText>
                    <h1 className="tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">Our bestsellers!</h1>
                </AnimatedText>
                <AnimatedText delay={0.2}>
                    <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10">The hottest and best selling products we currently have to offer. You can still explore our full offer of receipts!</p>
                </AnimatedText>
                <AnimatedText delay={0.4}>
                    <PrimaryButton text="'All products"/>
                </AnimatedText>
            </div>
            <div className="flex tablet:flex-row flex-col tablet:gap-20 gap-10 text-(--primary-text)">
                <div className="flex flex-col tablet:gap-14 gap-10">
                    <AnimatedText delay={0.6}>
                        <div className="flex flex-col gap-2">
                            <h3 className="tablet:w-44  text-2xl font-light text-(--primary-text)">Receipt Generator - 1 MONTH</h3>
                            <p className="text-2xl font-light tracking-tight text-(--primary-text)">$19.95</p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={0.8}>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="tablet:w-44  text-2xl font-light text-(--primary-text)">Resellora MAX BLACK</h3>
                            <p className="text-2xl font-light tracking-tight text-(--primary-text)">$135.95</p>
                        </div>
                    </AnimatedText>
                </div>
                <div className="flex flex-col tablet:gap-14 gap-10">
                    <AnimatedText delay={1.0}>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="tablet:w-44  text-2xl font-light text-(--primary-text)">Receipt Generator - LIFETIME</h3>
                            <p className="text-2xl font-light tracking-tight text-(--primary-text)">$69.95</p>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={1.2}>
                        <div className="flex flex-col gap-2 ">
                            <h3 className="tablet:w-44  text-2xl font-light text-(--primary-text)">Resellora GEN 4</h3>
                            <p className="text-2xl font-light tracking-tight text-(--primary-text)">$29.95</p>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </div>
    )
}

export default BestSellersSection