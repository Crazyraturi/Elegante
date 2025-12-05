import { Check } from "lucide-react";
import React from "react";

const Verify = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50 p-4 sm:p-6">
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-sm text-center transform hover:scale-[1.01] transition duration-300">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-amber-100">
            <Check className="h-8 w-8 text-green-600" />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900">
            Check Your Mail
          </h2>
        </div>

        <p className="text-gray-500 text-base leading-relaxed">
          We've sent an email to verify your account. Please check your inbox
          and click the **verification link** to complete your setup.
        </p>

        {/* <div className='mt-6 pt-4 border-t border-gray-100'>
            <p className='text-sm text-indigo-600 font-medium hover:text-indigo-500 cursor-pointer'>
                Didn't receive the email? Resend link
            </p>
        </div> */}
      </div>
    </div>
  );
};

export default Verify;
