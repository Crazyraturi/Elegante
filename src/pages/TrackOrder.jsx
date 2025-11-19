import React, { useState } from "react";
import Track_order_Image from "../assets/Track_order_image.jpg";
import { Heart } from "lucide-react";

const TrackOrder = () => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = () => {
    if (trackingId.trim()) {
      alert(`Tracking order: ${trackingId}`);
    }
  };

  return (
    <section className="w-full">
      {/* Banner Image */}
      <div className="mt-10 mb-6 w-full">
        <img
          src={Track_order_Image}
          alt="Track Order"
          className="w-full "
        />
      </div>

      {/* Main Section */}
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-gray-100 rounded-xl shadow-lg p-6 sm:p-10 relative">
          {/* Floating Header */}
          <h1
            className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-700 
            absolute left-1/2 transform -translate-x-1/2 -top-10 
            bg-gray-200 px-4 sm:px-6 py-2 rounded-xl shadow-md whitespace-nowrap"
          >
            Track your Order / Shipment
          </h1>

          {/* Body Content */}
          <div className="pt-16 sm:pt-20">
            {/* Description */}
            <p className="text-gray-600 text-center mb-6 sm:mb-8 px-3 text-sm sm:text-base">
              Enter your Tracking ID to track the status of your order. Check
              your Email/SMS where your Tracking ID was sent after shipping.
            </p>

            {/* Tracking ID Label */}
            <div className="bg-gray-200 rounded-t-lg py-3 px-4 sm:px-6 text-center">
              <h2 className="text-base sm:text-lg font-medium text-gray-700">
                Tracking ID
              </h2>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-b-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Enter Details
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter Tracking ID"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md
                  focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 w-full sm:w-auto
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
      <div className="text-center px-4 sm:px-10">
        <h1 className="bg-black text-white text-xl sm:text-3xl md:text-4xl mt-12 mb-14 px-6 sm:px-12 py-6 rounded-xl font-bold leading-relaxed">
          <Heart
            size={24}
            className="inline-block text-red-500 fill-red-500 mr-2"
          />
          Thank you for shopping at Beyoung, keep loving!
          <Heart
            size={24}
            className="inline-block text-red-500 fill-red-500 ml-2"
          />
        </h1>
      </div>
    </section>
  );
};

export default TrackOrder;
