import { Check } from "lucide-react"

export default function PricingSection() {
    const pricingPlans = [
        {
            title: "1 Day",
            price: "$9.99",
            originalPrice: "$14.99",
            features: ["Unlimited Receipts", "70+ Stores", "Physical Receipts", "App Emulators", "View Bots"],
            cta: "Get 1 Day",
            featured: false,
        },
        {
            title: "1 Month",
            price: "$24.99",
            originalPrice: "$34.99",
            features: ["Unlimited Receipts", "70+ Stores", "Physical Receipts", "App Emulators", "View Bots"],
            cta: "Get 1 Month",
            featured: true,
        },
        {
            title: "Lifetime",
            price: "$39.99",
            originalPrice: "$59.99",
            features: ["Unlimited Receipts", "70+ Stores", "Physical Receipts", "App Emulators", "View Bots"],
            cta: "Get Lifetime",
            featured: false,
        },
    ]

    return (
        <div className="px-8 sm:px-14 bg-(--background) flex flex-col items-center gap-20 tablet:py-10">
            <div className='flex flex-col gap-7 items-center '>
                <h1 className='tablet:font-bold font-semibold text-(--primary-text) tablet:w-full text-5xl tablet:text-7xl tracking-tighter '>Choose Your Plan</h1>
                <p className='tablet:text-2xl text-lg font-light tracking-tight text-center text-(--primary-text) tablet:w-xl w-full '>Access all premium features with flexible pricing options</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl w-full">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="flex-1 min-w-[300px] border-[1px] border-(--secondary-text) relative bg-gradient-to-br from-neutral-950 to-(--background)  rounded-lg p-8 flex flex-col">
                        {plan.featured && (
                            <div className="absolute -top-4 right-8 bg-(--accent-text) text-black font-semibold px-4 py-1 rounded-full">
                                Featured
                            </div>
                        )}

                        <h2 className="tablet:text-3xl text-xl font-semibold tracking-tight text-(--primary-text) tablet:w-xl w-full ">{plan.title}</h2>

                        <div className="mb-4">
                            <span className="text-(--primary-text) text-6xl font-bold">{plan.price}</span>
                            <span className="text-(--secondary-text) ml-2 line-through">{plan.originalPrice}</span>
                        </div>

                        <p className="text-(--secondary-text) mb-8">One time payment</p>

                        <div className="flex-grow">
                            <ul className="space-y-4">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-(--primary-text)">
                                        <Check className="mr-2 h-5 w-5 text-(--accent-text)" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="mt-8 w-full bg-[#111] border border-gray-700 text-(--primary-text) py-3 rounded-md hover:bg-gray-800 transition-colors">
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

