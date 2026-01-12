import React from "react";
import { Link } from "react-router-dom";

const ReturnOrder = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-38 space-y-4">
      {/* Heading */}
      <div>
        {/* Breadcrumb style text */}
        <h1 className="py-2 text-sm sm:text-base">
          Home Return <span className="px-1">{">"}</span> Refund And
          Cancellation{" "}
        </h1>
        {/* Main Title */}
        <p className="font-bold text-xl sm:text-2xl">
          Return, Exchange, and Refund Policy
        </p>
      </div>

      {/* Refund & Exchange */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Refund and Exchange
        </h1>

        <p>
          • We offer a hassle-free return and exchange policy for 7 days from
          the date of delivery. To be eligible for a return or exchange,
          product(s) must be in their original condition with all tags intact.
        </p>

        <p>
          • For a smooth return and instant exchange process, please note that
          all product(s) must pass our quality inspection during the reverse
          pickup.
        </p>

        <p>
          • Exchanges are subject to stock availability and can be initiated
          only once per product.
        </p>

        <p>
          • We strongly recommend recording a video while opening/unpacking your
          order, ensuring all stickers/labels are intact. This video will serve
          as proof in case of missing or damaged product(s) or parcel(s).{" "}
          <span className="font-bold ">
            <br />
            Note: &nbsp;
          </span>
          Without video proof, it will be difficult for us to proceed with
          returns or refunds.
        </p>

        <p>
          • Product(s) purchased during clearance sale, BOGO offers, exclusive
          discounts, brand collaborations, or campaigns with a free product
          cannot be returned, exchanged or refunded.
        </p>

        <p>
          • For hygiene reasons, we do not accept returns, refunds, or exchanges
          for Boxers.
        </p>
      </div>

      {/* Reverse Pickup */}
      <div className="py-3 px-3 space-y-3 bg-gray-100 rounded-lg">
        {" "}
        {/* Added rounded corners for better appearance */}
        <h1 className="text-base sm:text-lg underline underline-offset-4 decoration-yellow-400">
          Reverse Pickup Services
        </h1>
        <p>
          • We provide a reverse pickup service for your convenience. The
          product(s) must pass quality inspection for instant return or
          exchange. Reverse shipment is free of cost. Each order will have two
          reverse pickup attempts.
        </p>
        <p>
          • Self-ship in case of non-serviceable areas: If your Pincode is
          non-serviceable, please self-ship the product(s) to our warehouse.
          Address: Straticrestedge Folks Pvt Ltd, Khasra No. 3881/2188, Rani Ji Bawri,
          Eklingpura, Jamar Kotda Road, Udaipur - 313001.
        </p>
        <p>
          • Refund for Self-Shipping: Refunds will be processed within 48 hours
          of receiving the product(s) at our warehouse after quality check. You
          will receive a full refund plus up to INR 100 as courier charges.
          <br />
          <span className="font-bold">Note: &nbsp;</span>
          We recommend using Speed Post as it is reliable and government-owned.
        </p>
      </div>

      {/* Refunds */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Refunds
        </h1>

        <p>
          <span className="font-bold">• Prepaid Orders:&nbsp;</span>For prepaid
          orders, you can choose between receiving a refund via your original
          payment method or wallet. Once the product(s) pass our quality check
          at the warehouse, we will initiate the refund within 24-48 hours.
          Refunds to your payment method will be processed within 7-10 business
          days, depending on your bank's processing times. Alternatively, if you
          opt for wallet credits, it will be credited instantly once the product
          clears the quality check.
        </p>

        <p>
          <span className="font-bold">• COD Orders: &nbsp; </span> If the
          product(s) passes the quality check once it reaches our warehouse, the
          refund will be issued instantly in your Straticrestedge Wallet. Credits can
          be used for future purchases on websites or apps. It is valid for 12
          months from the date you receive it.
          <br />
          <span className="font-bold">Note:&nbsp; </span>
          Any purchases made using Credits, if and when returned, will be
          refunded as Credits only.
        </p>
      </div>

      {/* Cancellation */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Cancellations/Modifications
        </h1>

        <p>
          • Orders can be cancelled or modified (change number, address, product
          style or size) if they have not yet been dispatched from our
          warehouse. Contact us via WhatsApp or email us at support@Straticrestedge.in
          to request changes.
        </p>
      </div>

      {/* Damaged Product */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Defective/Damaged Product(s) or Parcel
        </h1>

        <p>
          • If you receive a damaged/defective/used/tags missing/wrong
          product(s), please contact our support team within 48 hours with
          photos or open/unpacking video. We will arrange for a new product to
          be sent to you at no additional charge.
        </p>

        <p>
          • If you receive a torn/damaged/empty parcel, please do not accept it.
          If you receive any unrelated product(s) or an empty parcel, you are
          requested to raise a query within 48 hours of delivery. We strongly
          recommend recording a video while you open/unpack your order, keeping
          all stickers/labels intact.
        </p>
      </div>

      {/* T&C */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Terms & Conditions
        </h1>

        <p>
          • Ensure the provided bank account details are accurate as errors will
          not be the responsibility of Straticrestedge.
        </p>
        <p>
          • Customers must take utmost care of the product(s) while they are in
          their possession.
        </p>
        <p>• Please check the size guide before placing an order.</p>
        <p>
          • The colour of products may vary according to the customer's screen
          resolution.
        </p>
        <p>
          •For orders placed using the Cash on Delivery (COD) payment method, a
          cash handling charge of INR 100 will be applied per order. This charge
          covers the additional costs associated with processing and handling
          cash payments, There are no additional charges for prepaid orders.
          Customers who choose to pay in advance using credit/debit cards, net
          banking, or any other prepaid method will not incur any extra fees.
        </p>
        <p>
          • If payment is made through third-party platforms and you have not
          received any updates regarding payment or cashback, please contact the
          respective payment platform. Straticrestedge is not responsible for such
          scenarios.
        </p>
        <p>
          • For prepaid orders, if you receive a delivery confirmation via SMS
          or email but have not received the products, please contact us within
          48 hours.
        </p>
        <p>
          •You can easily track your order status
          <Link
            to={"/track-order"}
            className="font-bold text-sky-500 cursor-pointer ml-1"
          >
            here
          </Link>
          <span className="font-bold">
            {" "}
            My Account → Track Your Order section.{" "}
          </span>
        </p>
      </div>

      {/*Shipping policy */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Shipping Policy
        </h1>

        <p>We offer free shipping on the orders sitewide.</p>

        <p>
          We process orders within 24-48 hours and ship them from Udaipur,
          Rajasthan.
        </p>

        <p>
          We ship PAN India and our mission is to serve every region of Bharat,
          ensuring accessibility to our products for all.
        </p>

        <p>
          <span className="font-semibold">Order Delivery Time:</span> In
          metropolitan areas, orders are delivered within 1-4 days after
          processing, while in the rest of Bharat, delivery takes 4-7 days after
          processing.
        </p>
      </div>

      {/* Contact */}
      <div className="py-3 space-y-3">
        <h1 className="text-lg sm:text-xl underline underline-offset-4 decoration-yellow-400">
          Reach Us Out - We're all ears!
        </h1>

        <p>
          WhatsApp Support:{" "}
          <span className="text-sky-500 cursor-pointer">Click here</span>
        </p>
        <p>Email Support: support@Straticrestedge.in</p>
      </div>

      <div className="mb-8">
        <h1 className="text-base sm:text-xl">
          Working Hours: 9am - 5pm IST Monday to Saturday.
        </h1>
      </div>
    </section>
  );
};

export default ReturnOrder;
