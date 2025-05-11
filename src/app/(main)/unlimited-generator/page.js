"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { AnimatedText } from "@/components/ScrollProvider"
import CheckoutModal from "@/components/checkout/CheckoutModal"

export default function UnlimitedGenerator() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedPeriod, setSelectedPeriod] = useState("1 Month")
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Update the handlePurchase function to not require login
  const handlePurchase = async () => {
    // Show the checkout modal directly without checking login status
    setIsModalOpen(true)
  }

  return (
    <div className="px-8 sm:px-14 font-[family-name:var(--font-dm-sans)] text-[var(--primary-text)] flex flex-col gap-14">
      {/* Navigation */}
      <div className="py-2 hidden sm:block">
        <div className="text-lg font-light">
          <Link href="/store" className="hover:underline">
            Store
          </Link>{" "}
          {" > "}
          <span>Unlimited Generator</span>
        </div>
      </div>

      <div className="max-w-7xl">
        {/* Rating */}
        <AnimatedText>
          <div className="flex items-center py-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <Link href="#reviews" className="ml-2 text-lg font-light underline">
              4 Reviews
            </Link>
          </div>
        </AnimatedText>

        {/* Main Content */}
        <div className="py-2 flex flex-col gap-8">
          <AnimatedText delay={0.2}>
            <h1 className="tablet:font-bold font-semibold text-[var(--primary-text)] text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">
              Unlimited Generator
            </h1>
          </AnimatedText>

          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Image for mobile - full width at top */}
            <div className="w-full mb-6 md:hidden">
              <Image
                src="/assets/unlimited-generator.png"
                alt="Generator Logo"
                width={400}
                height={400}
                className="w-full object-contain"
              />
            </div>

            <div className="md:w-2/3 flex flex-col gap-6">
              <AnimatedText delay={0.3}>
                <p className="text-3xl font-semibold tracking-tight text-[var(--primary-text)] tablet:w-2xl w-full">
                  {selectedPeriod === "1 Month" ? "$19.95" : "$69.95"}
                </p>
              </AnimatedText>

              <AnimatedText delay={0.4}>
                <p className="text-xl font-light tracking-tight text-[var(--primary-text)] tablet:w-2xl w-full">
                  1 Month Or Lifetime Access To Unlimited Receipt Generator
                </p>
              </AnimatedText>

              <AnimatedText delay={0.5}>
                <p className="text-xl  font-light tracking-tight text-[var(--primary-text)] tablet:w-2xl w-full">
                  Dashboard includes more than 70 ready-to-generate templates.
                </p>
              </AnimatedText>

              <AnimatedText delay={0.6}>
                <p className="text-xl font-light tracking-tight text-[var(--primary-text)] tablet:w-2xl w-full">
                  Adidas, Amazon, Apple, Arc Teryx, Argos, Balenciaga, BAPE, Best Buy, Carhartt, Costco, Boohoo, Browns,
                  Canada Goose, Coggles, Converse, Debenhams, Denim Tears, DIOR, Dover Street Market, Dyson, eBay, END,
                  Farfetch, Flannels, Flight Club, Foot Locker, FRASERS, Gallery Dept., Gucci, Harrods, Hermes, Yeezy,
                  GAP, GOAT, Grailed, John Lewis, Louis Vuitton, LUISAVIAROMA, Moncler, MR PORTER, Nike, Off-White,
                  PacSun, Prada, Ralph Lauren, Rick Owens, Saks Fifth Avenue, Samsung, Selfridges, Sephora,
                  Sneakersnstuff, SNKRS, StockX, SSENSE, Stadium Goods, Stanley, StockX, Stüssy, Supreme, Syna World,
                  Trapstar, Vivienne Westwood, Saint Laurent, Zalando, Legit App Authentication, Moncler Authentication,
                  OFFSPRING, GOT EM, Apple (A4), Farfetch (A4), Nike (A4), Apple (Thermal), CheckCheck (Emulator)
                </p>
              </AnimatedText>

              <AnimatedText delay={0.7}>
                <p className="text-xl font-light tracking-tight text-[var(--primary-text)] tablet:w-2xl w-full">
                  This{" "}
                  <Link href="#" className="underline">
                    hypereceipt.me/io
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline">
                    hypereceipt.cloud
                  </Link>{" "}
                  are the only official and reputable sources to purchase this license key.
                </p>
              </AnimatedText>

              {/* Period Selection */}
              <AnimatedText delay={0.8}>
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-light tracking-tight text-[var(--primary-text)] tablet:w-2xl w-full">
                    Period:
                  </p>
                  <div className="grid grid-cols-2 gap-3 max-w-xl">
                    <button
                      className={`py-4 rounded-lg tracking-tight text-[var(--accent-text)] text-center cursor-pointer ${
                        selectedPeriod === "1 Month" ? "border-1 border-[var(--accent-text)]" : "border border-gray-600"
                      }`}
                      onClick={() => setSelectedPeriod("1 Month")}
                    >
                      1 Month
                    </button>
                    <button
                      className={`py-4 px-10 rounded-lg tracking-tight text-[var(--accent-text)] text-center cursor-pointer ${
                        selectedPeriod === "Lifetime"
                          ? "border-1 border-[var(--accent-text)]"
                          : "border border-gray-600"
                      }`}
                      onClick={() => setSelectedPeriod("Lifetime")}
                    >
                      Lifetime
                    </button>
                  </div>
                </div>
              </AnimatedText>

              <div className="relative max-w-xl">
                <hr className="w-full border-t-2 border-(--accent-text) relative z-10" />
                <div className="absolute top-1/2 left-0 w-full h-[80px] -translate-y-1/2 bg-[var(--accent-text)]/30 blur-3xl rounded-full z-0"></div>
              </div>

              {/* Purchase Button */}
              <AnimatedText delay={0.9}>
                <button
                  className="w-full max-w-xl bg-[var(--accent-text)] text-black py-4 rounded-lg tracking-tight font-medium disabled:opacity-70 cursor-pointer"
                  onClick={handlePurchase}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Purchase"}
                </button>
              </AnimatedText>
            </div>

            {/* Image for desktop - right side */}
            <div className="hidden md:flex md:w-1/3 justify-end items-start">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6137d3d5942fc363decba711/234373ed-d8fa-4081-9ddd-a1fe498c90ba/GENERATOR-01.png?format=1000w"
                alt="Generator Logo"
                width={500}
                height={500}
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* YouTube Video */}
          <AnimatedText delay={1.0}>
            <div className="aspect-video w-full mb-8">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/kQzavUaxAh8"
                title="StockX Receipt Generator by HYPERECEIPT"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
          </AnimatedText>

          {/* Reviews Section */}
          <AnimatedText delay={1.1}>
            <div id="reviews" className="mb-8">
              <h2 className="text-4xl font-bold mb-4">Reviews</h2>

              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <span className="ml-2">4.8</span>
                <span className="ml-2 text-sm">Average product rating</span>
              </div>

              <div className="flex gap-4 mb-4">
                <span>4 product reviews</span>
                <span>24 store reviews</span>
              </div>

              {/* Individual Reviews */}
              <div className="border-t border-gray-800 py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">MykytaM</p>
                    <p className="text-sm text-gray-400">Jul 13, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-600 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 py-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Noel L.</p>
                    <p className="text-sm text-gray-400">Jul 8, 2024</p>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="mt-2">Best</p>
              </div>
            </div>
          </AnimatedText>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPlan={selectedPeriod === "1 Month" ? "price_monthly" : "price_lifetime"}
      />
    </div>
  )
}
