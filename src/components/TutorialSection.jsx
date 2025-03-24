import React from 'react'
import PrimaryButton from './PrimaryButton'

function TutorialSection() {
    return (
        <div className='tutorial-section border-b-[1px] border-gray-800 flex tablet:flex-row flex-col tablet:justify-between tablet:items-center tablet:py-10 pb-10 h-fit gap-10 tablet:gap-0'>
            <div className='flex flex-col gap-7'>
                <h1 className='tablet:font-bold font-semibold text-(--primary-text) tablet:w-[33vw] text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>Looking for unlimited receipts?</h1>
                <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full  tablet:pt-10'>They are exclusively available on our RESELLORA generator. You definitely want to check it out!</p>
                <PrimaryButton />
            </div>
            <div className="flex flex-col h-full gap-10">
                <div className="relative w-full h-fit tablet:w-fit">
                    <iframe className="tablet:w-xl tablet:h-96 w-full h-72" src="https://www.youtube.com/embed/kQzavUaxAh8" title="StockX Receipt Generator by HYPECEIPT" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div className="absolute inset-0 m-auto h-100 w-90 rounded-full bg-(--accent-text) opacity-40 blur-[100px] -z-10" />
                </div>
                <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full  tablet:pt-10">Our generator software contains more than 60 stores, including luxury ones such as DIOR, Louis Vuitton, Moncler & more!</p>
            </div>
        </div>
    )
}

export default TutorialSection