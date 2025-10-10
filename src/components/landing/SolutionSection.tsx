export default function SolutionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-[#00B750]/10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-[#00B750]">Kaarobot</span> Solves This
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Automatically verify customer intent before delivery with WhatsApp confirmations
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#00B750]/20 to-black border border-[#00B750]/30 rounded-2xl p-8 h-full">
              <div className="bg-[#00B750] text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-[#00B750]/20 rounded-xl p-4">
                    <svg className="w-12 h-12 text-[#00B750]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Order Placed</h3>
                <p className="text-white/70">Customer completes checkout on your Shopify store</p>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 items-center justify-center">
              <svg className="w-8 h-8 text-[#00B750]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#00B750]/20 to-black border border-[#00B750]/30 rounded-2xl p-8 h-full">
              <div className="bg-[#00B750] text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-[#00B750]/20 rounded-xl p-4">
                    <svg className="w-12 h-12 text-[#00B750]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Instant WhatsApp</h3>
                <p className="text-white/70">Automatic confirmation message sent + AI chatbot answers questions</p>
              </div>
            </div>
            <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 items-center justify-center">
              <svg className="w-8 h-8 text-[#00B750]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-[#00B750]/30 to-black border-2 border-[#00B750] rounded-2xl p-8 h-full">
            <div className="bg-[#00B750] text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-[#00B750]/20 rounded-xl p-4">
                  <svg className="w-12 h-12 text-[#00B750]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Successful Delivery</h3>
              <p className="text-white/70">Customer confirms → Reduced returns → Happy customers & profits</p>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Before */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500/20 rounded-lg p-2">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Without Kaarobot</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-white/70">30-50% COD return rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-white/70">Customers ghost your calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-white/70">Overwhelmed support team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-white/70">PKR 100K+ monthly losses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-white/70">Uncertain delivery outcomes</span>
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="p-8 bg-gradient-to-br from-[#00B750]/10 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#00B750]/20 rounded-lg p-2">
                  <svg className="w-6 h-6 text-[#00B750]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">With Kaarobot</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00B750] mt-1">✓</span>
                  <span className="text-white/90 font-medium">70% reduction in returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00B750] mt-1">✓</span>
                  <span className="text-white/90 font-medium">85% confirmation via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00B750] mt-1">✓</span>
                  <span className="text-white/90 font-medium">AI handles customer questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00B750] mt-1">✓</span>
                  <span className="text-white/90 font-medium">Save PKR 70K+ monthly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00B750] mt-1">✓</span>
                  <span className="text-white/90 font-medium">Predictable delivery success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

