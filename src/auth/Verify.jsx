import { Check, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom"; // Assuming you use react-router for navigation

const Verify = () => {
  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
      {/* Left Side - Brand Section (Matches Login Image) */}
      <div className="hidden lg:flex w-1/2 bg-yellow-400 relative flex-col justify-between p-12 lg:p-16 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]bg-size-[2rem_2rem]"></div>

        {/* Brand Logo */}
        <div className="relative z-10">
          <h1 className="text-3xl font-black tracking-widest text-black uppercase">
            Straticrestedge
          </h1>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-lg">
          <h2 className="text-5xl font-extrabold text-black leading-tight mb-4">
            Verify Your <br />
            <span className="italic text-white drop-shadow-sm">Identity.</span>
          </h2>
          <p className="text-gray-900 text-lg font-medium">
            Secure your journey into the future of fashion.
          </p>
        </div>

        {/* Footer Text */}
        <div className="relative z-10">
          <p className="text-sm font-semibold text-black">
            © 2025 Straticrestedge solutions private limited • Privacy Policy
          </p>
        </div>
      </div>

      {/* Right Side - Content Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 text-center">
          {/* Icon Circle */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-50 border-4 border-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Check Your Mail
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We've sent a verification link to your email address. Please click
              the link to activate your account.
            </p>
          </div>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-400">or</span>
            </div>
          </div>

          {/* Action / Back to Login */}
          <div className="pt-2">
            <p className="text-gray-600 mb-4">
              Didn't receive the email?{" "}
              <span className="text-yellow-600 font-bold hover:underline cursor-pointer">
                Resend
              </span>
            </p>

            <Link
              to="/login"
              className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-base font-bold rounded-lg text-black bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Back to Login
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
