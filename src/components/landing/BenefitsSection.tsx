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
        <div className="bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold border-4 border-white/30">
                  AK
                </div>
              </div>
              
              {/* Quote */}
              <div className="flex-1">
                <svg className="w-10 h-10 text-white/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="text-xl md:text-2xl mb-4 leading-relaxed">
                  "Since using Kaarobot, our COD return rate dropped from 45% to just 15%. 
                  We're saving over PKR 80,000 every month. The WhatsApp confirmations work 
                  like magic - customers actually respond!"
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-bold text-lg">Ahmed Khan</div>
                    <div className="text-white/80">Founder, StylePk.com</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

