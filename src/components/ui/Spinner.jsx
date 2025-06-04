import { Loader2 } from "lucide-react"

export function Spinner({ className = "", ...props }) {
  return (
    <div className="flex items-center justify-center" {...props}>
      <Loader2 className={`h-6 w-6 animate-spin text-primary ${className}`} />
    </div>
  )
} 