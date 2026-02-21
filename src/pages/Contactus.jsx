export default function ContactUs() {
  return (
    <div className="bg-white  py-8 px-4">
      <div className="max-w-4xl mx-auto rounded-lg  p-8 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Contact Us
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Your satisfaction matters to us!
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Reach Us Out - We're all ears!
            </h2>

            <p className="text-gray-700 mb-6">
              Do you have a question? Need help with your order? Want to share
              feedback? Our support team is here for you.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-gray-700">
                <span className="font-semibold">• WhatsApp Support:</span>{" "}
                <a href="#" className="text-blue-600 underline">
                  Click Here
                </a>
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">• Email Support:</span>{" "}
                <span className="text-gray-700">
                  support@straticrestedge.in
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Working Hours:</span> 9am - 5pm
              IST Monday to Sunday.
            </p>

            <p className="text-gray-600 italic mb-6">
              Note: Queries received outside working hours will be addressed on
              the next working day.
            </p>

            <p className="text-gray-700">
              To know about our Returns, Exchange, and Refund Policies,{" "}
              <a href="#" className="text-blue-600 underline">
                click here.
              </a>
            </p>
          </div>

          {/* Right Illustration */}
          <div className="shrink-0">
            <img
              src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931336/contact_Image_sc7voz.png"
              alt="Contact illustration"
              className="w-30 md:w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
