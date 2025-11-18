import React, { useState } from "react";
import Track_order_Image from "../assets/Track_oreder_Image.jpg";
import { Heart } from "lucide-react";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = () => {
    if (trackingId.trim()) {
      alert(`Tracking order: ${trackingId}`);
      // Add your tracking logic here
    }
  };

  return (
    <section>
      <div className="mt-12 mb-auto">
        <img src={Track_order_Image} alt="Track Order" />
      </div>

      {/* Main Section */}
      <div className="min-h-screen bg-white flex items-center justify-center p-4 relative">
        <div className="w-full max-w-4xl bg-gray-100  rounded-lg shadow-lg p-8 md:p-12">
          {/* Header — half outside, half inside */}
          <div className="relative">
            <h1
              className="text-3xl md:text-5xl font-semibold text-gray-700 
        absolute left-1/2 transform -translate-x-1/2 -top-12 
        bg-gray-200 px-6 py-2 rounded-xl shadow-md"
              style={{ whiteSpace: "nowrap" }}
            >
              Track your Order or Shipment
            </h1>
          </div>

          {/* Add top padding so content doesn’t overlap */}
          <div className="pt-20 px-22">
            {/* Description */}
            <p className="text-gray-600 text-center mb-8 px-4">
              Enter your Tracking ID to track the status of your order. You can
              find the Tracking ID in the Email/SMS confirming that your order
              has been shipped.
            </p>

            {/* Tracking Label */}
            <div className="bg-gray-200 rounded-t-lg py-3 px-6 mb-0 text-center">
              <h2 className="text-lg font-medium text-gray-700">Tracking ID</h2>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-b-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Enter Details
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Tracking ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500
            text-black font-semibold px-8 py-3 rounded-md transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center justify-center px-50 ">
        <h1 className="border-2 bg-black text-white text-4xl mt-12 mb-8 px-12 py-8 font-bold">
          <Heart size={24} className="inline-block text-red-500 fill-red-500" />
          Thank you for shopping at Beyoung, keep loving!
          <Heart size={24} className="inline-block text-red-500 fill-red-500 " />
        </h1>
      </div>
    </section>
  );
};

export default TrackOrder;
