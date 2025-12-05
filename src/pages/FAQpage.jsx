import React, { useState } from "react";
import { ChevronRight, Star } from "lucide-react";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    "My Account & My Order"
  );
  const [openQuestion, setOpenQuestion] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          "Your order will be shipped to the address you provided. We use trusted courier services to deliver your order directly to your doorstep. All items are packed in fully sealed packages to ensure they arrive in perfect condition.",
      },
      {
        question:
          "How will I get confirmation that my Order is placed successfully?",
        answer:
          "Once your order is successfully placed, you will receive a confirmation on whatsapp, email and SMS with your order ID and details. When your order is shipped from our warehouse, you'll also get tracking information via SMS and email.",
      },
      {
        question:
          "I tried placing my order using my debit card/credit card/Net Banking. The order was not successful but my money got deducted. What really happened to my money?",
        answer:
          "Don't worry! We'll assist you in resolving this issue. First, check your bank or credit card account to confirm whether the amount was debited. If the payment was deducted but the order didn't go through, the amount will be automatically reversed by your bank within 7-10 business days. For further assistance, please contact us on WhatsApp or email us at support@ Elegante.in, and we'll be happy to help",
      },
      {
        question: "How should I check the status of my Order?",
        answer: `Click here to Track Your Order. If you encounter any issues or need further assistance, please contact us on WhatsApp or email us at support@ Elegante.in.`,
      },
    ],

    "Cancellation & Related Queries Order Cancellation": [
      {
        question: "How can I cancel my order?",
        answer: `What is  Elegante's Cancellation Policy?

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
        answer: `We use 100% trusted and secure payment gateways. It is completely safe to pay online via credit card debit card, and net banking transactions.

Please Note: The  Elegante team will never ask for your personal information or banking details over the phone or via email. Please do not share your details with anyone. Only follow the secure checkout process on the website.`,
      },

      {
        question: "Why am I not getting any COD option on the payment page?",
        answer: `COD may not be available because:

1. Our courier partner does not support COD for your address.
2. The products you ordered are not eligible for COD.`,
      },
      {
        question: "Are there any hidden charges?",
        answer: `There are no hidden charges. You pay only the amount shown in your order summary. All products include taxes.`,
      },

      {
        question: "What should I do if my payment fails?",
        answer: `Make sure you have entered the correct account details and your internet connection is not disrupted during the payment process.

If the amount has been debited after a payment failure, it will be automatically reversed by the respective bank within 48-72 business hours. If you do not receive the refund, please contact your bank. For any other requests or queries regarding this, please contact us on WhatsApp or email us at support@ Elegante.in, and we'll be happy to help.`,
      },

      {
        question: "What is  Elegante Wallet?",
        answer:
          " Elegante Wallet is a digital platform where COD refunds are credited. It is designed to offer flexibility and ease in redeeming benefits on future purchases. You can use this balance to shop from  Elegante within 12 months.",
      },

      {
        question: "How do I use my wallet balance?",
        answer:
          "During checkout, you can choose to use your wallet balance to pay for your order.",
      },

      {
        question:
          "Can I use my  Elegante wallet balance for offline store purchases?",
        answer:
          "No, the  Elegante wallet balance can only be used for online purchases on the  Elegante website or app.",
      },

      {
        question: "Does  Elegante wallet balance expire?",
        answer:
          "Yes, the  Elegante wallet balance has a validity period of 12 months from the date of credit.",
      },

      {
        question:
          "Can I transfer the  Elegante wallet balance to my friend’s  Elegante Wallet?",
        answer:
          "No, the  Elegante wallet balance is non-transferable and non-refundable.",
      },
    ],

    "Shipping & Tracking": [
      {
        question: "What is the Shipping Policy of  Elegante?",
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
        answer: `No, since we offer free shipping on the orders sitewide.`,
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
2. Tap on the menu icon.
3. Go to “My Account” > “My Orders”.
4. Click on the “Return” Button.
5. Select a reason for return from the dropdown menu.
6. Click on the “Continue Button”.
7. Confirm pickup address.
8. Choose a payment option.
9. Confirm request.
Your refund request will be created.`,
      },
      {
        question: "Can I return or exchange an item purchased on sale?",
        answer: `No, you cannot return or exchange items purchased on sale.`,
      },
      {
        question: "Why has my return request been rejected?",
        answer: `Your return request may be rejected for several reasons, such as failing the quality check or missing tags. Please reach out to our customer support team for assistance.`,
      },
      {
        question: "Can I return an online purchase to the  Elegante Store?",
        answer: `No, you can not return an online purchase to the  Elegante Store.`,
      },
      {
        question: "What items are eligible for return or exchange?",
        answer: `All products except boxers are eligible for return or exchange.`,
      },
      {
        question: "What is your exchange policy?",
        answer: `We offer a hassle-free exchange policy for 7 days from the date of delivery. To be eligible for an exchange product(s) must be in their original condition with all tags intact. All products are eligible for only one-time exchange.`,
      },
      {
        question: "How do I initiate an exchange?",
        answer: `To initiate an exchange:

1. Open the app.\n\n
2. Tap on the menu icon.
3. Go to “My Account” > “My Orders”.
4. Click on the “Exchange” Button.
5. Select the address.
6. Choose a reason for exchange.
7. Add Images.
8. Tick to confirm that the product is unused and tags are intact.
9. Confirm exchange details.
10. Click on “Confirm and Pay”.`,
      },
      {
        question: "Can I exchange my product for a different size or color?",
        answer: `Yes, you can exchange the product for a different size or color.`,
      },
      {
        question: "How long does it take to receive the exchange?",
        answer: `Typically, it takes 4-7 days post reverse pickup for the exchange to be delivered.`,
      },
      {
        question: "Is there a cost for exchange shipping?",
        answer: `No, there is no cost for exchange shipping.`,
      },
      {
        question:
          "Can I request an exchange if my item arrives damaged or defective?",
        answer: `You can request an exchange within 48 hours of receiving a damaged or defective item. We strongly recommend recording a video while opening/unpacking your order, ensuring all stickers/labels are intact. This video will serve as proof in case of missing or damaged product(s) or parcel(s). Without video proof, it will be difficult for us to proceed with returns or refunds.`,
      },
      {
        question: "What is your refund policy?",
        answer: `We have a hassle-free refund policy valid for 7 days from the delivery date. To qualify, products must be in their original condition with all tags intact and pass a quality check. Refunds are initiated within 24-48 hours after passing the quality check and credited to your bank account within 7-10 days.`,
      },
      {
        question:
          "In case I return the products, will the COD charges be refunded?",
        answer: `Yes, COD charges are refundable.`,
      },
      {
        question: "How will I get my refund and how long will it take?",
        answer: `For prepaid orders, you can choose between receiving a refund via your original payment method or  Elegante wallet cash. Once the product(s) pass our quality check at the warehouse, we will initiate the refund within 24-48 hours. Refunds to your payment method will be processed within 7-10 business days, depending on your bank's processing times. Alternatively, if you opt for  Elegante wallet cash, it will be credited instantly once the product clears the quality check.

Similarly, for COD orders, once the product passes the quality check and reaches our warehouse, the refund will be issued instantly to your  Elegante Wallet.  Elegante Cash can be used for future purchases on our website or app and is valid for 12 months from the date you receive it.`,
      },
      {
        question: "Can I get a refund for a COD order?",
        answer: `Yes, you can get a refund for your COD order, which will be credited to your  Elegante wallet for future purchases.`,
      },
      {
        question: "Will I be notified when my refund is processed?",
        answer: `Yes, you will be notified when your refund is processed via email, WhatsApp, and SMS.`,
      },
      {
        question: "What should I do if I haven't received my refund?",
        answer: `Please reach out to our customer support team via email or WhatsApp. We will promptly resolve your issue. support@ Elegante.in`,
      },
      {
        question: "What should I do if an item is missing from my order?",
        answer: `If an item is missing from your order, please reach out to our customer support team within 48 hours of delivery.`,
      },
    ],

    "My Wallet": [
      {
        question: "What is Wallet Credit?",
        answer:
          "Wallet Credit is the digital money that can be used for future purchases on  Elegante. All the refunds from COD (Cash on Delivery) returns are credited to this virtual wallet.",
      },
      {
        question:
          "Can I transfer the  Elegante Wallet balance to my bank account?",
        answer:
          "No, credit balance is non-transferable and cannot be withdrawn or transferred to a bank account..",
      },
      {
        question: "Does the  Elegante Wallet balance expire?",
        answer:
          "Yes, Credit expires 12 months after it is credited. After this period, any unused balance will automatically lapse.",
      },
      {
        question: "How to check Wallet Credit balance?",
        answer: `To check your  Elegante wallet balance 

Log into your account using your registered mobile number.
Go to "My Account" and select " Elegante Wallet" from the list.
You will see the Available Balance, Total Purchases, and Usage History.`,
      },
      {
        question:
          "Can I buy items on other e-commerce websites with Wallet Credits?",
        answer:
          "No, Credits can only be used on  Elegante’s website or mobile app.",
      },
      {
        question: "How to redeem  Elegante wallet balance?",
        answer: `To redeem  Elegante wallet balance -

1. Add your desired product(s) to your cart and proceed to the checkout page.
2. Click on “login to apply”. Once logged in your  Elegante wallet balance will be visible.
3. Click on the Wallet Credit option to use it as your preferred payment method.
4. Then continue to checkout, confirm your shipping address and place your order.`,
      },
      {
        question:
          "Can I use my Wallet balance to purchase from  Elegante’s offline store?",
        answer:
          "No, you cannot use the credit balance to purchase from  Elegante ‘s offline stores.",
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
          "We currently do not offer a trial-and-buy option. To help you choose the right size, we provide a size chart with body measurements on our product pages. If you have any further questions, feel free to contact us on WhatsApp or email us at support@ Elegante.in.",
      },
      {
        question: "How can I find a  Elegante offline store near me?",
        answer:
          "We’ve made it super easy for you! Just click on view page , and you’ll find all the details of all our offline stores.",
      },
    ],

    "Wash Care instructions": [
      {
        question: "How should I care for my  Elegante Plain T-shirt?",
        answer: `The  Elegante Plain T-shirt is built to last, but only if you show it some love. Here’s how to keep it looking fresh:

1. Give it a cold and gentle machine wash. No harsh spins; keep it chill.
2. Skip the brushes. Your tee doesn’t like rough treatment.
3. Avoid bleach or fabric softeners. They are not your t-shirt’s friends.
4. Always dry it in shade. Sun is for your vibe, not your T-shirt’s.
5. Use mild detergents only. Strong ones are a big no-no.`,
      },
      {
        question: "How do I wash and maintain my  Elegante Plain Shirt?",
        answer: `The  Elegante Plain Shirt is made to keep you looking sharp, but only if you give it the right care. Here’s how to keep it crisp and fresh:
 
1. Give it a normal machine wash.
2. Avoid bleach or fabric softeners. They are not your shirt’s friends.
3. Iron on low to medium temperature to keep the fabric smooth and stylish.
4. Air dry for best results, or use a low tumble dry if you are in a hurry.`,
      },
      {
        question:
          "What should I avoid while washing my  Elegante Polo T-shirt?",
        answer: `The  Elegante Polo T-shirt deserves a little extra care to keep its classy look intact. Here’s what to avoid while washing:

1. Avoid hot washes. Stick to cold and gentle machine cycles.
2. Skip bleach and fabric softeners, as they harm the fabric and color.
3. Do not directly iron the polo t-shirts.
4. Say no to harsh detergents. Mild ones will keep it fresh and soft.`,
      },
      {
        question:
          "What should I keep in mind while washing my  Elegante Regular Fit Pyjamas?",
        answer: `The  Elegante Regular Fit Pyjamas are made for everyday comfort, and with the right care they will stay soft and fresh. Here’s what to keep in mind:

1. Give them a gentle machine wash to maintain the fabric quality.
2. Do not tumble dry. Let them air dry naturally for the best comfort.
3. Iron on low to medium temperature to keep the fabric smooth and stylish.
4. Do not use bleach. It can damage the fibers and fade the color.`,
      },
      {
        question: "Will my  Elegante Cargo Joggers lose color and shape?",
        answer: `Yes, if you wash them the wrong way. To make sure they stay durable and stylish, follow these simple care tips:
 
1. Give them a gentle machine wash to maintain fabric strength.
2. Do not tumble dry. Air drying helps preserve the shape and color.
3. Iron on low to medium temperature to keep the fabric smooth and stylish.
4. Never use bleach, as it can weaken the fibers and fade the shade.`,
      },
      {
        question:
          "Will my  Elegante Loose Fit Pyjamas lose their softness and fit?",
        answer: `Yes, if you wash them the wrong way. To keep them comfortable and long-lasting, here’s what you should do:
 
1. Give them a gentle machine wash to protect the fabric.
2. Do not tumble dry. Let them air dry for natural softness.
3. Iron on low to medium temperature to keep the fabric smooth and stylish
4. Never use bleach, as it can weaken the fibers and dull the color.`,
      },
    ],

    "Legitimacy & Reliability": [
      {
        question: "Is  Elegante a Genuine and Legit Website?",
        answer:
          "Yes,  Elegante is a legitimate fashion e-commerce website headquartered in Udaipur, India. With a trusted reputation among over 3 million customers across tier II, III, and IV cities, we adhere to all Indian e-commerce protocols and policies. We constantly adapt to market trends to meet your fashion needs.\n\n Elegante ensures a secure shopping experience through advanced encryption systems that protect all transactions. In case of any issues with incorrect or damaged products, our dedicated customer service team is available to assist with returns, exchanges, or refunds according to our policy.",
      },
      {
        question: "Is  Elegante Real or Fake?",
        answer:
          " Elegante is a genuine and trustworthy brand offering affordable and stylish fashion. We are committed to delivering quality products that reflect the latest trends. Shopping with us means you can expect real, high-quality items and a reliable customer experience. We recommend using  Elegante's official website or mobile app to ensure product authenticity and avoid counterfeits.",
      },
      {
        question: "Is  Elegante a Good Brand Worth Exploring?",
        answer:
          "Absolutely!  Elegante is a well-regarded brand among Indian youngsters, known for transparency and customer satisfaction. Our products receive positive feedback for their quality, comfort, and style. We offer trendy fashion at reasonable prices, making  Elegante a brand worth exploring for stylish, affordable clothing.",
      },
      {
        question:
          "Is It Safe to Buy Clothes from the  Elegante Website? Are the Products of Premium Quality?",
        answer:
          " Elegante is committed to providing a safe and secure shopping experience. Our website and mobile app use the latest HTTPS technology and Secure Sockets Layer (SSL) encryption to protect your data and transactions. We partner with leading payment gateways to ensure your information remains confidential and secure.\n\nWe also prioritize the quality of our products, using premium materials while maintaining affordability. Our packaging ensures your orders arrive damage-free, and our customer support team is dedicated to assisting you with returns and refunds as per our policy.",
      },
    ],
  };

  const currentQuestions = questions[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-yellow-400 px-6 py-4 max-w-7xl m-auto mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4">
        <span className="text-gray-800 font-medium">Need help :</span>
        <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors">
          Contact Us
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Common Questions Asked by Our Customers
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-80 shrink-0 relative">
            {/* Mobile toggle button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md"
              >
                <span>{selectedCategory}</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    sidebarOpen ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            {/* Sidebar */}
            <div
              className={`${
                sidebarOpen ? "block" : "hidden"
              } lg:block bg-white border lg:border-none rounded-md lg:rounded-none shadow lg:shadow-none`}
            >
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setOpenQuestion(null);
                      setSidebarOpen(false);
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
          </div>

          {/* RIGHT QUESTIONS */}
          <div className="flex-1 pl-0 lg:pl-8">
            <div className="space-y-0">
              {currentQuestions.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition-colors"
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
                    <div className="px-4 sm:px-6 pb-4 text-gray-600 text-sm whitespace-pre-line">
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
