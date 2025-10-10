import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.67-.33-3.82-.91l-.27-.16-2.84.48.48-2.84-.16-.27A7.93 7.93 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: "WhatsApp Order Confirmation",
      description: "Automatic confirmation messages sent via WhatsApp when orders are placed",
      benefits: "Instant customer engagement, higher confirmation rates"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI-Powered Chatbot",
      description: "Intelligent FAQ system answers customer questions about products",
      benefits: "24/7 support, reduces pre-delivery doubts"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Real-Time Order Dashboard",
      description: "Track order statuses and confirmation responses in real-time",
      benefits: "Complete visibility, better decision making"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Seamless Shopify Integration",
      description: "One-click setup with your existing Shopify store",
      benefits: "No technical setup, works immediately"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Smart FAQ Management",
      description: "AI-generated FAQs plus manual curation for perfect answers",
      benefits: "Comprehensive product knowledge, reduced support tickets"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Multi-Language Support",
      description: "Chatbot supports English and Roman Urdu for Pakistani market",
      benefits: "Reach more customers, better communication"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-[#00B750]">Reduce Returns</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Powerful features designed specifically for Pakistani e-commerce businesses
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-200 bg-white hover:border-[#00B750] hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader>
                <div className="bg-[#00B750]/10 text-[#00B750] rounded-xl p-3 w-fit mb-4 group-hover:bg-[#00B750] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                <CardDescription className="text-black/70">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-[#00B750]/5 rounded-lg p-3 border border-[#00B750]/20">
                  <p className="text-sm font-medium text-black/80">
                    <span className="text-[#00B750]">✓</span> {feature.benefits}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <p className="text-white/90">Uptime Reliability</p>
          </div>
          <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">&lt;5 min</div>
            <p className="text-white/90">Setup Time</p>
          </div>
          <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl p-6 text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p className="text-white/90">Automated Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

