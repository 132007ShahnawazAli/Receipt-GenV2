import { ScrollProvider } from "@/components/ScrollProvider"

export default function AuthLayout({ children }) {
  return (
    <ScrollProvider>
      {children}
    </ScrollProvider>
  )
} 