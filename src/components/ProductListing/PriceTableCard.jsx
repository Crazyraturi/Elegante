import React from "react";

const PriceTableCard = ({ data }) => {
  // 1. Ensure 'data' is treated as an object, not null/undefined
  const priceData = data || {};

  // 2. Safely extract the 'items' array, defaulting to an empty array
  const items =
    priceData.items && Array.isArray(priceData.items) ? priceData.items : [];

  if (items.length === 0) return null;

  // 3. Use the 'heading' property for the table title, or a default fallback
  const tableTitle = priceData.heading || "Product Pricing";

  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  // NOTE: generateSlug helper function is removed as ID-based linking is used.

  return (
    <>
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 mb-3">
        {/* Use the dynamically resolved tableTitle */}
        <h3 className="text-xl font-bold mb-4 text-gray-900">{tableTitle}</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-right text-sm font-semibold text-gray-700 w-2/4"
                >
                  Best Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {/* Use the safe 'items' array for mapping */}
              {items.map((item, index) => {
                // 🚨 CRITICAL MODIFICATION: Strictly use item.id.
                const identifier = item.id;

                if (!identifier) {
                  // This ensures rows without IDs are skipped to prevent errors.
                  console.warn(
                    `Product at index ${index} (${item.product}) skipped: Missing unique ID for linking.`,
                  );
                  return null;
                }

                // The URL pattern remains consistent: /product/:id
                const detailPageUrl = `/product/${identifier}`;

                return (
                  <tr
                    key={index}
                    // Make the entire row clickable and visually responsive
                    className="hover:bg-yellow-50/50 transition-colors cursor-pointer"
                    onClick={() => {
                      // Use window.location.href for immediate navigation
                      // In a real React app, you might prefer the useNavigate hook from react-router-dom
                      window.location.href = detailPageUrl;
                    }}
                  >
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {/* Use a <span> for the title. The <a> tag is removed as navigation is handled by the row's onClick. */}
                      <span className="text-blue-600 hover:text-blue-800 font-medium">
                        {item.product}
                      </span>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                      {item.price}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="ml-3">This Data was Last Updated on {formattedDate}</p>
    </>
  );
};

export default PriceTableCard;
