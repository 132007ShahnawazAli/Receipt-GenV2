import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { AuthProvider } from "@/components/AuthProvider"
import { ScrollProvider } from "@/components/ScrollProvider"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "RESELLORA | Reselling Platform",
  description: "Set-up your reselling game with top tools and resources including guides, marketplace tools, generators and more.",
};

export default function RootLayout({ children }) {
  // Get the current pathname
  let isNotDashboard = true;
  if (typeof window !== 'undefined') {
    isNotDashboard = !window.location.pathname.includes('/dashboard');
  }

  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased overflow-x-hidden bg-(--background) text-(--primary-text)`}>
        <ScrollProvider>
          <div className="w-screen h-fit">
            <AuthProvider>
              {/* Only show Navbar if not on dashboard */}
              {isNotDashboard && <Navbar />}
              {children}
            </AuthProvider>
          </div>
        </ScrollProvider>
      </body>
    </html>
  );
}
