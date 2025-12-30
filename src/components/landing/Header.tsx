"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <Image src={logo} alt="Kaarobot" height={42} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white/80 text-base">
          <a href="#features" className="hover:text-[#00B750] transition">Features</a>
          <a href="#how-it-works" className="hover:text-[#00B750] transition">How it Works</a>
          <a href="#pricing" className="hover:text-[#00B750] transition">Pricing</a>
          <a href="#faq" className="hover:text-[#00B750] transition">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button className="bg-[#00B750] text-black font-semibold hover:bg-[#009e45] transition">
            <Link href="https://apps.shopify.com/kaarobot">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col px-4 py-6 space-y-4">
            <a 
              href="#features" 
              className="text-white/80 hover:text-[#00B750] transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-[#00B750] transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              className="text-white/80 hover:text-[#00B750] transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-white/80 hover:text-[#00B750] transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="border-t border-white/10 pt-4 space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition">
                Sign In
              </a>
              <Button className="w-full bg-[#00B750] text-black font-semibold hover:bg-[#009e45] transition">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

