import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 md:py-32 bg-gradient-to-b from-black via-black to-[#00B750]/10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B750]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B750]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <Badge variant="success" className="mb-6 text-sm px-4 py-2">
          🎉 Reduce returns by up to 70%
        </Badge>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Reduce E-Commerce Returns<br />
          with <span className="text-[#00B750]">Smart WhatsApp</span> Confirmations
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
          Kaarobot sends WhatsApp confirmations and provides AI chatbot support to ensure 
          customers actually want their orders before delivery
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="bg-[#00B750] text-black font-semibold hover:bg-[#009e45] transition px-8 py-4 rounded-full text-lg">
            Start Free Trial
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-4 rounded-full text-lg border-2"
          >
            Watch Demo →
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#00B750]/20 to-black border border-[#00B750]/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="bg-black/60 rounded-xl p-6 space-y-4">
              {/* WhatsApp Conversation Mock */}
              <div className="flex items-start gap-3">
                <div className="bg-[#00B750] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.33-3.82-.91l-.27-.16-2.84.48.48-2.84-.16-.27A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div className="bg-[#00B750]/20 border border-[#00B750]/40 rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-[#00B750] mb-1">Kaarobot</p>
                  <p className="text-white/90">Hi! We received your order #12345. Would you like to confirm? Reply YES to confirm or ask any questions about your order.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-white/10 border border-white/20 rounded-2xl rounded-tr-none px-4 py-3 max-w-sm">
                  <p className="text-white/90">Yes, confirm! Can you deliver tomorrow?</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#00B750] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.33-3.82-.91l-.27-.16-2.84.48.48-2.84-.16-.27A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </div>
                <div className="bg-[#00B750]/20 border border-[#00B750]/40 rounded-2xl rounded-tl-none px-4 py-3 max-w-md">
                  <p className="text-sm font-semibold text-[#00B750] mb-1">Kaarobot</p>
                  <p className="text-white/90">✅ Order confirmed! Yes, delivery is scheduled for tomorrow between 2-5 PM. Thank you! 🎉</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00B750]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00B750]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Setup in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00B750]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>99.9% uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}

