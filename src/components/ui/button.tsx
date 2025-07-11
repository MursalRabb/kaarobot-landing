import * as React from "react";
import { cn } from "./utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

const variantClasses = {
  default: "bg-[#00B750] text-black hover:bg-[#009e45]",
  outline: "border border-[#00B750] text-[#00B750] bg-transparent hover:bg-[#00B750] hover:text-black",
  ghost: "bg-transparent text-[#00B750] hover:bg-[#00B750]/10",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00B750] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button; 