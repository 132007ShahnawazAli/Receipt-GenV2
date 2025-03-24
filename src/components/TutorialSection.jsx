import Link from 'next/link'
import React from 'react'

function TutorialSection() {
    return (
        <div className='tutorial-section border-b-[1px] border-gray-800 flex tablet:flex-row flex-col tablet:justify-between tablet:items-center tablet:py-10 pb-10 h-fit gap-10 tablet:gap-0'>
            <div className='flex flex-col gap-10'>
                <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>Looking for unlimited receipts?</h1>
                <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-sm tablet:pt-10'>They are exclusively available on our HYPECEIPT generator. You definitely want to check it out!</p>
                <div className="flex justify-center items-center tablet:w-fit w-full h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                    <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                        Buy Receipts
                    </Link>
                </div>
            </div>
            <div className="flex flex-col h-full gap-10">
                <iframe className="tablet:w-xl tablet:h-96 w-full h-72" src="https://www.youtube.com/embed/kQzavUaxAh8" title="StockX Receipt Generator by HYPECEIPT" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-sm tablet:pt-10">Our generator software contains more than 60 stores, including luxury ones such as DIOR, Louis Vuitton, Moncler & more!</p>
            </div>
        </div>
    )
}

export default TutorialSection