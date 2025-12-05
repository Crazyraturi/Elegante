import React, { useState } from "react";
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
      <div className="mt-4 mb-4 sm:mt-10 sm:mb-6 w-full">
        <img
          src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933233/Track_order_image_jtvvqc.jpg"
          alt="Track Order"
          className="w-full object-cover"
        />
      </div>

      <div className="min-h-[70vh] sm:min-h-screen bg-white flex items-start sm:items-center justify-center p-4">
        <div className="w-full max-w-3xl bg-gray-100 rounded-xl shadow-lg p-4 sm:p-10 relative mt-10 sm:mt-0">
          <h1
            className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-700 
            absolute left-1/2 transform -translate-x-1/2 -top-6 sm:-top-10 
            bg-gray-200 px-3 sm:px-6 py-2 rounded-xl shadow-md text-center" // Added text-center for small screens
          >
            Track your Order / Shipment
          </h1>

          <div className="pt-10 sm:pt-20">
            <p className="text-gray-600 text-center mb-6 sm:mb-8 px-0 text-sm sm:text-base">
              Enter your Tracking ID to track the status of your order. Check
              your Email/SMS where your Tracking ID was sent after shipping.
            </p>

            <div className="bg-gray-200 rounded-t-lg py-3 px-4 sm:px-6 text-center">
              <h2 className="text-base sm:text-lg font-medium text-gray-700">
                Tracking ID
              </h2>
            </div>

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

      <div className="text-center px-4 sm:px-10">
        <h1 className="bg-black text-white text-lg sm:text-3xl md:text-4xl mt-8 mb-10 sm:mt-12 sm:mb-14 px-4 sm:px-12 py-4 sm:py-6 rounded-xl font-bold leading-snug sm:leading-relaxed">
          <Heart
            size={20}
            className="inline-block text-red-500 fill-red-500 mr-1 sm:mr-2"
          />
          Thank you for shopping at Elegante, keep loving!
          <Heart
            size={20}
            className="inline-block text-red-500 fill-red-500 ml-1 sm:ml-2"
          />
        </h1>
      </div>
    </section>
  );
};

export default TrackOrder;
