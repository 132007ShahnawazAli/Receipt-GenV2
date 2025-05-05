import { DM_Sans } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/components/AuthProvider"
import { ScrollProvider } from "@/components/ScrollProvider"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

export const metadata = {
  title: "RESELLORA | Reselling Platform",
  description:
    "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
  openGraph: {
    title: "RESELLORA | Reselling Platform",
    description:
      "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
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
    description:
      "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
    images: ["/assets/Logo_1.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased overflow-x-hidden bg-(--background) text-(--primary-text)`}>
        <ScrollProvider>
          <div className="w-screen h-fit">
            <AuthProvider>{children}</AuthProvider>
          </div>
        </ScrollProvider>
      </body>
    </html>
  )
}
