import React from "react";

const ReturnOrder = () => {
  return (
    <section className="px-38 space-y-4">
      {/* Heading */}
      <div>
        <h1 className=" py-2">
          Home Return  <span className="px-1">{">"}</span>  Refund And Cancellation{" "}
        </h1>
        <p className="font-bold text-2xl">
          Return, Exchange, and Refund Policy
        </p>
      </div>

      {/* Refund & Exchange */}
      <div className="py-3 space-y-3">
        <h1 className="text-xl underline underline-offset-4 decoration-yellow-400">
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
      <div className="py-3 px-3 space-y-3 bg-gray-100">
        <h1 className="underline underline-offset-4 decoration-yellow-400">
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
          Address: Beyoung Folks Pvt Ltd, Khasra No. 3881/2188, Rani Ji Bawri,
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
        <h1 className="underline underline-offset-4 decoration-yellow-400">
          Refunds
        </h1>

        <p>
          <span className="font-bold">• Prepaid Orders:&nbsp;</span>You may
          choose refund to the original payment method or wallet. Once quality
          check is completed, refund will be initiated within 24–48 hours.
        </p>

        <p>
          <span className="font-bold">• COD Orders: &nbsp; </span> Refund will
          be issued instantly in your Beyoung Wallet after quality check.
          <br />
          <span className="font-bold">Note:&nbsp; </span>
          Purchases made using Credits will be refunded as Credits only.
        </p>
      </div>

      {/* Cancellation */}
      <div className="py-3 space-y-3">
        <h1 className="underline underline-offset-4 decoration-yellow-400">
          Cancellations/Modifications
        </h1>

        <p>
          • Orders can be cancelled or modified before they are dispatched.
          Contact support via WhatsApp or email at support@beyoung.in.
        </p>
      </div>

      {/* Damaged Product */}
      <div className="py-3 space-y-3">
        <h1 className="underline underline-offset-4 decoration-yellow-400">
          Defective/Damaged Product(s) or Parcel
        </h1>

        <p>
          • If you receive a damaged/defective/used/wrong product, contact
          support within 48 hours with photos or an opening video.
        </p>

        <p>
          • If you receive a torn/damaged/empty parcel, do not accept it.
          <br />
          <span className="font-bold">Note: &nbsp;</span>
          Always record an opening video for proof. Always record an opening
          video for proof.
        </p>
      </div>

      {/* T&C */}
      <div className="py-3 space-y-3">
        <h1 className="underline underline-offset-4 decoration-yellow-400">
          Terms & Conditions
        </h1>

        <p>
          • Ensure bank details are accurate; errors will not be the
          responsibility of Beyoung.
        </p>
        <p>
          • Customers must take care of the product(s) while in their
          possession.
        </p>
        <p>• Please check the size guide before placing an order.</p>
        <p>• Product color may vary due to screen resolution.</p>
        <p>• COD payment method will incur a ₹100 cash-handling charge.</p>
        <p>
          • For third-party payment delays or cashback issues, contact the
          payment provider.
        </p>
        <p>
          • For prepaid delivery confirmation without receiving the product,
          contact support within 48 hours.
        </p>
        <p>
          • You can track your order in the{" "}
          <span className="font-bold">
            My Account → Track Your Order section.{" "}
          </span>
        </p>
      </div>

      {/* Contact */}
      <div className="py-3 space-y-3">
        <h1 className="underline underline-offset-4 decoration-yellow-400">
          Reach Us Out - We're all ears!
        </h1>

        <p>
          WhatsApp Support:{" "}
          <span className="text-sky-500 cursor-pointer">Click here</span>
        </p>
        <p>Email Support: support@beyoung.in</p>
      </div>

      <div className="mb-8">
        <h1 className="text-xl ">
          Working Hours: 9am - 5pm IST Monday to Saturday.
        </h1>
      </div>
    </section>
  );
};

export default ReturnOrder;
