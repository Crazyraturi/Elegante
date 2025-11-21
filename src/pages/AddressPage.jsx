import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Lock, Plus, ChevronRight } from "lucide-react";
import { CartContext } from "../context/CartContext";

import AddSecurity from "../assets/AddSecurity.png";
import Addquality from "../assets/Addquality.png";
import AddIndia from "../assets/AddIndia.png";
import AddImg1 from "../assets/AddImg1.png";
import AddImg2 from "../assets/AddImg2.png";
import AddImg3 from "../assets/AddImg3.png";
import AddImg4 from "../assets/AddImg4.png";
import AddImg5 from "../assets/AddImg5.png";
import AddImg6 from "../assets/AddImg6.png";
import AddImg7 from "../assets/AddImg7.png";
import AddImg8 from "../assets/AddImg8.png";

export default function AddressPage() {
  const { cartItems } = useContext(CartContext);

  const totalMRP = cartItems?.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    pinCode: "",
    city: "",
    state: "",
    address: "",
    locality: "",
    makeDefault: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-700">Cart</span>
            </div>
            <div className="w-20 border-t-2 border-dashed border-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-700">Address</span>
            </div>
            <div className="w-20 border-t-2 border-dashed border-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">○</span>
              <span className="text-sm text-gray-400">Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Address Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Delivery Address</h2>

              <button className="w-full border-2 border-dashed border-gray-300 rounded-lg py-4 mb-6 flex items-center justify-center gap-2 hover:border-gray-400 transition">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Add New Address</span>
              </button>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    name="pinCode"
                    placeholder="Pin Code"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City/District"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Address (House No, Street, Area)"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="locality"
                  placeholder="Locality / Town / Village *"
                  value={formData.locality}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="makeDefault"
                    checked={formData.makeDefault}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">
                    Make this my Default Address
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                PRICE DETAILS ({cartItems?.length || 0} Items)
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

              <Link to="/payment">
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Continue Payment
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                <span>🔒 256-bit SSL</span> | Visa | MasterCard | UPI | RuPay |
                Net Banking
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Section - Full Width */}
        <div className="py-12 mt-12 border-t flex flex-col items-center justify-center gap-10">
          <div className="flex justify-center items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={Addquality}
                  alt="Quality"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Quality</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={AddIndia}
                  alt="Made in India"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">Made In India</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={AddSecurity}
                  alt="Secure Payment"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                Secure Payments
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-8 justify-center items-center gap-6">
            {[
              AddImg1,
              AddImg2,
              AddImg3,
              AddImg4,
              AddImg5,
              AddImg6,
              AddImg7,
              AddImg8,
            ].map((img, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={img}
                  alt="payment-logo"
                  className="w-16 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
