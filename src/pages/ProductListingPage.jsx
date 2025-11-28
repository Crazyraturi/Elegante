import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://beyoung-backend.onrender.com/api/v1/product";

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const specificType = searchParams.get("specificType");
  const subCategory = searchParams.get("subCategory");

  const fetchFilteredProducts = async () => {
    setLoading(true);
    setError(null);

    const params = Object.fromEntries(searchParams.entries());
    const queryString = new URLSearchParams(params).toString();
    const finalApiUrl = `${API_BASE_URL}?${queryString}`;

    console.log("Fetching data from:", finalApiUrl); 

    try {
      const response = await axios.get(finalApiUrl);
      setProducts(response.data.data);
    } catch (err) {
      console.error("Error fetching filtered products:", err);
      const errorMessage =
        err.response?.status === 404
          ? "API Route Not Found (404). Check your backend server route definition!"
          : "Failed to fetch products. Please check server status and network.";

      setError(errorMessage);
      setProducts([]); // Clear any old products on failure
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredProducts();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="p-8 text-center text-xl font-medium">
        ⏳ Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-600 font-bold border border-red-300 bg-red-50 rounded-lg">
        🚨 {error}
        <p className="mt-2 text-sm font-normal text-red-500">
          *If this is a 404 error, the backend fix is mandatory (see previous
          steps).
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">
        {specificType || subCategory || "All Products"}
      </h1>

      <p className="text-gray-600 mb-8">
        Found **{products.length}** items matching your selection.
      </p>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <h3 className="font-semibold text-lg truncate">{product.name}</h3>
              <p className="text-green-600 font-bold mt-1">₹{product.price}</p>
              <p className="text-sm text-gray-500 mt-2">
                Type: {product.specificType}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 border rounded-lg bg-gray-50">
          🤷‍♂️ No products found for this filter combination.
        </div>
      )}
    </div>
  );
}
