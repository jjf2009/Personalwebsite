
import { useToast } from "../../hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  if (!toasts.length) return null

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 w-full max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-background border rounded-lg shadow-lg p-4 animate-in slide-in-from-right-full"
        >
          <div className="flex justify-between items-start">
            <div>
              {toast.title && <h3 className="font-medium">{toast.title}</h3>}
              {toast.description && <p className="text-sm text-muted-foreground">{toast.description}</p>}
            </div>
            <button
              onClick={() => {
                // This is a simplified version, in a real app you'd call a dismiss function
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
