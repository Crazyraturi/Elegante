import React from "react";

const ShippingPolicy = () => {
  return (
    <section className="px-48 space-y-4 text-black mb-12 mt-8">
      {/* Home Shipping Policy Heading */}
      <div>
        <h1 className="text-lg font-semibold ">
          Home <span className="px-1">{">"}</span> Shipping Policy
        </h1>
      </div>

      {/* Shipping Policy Heading */}
      <div>
        <h1 className="text-lg font-semibold underline decoration-yellow-400">
          Shipping Policy
        </h1>
      </div>

      {/* Free Shipping */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2">
          We offer free shipping on the orders sitewide.
        </p>
      </div>

      {/* Processing Time */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2">
          We process orders within 24-48 hours and ship them from Udaipur,
          Rajasthan.
        </p>
      </div>

      {/* Pan India Shipping */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2">
          We ship PAN India and our mission is to serve every region of Bharat,
          ensuring accessibility to our products for all.
        </p>
      </div>

      {/* Delivery Time */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2">
          Order Delivery Time: In metropolitan areas, orders are delivered
          within 1-4 days after processing. While in the rest of Bharat,
          delivery takes 4-7 days after processing.
        </p>
      </div>

      {/* Returns / Exchange / Refund Link */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2">
          To know about our Returns, Exchange, and Refund Policies,{" "}
          <span className="text-sky-500 underline cursor-pointer">
            click here
          </span>
          .
        </p>
      </div>

      {/* Track Order Section */}
      <div>
        <p className="flex items-start before:content-['•'] before:mr-2">
          You can easily track your order status{" "}
          <span className="text-sky-500 underline cursor-pointer">here</span> or
          access manually in My Account &gt;&gt; Track Your Order section.
        </p>
      </div>
    </section>
  );
};

export default ShippingPolicy;
