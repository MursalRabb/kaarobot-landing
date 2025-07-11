import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 py-3 md:px-12 bg-black/90 border-b border-white/10 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-[#00B750] rounded-full p-2">
            {/* Placeholder logo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#00B750" />
              <rect x="10" y="15" width="20" height="10" rx="5" fill="white" />
              <circle cx="15" cy="20" r="2" fill="#00B750" />
              <circle cx="25" cy="20" r="2" fill="#00B750" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">kaarobot<span className="text-[#00B750]">.pk</span></span>
        </div>
        <nav className="hidden md:flex gap-8 text-white/80 text-base">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it Works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <Button className="bg-[#00B750] text-black font-semibold hover:bg-[#009e45] transition px-6 py-2 rounded-full ml-4">Get Started</Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4 md:py-28 bg-black">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Supercharge your Shopify store<br />with <span className="text-[#00B750]">WhatsApp automation</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-2xl mb-8">
          Kaarobot lets you connect your Shopify store and automatically send order confirmations via WhatsApp. Let your customers chat, ask questions, and confirm orders—all in one place.
        </p>
        <Button className="bg-[#00B750] text-black font-semibold hover:bg-[#009e45] transition px-8 py-4 rounded-full text-lg">Start Free Trial</Button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-0 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#00B750] text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z" fill="white"/></svg>
              <h3 className="font-semibold text-xl mb-2">Shopify Integration</h3>
              <p className="text-white/90 text-center">Connect your Shopify store in seconds and start automating your order confirmations.</p>
            </div>
            <div className="bg-black text-white rounded-xl p-6 shadow-lg flex flex-col items-center border border-[#00B750]">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H7V4h10z" fill="#00B750"/></svg>
              <h3 className="font-semibold text-xl mb-2">WhatsApp Order Confirmations</h3>
              <p className="text-white/90 text-center">Automatically send order confirmation messages to your customers via WhatsApp.</p>
            </div>
            <div className="bg-[#00B750] text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1-7h2v2h-2zm0-8h2v6h-2z" fill="white"/></svg>
              <h3 className="font-semibold text-xl mb-2">Customer Chat Support</h3>
              <p className="text-white/90 text-center">Let customers chat about products and get instant answers before confirming their order.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-black text-white rounded-xl p-6 shadow-lg flex flex-col items-center border border-[#00B750]">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-2h2zm0-4h-2V7h2z" fill="#00B750"/></svg>
              <h3 className="font-semibold text-xl mb-2">Seamless Onboarding</h3>
              <p className="text-white/90 text-center">Sign up and connect your store in just a few clicks. No coding required.</p>
            </div>
            <div className="bg-[#00B750] text-white rounded-xl p-6 shadow-lg flex flex-col items-center">
              <svg className="mb-4" width="40" height="40" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="white"/></svg>
              <h3 className="font-semibold text-xl mb-2">Secure & Reliable</h3>
              <p className="text-white/90 text-center">Your data is protected with industry-standard security and 99.9% uptime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <ol className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            <li className="flex flex-col items-center">
              <div className="bg-[#00B750] text-black rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
              <p className="text-white/80 text-center">Create your Kaarobot account and connect your Shopify store.</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-[#00B750] text-black rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="font-semibold text-lg mb-2">Automate</h3>
              <p className="text-white/80 text-center">Enable WhatsApp order confirmations and chat support for your customers.</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-[#00B750] text-black rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="font-semibold text-lg mb-2">Grow</h3>
              <p className="text-white/80 text-center">Watch your sales and customer satisfaction grow with instant communication.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#00B750] text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8">Sign up now and experience the future of Shopify order automation.</p>
        <Button className="bg-black text-white font-semibold hover:bg-gray-900 transition px-8 py-4 rounded-full text-lg">Start Free Trial</Button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-8 px-4 border-t border-white/10 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <div className="bg-[#00B750] rounded-full p-1">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#00B750" />
                <rect x="10" y="15" width="20" height="10" rx="5" fill="white" />
                <circle cx="15" cy="20" r="2" fill="#00B750" />
                <circle cx="25" cy="20" r="2" fill="#00B750" />
              </svg>
            </div>
            <span className="font-bold text-lg">kaarobot.pk</span>
          </div>
          <div className="flex gap-6 text-white/80 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it Works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="text-white/60 text-xs mt-2 md:mt-0">© {new Date().getFullYear()} Kaarobot. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
