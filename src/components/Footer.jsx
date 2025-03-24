import React from 'react'

function Footer() {
    return (
        <div className='footer border-t-[1px] border-y-gray-800 flex tablet:justify-between tablet:items-start tablet:flex-row flex-col py-10 w-full tablet:gap-0 gap-10'>
            <div className='flex flex-col gap-10'>
                <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>Where you can contact us?</h1>
                <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl  tablet:pt-10 w-full'>We try to answer every one of you but sometimes we are overwhelmed with the questions, we usually answer within 24 hours.</p>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10 items-end">
                    <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>Instagram</h1>
                    <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-sm tablet:pt-10 text-right'>@resellora.store or <br /> @resellora</p>
                </div>
                <div className="flex flex-col gap-10 items-end">
                    <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20 '>Telegram</h1>
                    <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-sm tablet:pt-10 text-right'>@resellora</p>
                </div>
            </div>
        </div>
    )
}

export default Footer