import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition">
            <div className="bg-[#00B750] rounded-full p-2">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#00B750" />
                <rect x="10" y="15" width="20" height="10" rx="5" fill="white" />
                <circle cx="15" cy="20" r="2" fill="#00B750" />
                <circle cx="25" cy="20" r="2" fill="#00B750" />
              </svg>
            </div>
            <span className="text-xl font-bold">kaarobot<span className="text-[#00B750]">.pk</span></span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Use for kaarobot.pk</h1>
        <p className="text-white/60 mb-8">Effective date: October 6, 2025</p>

        <div className="space-y-8 text-white/80">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1) Parties and acceptance</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>These Terms are between KAAROBOT (SMC-PRIVATE) LIMITED (&quot;Kaarobot&quot;, &quot;we&quot;) and the Shopify merchant (&quot;you&quot;). By installing or using our app, you accept these Terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2) Service description</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Kaarobot dispatches WhatsApp messages to end-customers for COD order confirmation and provides a chatbot for FAQs and order-related questions. It updates order status in your dashboard based on customer responses.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3) Eligibility and restrictions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be 18+ and a valid Shopify merchant.</li>
              <li>You must not use the service for pornography, gambling, or any other illegal goods/services under Pakistani law.</li>
              <li>You are responsible for your store&apos;s compliance with WhatsApp policies, Shopify policies, and local laws.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4) Your responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate account details and maintain security of your credentials.</li>
              <li>Obtain and record any consents required to send WhatsApp messages to your end-customers.</li>
              <li>Ensure your store content, products, and templates comply with applicable law and platform rules.</li>
              <li>If using your own WhatsApp number, you are responsible for its configuration, compliance, and fees.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5) Templates and numbers</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Message templates are owned and managed by Kaarobot. We may also allow you to use your own WhatsApp number; otherwise, we send from our numbers where available and appropriate.</li>
              <li>We may modify templates to maintain compliance or service quality.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6) Third-party services</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The service integrates with Shopify, Twilio (WhatsApp), OpenAI, Google OAuth, and hosting providers (e.g., AWS). Your use is subject to their terms and policies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7) Data and privacy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Our Privacy Policy describes processing of personal data. For your end-customers, we act as your processor and will process personal data only to provide the service and as instructed by you.</li>
              <li>You are responsible for providing any necessary privacy notices and for honoring data subject requests; we will support your instructions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8) Availability and support</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We strive for reliability but do not guarantee uninterrupted service.</li>
              <li>Support is available via support@kaarobot.pk.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9) Fees</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>If fees apply, they will be presented in-app or via order form. You agree to pay applicable fees, taxes, and charges.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10) Intellectual property</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Kaarobot owns all rights in the service, software, and templates (excluding your data and third-party materials). You receive a limited, revocable, non-transferable license to use the service for your Shopify store.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11) Acceptable use</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Do not misuse the service, attempt to bypass security, scrape, reverse engineer, or send unlawful, harassing, or deceptive content. We may suspend if we detect abuse or policy violations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">12) Term and termination</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You may uninstall the app at any time.</li>
              <li>We may suspend or terminate for breach, legal risk, or platform rules violations. Upon termination, your access ceases; we will follow the Privacy Policy regarding retention and deletion.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">13) Disclaimers</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Service is provided &quot;as is&quot; without warranties, express or implied. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement to the fullest extent permitted by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">14) Limitation of liability</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To the maximum extent permitted by law, Kaarobot will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits/revenue, even if advised of the possibility.</li>
              <li>Our aggregate liability under these Terms will not exceed the amounts paid by you for the service in the 12 months preceding the event giving rise to liability, or USD 100 if no fees were paid.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">15) Indemnity</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You agree to defend, indemnify, and hold harmless Kaarobot from claims arising out of your store content, unlawful messaging, or violations of law or third-party rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">16) Governing law and venue</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>These Terms are governed by the laws of Pakistan. Venue and jurisdiction will be in courts located in Pakistan.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">17) Changes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We may update these Terms from time to time. Continued use after changes constitutes acceptance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">18) Contact</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Email: support@kaarobot.pk</li>
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xl font-bold text-white mb-3">Notes:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>If you need a Data Processing Addendum for B2B compliance (you as controller, us as processor), we can provide one with standard contractual clauses where required.</li>
              <li>If you want merchant-facing or store-facing display text (links/notices) or white-label options for merchants, we can add them.</li>
            </ul>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link href="/" className="text-[#00B750] hover:text-[#00B750]/80 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
