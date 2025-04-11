import PrimaryButton from '@/components/PrimaryButton'
import Link from 'next/link'
import React from 'react'

function Store() {
    return (
        <div className='px-8 sm:px-14  font-[family-name:var(--font-dm-sans)] '>

            <div className='relative w-full flex flex-col pt-10 tablet:py-20 gap-20 '>
                <div className="w-full flex tablet:flex-row flex-col justify-between">
                    <div className="flex flex-col tablet:gap-0 gap-4">
                        <h1 className='tablet:font-semibold font-medium text-(--primary-text) text-5xl tablet:text-6xl tracking-tighter tablet:w-[50vw]'>
                            Choose from our offers and <span className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)]">pick</span> a <span className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)]">product</span> that suits your needs.
                        </h1>
                    </div>
                </div>
                <div className="relative flex tablet:flex-row flex-col tablet:gap-0 gap-4 justify-between text-4xl font-light text-(--primary-text) py-4">
                    <div>
                        <p>
                            <span className="font-bold text-(--accent-text)">50+</span> email receipts
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold text-(--accent-text)">4+</span> app receipts<br className="tablet:visible hidden" />
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="font-bold text-(--accent-text)">8+</span> paper receipts <br className="tablet:visible hidden" />
                        </p>
                    </div>
                    <hr className='absolute bottom-0 left-0 w-full border-t-[1px] border-(--accent-text) -z-10' />
                </div>
            </div>

            <div className=" text-(--primary-text) min-h-screen">
                <div className="border-t border-gray-800 my-8"></div>

                <main className="container py-12">
                    {/* Store Heading */}
                    <h1 className="text-6xl md:text-7xl font-bold text-center mb-16">Store</h1>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-4 mb-16">
                        <a href="#printouts" className="text-xl md:text-2xl hover:text-gray-300 transition-colors">
                            Printouts
                        </a>
                        <span className="text-gray-500 text-xl md:text-2xl">|</span>
                        <a href="#digitals" className="text-xl md:text-2xl hover:text-gray-300 transition-colors">
                            Digitals
                        </a>
                        <span className="text-gray-500 text-xl md:text-2xl">|</span>
                        <a href="#emulators" className="text-xl md:text-2xl hover:text-gray-300 transition-colors">
                            Emulators
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-800 my-8"></div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-16 w-full">
                        {/* Product 1 */}
                        <Link href={"/unlimited-generator"} className="flex flex-col w-full">
                            <div className="flex items-center justify-center h-48 mb-4 w-full">
                                <div className="relative w-full h-full">
                                    <img
                                        src="https://images.squarespace-cdn.com/content/v1/6137d3d5942fc363decba711/234373ed-d8fa-4081-9ddd-a1fe498c90ba/GENERATOR-01.png?format=1000w"
                                        alt="Generator Icon"
                                        className="w-full h-full object-cover object-center "
                                    />
                                </div>
                            </div>
                            <h2 className="text-3xl font-semibold text-(--primary-text) mb-2">Unlimited Generator</h2>
                            <p className="text-gray-400">From $29.99</p>
                        </Link>

                    </div>

                </main>
            </div>

            <div className=" relative w-full flex flex-col pt-10 tablet:py-20 gap-10 tablet:mb-0 mb-12">
                <div className="relative w-full">
                    <hr className="w-full border-t-2 border-(--accent-text) relative z-10" />
                    <div className="absolute top-1/2 left-0 w-full h-[80px] -translate-y-1/2 bg-[var(--accent-text)]/30 blur-3xl rounded-full z-0"></div>

                </div>
                <div className="w-full flex tablet:flex-row flex-col justify-between">
                    <div className="flex flex-col tablet:gap-0 gap-4">
                        <h1 className="tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">
                            Didn&apos;t find what you were looking for?
                        </h1>
                    </div>
                    <div className="flex flex-col w-fit h-fit tablet:gap-4 gap-10">
                        <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10">
                            Feel free to contact us to see what we can do! 👀
                        </p>
                        <PrimaryButton text='Contact us' href='https://discord.gg/resellora' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store