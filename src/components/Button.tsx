import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-medium rounded-lg transition-all inline-flex items-center justify-center",
          {
            "bg-[#F2E558] text-black shadow-md hover:shadow-lg hover:scale-105 hover:bg-[#F2E558]/90": 
              variant === "primary",
            "bg-muted text-black hover:bg-muted/80": 
              variant === "secondary",
            "border border-katha-purple text-black hover:bg-katha-purple/10": 
              variant === "outline",
            "text-black hover:bg-white/10": 
              variant === "ghost",
            "text-sm px-4 py-2": 
              size === "sm",
            "px-6 py-3": 
              size === "md",
            "text-lg px-8 py-4": 
              size === "lg"
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
