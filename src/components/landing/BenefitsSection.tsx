export default function BenefitsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-[#00B750]">Impact</span> on Your Business
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Real metrics from businesses using Kaarobot
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Metric 1 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#00B750] hover:shadow-xl transition-all">
            <div className="bg-[#00B750]/10 text-[#00B750] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-[#00B750] mb-2">70%</div>
            <h3 className="text-xl font-bold mb-2">Reduction in COD Returns</h3>
            <p className="text-black/70">From 40% to just 12% average return rate</p>
          </div>

          {/* Metric 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#00B750] hover:shadow-xl transition-all">
            <div className="bg-[#00B750]/10 text-[#00B750] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </div>
            <div className="text-5xl font-bold text-[#00B750] mb-2">85%</div>
            <h3 className="text-xl font-bold mb-2">Customer Confirmation Rate</h3>
            <p className="text-black/70">Most customers respond within minutes via WhatsApp</p>
          </div>

          {/* Metric 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-[#00B750] hover:shadow-xl transition-all">
            <div className="bg-[#00B750]/10 text-[#00B750] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="text-5xl font-bold text-[#00B750] mb-2">50%</div>
            <h3 className="text-xl font-bold mb-2">Fewer Support Tickets</h3>
            <p className="text-black/70">AI chatbot handles common questions automatically</p>
          </div>
        </div>

        {/* Testimonial */}

        {/* ROI Calculator Preview */}
        <div className="mt-16 bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Calculate Your Savings</h3>
          <p className="text-black/70 mb-6">See how much money you could save with Kaarobot</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-black/60 mb-2">Average monthly orders</div>
              <div className="text-3xl font-bold text-black">500</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-black/60 mb-2">Return rate reduction</div>
              <div className="text-3xl font-bold text-[#00B750]">-28%</div>
            </div>
            <div className="bg-[#00B750] rounded-lg p-4 text-white">
              <div className="text-sm text-white/80 mb-2">Monthly savings</div>
              <div className="text-3xl font-bold">PKR 70K</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

