import PrimaryButton from '@/components/PrimaryButton'
import Link from 'next/link'
import React from 'react'
import { AnimatedText } from "@/components/ScrollProvider"

export const metadata = {
  title: "RESELLORA - Store",
  description: "Grab access to our premium tools and resources including guides, marketplace tools, generators and more.",
  openGraph: {
    title: "RESELLORA - Store",
    description: "Grab access to our premium tools and resources including guides, marketplace tools, generators and more.",
    url: "https://resellora.com/store",
    siteName: "RESELLORA",
    images: [
      {
        url: "/assets/Logo_1.png",
        width: 800,
        height: 600,
        alt: "RESELLORA Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RESELLORA - Store",
    description: "Grab access to our premium tools and resources including guides, marketplace tools, generators and more.",
    images: ["/assets/Logo_1.png"],
  },
};

function Store() {
    return (
        <div className='px-8 sm:px-14  font-[family-name:var(--font-dm-sans)] '>
            <img id="mesh" className="absolute top-0 -z-10 scale-100" src="https://cdn.prod.website-files.com/678294ec876dfc9faed1440c/6782ca8f6309baf6ea837124_Hero-Grid.svg"></img>

            <div className='relative w-full flex flex-col pt-10 tablet:py-20 gap-20 '>
                <div className="w-full flex tablet:flex-row flex-col justify-between">
                    <div className="flex flex-col tablet:gap-0 gap-4">
                        <AnimatedText>
                            <h1 className='tablet:font-semibold font-medium text-(--primary-text) text-5xl tablet:text-6xl tracking-tighter tablet:w-[50vw]'>
                                Choose from our offers and <span className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)]">pick</span> a <span className="text-(--accent-text) drop-shadow-[0px_0px_10px_var(--accent-text)]">product</span> that suits your needs.
                            </h1>
                        </AnimatedText>
                    </div>
                </div>
                <AnimatedText delay={0.2}>
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
                </AnimatedText>
            </div>

            <div className=" text-(--primary-text) min-h-screen">
                <div className="border-t border-gray-800 my-8"></div>

                <main className="container py-12">
                    {/* Store Heading */}
                    <AnimatedText>
                        <h1 className="text-6xl md:text-7xl font-semibold text-center mb-16 tracking-tighter">Store</h1>
                    </AnimatedText>

                    {/* Navigation */}
                    <AnimatedText delay={0.2}>
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
                    </AnimatedText>

                    {/* Divider */}
                    <div className="border-t border-gray-800 my-8"></div>

                    {/* Products Grid */}
                    <AnimatedText delay={0.4}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mt-16 w-full">
                            {/* Product 1 */}
                            <Link href={"/unlimited-generator"} className="flex flex-col w-full">
                                <div className="flex items-center justify-center h-48 mb-4 w-full">
                                    <div className="relative w-full h-full">
                                        <img
                                            src="/assets/unlimited-generator.png"
                                            alt="Generator Icon"
                                            className="w-full h-full object-cover object-center "
                                        />
                                    </div>
                                </div>
                                <h2 className="text-3xl font-semibold text-(--primary-text) mb-2">Unlimited Generator</h2>
                                <p className="text-gray-400">From $19.95</p>
                            </Link>

                        </div>
                    </AnimatedText>

                </main>
            </div>

            <div className=" relative w-full flex flex-col pt-10 tablet:py-20 gap-10 tablet:mb-0 mb-12">
                <div className="relative w-full">
                    <hr className="w-full border-t-2 border-(--accent-text) relative z-10" />
                    <div className="absolute top-1/2 left-0 w-full h-[80px] -translate-y-1/2 bg-[var(--accent-text)]/30 blur-3xl rounded-full z-0"></div>

                </div>
                <div className="w-full flex tablet:flex-row flex-col justify-between">
                    <AnimatedText>
                        <div className="flex flex-col tablet:gap-0 gap-4">
                            <h1 className="tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">
                                Didn&apos;t find what you were looking for?
                            </h1>
                        </div>
                    </AnimatedText>
                    <AnimatedText delay={0.2}>
                        <div className="flex flex-col w-fit h-fit tablet:gap-4 gap-10">
                            <p className="tablet:text-2xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10">
                                Feel free to contact us to see what we can do! 👀
                            </p>
                            <PrimaryButton text='Contact us' href='https://discord.gg/resellora' />
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </div>
    )
}

export default Store