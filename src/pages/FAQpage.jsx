import React, { useState } from "react";
import { ChevronRight, Star } from "lucide-react";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    "My Account & My Order"
  );
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const categories = [
    { name: "My Account & My Order", icon: Star },
    { name: "Cancellation & Related Queries Order Cancellation", icon: Star },
    { name: "Payment Mode", icon: Star },
    { name: "Shipping & Tracking", icon: Star },
    { name: "Return & Refund & Exchange Policy", icon: Star },
    { name: "My Wallet", icon: Star },
    { name: "Loyalty Program", icon: Star },
    { name: "Miscellaneous", icon: Star },
    { name: "Wash Care instructions", icon: Star },
    { name: "Legitimacy & Reliability", icon: Star },
  ];

  const questions = {
    "My Account & My Order": [
      {
        question: "How do I place Order?",
        answer: `To place your order:

1. Visit the homepage and select your favourite category from the top left corner. Add products to your cart with one click.
2. Click on “My Cart” to review your selections and proceed to checkout.
3. You can create an account/sign in or continue as a guest. Enter correct shipping details.
4. Click “Continue to Payment,” select payment method, pay, and confirm.
5. You will receive a confirmation email and SMS once the order is placed.`,
      },

      {
        question: "How will I Receive My Order?",
        answer:
          "Your order will be delivered to your provided address by our courier partner.",
      },
      {
        question:
          "How will I get confirmation that my Order is placed successfully?",
        answer:
          "You will receive an email and SMS confirmation after placing your order.",
      },
      {
        question: "Money deducted but order not placed. What happened?",
        answer:
          "This happens due to payment gateway delay. Your money will be auto-refunded within 2–5 days.",
      },
      {
        question: "How should I check the status of my Order?",
        answer:
          "Go to the “My Orders” section in your account to track the current status.",
      },
    ],

    "Cancellation & Related Queries Order Cancellation": [
      {
        question: "How can I cancel my order?",
        answer: `What is Beyoung's Cancellation Policy?

1. Orders can be cancelled or modified (change number, address, product style or size) if they have not yet been dispatched from our warehouse.
2. To cancel your order, raise a cancellation request via our WhatsApp chat support.
3. We'll send you a confirmation email to the registered address.

Note: Once the order is shipped from the warehouse, it cannot be cancelled. If a faulty product is received, you can raise a return request.`,
      },
    ],

    "Payment Mode": [
      {
        question: "Are there any Cash Collection Charges?",
        answer:
          "For COD orders only, a Cash Collection Charge of INR 100 per order will be applied.",
      },

      {
        question:
          "Is it safe to shop online if I make payment using net banking, Debit Card, or Credit Card?",
        answer: `Yes, we use 100% trusted and secure payment gateways. It is completely safe to pay online.

Note: Beyoung will never ask for your personal or banking information. Please do not share your details with anyone. Only follow the secure checkout process on the website.`,
      },

      {
        question: "Why am I not getting any COD option on the payment page?",
        answer: `COD may not be available because:

1. Our courier partner does not support COD for your address.
2. The products you ordered are not eligible for COD.`,
      },

      {
        question: "What should I do if my payment fails?",
        answer: `Ensure that all details are correct and your internet connection is stable.

If the amount has been deducted, it will be auto-refunded within 48–72 business hours.  
If not received, contact your bank.

For help, contact Beyoung support via WhatsApp or email at support@beyoung.in.`,
      },

      {
        question: "What is Beyoung Wallet?",
        answer:
          "Beyoung Wallet is where COD refunds are credited. You can use this balance for future purchases within 12 months.",
      },

      {
        question: "How do I use my wallet balance?",
        answer:
          "During checkout, simply select the wallet balance option to pay for your order.",
      },

      {
        question:
          "Can I use my Beyoung wallet balance for offline store purchases?",
        answer:
          "No, wallet balance can only be used on the online website/app.",
      },

      {
        question: "Why is my payment failing?",
        answer:
          "This usually happens due to bank/server downtime or unstable internet.",
      },

      {
        question: "Does Beyoung wallet balance expire?",
        answer:
          "Yes, wallet balance is valid for 12 months from the date of credit.",
      },

      {
        question:
          "Can I transfer my Beyoung wallet balance to someone else's wallet?",
        answer: "No, wallet balance is non-transferable and non-refundable.",
      },
    ],

    "Shipping & Tracking": [
      {
        question: "What is the Shipping Policy of Beyoung?",
        answer: `Here is our shipping policy:

• We offer free shipping on all orders sitewide.  
• We process orders within 24–48 hours and ship them from Udaipur, Rajasthan.  
• We ship PAN India with the mission to serve every region of Bharat.`,
      },
      {
        question: "What is the delivery time period?",
        answer: `In metropolitan areas, delivery takes 1–4 days after processing.  
In the rest of Bharat, delivery takes 4–7 days after processing.`,
      },
      {
        question: "Do you apply any shipping charges?",
        answer: `No, we offer free shipping on all orders sitewide.`,
      },
    ],

    "Return & Refund & Exchange Policy": [
      {
        question: "What is your return policy?",
        answer: `We offer a hassle-free 7-day return policy from the date of delivery.  
To be eligible, products must be in original condition with all tags intact.`,
      },
      {
        question: "How to request for a return?",
        answer: `To initiate a return:

1. Open the app.  
2. Tap the menu icon.  
3. Go to “My Account” > “My Orders”.  
4. Click “Return”.  
5. Select a reason for return.  
6. Click “Continue”.  
7. Confirm pickup address.  
8. Choose refund method.  
9. Confirm your request.`,
      },
      {
        question: "Why has my return request been rejected?",
        answer: `Your return may be rejected if the product fails quality check or the tags are missing.  
Please contact customer support for more help.`,
      },
      {
        question: "What items are eligible for return or exchange?",
        answer: `All products except boxers are eligible for return or exchange.`,
      },
      {
        question: "What is your exchange policy?",
        answer: `We offer a 7-day exchange policy.  
Products must be unused and have all tags intact.  
Only one exchange is allowed per order.`,
      },
      {
        question: "How do I initiate an exchange?",
        answer: `To initiate an exchange:

1. Open the app.  
2. Tap the menu icon.  
3. Go to “My Account” > “My Orders”.  
4. Click “Exchange”.  
5. Select address.  
6. Choose a reason.  
7. Upload images.  
8. Confirm product is unused with tags intact.  
9. Review and confirm.`,
      },
      {
        question: "Can I exchange my product for a different size or color?",
        answer: `Yes, you can exchange the product for a different size or color.`,
      },
      {
        question: "How long does it take to receive the exchange?",
        answer: `It usually takes 4–7 days after the reverse pickup is completed.`,
      },
      {
        question: "Is there a cost for exchange shipping?",
        answer: `No, exchange shipping is free.`,
      },
      {
        question:
          "Can I request an exchange if my item arrives damaged or defective?",
        answer: `Yes, you can request an exchange within 48 hours.  

We strongly recommend recording a video while opening your package.  
This is required for verifying damaged/missing items.`,
      },
      {
        question: "What is your refund policy?",
        answer: `We offer a 7-day refund policy from the date of delivery.  
Refunds are initiated within 24–48 hours after the product passes quality check.  
Refunds to your bank take 7–10 business days.`,
      },
      {
        question:
          "In case I return the products, will the COD charges be refunded?",
        answer: `Yes, COD charges are refundable.`,
      },
      {
        question: "How will I get my refund and how long will it take?",
        answer: `For prepaid orders:  
• Refund to original payment method (7–10 days), OR  
• Instant refund to Beyoung Wallet after QC approval.

For COD orders:  
• Refund is issued instantly to Beyoung Wallet after QC approval.`,
      },
      {
        question: "Can I get a refund for a COD order?",
        answer: `Yes, COD refunds are credited to your Beyoung Wallet.`,
      },
      {
        question: "Will I be notified when my refund is processed?",
        answer: `Yes, you will be notified via Email, WhatsApp, and SMS.`,
      },
      {
        question: "What should I do if I haven't received my refund?",
        answer: `Please contact customer support at support@beyoung.in`,
      },
      {
        question: "What should I do if an item is missing from my order?",
        answer: `If an item is missing, contact customer support within 48 hours of delivery.`,
      },
    ],

    "My Wallet": [
      {
        question: "How to check Wallet Credit balance?",
        answer:
          "To check your Beyoung wallet balance -\n\nLog into your account using your registered mobile number.\nGo to 'My Account' and select 'Beyoung Wallet' from the list.\nYou will see the Available Balance, Total Purchases, and Usage History.",
      },
      {
        question:
          "Can I buy items on other e-commerce websites with Wallet Credits?",
        answer:
          "No, Credits can only be used on Beyoung’s website or mobile app.",
      },
      {
        question: "How to redeem Beyoung wallet balance?",
        answer:
          "To redeem Beyoung wallet balance -\n\nAdd your desired product(s) to your cart and proceed to the checkout page.\nClick on 'login to apply'. Once logged in your Beyoung wallet balance will be visible.\nClick on the Wallet Credit option to use it as your preferred payment method.\nThen continue to checkout, confirm your shipping address and place your order.",
      },
      {
        question:
          "Can I use my Wallet balance to purchase from Beyoung’s offline store?",
        answer:
          "No, you cannot use the credit balance to purchase from Beyoung‘s offline stores.",
      },
    ],

    "Loyalty Program": [
      {
        question: "How do I sign up for the rewards program?",
        answer:
          "It's super easy! Just create an account (if you don't have one already) and log in. You'll be automatically added to our rewards program.",
      },
      {
        question: "How do I earn points?",
        answer:
          "You can earn points in a lot of ways, such as signing up, shopping with us, following us on social media, referring your friends, and more. For the complete list of ways to earn points, click here.",
      },
      {
        question: "How do I use my points?",
        answer:
          "You can use your points while shopping. The minimum you can redeem is 20% of your cart value",
      },
      {
        question: "I placed an order but did not get my points. Why?",
        answer:
          "Your points will be credited after your order is successfully delivered.",
      },
      {
        question: "When do my points expire?",
        answer:
          "Your points are valid for 12 months from the day they are added. Make sure to use them before they expire..",
      },
    ],

    Miscellaneous: [
      {
        question: "What to do if I forgot my password?",
        answer:
          "If you've forgotten your password, simply click on the 'LogIn' button and select the 'Forgot Password' option. You'll receive a link on your registered email ID to reset your password.",
      },
      {
        question: "How long the refund procedure takes?",
        answer:
          "Once we receive your returned product and it passes the quality check, the refund process will be initiated within 24 hours. The refunded amount will be credited to your account within 7-10 business days..",
      },
      {
        question:
          "I want to place an order but I don't want any price tag or invoice attached as it is a gift for someone. Is it possible",
        answer:
          "Due to regulatory requirements, we are unable to remove price tags or invoices from our shipments, even for gifts. The tags also ensure that the product can be replaced if your recipient encounters any issues.",
      },
      {
        question: "Is there any trial then purchase option available?",
        answer:
          "We currently do not offer a trial-and-buy option. To help you choose the right size, we provide a size chart with body measurements on our product pages. If you have any further questions, feel free to contact us on WhatsApp or email us at support@beyoung.in.",
      },
      {
        question: "How can I find a Beyoung offline store near me?",
        answer:
          "We’ve made it super easy for you! Just click on view page , and you’ll find all the details of all our offline stores.",
      },
    ],

    "Wash Care instructions": [
      {
        question: "How should I care for my Beyoung Plain T-shirt?",
        answer:
          "The Beyoung Plain T-shirt is built to last, but only if you show it some love. Here’s how to keep it looking fresh:\n\nGive it a cold and gentle machine wash. No harsh spins; keep it chill.\nSkip the brushes. Your tee doesn’t like rough treatment.\nAvoid bleach or fabric softeners. They are not your t-shirt’s friends.\nAlways dry it in shade. Sun is for your vibe, not your T-shirt’s.\nUse mild detergents only. Strong ones are a big no-no.",
      },
      {
        question: "How do I wash and maintain my Beyoung Plain Shirt?",
        answer:
          "The Beyoung Plain Shirt is made to keep you looking sharp, but only if you give it the right care. Here’s how to keep it crisp and fresh:\n\nGive it a normal machine wash.\nAvoid bleach or fabric softeners. They are not your shirt’s friends.\nIron on low to medium temperature to keep the fabric smooth and stylish.\nAir dry for best results, or use a low tumble dry if you are in a hurry.",
      },
      {
        question: "What should I avoid while washing my Beyoung Polo T-shirt?",
        answer:
          "The Beyoung Polo T-shirt deserves a little extra care to keep its classy look intact. Here’s what to avoid while washing:\n\nAvoid hot washes. Stick to cold and gentle machine cycles.\nSkip bleach and fabric softeners, as they harm the fabric and color.\nDo not directly iron the polo t-shirts.\nSay no to harsh detergents. Mild ones will keep it fresh and soft.",
      },
      {
        question:
          "What should I keep in mind while washing my Beyoung Regular Fit Pyjamas?",
        answer:
          "The Beyoung Regular Fit Pyjamas are made for everyday comfort, and with the right care they will stay soft and fresh. Here’s what to keep in mind:\n\nGive them a gentle machine wash to maintain the fabric quality.\nDo not tumble dry. Let them air dry naturally for the best comfort.\nIron on low to medium temperature to keep the fabric smooth and stylish.\nDo not use bleach. It can damage the fibers and fade the color.",
      },
      {
        question: "Will my Beyoung Cargo Joggers lose color and shape?",
        answer:
          "Yes, if you wash them the wrong way. To make sure they stay durable and stylish, follow these simple care tips:\n\nGive them a gentle machine wash to maintain fabric strength.\nDo not tumble dry. Air drying helps preserve the shape and color.\nIron on low to medium temperature to keep the fabric smooth and stylish.\nNever use bleach, as it can weaken the fibers and fade the shade.",
      },
      {
        question:
          "Will my Beyoung Loose Fit Pyjamas lose their softness and fit?",
        answer:
          "Yes, if you wash them the wrong way. To keep them comfortable and long-lasting, here’s what you should do:\n\nGive them a gentle machine wash to protect the fabric.\nDo not tumble dry. Let them air dry for natural softness.\nIron on low to medium temperature to keep the fabric smooth and stylish.\nNever use bleach, as it can weaken the fibers and dull the color.",
      },
    ],

    "Legitimacy & Reliability": [
      {
        question: "Is Beyoung a Genuine and Legit Website?",
        answer:
          "Yes, Beyoung is a legitimate fashion e-commerce website headquartered in Udaipur, India. With a trusted reputation among over 3 million customers across tier II, III, and IV cities, we adhere to all Indian e-commerce protocols and policies. We constantly adapt to market trends to meet your fashion needs.\n\nBeyoung ensures a secure shopping experience through advanced encryption systems that protect all transactions. In case of any issues with incorrect or damaged products, our dedicated customer service team is available to assist with returns, exchanges, or refunds according to our policy.",
      },
      {
        question: "Is Beyoung Real or Fake?",
        answer:
          "Beyoung is a genuine and trustworthy brand offering affordable and stylish fashion. We are committed to delivering quality products that reflect the latest trends. Shopping with us means you can expect real, high-quality items and a reliable customer experience. We recommend using Beyoung's official website or mobile app to ensure product authenticity and avoid counterfeits.",
      },
      {
        question: "Is Beyoung a Good Brand Worth Exploring?",
        answer:
          "Absolutely! Beyoung is a well-regarded brand among Indian youngsters, known for transparency and customer satisfaction. Our products receive positive feedback for their quality, comfort, and style. We offer trendy fashion at reasonable prices, making Beyoung a brand worth exploring for stylish, affordable clothing.",
      },
      {
        question:
          "Is It Safe to Buy Clothes from the Beyoung Website? Are the Products of Premium Quality?",
        answer:
          "Beyoung is committed to providing a safe and secure shopping experience. Our website and mobile app use the latest HTTPS technology and Secure Sockets Layer (SSL) encryption to protect your data and transactions. We partner with leading payment gateways to ensure your information remains confidential and secure.\n\nWe also prioritize the quality of our products, using premium materials while maintaining affordability. Our packaging ensures your orders arrive damage-free, and our customer support team is dedicated to assisting you with returns and refunds as per our policy.",
      },
    ],
  };


  const currentQuestions = questions[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-yellow-400 px-6 py-4  max-w-7xl m-auto mt-8 flex items-center gap-4">
        <span className="text-gray-800 font-medium">Need help :</span>
        <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
          Contact Us
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Common Questions Asked by Our Customers
        </h1>

        <div className="flex gap-8">
          {/* LEFT SIDEBAR */}
          <div className="w-80 shrink-0">
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setOpenQuestion(null);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all border-l-4 ${
                    selectedCategory === category.name
                      ? "border-yellow-400 bg-yellow-50"
                      : "border-transparent hover:bg-gray-50"
                  }`}
                >
                  <Star className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 text-sm underline">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT QUESTIONS */}
          <div className="flex-1 pl-8">
            <div className="space-y-0">
              {currentQuestions.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-800 text-base pr-4">
                      {item.question}
                    </span>

                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openQuestion === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {openQuestion === index && (
                    <div className="px-6 pb-4 text-gray-600 text-sm whitespace-pre-line">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
