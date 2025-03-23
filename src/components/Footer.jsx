import React from 'react'

function Footer() {
    return (
        <div className='border-t-[1px] border-y-gray-800 flex justify-between items-start py-10 '>
            <div className='flex flex-col gap-10'>
                <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20 '>Our bestsellars!</h1>
                <p className='text-2xl font-light tracking-tight text-(--primary-text) w-2xl'>The hottest and best selling products we currently have to offer. You can still explore our full offer of receipts!</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10 items-end">
                    <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20 '>Instagram</h1>
                    <p className='text-2xl font-light tracking-tight text-(--primary-text) '>@hypeceipt.store or <br /> @hypeceipt</p>
                </div>
                <div className="flex flex-col gap-10 items-end">
                    <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20 '>Telegram</h1>
                    <p className='text-2xl font-light tracking-tight text-(--primary-text) '>@hypeceipt</p>
                </div>
            </div>
        </div>
    )
}

export default Footer