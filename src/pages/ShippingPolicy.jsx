import React from "react";

const ShippingPolicy = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 space-y-6 text-black mb-12 mt-8">
      {/* Breadcrumb */}
      <div>
        <h1 className="text-base sm:text-lg font-semibold">
          Home <span className="px-1">{">"}</span> Shipping Policy
        </h1>
      </div>

      {/* Page Title */}
      <div>
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold underline decoration-yellow-400">
          Shipping Policy
        </h1>
      </div>

      {/* Free Shipping */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2 text-sm sm:text-base md:text-lg">
          We offer free shipping on the orders sitewide.
        </p>
      </div>

      {/* Processing Time */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2 text-sm sm:text-base md:text-lg">
          We process orders within 24-48 hours and ship them from Udaipur,
          Rajasthan.
        </p>
      </div>

      {/* Pan India Shipping */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2 text-sm sm:text-base md:text-lg">
          We ship PAN India and our mission is to serve every region of Bharat,
          ensuring accessibility to our products for all.
        </p>
      </div>

      {/* Delivery Time */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2 text-sm sm:text-base md:text-lg">
          Order Delivery Time: In metropolitan areas, orders are delivered
          within 1-4 days after processing. While in the rest of Bharat,
          delivery takes 4-7 days after processing.
        </p>
      </div>

      {/* Returns / Exchange / Refund Link */}
      <div>
        <p className="flex flex-wrap items-start before:content-['•'] before:mr-2 text-sm sm:text-base md:text-lg">
          To know about our Returns, Exchange, and Refund Policies,{" "}
          <a href="#" className="text-sky-500 underline cursor-pointer ml-1">
            click here
          </a>
          .
        </p>
      </div>

      {/* Track Order Section */}
      <div>
        <p className="flex flex-wrap items-start before:content-['•'] before:mr-2 text-sm sm:text-base md:text-lg">
          You can easily track your order status{" "}
          <a href="#" className="text-sky-500 underline cursor-pointer ml-1">
            here
          </a>{" "}
          or access manually in My Account &gt; Track Your Order section.
        </p>
      </div>
    </section>
  );
};

export default ShippingPolicy;
