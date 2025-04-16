import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { AuthProvider } from "@/components/AuthProvider"
import { ScrollProvider } from "@/components/ScrollProvider"
import { FaDiscord } from "react-icons/fa";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "RESELLORA | Reselling Platform",
  description: "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
  openGraph: {
    title: "RESELLORA | Reselling Platform",
    description: "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
    url: "https://resellora.com",
    siteName: "RESELLORA",
    images: [
      {
        url: "/assets/Logo_1.png",
        width: 800,
        height: 600,
        alt: "RESELLORA Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RESELLORA | Reselling Platform",
    description: "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
    images: ["/assets/Logo_1.png"],
  },
};

export default function RootLayout({ children }) {
  // Get the current pathname
  let isNotDashboard = true;
  if (typeof window !== 'undefined') {
    isNotDashboard = !window.location.pathname.includes('/dashboard');
  }

  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased overflow-x-hidden bg-[var(--background)] text-[var(--primary-text)]`}>
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-[var(--primary-text)]">Website Access Restricted</h1>
              <div className="w-24 h-1 bg-[var(--accent-text)] mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl mb-12 text-[var(--secondary-text)] max-w-lg mx-auto">
              This website is currently unavailable due to pending payment. Please contact the developer to resolve this issue.
            </p>
            
            <div className="mt-8 p-8 rounded-xl bg-[var(--background)] shadow-lg border border-[var(--accent-text)]/20 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-[var(--primary-text)]">Contact Developer</h2>
              <div className="flex items-center justify-center gap-3 bg-[var(--accent-text)]/10 p-4 rounded-lg">
                <FaDiscord className="w-7 h-7 text-[var(--accent-text)]" />
                <span className="font-medium text-[var(--primary-text)] text-lg">shahnawaz_</span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
