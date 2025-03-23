import React from 'react'

function HowItWorksSection() {
    const steps = [
        {
            title: "Choose your receipt",
            description: "Choose a receipt or get our Unlimited Generator to create receipts yourself."
        },
        {
            title: "Fill in the details",
            description: "In the checkout, submit all details about your item, such as the item name, size, price, and serial number."
        },
        {
            title: "Make a payment",
            description: "Easily pay with Apple Pay or your credit card. All payments are SSL-secured."
        },
        {
            title: "Receive your receipt",
            description: "Your receipt will be sent to your email inbox within 24 hours. Don't forget to check your spam folder."
        }
    ]
    return (
        <div className='relative w-full flex flex-col py-10 gap-20 border-b-[1px] border-y-gray-800'>
            <img id="mesh" className="absolute top-0 -z-10 scale-90" src="https://cdn.prod.website-files.com/678294ec876dfc9faed1440c/6782ca8f6309baf6ea837124_Hero-Grid.svg"></img>
            <div className="w-full flex justify-between">
                <div className="flex flex-col">
                    <span className="text-(--accent-text) text-[1.2rem] font-light">How it works</span>
                    <h1 className='font-bold text-(--primary-text) text-7xl tracking-tighter leading-20'>
                        How to order a <br />receipt?
                    </h1>
                </div>
                <div className="w-fit h-fit ">
                    <p className='text-2xl font-light tracking-tight text-(--primary-text) w-xl pt-10'>
                        In just four simple steps, you can easily generate your own customized receipt. See how below.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row gap-4">
                        {steps.map((step, index) => (
                            <div key={index} className="flex-1  border border-(--secondary-text) rounded-lg p-6 relative bg-(--background)">
                                <div className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)] text-7xl font-bold absolute -top-10 right-10 rotate-6 ">{index + 1}</div>
                                <h2 className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)] text-2xl font-light tracking-tight">{step.title}</h2>
                                <p className="text-(--secondary-text) text-xl font-light tracking-tight pt-12">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksSection