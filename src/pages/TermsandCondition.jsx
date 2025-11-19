import React from "react";

const TermsandCondition = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-24 xl:px-36 space-y-6 text-black mb-12 mt-8">
      {/* Breadcrumb */}
      <div className="space-y-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          Home <span className="px-1">{">"}</span> Terms & Conditions
        </h1>
      </div>

      {/* Generic Section Component */}
      {[
        {
          title: "Terms & Conditions",
          content: [
            `Access to and use of www.beyoung.in and the products and service
            available through the website are subject to the following terms,
            conditions and notices (“Terms of Service”). By browsing through
            these Terms of Service and using the services provided by our
            website (www.beyoung.in), you agree to all Terms of Service along
            with the Privacy Policy on our website, which may be updated by us
            from time to time. Please check this page regularly to take notice
            of any changes we may have made to the Terms of Service.`,
          ],
        },
        {
          title: "Introduction",
          content: [
            `The domain name www.beyoung.in is a site operated by Beyoung Folks
            Pvt. Ltd., a company incorporated under laws of India with our
            registered office at Eklingpura Chouraha, Ahmedabad Main Road (NH 8
            - Near Mahadev Hotel) Udaipur, India 313002.`,
          ],
        },
        {
          title: "Services",
          content: [
            `Beyoung is an online retailer of apparel and lifestyle products
            offered at great values to the consumer. Membership allows customers
            to purchase a variety of products. Upon placing an order,
            www.beyoung.in shall ship the product to you and be entitled to its
            payment for the service.`,
          ],
        },
        {
          title: "Third Party Websites and Content",
          content: [
            `Our website provides links for sharing our content on Facebook,
            Twitter, and other such third-party websites. These are only for
            sharing and/or listing purposes, and we take no responsibility for
            the third-party websites and/or their contents listed on our website
            (www.beyoung.in) and disclaim all our liabilities arising out of any
            or all third-party websites. We disclaim all liabilities and take no
            responsibility for the content that may be posted on such
            third-party websites by the users of such websites in their personal
            capacity on any of the above-mentioned links for sharing and/or
            listing purposes as well as any content and/or comments that may be
            posted by such users in their personal capacity on any official
            webpage of Beyoung on any social networking platform.`,
          ],
        },
        {
          title: "Privacy",
          content: [
            `Our Privacy Policy, incorporated by reference in these Terms of
            Service, sets out how we will use personal information you provide
            to us. By using this Website, you agree to be bound by the Privacy
            Policy, and warrant that all data provided by you is accurate and up
            to date. By signing up and ticking the consent box, the User agrees
            to receive communications and notifications from Beyoung via SMS,
            Email, RCS, WhatsApp, or any other electronic medium. Beyoung shall
            not be responsible for any damages arising from fraudulent messages
            sent over the internet by third parties.`,
          ],
        },
        {
          title: "Exactness of the Product",
          content: [
            `The images of the items on the website are for illustrative purposes
            only. The actual color combination of the mobile cover and t-shirts
            may slightly vary as per the customer’s respective screen
            resolution. All sizes and measurements of items are approximate;
            however, we do make every effort to ensure they are as accurate as
            possible. We take all reasonable care to ensure that all details,
            descriptions, and prices of items are as accurate as possible. Some
            mobile covers might not be completely covered from the functional
            keys side because of the curved display of the device.`,
          ],
        },
        {
          title: "Customization",
          content: [
            `In case of any size issues in the custom t-shirts, there will be no
            replacement or refund under any circumstances. However, if the
            product is faulty or damaged from our end, then the customer can
            proceed with the return request.`,
            `The shoppers are requested to check the size guide before placing
            the order.`,
            `The color of the custom t-shirt and custom mobile cover may slightly
            vary as per the customer's screen resolution.`,
          ],
        },
        {
          title: "Pricing",
          content: [
            `We ensure that all details of prices appearing on the website are
            accurate; however, errors may occur. If we discover an error in the
            price of any goods which you have ordered, we will inform you of
            this as soon as possible. If we are unable to contact you, we will
            treat the order as cancelled. If you cancel and you have already
            paid for the goods, you will receive a full refund. Additionally,
            prices for items may change from time to time without notice.
            However, these changes will not affect orders that have already been
            dispatched. The price of an item includes VAT (or similar sales tax)
            at the prevailing rate for which we are responsible as a seller.
            Please note that the prices listed on the website are only
            applicable for items purchased on the website and not through any
            other source.`,
          ],
        },
        {
          title: "Payment",
          content: [
            `Upon receiving your order, we carry out a standard pre-authorization
            check on your payment card to ensure there are sufficient funds to
            fulfill the transaction. Goods will not be dispatched until this
            pre-authorization check has been completed. Your card will be
            debited once the order has been accepted. For any further
            payment-related queries, please check our FAQs on Payment Mode.`,
          ],
        },
      ].map((section, idx) => (
        <div key={idx} className="space-y-3">
          <h1 className="underline decoration-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            {section.title}
          </h1>
          {section.content.map((para, pidx) => (
            <p
              key={pidx}
              className="flex items-start gap-2 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed"
            >
              <span className="text-xl sm:text-2xl leading-none">•</span>
              <span>{para}</span>
            </p>
          ))}
        </div>
      ))}

      {/* For Wallet, Loyalty, and G.O.A.T Sale Sections */}
      {[
        {
          title: "Wallet",
          list: [
            "1 Credit = 1 INR.",
            "Credit is non-transferable and non-refundable.",
            "It is fully redeemable on the website.",
            "A refund for COD orders is credited to your Beyoung wallet.",
            "Credit can be clubbed with gift vouchers and discount codes",
            "It is also applicable to the product(s) that are on offer or sale",
            "Credit expires 12 months from the date it is credited.",
            "After the 12 months, any unused Credit will automatically lapse and cannot be credited back to the account.",
            "There is no minimum cart value requirement to use Credit.",
            "Credit is not applicable on COD orders.",
            "If fraudulent activity is detected, Beyoung holds the right to dissolve the Credit Wallet of the concerned customer without prior notice.",
            "Beyoung will not be held accountable for any unregistered purchases or losses caused by network problems, equipment failures, service disruptions, or issues with payments from banks or payment gateways, as well as any charges imposed by network providers. Any disputes arising from such incidents must be resolved between the customer and the network provider, and Beyoung assumes no responsibility for the outcome.",
          ],
        },
        {
          title: "Loyalty & Referral Program",
          list: [
            "1 Reward Points = 1 INR.",
            "Rewards are non-transferable and non-refundable.",
            "It is fully redeemable on the website & app.",
            "Reward Points can not be clubbed with any brand offers.",
            "It is also applicable to the product(s) that are on offer or sale.",
            "Reward Points expire 12 months from the date it is credited.",
            "After the 12 months, any unused reward points will automatically lapse and cannot be credited back to the account.",
            "There is no minimum cart value requirement to use Reward Points.",
            "Reward Points are applicable on COD orders.",
            "If fraudulent activity is detected, Beyoung holds the right to dissolve the Credit Wallet of the concerned customer without prior notice.",
            "Beyoung will not be held accountable for any unregistered purchases or losses caused by network problems, equipment failures, service disruptions, or issues with payments from banks or payment gateways, as well as any charges imposed by network providers. Any disputes arising from such incidents must be resolved between the customer and the network provider, and Beyoung assumes no responsibility for the outcome.",
          ],
        },
        {
          title: "G.O.A.T. Sale Terms & Conditions",
          list: [
            "Products purchased during the G.O.A.T. Sale are non-returnable. However, exchanges are permitted as per our exchange policy.",
            "Two or more offers cannot be clubbed together.",
            "Only selected products are covered under the sale.",
            "Beyoung reserves the right to admission during the G.O.A.T. Sale.",
            "Combo products are not included in the sale.",
            "Free gifts or products offered during the sale cannot be exchanged or returned unless there is a manufacturing defect or damage caused by us.",
            "The G.O.A.T. Sale is for a limited time only. Beyoung reserves the right to modify, extend, or suspend the sale without prior notice.",
            "Prices and discounts during the sale are final and cannot be challenged.",
            "Any fraudulent activity or misuse of the sale offers will lead to order cancellation without notice.",
            "Beyoung reserves the right to modify these Terms & Conditions at any time.",
          ],
        },
      ].map((section, idx) => (
        <div key={idx} className="space-y-3">
          <h1 className="underline decoration-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            {section.title}
          </h1>
          {section.list.map((item, itemIdx) => (
            <p
              key={itemIdx}
              className="flex items-start gap-2 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed"
            >
              <span className="text-xl sm:text-2xl leading-none">•</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TermsandCondition;
