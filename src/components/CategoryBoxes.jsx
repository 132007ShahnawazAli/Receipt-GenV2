import { Download } from "lucide-react"

// Define categories with placeholder images
const categories = [
    {
        id: 1,
        title: "Authentication",
        description: "Increase your chances of easily passing legitimacy and authentication checks...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 2,
        title: "eBay",
        description: "Discover how eBay works, what to avoid, and how to keep your account safe...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 3,
        title: "Finances",
        description: "Learn how to manage your payments, split accounts, and withdraw funds from your sales...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 4,
        title: "Fundamentals",
        description: "Get a brief introduction to reselling and learn the key aspects of the program...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 5,
        title: "Marketplaces",
        description: "Learn how to manage your offers across various marketplaces to maximize sales...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 6,
        title: "OPSEC",
        description: "Stay safe while reselling and learn how to remain untraceable on the internet...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 7,
        title: "Packaging",
        description: "Learn how to prepare your product using authentic packaging...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 8,
        title: "Returns",
        description: "Manage returns, handle dissatisfied customers, and minimize losses...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
    {
        id: 9,
        title: "Trends",
        description: "Learn how to track and follow market trends in the reselling field...",
        image: "https://img.freepik.com/free-vector/emerald-background-design_23-2150317695.jpg?t=st=1744613682~exp=1744617282~hmac=a700afba28bdacd2ff8a40f8873c3978ba8afc70071173e67619f264690edc22&w=1380",
    },
]

export default function CategoryBoxes() {
    return (
        <div className="px-6 mb-6">
            {/* Section Header */}
            <div className="relative flex justify-between items-center pb-6">
                <h2 className="tablet:text-4xl text-3xl font-semibold tracking-tight">Guides</h2>
                <hr className="absolute bottom-0 left-0 right-0 text-zinc-800" />
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {categories.map((category) => (
                    <div key={category.id} className="rounded-xl overflow-hidden border border-zinc-800">
                        {/* Image Header with Title Overlay - Only top portion */}
                        <div className="relative h-24 overflow-hidden px-4 pt-4">
                            {/* Placeholder image */}
                            <img
                                src={category.image || "/placeholder.svg"}
                                alt={category.title}
                                className="w-full h-full object-cover object-center rounded-lg"
                            />

                            {/* Dark overlay to ensure text readability */}
                            <div className="absolute inset-0"></div>

                            {/* Title centered on image */}
                            <div className="absolute bottom-2 left-6 flex items-center justify-center">
                                <h3 className="text-4xl font-semibold text-(--primary-text)">{category.title}</h3>
                            </div>
                        </div>

                        {/* Content below image */}
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
                            <div className="flex flex-row justify-between">
                                <p className="text-sm text-gray-300 mb-4 w-[80%]">{category.description}</p>
                                <button className="bg-[var(--accent-text)]/10 rounded-lg h-8 w-8 flex items-center justify-center">
                                    <Download className="w-4 h-4 text-(--accent-text) " />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
