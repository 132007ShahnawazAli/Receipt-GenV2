import Link from 'next/link'
import React from 'react'

function BestSellersSection() {
    return (
        <div className='border-t-[1px] border-b-[1px] border-y-gray-800 flex tablet:gap-0 gap-4 tablet:flex-row flex-col justify-between tablet:items-center py-10 '>
            <div className='flex flex-col tablet:gap-10 gap-4'>
                <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>Our bestsellars!</h1>
                <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-sm pt-10'>The hottest and best selling products we currently have to offer. You can still explore our full offer of receipts!</p>
                <div className="flex justify-center items-center tablet:w-fit w-full h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                    <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                        Buy Receipts
                    </Link>
                </div>
            </div>
            <div className='flex tablet:flex-row flex-col tablet:gap-20 gap-10 text-(--primary-text)'>
                <div className="flex flex-col tablet:gap-14 gap-10">
                    <div className="flex flex-col gap-2">
                        <h3 className='tablet:w-44  text-2xl font-light text-(--primary-text)'>StockX Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className='tablet:w-44  text-2xl font-light text-(--primary-text)'>FARFETCH Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>
                </div>
                <div className="flex flex-col tablet:gap-14 gap-10">
                    <div className="flex flex-col gap-2 ">
                        <h3 className='tablet:w-44  text-2xl font-light text-(--primary-text)'>Apple Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className='tablet:w-44  text-2xl font-light text-(--primary-text)'>Legit Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BestSellersSection