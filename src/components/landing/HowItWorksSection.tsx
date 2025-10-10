export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple Setup, <span className="text-[#00B750]">Immediate Results</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get started in minutes, not days. No technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00B750] via-[#00B750] to-[#00B750] mx-auto" style={{ width: '66%', marginLeft: '17%' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-[#00B750]/50">
                1
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full h-full">
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#00B750]/20 rounded-xl p-3">
                    <svg className="w-10 h-10 text-[#00B750]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Connect Shopify Store</h3>
                <p className="text-white/70 mb-4">
                  Simple one-click integration with your existing Shopify store
                </p>
                <div className="text-sm text-[#00B750] font-semibold">⏱️ Takes 30 seconds</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-[#00B750]/50">
                2
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full h-full">
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#00B750]/20 rounded-xl p-3">
                    <svg className="w-10 h-10 text-[#00B750]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Create Product FAQs</h3>
                <p className="text-white/70 mb-4">
                  AI auto-generates FAQs from your products, or add your own custom ones
                </p>
                <div className="text-sm text-[#00B750] font-semibold">🤖 AI-powered</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold mb-6 shadow-lg shadow-[#00B750]/50">
                3
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full h-full">
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#00B750]/20 rounded-xl p-3">
                    <svg className="w-10 h-10 text-[#00B750]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Start Reducing Returns</h3>
                <p className="text-white/70 mb-4">
                  Orders are automatically confirmed via WhatsApp. Watch your returns drop!
                </p>
                <div className="text-sm text-[#00B750] font-semibold">📉 Immediate impact</div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Mockup */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-[#00B750]/10 to-transparent border border-[#00B750]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Your Dashboard</h3>
            <div className="bg-black/80 rounded-xl p-6 border border-white/10">
              {/* Dashboard Preview */}
              <div className="space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-[#00B750]/20 border border-[#00B750]/40 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#00B750]">127</div>
                    <div className="text-sm text-white/70">Orders Today</div>
                  </div>
                  <div className="bg-[#00B750]/20 border border-[#00B750]/40 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#00B750]">89%</div>
                    <div className="text-sm text-white/70">Confirmation Rate</div>
                  </div>
                  <div className="bg-[#00B750]/20 border border-[#00B750]/40 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#00B750]">12%</div>
                    <div className="text-sm text-white/70">Return Rate</div>
                  </div>
                  <div className="bg-[#00B750]/20 border border-[#00B750]/40 rounded-lg p-4">
                    <div className="text-2xl font-bold text-[#00B750]">PKR 48K</div>
                    <div className="text-sm text-white/70">Saved This Month</div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm font-semibold mb-3 text-white/80">Recent Confirmations</div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between bg-black/40 rounded p-2">
                        <div className="flex items-center gap-3">
                          <div className="bg-[#00B750] rounded-full w-2 h-2"></div>
                          <span className="text-sm text-white/80">Order #{12340 + i}</span>
                        </div>
                        <span className="text-xs text-[#00B750] font-semibold">✓ Confirmed</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

