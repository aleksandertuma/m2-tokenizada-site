import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "destructive" | "secondary" }) {
  const variants = {
    default: "bg-green-100 text-green-800",
    destructive: "bg-red-100 text-red-800",
    secondary: "bg-gray-100 text-gray-800",
  };

  return (
    <span className={cn("px-2 py-1 text-sm rounded", variants[variant])}>
      {children}
    </span>
  );
}
