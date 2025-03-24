import React from 'react'

function AboutUsSection() {
    const highlights = [
        {
            number: "55+",
            title: "Available templates",
            description: "We offer a huge selection of templates for all kinds of items, whether it's for shoes or clothing—we've got you covered! Our template portfolio is always expanding."
        },
        {
            number: "5+",
            title: "Available emulators",
            description: "Our emulators are constantly updated and improved, sourced from more than five stores. Feel free to contact us for details on all functions and other information."
        },
        {
            number: "4+",
            title: "Years on the market",
            description: "The longest-running and most reliable generator on the market, serving countless satisfied customers and providing highly accurate receipts with a 99% positive review rate."
        },
    ]
    return (
        <div className='about-section relative w-full flex flex-col gap-20 border-b-[1px] border-y-gray-800'>
            <img id="mesh" className="absolute top-0 -z-10 scale-90" src="https://cdn.prod.website-files.com/678294ec876dfc9faed1440c/6782ca8f6309baf6ea837124_Hero-Grid.svg"></img>
            <div className="w-full flex tablet:flex-row flex-col tablet:gap-0 gap-10 tablet:justify-between">
                <div className="flex flex-col">
                    <span className="text-(--accent-text) text-[1.2rem] font-light">About Us</span>
                    <h1 className='tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20'>
                        Get to know <br />RESELLORA
                    </h1>
                </div>
                <div className="w-fit h-fit ">
                    <p className='tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl '>
                        We are RESELLORA. Since 2019, we have been providing 1:1 receipts for your sneakers, clothes, and more. We offer both physical (printout) and digital receipts. Over the years, we have served more than 6,000 customers and created over 10,000 receipts. Quality and accuracy are our top priorities for all our customers.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row tablet:gap-4 gap-10">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="flex-1 border border-(--secondary-text) rounded-lg p-6 relative bg-(--background)">
                                <div className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)] text-5xl tablet:text-7xl tablet:font-bold font-semibold absolute tablet:-top-10 -top-7 right-10 rotate-3 ">
                                    {highlight.number}
                                </div>
                                <h2 className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)] text-2xl font-light tracking-tight">
                                    {highlight.title}
                                </h2>
                                <p className="text-(--secondary-text) text-xl font-light tracking-tight tablet:pt-12 pt-6">
                                    {highlight.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection