import { useState } from "react";
import PriceTableCard from "./PriceTableCard";
import FAQSection from "./FAQSection";

const CategoryDescription = ({ longDescription, faqs, priceTableData }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const paragraphs = longDescription ? longDescription.split("</p>") : [];
  const initialContent =
    paragraphs.slice(0, 2).join("</p>") + (paragraphs.length > 2 ? "</p>" : "");

  if (
    !longDescription &&
    (!priceTableData || priceTableData.length === 0) &&
    (!faqs || faqs.length === 0)
  )
    return null;

  return (
    <div className="mt-12 pt-6 border-t border-gray-300">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="lg:hidden w-full mb-6">
        <PriceTableCard data={priceTableData} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4 w-full">
          {longDescription && (
            <>
              <div className="text-sm text-gray-700 leading-relaxed overflow-hidden description-area">
                <div
                  dangerouslySetInnerHTML={{
                    __html: showFullDescription
                      ? longDescription
                      : initialContent,
                  }}
                  className="description-content space-y-4"
                />
              </div>
              {paragraphs.length > 2 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition text-sm cursor-pointer"
                >
                  {showFullDescription ? "See Less" : "Read More"}
                </button>
              )}
            </>
          )}
        </div>

        <div className="lg:w-2/4 min-w-[280px] hidden lg:block ">
          <PriceTableCard data={priceTableData} />
        </div>
      </div>

      <hr className="my-8" />
      <FAQSection faqItems={faqs} />
    </div>
  );
};

export default CategoryDescription;
