import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../src/context/CartContext";
import { Check, Trash2, Heart } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#E5E7EB] flex items-center justify-center">
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="w-full flex justify-center mb-12">
            <div className="w-120 h-120 bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764934044/Add_to_Cart-cuate_mue6ko.svg"
                alt="Cart Empty"
              />
            </div>
          </div>
          <Link to="/">
            <button className="bg-black text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Continue Shopping
            </button>
          </Link>
        </main>
      </div>
    );
  }

  const totalMRP = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Step Progress */}
        <div className="flex items-center justify-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-green-600 font-medium">Cart</span>
          </div>
          <div className="w-20 h-0.5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <span className="text-gray-500 font-medium">Address</span>
          </div>
          <div className="w-20 h-0.5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <span className="text-gray-500 font-medium">Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Reward Banner */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-0.5">
                <span className="text-sm font-bold">i</span>
              </div>
              <p className="text-gray-700">
                You are getting 10% reward points on this order
              </p>
            </div>

            {/* Loop Cart Products */}
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-40 object-cover rounded-lg"
                    />

                    <div className="mt-3 px-4">
                      {/* Quantity Dropdown - Updated to use item._id */}
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item._id, Number(e.target.value))
                        }
                        className="border border-gray-300 rounded px-7 py-2"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-3">{item.color}</p>

                    <p className="text-2xl font-bold text-gray-900 mb-4">
                      ₹{item.price}
                    </p>

                    <div className="flex gap-8 mb-4">
                      <div>
                        <span className="text-gray-500 text-sm">Color:</span>{" "}
                        <span className="text-gray-900 font-medium">
                          {item.color}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Size:</span>{" "}
                        <span className="text-gray-900 font-medium">
                          {item.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Remove / Wishlist */}
                <div className="flex items-center justify-center gap-8 mt-5 pt-5 border-t border-gray-200">
                  <button
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
                    onClick={() => removeFromCart(item._id)} // Updated to use item._id
                  >
                    <Trash2 className="w-5 h-5" />
                    <span>Remove</span>
                  </button>

                  <div className="w-px h-6 bg-gray-300"></div>

                  <button className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition">
                    <Heart className="w-5 h-5" />
                    <span>Move To Wishlist</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="space-y-5">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                PRICE DETAILS ({cartItems.length} Items)
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Total MRP (Inc. of Taxes)</span>
                  <span>₹{totalMRP}</span>
                </div>

                <div className="flex justify-between text-gray-700 pb-3 border-b border-gray-200">
                  <span>Cart Total</span>
                  <span>₹{totalMRP}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
                <span>Total Amount</span>
                <span>₹{totalMRP}</span>
              </div>

              <Link to="/address">
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  PLACE ORDER
                </button>
              </Link>
            </div>

            {/* Payment Icons */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                <span>🔒 256-bit SSL</span> | Visa | MasterCard | UPI | RuPay |
                Net Banking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}