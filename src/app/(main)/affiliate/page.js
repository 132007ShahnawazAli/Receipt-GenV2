import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "RESELLORA - Affiliate",
  description: "Join our affiliate program and start earning by promoting us",
  openGraph: {
    title: "RESELLORA - Affiliate",
    description: "Join our affiliate program and start earning by promoting us",
    url: "https://resellora.com/affiliate",
    siteName: "RESELLORA",
    images: [
      {
        url: "/assets/Logo_1.png",
        width: 800,
        height: 600,
        alt: "RESELLORA Affiliate Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RESELLORA - Affiliate",
    description: "Join our affiliate program and start earning by promoting us",
    images: ["/assets/Logo_1.png"],
  },
};

function Affiliate() {
    return (
        <div className=" px-8 sm:px-14 w-full flex tablet:flex-row flex-col gap-10 tablet:gap-0 justify-between tablet:pt-10 ">
            <div className="relative h-fit w-fit">
                <div className="absolute h-64 w-64 rounded-full bg-(--accent-text) opacity-40 blur-[100px]" />
                <h1 className=' font-semibold text-(--primary-text) text-5xl tablet:w-[33vw] tablet:text-7xl tracking-tighter tablet:leading-20 '>Earn by promoting our products!</h1>
            </div>
            <p className='tablet:text-2xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full pt-10'>Contact us on our Telegram <Link href={'https://t.me/resellora'} className='text-underline decoration-1'>@resellora</Link> or through our contact form on the website for more info!</p>
        </div>
    )
}

export default Affiliate