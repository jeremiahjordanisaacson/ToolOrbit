import { FAQ } from "@/lib/data/tools";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-lg border border-gray-200 bg-white"
          >
            <summary className="cursor-pointer select-none px-5 py-4 text-base font-medium text-gray-800 transition-colors hover:text-primary-700">
              {faq.question}
            </summary>
            <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
