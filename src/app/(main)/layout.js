import Navbar from "@/components/Navbar"
import { ScrollProvider } from "@/components/ScrollProvider"

export default function MainLayout({ children }) {
  return (
    <ScrollProvider>
      <Navbar />
      {children}
    </ScrollProvider>
  )
}
