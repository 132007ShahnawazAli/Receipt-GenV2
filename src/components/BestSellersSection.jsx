import Link from 'next/link'
import React from 'react'

function BestSellersSection() {
    return (
        <div className='border-t-[1px] border-b-[1px] border-y-gray-800 flex justify-between items-center py-10 '>
            <div className='flex flex-col gap-10'>
                <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20 '>Our bestsellars!</h1>
                <p className='text-2xl font-light tracking-tight text-(--primary-text) w-xl'>The hottest and best selling products we currently have to offer. You can still explore our full offer of receipts!</p>
                <div className="flex justify-center items-center w-fit h-fit py-3 px-7 rounded-xl bg-(--accent-text)">
                    <Link href='/' className='text-[1.2rem] font-light tracking-tight'>
                        Buy Receipts
                    </Link>
                </div>
            </div>
            <div className='flex gap-20 text-(--primary-text)'>
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-2">
                        <h3 className='w-44 text-2xl font-light text-(--primary-text)'>StockX Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className='w-44 text-2xl font-light text-(--primary-text)'>FARFETCH Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>
                </div>
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-2 ">
                        <h3 className='w-44 text-2xl font-light text-(--primary-text)'>Apple Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className='w-44 text-2xl font-light text-(--primary-text)'>Legit Email Receipt</h3>
                        <p className='text-2xl font-light tracking-tight text-(--primary-text)'>$9.95</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BestSellersSection