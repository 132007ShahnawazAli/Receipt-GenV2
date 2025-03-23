import Link from 'next/link'
import React from 'react'

function TutorialSection() {
    return (
        <div className=' border-b-[1px] border-gray-800 flex justify-between items-center py-10 h-fit'>
            <div className='flex flex-col gap-10'>
                <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20 w-xl'>Looking for unlimited receipts?</h1>
                <p className='text-2xl font-light tracking-tight text-(--primary-text) w-xl'>They are exclusively available on our HYPECEIPT generator. You definitely want to check it out!</p>
                <div className="flex justify-center items-center w-fit h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                    <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                        Buy Receipts
                    </Link>
                </div>
            </div>
            <div className="flex flex-col h-full gap-10">
                <iframe width="582" height="330" src="https://www.youtube.com/embed/kQzavUaxAh8" title="StockX Receipt Generator by HYPECEIPT" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p className="text-xl font-light tracking-tight text-(--primary-text) w-xl ">Our generator software contains more than 60 stores, including luxury ones such as DIOR, Louis Vuitton, Moncler & more!</p>
            </div>
        </div>
    )
}

export default TutorialSection