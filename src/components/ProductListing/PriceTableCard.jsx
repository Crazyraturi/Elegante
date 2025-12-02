const PriceTableCard = ({ data }) => {
  if (!data || data.length === 0) return null;

  const tableTitle =
    data.length > 0 && data[0].product.includes("Plain")
      ? "Buy Plain Tshirts for Men at Best Price"
      : "Buy Tshirts for Men at Best Price";

  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <>
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 mb-3">
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
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-yellow-50/50 transition-colors"
                >
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                      {item.product}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="ml-3">This Data was Last Updated on {formattedDate}</p>
    </>
  );
};

export default PriceTableCard;
