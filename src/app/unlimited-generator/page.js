"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UnlimitedGenerator() {
  const [selectedPeriod, setSelectedPeriod] = useState("1 Month");

  return (
    <div className="px-8 sm:px-14 font-[family-name:var(--font-dm-sans)] text-(--primary-text) flex flex-col gap-14">
      {/* Navigation */}
      <div className="py-2 hidden sm:block">
        <div className="text-lg font-light">
          <Link href="#" className="hover:underline">
            Store
          </Link>{" "}
          {" > "}
          <span>Unlimited Generator</span>
        </div>
      </div>

      <div className="max-w-7xl">
        {/* Rating */}
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

        {/* Main Content */}
        <div className="py-2 flex flex-col gap-8">
          <h1 className="tablet:font-bold font-semibold text-(--primary-text) text-5xl tablet:text-7xl tracking-tighter tablet:leading-20">
            Unlimited Generator
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Image for mobile - full width at top */}
            <div className="w-full mb-6 md:hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6137d3d5942fc363decba711/234373ed-d8fa-4081-9ddd-a1fe498c90ba/GENERATOR-01.png"
                alt="Generator Logo"
                width={400}
                height={400}
                className="w-full object-contain"
              />
            </div>

            <div className="md:w-2/3 flex flex-col gap-6">
              <p className="tablet:text-3xl text-lg font-semibold tracking-tight text-(--primary-text) tablet:w-2xl w-full">
                from {selectedPeriod === "1 Month" ? "$24.99" : "$39.99"}
              </p>
              <p className="tablet:text-xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-2xl w-full">
                1 Month Or Lifetime Access To Unlimited Receipt Generator
              </p>
              <p className="tablet:text-xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-2xl w-full">
                Dashboard includes more than 70 ready-to-generate templates.
              </p>

              <p className="tablet:text-xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-2xl w-full">
                Adidas, Amazon, Apple, Arc'Teryx, Argos, Balenciaga, BAPE, Best Buy, Carhartt, Costco, Boohoo, Browns,
                Canada Goose, Coggles, Converse, Debenhams, Denim Tears, DIOR, Dover Street Market, Dyson, eBay, END,
                Farfetch, Flannels, Flight Club, Foot Locker, FRASERS, Gallery Dept., Gucci, Harrods, Hermes, Yeezy,
                GAP, GOAT, Grailed, John Lewis, Louis Vuitton, LUISAVIAROMA, Moncler, MR PORTER, Nike, Off-White,
                PacSun, Prada, Ralph Lauren, Rick Owens, Saks Fifth Avenue, Samsung, Selfridges, Sephora,
                Sneakersnstuff, SNKRS, StockX, SSENSE, Stadium Goods, Stanley, StockX, Stüssy, Supreme, Syna World,
                Trapstar, Vivienne Westwood, Saint Laurent, Zalando, Legit App Authentication, Moncler Authentication,
                OFFSPRING, GOT 'EM, Apple (A4), Farfetch (A4), Nike (A4), Apple (Thermal), CheckCheck (Emulator)
              </p>

              <p className="tablet:text-xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-2xl w-full">
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

              {/* Period Selection */}
              <div className="flex flex-col gap-4">
                <p className="tablet:text-xl text-lg font-light tracking-tight text-(--primary-text) tablet:w-2xl w-full">
                  Period:
                </p>
                <div className="grid grid-cols-2 gap-3 max-w-xl">
                  <button
                    className={`py-4 rounded-lg tracking-tight text-(--accent-text) text-center ${
                      selectedPeriod === "1 Month" ? "border-1 border-(--accent-text)" : "border border-gray-600"
                    }`}
                    onClick={() => setSelectedPeriod("1 Month")}
                  >
                    1 Month
                  </button>
                  <button
                    className={`py-4 px-10 rounded-lg tracking-tight text-(--accent-text) text-center ${
                      selectedPeriod === "Lifetime" ? "border-1 border-(--accent-text)" : "border border-gray-600"
                    }`}
                    onClick={() => setSelectedPeriod("Lifetime")}
                  >
                    Lifetime
                  </button>
                </div>
              </div>

              <hr className="max-w-xl text-(--accent-text) mt-4 mb-4" />

              {/* Purchase Button */}
              <button className="w-full max-w-xl bg-(--accent-text) text-black py-4 rounded-lg tracking-tight font-medium">
                Purchase
              </button>
            </div>

            {/* Image for desktop - right side */}
            <div className="hidden md:flex md:w-1/3 justify-end items-start">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6137d3d5942fc363decba711/234373ed-d8fa-4081-9ddd-a1fe498c90ba/GENERATOR-01.png"
                alt="Generator Logo"
                width={500}
                height={500}
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* YouTube Video */}
          <div className="aspect-video w-full mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/kQzavUaxAh8"
              title="StockX Receipt Generator by HYPERECEIPT"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video"
            ></iframe>
          </div>

          {/* Reviews Section */}
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
        </div>
      </div>
    </div>
  );
}