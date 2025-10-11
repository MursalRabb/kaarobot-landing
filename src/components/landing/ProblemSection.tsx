export default function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The COD Return Problem is<br />Costing You <span className="text-[#00B750]">Thousands</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Every refused delivery hurts your bottom line. Here&apos;s the typical cycle:
          </p>
        </div>

        {/* Pain Points Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 h-full">
              <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-bold text-center mb-2">Impulsive Order</h3>
              <p className="text-sm text-black/70 text-center">Customer places order without thinking it through</p>
            </div>
            {/* Arrow */}
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 h-full">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="font-bold text-center mb-2">Courier Dispatched</h3>
              <p className="text-sm text-black/70 text-center">You pay for shipping and courier services</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 h-full">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-bold text-center mb-2">Order Refused</h3>
              <p className="text-sm text-black/70 text-center">Customer changes mind and refuses package</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-red-100 border-2 border-red-400 rounded-xl p-6 h-full">
            <div className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-center mb-2">Money Lost</h3>
            <p className="text-sm text-black/70 text-center">You lose money on shipping + handling costs</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl md:text-7xl font-bold mb-4">30-50%</div>
            <p className="text-xl md:text-2xl mb-6">Average COD return rate in Pakistan</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">PKR 500-800</div>
                <p className="text-sm text-white/90">Lost per return</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">2-3 days</div>
                <p className="text-sm text-white/90">Wasted time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-2">PKR 100K+</div>
                <p className="text-sm text-white/90">Monthly losses for medium stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

