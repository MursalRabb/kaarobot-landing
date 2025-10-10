"use client";

import * as React from "react";
import { cn } from "./utils";

type AccordionContextType = {
  openItem: string | null;
  setOpenItem: (item: string | null) => void;
};

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, defaultValue, children, ...props }, ref) => {
    const [openItem, setOpenItem] = React.useState<string | null>(defaultValue || null);

    return (
      <AccordionContext.Provider value={{ openItem, setOpenItem }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border border-white/10 rounded-lg", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within Accordion");

    const isOpen = context.openItem === value;

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center justify-between px-6 py-4 text-left font-semibold transition-all hover:bg-white/5",
          className
        )}
        onClick={() => context.setOpenItem(isOpen ? null : value)}
        {...props}
      >
        {children}
        <svg
          className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within Accordion");

    const isOpen = context.openItem === value;

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn("px-6 pb-4 pt-0 text-white/70", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

