import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition">
             <Image src={logo} alt="Kaarobot" height={36} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy for kaarobot.pk</h1>
        <p className="text-white/60 mb-8">Effective date: October 6, 2025</p>

        <div className="space-y-8 text-white/80">
          <div>
            <p className="mb-4">
              <strong>Important:</strong> This Privacy Policy describes how KAAROBOT (SMC-PRIVATE) LIMITED (&quot;Kaarobot&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) processes personal data in connection with the Kaarobot application and services for Shopify merchants, including WhatsApp order confirmation and conversational support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1) Who we are</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>KAAROBOT (SMC-PRIVATE) LIMITED, incorporated in Pakistan. Registered address on file; not publicly disclosed in this policy.</li>
              <li>Contact: support@kaarobot.pk</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2) Scope and roles</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Our direct customers are Shopify merchants who install and use Kaarobot.</li>
              <li>For merchant account data and merchant&apos;s end-customer data processed via our app, we generally act as a data processor/service provider to the merchant (the controller), unless applicable law treats us differently.</li>
              <li>For our own website/app user accounts (e.g., our admin dashboard users via Google OAuth), we act as a data controller.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3) What we collect</h2>
            <p className="mb-3">Based on our service&apos;s operation:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Merchant user data (controller role): name, email, profile picture (from Google OAuth); account and settings; session tokens via HttpOnly cookies (idToken, refreshToken).</li>
              <li>Shopify order data (processor role): order totals, order title/name, line items, product metadata needed for messaging; order status mapping; hashed phone number and encrypted phone number for conversation linking.</li>
              <li>WhatsApp messaging data (processor role): outbound message metadata (message ID, status); inbound message body and selected webhook metadata. We deliberately avoid storing raw `WaId`, `From`, `ChannelMetadata`, and `ProfileName` fields, and we store phone references only in hashed/encrypted form.</li>
              <li>Conversations (processor role): customer messages, agent responses, and event metadata necessary to render conversation history and update order statuses.</li>
              <li>AI operations (processor role): subsets of order details, FAQs, conversation history snippets may be shared with our AI provider strictly to generate relevant responses. We do not instruct models to store personal data beyond request processing.</li>
              <li>System data: device, IP, or logs may be processed by hosting and infrastructure providers as part of security and delivery. We currently do not use analytics or marketing cookies.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4) Sources</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Directly from merchant users (OAuth sign-in).</li>
              <li>Via Shopify APIs and webhooks (orders).</li>
              <li>Via WhatsApp webhook (inbound messages) and Meta Whatsapp API (outbound).</li>
              <li>From our application logic (conversation and order updates).</li>
              <li>From our AI provider for real-time inference (inputs and outputs).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5) Purposes of processing</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide WhatsApp order confirmation and conversational support.</li>
              <li>Update order status according to end-customer responses.</li>
              <li>Authenticate merchant users; manage accounts and settings.</li>
              <li>Operate and secure the service; prevent abuse.</li>
              <li>Improve message quality and product understanding through FAQs and AI responses.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6) Legal bases (where applicable)</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Performance of a contract with merchants (providing the service).</li>
              <li>Legitimate interests (security, service integrity).</li>
              <li>Consent where required by law (e.g., WhatsApp messaging templates as applicable to merchants&apos; programs).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7) Data sharing and international transfers</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Shopify: to ingest orders and update related status.</li>
              <li>Meta WhatsApp API: to send/receive WhatsApp messages; message body and template variables are transmitted to Meta WhatsApp API.</li>
              <li>OpenAI: to generate conversation replies and product FAQs; relevant, minimized inputs are sent.</li>
              <li>Google OAuth: for merchant user sign-in and token handling.</li>
              <li>Hosting (e.g., AWS, likely us-east-1): application and database hosting.</li>
            </ul>
            <p className="mt-3">Transfers may occur internationally. Where required, we rely on appropriate safeguards (e.g., standard contractual clauses) provided by our vendors.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8) Retention</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Conversations, orders, and related logs are retained indefinitely by default to preserve order auditability and conversation context.</li>
              <li>Merchant or end-user deletion requests will be honored; we will delete or anonymize records as technically feasible, subject to legal obligations and backups.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9) Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Phone numbers are stored as hashed identifiers plus encrypted phone fields for message delivery.</li>
              <li>OAuth tokens are stored in HttpOnly cookies.</li>
              <li>We use industry-standard safeguards appropriate to our systems and the data we process. No method is 100% secure.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10) Your choices and rights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Merchants: access, rectify, export, or delete your account data by contacting us.</li>
              <li>End-users (customers of merchants): request access or deletion through the merchant; we will support merchant instructions as their processor.</li>
              <li>Where applicable law grants additional rights, we will facilitate them on request.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11) Children</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The service is for users 18+ and is not intended for children.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">12) Prohibited uses/content</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We do not support use on platforms or stores that promote pornography, gambling, or other illegal products/services under Pakistani law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">13) Changes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We may update this policy and will post the latest version with an updated effective date.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">14) Contact</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Email: support@kaarobot.pk</li>
            </ul>
          </div>

          <div>
            <p>
              <strong>-</strong> If you are in a jurisdiction that requires specific notices (e.g., EU/UK), contact us for a Data Processing Addendum and regional modules, including SCCs.
            </p>
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
