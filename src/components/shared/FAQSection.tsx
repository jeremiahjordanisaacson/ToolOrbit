import { FAQ } from "@/lib/data/tools-all";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-5 text-lg font-semibold text-surface-900">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-surface-200 rounded-xl border border-surface-200 bg-white">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex cursor-pointer select-none items-center justify-between px-5 py-4 text-[15px] font-medium text-surface-800 hover:text-primary-600">
              {faq.question}
              <svg
                className="ml-4 h-4 w-4 shrink-0 text-surface-500 transition-transform group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </summary>
            <div className="px-5 pb-4 text-sm leading-relaxed text-surface-500">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
