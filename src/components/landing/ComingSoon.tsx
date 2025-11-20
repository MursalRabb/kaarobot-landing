"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.svg";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://formspree.io/f/moqobqpb", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        if (response.ok) {
          window.location.href = "/thank-you";
        } else {
          // Optional: inspect error JSON if provided
          const errorData = await response.json().catch(() => null);
          console.error("Formspree error", errorData);
        }
      })
      .catch((err) => {
        console.error("Network error", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background elements with brand green */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 top-20 left-10 bg-[#00B750]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 bottom-20 right-10 bg-[#00B750]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={logo}
            alt="Kaarobot Logo"
            height={80}
            className="mx-auto"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Something <span className="text-[#00B750]">Amazing</span> is Coming
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-8 font-light">
          We&apos;re putting the finishing touches on your new favorite tool
        </p>

        <div className="space-y-3 mb-12 text-white/70">
          <p className="text-lg">✨ Boost your sales like never before</p>
          <p className="text-lg">💰 Keep more money in your pocket</p>
          <p className="text-lg">🚀 Grow your business effortlessly</p>
        </div>

        {/* Email notification */}
        <div className="w-full max-w-md">
          <p className="text-sm text-white/60 mb-4">
            Be the first to know when we launch
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00B750] focus:outline-none focus:ring-2 focus:ring-[#00B750]/50 transition-all"
              required
            />
            <Button
              type="submit"
              className="px-6 py-3 bg-[#00B750] text-black hover:bg-[#009e45] rounded-lg font-semibold transition-all"
            >
              {loading ? "Submitting..." : "Notify Me"}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-12 text-white/50 text-sm">
          <p>Kaarobot - Because your business deserves better than ghost orders 👻</p>
        </div>
      </main>
    </div>
  );
}
