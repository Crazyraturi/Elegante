import { ChevronDown } from "lucide-react";

const FAQSection = ({ faqItems }) => {
  if (!faqItems || faqItems.length === 0) return null;
  return (
    <section className="category-faq-section mt-8">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="faq-list space-y-2">
        {faqItems.map((item, index) => (
          <details
            className="faq-accordion-item border-b border-gray-200"
            key={index}
          >
            <summary className="faq-question cursor-pointer py-2 flex justify-between items-center font-medium hover:text-black">
              {item.q}
              <ChevronDown size={18} className="text-gray-500" />
            </summary>
            <div className="faq-answer-content pb-3 text-sm text-gray-700 leading-relaxed">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
