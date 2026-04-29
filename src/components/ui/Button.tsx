import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-olive disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-terracotta text-white hover:bg-terracotta-dark": variant === "solid",
            "border border-charcoal bg-transparent hover:bg-charcoal/5 text-charcoal": variant === "outline",
            "hover:bg-olive/10 text-charcoal": variant === "ghost",
            "text-terracotta underline-offset-4 hover:underline": variant === "link",
            "h-8 px-3 text-xs": size === "sm",
            "h-10 px-4 py-2 text-sm": size === "md",
            "h-12 px-6 text-base w-full md:w-auto": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
