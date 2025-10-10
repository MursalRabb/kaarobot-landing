import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does WhatsApp integration work?",
      answer: "Kaarobot uses WhatsApp Business API to send automated messages. When a customer places an order on your Shopify store, we instantly send a confirmation message to their WhatsApp number. No manual intervention needed - it's 100% automated."
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We follow industry-standard security practices and are fully compliant with data protection regulations. Your customer data is encrypted in transit and at rest. We never share your data with third parties and only use it to provide our service."
    },
    {
      question: "How quickly can I set this up?",
      answer: "Most merchants complete setup in under 5 minutes! Simply connect your Shopify store with one click, configure your WhatsApp Business account (we guide you through it), and you're ready to go. Our AI automatically generates FAQs from your products."
    },
    {
      question: "What if customers don't respond to WhatsApp?",
      answer: "Great question! WhatsApp has a 98% open rate compared to 20% for emails. Most customers respond within minutes. For those who don't, you can see their status in your dashboard and follow up manually if needed. We also send automated reminders."
    },
    {
      question: "Do you support other messaging platforms?",
      answer: "Currently we focus exclusively on WhatsApp as it has the highest adoption rate in Pakistan (95%+ smartphone users). We're working on adding SMS and Facebook Messenger support in the near future based on customer demand."
    },
    {
      question: "How does the AI chatbot learn about my products?",
      answer: "Our AI analyzes your product descriptions, titles, and specifications from Shopify to automatically generate relevant FAQs. You can also manually add custom FAQs for specific products. The more information you provide, the better the chatbot performs."
    },
    {
      question: "Can I customize the WhatsApp messages?",
      answer: "Yes! Professional and Enterprise plans include custom message templates. You can personalize greetings, add your brand voice, include specific order details, and more. We provide pre-built templates to get you started quickly."
    },
    {
      question: "What happens if I exceed my order limit?",
      answer: "We'll send you a notification when you're approaching your plan limit. You can easily upgrade to the next tier from your dashboard. If you temporarily exceed your limit, we won't stop your service - we'll just notify you to upgrade."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#00B750]">Questions</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Everything you need to know about Kaarobot
          </p>
        </div>

        {/* Accordion */}
        <Accordion defaultValue="0">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger value={index.toString()}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent value={index.toString()}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-16 bg-gradient-to-br from-[#00B750] to-[#009e45] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Our support team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@kaarobot.pk" 
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
            <a 
              href="https://wa.me/923001234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-black/30 transition border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

