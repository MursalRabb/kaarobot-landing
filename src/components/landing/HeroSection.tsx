import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
          Reduce E-Commerce Returns
          <br />
          with <span className="text-[#00B750]">Smart WhatsApp</span>{" "}
          Confirmations
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
          Kaarobot sends WhatsApp confirmations and provides AI chatbot support
          to ensure customers actually want their orders before delivery
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
        <div className="w-full">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              height: "900px",
              width: "600px",
              margin: "0 auto",
            }}
            src="https://embed.figma.com/proto/wm22UpcOQquIp7rLUZrpNg/WhatsApp-UI-kit-for-chat-bot-design---prototyping--Android---Community-?node-id=501-1998&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2719%3A4461&show-proto-sidebar=0&embed-host=share&footer=false"
          ></iframe>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#00B750]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#00B750]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Setup in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#00B750]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>99.9% uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
