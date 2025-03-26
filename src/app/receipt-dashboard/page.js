"use client"
import { Home, Mail, BarChart2, FileText, Smartphone, RotateCcw, Image, Monitor, RefreshCw } from "lucide-react"

export default function Dashboard() {
    // Sample brand logos for the grid
    const brands = [
        { "name": "apple", "logo": "apple.png" },
        { "name": "argos", "logo": "argos.png" },
        { "name": "bpm", "logo": "bpm.png" },
        { "name": "dyson", "logo": "dyson.png" },
        { "name": "gap", "logo": "gap.png" },
        { "name": "lv", "logo": "lv.png" },
        { "name": "nike", "logo": "nike.png" },
        { "name": "sephora", "logo": "sephora.png" },
        { "name": "stanley", "logo": "stanley.png" },
        { "name": "ysl", "logo": "ysl.png" },
        { "name": "currys", "logo": "currys.png" },
        { "name": "ebay", "logo": "ebay.png" },
        { "name": "moncler", "logo": "moncler.png" },
        { "name": "flannels", "logo": "flannels.png" },
        { "name": "hermes", "logo": "hermes.png" },
        { "name": "prada", "logo": "prada.png" },
        { "name": "arcteryx", "logo": "arcteryx.png" },
        { "name": "bestbuy", "logo": "bestbuy.png" },
        { "name": "canada_go", "logo": "canada_go.png" },
        { "name": "corteiz", "logo": "corteiz.png" },
        { "name": "vivienne", "logo": "vivienne.png" },
        { "name": "balenciaga", "logo": "balenciaga.png" },
        { "name": "dior", "logo": "dior.png" },
        { "name": "farfetch", "logo": "farfetch.png" },
        { "name": "lvr", "logo": "lvr.png" },
        { "name": "rick_owens", "logo": "rick_owens.png" },
        { "name": "supreme", "logo": "supreme.png" },
        { "name": "syna", "logo": "syna.png" },
        { "name": "grailed", "logo": "grailed.png" },
        { "name": "denim_tear", "logo": "denim_tear.png" },
        { "name": "dsm", "logo": "dsm.png" },
        { "name": "end", "logo": "end.png" },
        { "name": "flight_club", "logo": "flight_club.png" },
        { "name": "frasers", "logo": "frasers.png" },
        { "name": "selfridges", "logo": "selfridges.png" },
        { "name": "stadium", "logo": "stadium.png" },
        { "name": "mrporter", "logo": "mrporter.png" },
        { "name": "harrods", "logo": "harrods.png" },
        { "name": "farfetchtwo", "logo": "farfetchtwo.png" },
        { "name": "gallerydept", "logo": "gallerydept.png" },
        { "name": "de_bijenkorf", "logo": "de_bijenkorf.png" },
        { "name": "goat", "logo": "goat.png" },
        { "name": "icon", "logo": "icon.png" },
        { "name": "jd", "logo": "jd.png" },
        { "name": "johnlewis", "logo": "johnlewis.png" },
        { "name": "pacsun", "logo": "pacsun.png" },
        { "name": "sns", "logo": "sns.png" },
        { "name": "spoder", "logo": "spoder.png" },
        { "name": "ssense", "logo": "ssense.png" },
        { "name": "zalando", "logo": "zalando.png" },
        { "name": "goyard", "logo": "goyard.png" },
        { "name": "nordstrom", "logo": "nordstrom.png" },
        { "name": "snkrs", "logo": "snkrs.png" }
    ]

    return (
        <div className="flex bg-(--background) text-white">
            <div className="w-16 flex flex-col items-center py-6 border-r border-zinc-800">
                <div className="flex flex-col items-center space-y-8">
                    <Home className="w-5 h-5 text-(--accent-text)" />
                    <Mail className="w-5 h-5 text-(--secondary-text)" />
                    <BarChart2 className="w-5 h-5 text-(--secondary-text)" />
                    <FileText className="w-5 h-5 text-(--secondary-text)" />
                    <Smartphone className="w-5 h-5 text-(--secondary-text)" />
                    <RotateCcw className="w-5 h-5 text-(--secondary-text)" />
                    <Image className="w-5 h-5 text-(--secondary-text)" />
                    <Monitor className="w-5 h-5 text-(--secondary-text)" />
                    <RefreshCw className="w-5 h-5 text-(--secondary-text)" />
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-auto">
                {/* Header */}
                <div className="p-6 border-b border-zinc-800">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Overview</h1>
                        <RefreshCw className="w-5 h-5 text-(--accent-text)" />
                    </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                    <div className="bg-zinc-900 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm">Available templates</span>
                            <RefreshCw className="w-4 h-4 text-(--accent-text)" />
                        </div>
                        <div className="text-6xl font-bold text-(--accent-text)">70</div>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm">Generated receipts</span>
                            <RefreshCw className="w-4 h-4 text-(--accent-text)" />
                        </div>
                        <div className="text-6xl font-bold text-(--accent-text)">1754</div>
                    </div>

                    <div className="bg-zinc-900 p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm">Days left</span>
                            <RefreshCw className="w-4 h-4 text-(--accent-text)" />
                        </div>
                        <div className="text-6xl font-bold text-(--accent-text)">686</div>
                    </div>
                </div>

                {/* Status section */}
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Status</h2>
                        <BarChart2 className="w-5 h-5 text-(--accent-text)" />
                    </div>

                    {/* Email Receipts section */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl">Email Receipts</h3>
                            <Mail className="w-5 h-5 text-(--accent-text)" />
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-sm text-(--accent-text)">Some receipts may arrive in the spam folder</p>
                            <p className="text-sm">StockX R</p>
                        </div>
                    </div>

                    {/* Brand grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-11 gap-2">
                        {brands.map((brand, index) => (
                            <div key={index} className="aspect-square bg-(--accent-text) rounded-lg flex items-center justify-center p-4">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={`/assets/brand-logos/${brand.logo}`} className="h-8" alt={brand.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
