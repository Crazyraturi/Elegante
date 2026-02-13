import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle, XCircle, Loader, ArrowRight } from "lucide-react";

const Verifyemail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("verifying");
  const navigate = useNavigate();

  // Define visual states
  const getStatusContent = () => {
    switch (status) {
      case "success":
        return {
          icon: <CheckCircle className="h-16 w-16 text-green-500" />,
          title: "Verified Successfully!",
          description:
            "Your email has been confirmed. Redirecting you to the login page...",
          buttonText: "Go to Login Now",
          buttonAction: () => navigate("/login"),
          colorClass: "text-green-600",
        };
      case "failed":
        return {
          icon: <XCircle className="h-16 w-16 text-red-500" />,
          title: "Verification Failed",
          description:
            "The link may be invalid or expired. Please try registering again.",
          buttonText: "Back to Signup",
          buttonAction: () => navigate("/signup"), // Adjust route as needed
          colorClass: "text-red-600",
        };
      case "verifying":
      default:
        return {
          icon: <Loader className="h-16 w-16 text-yellow-500 animate-spin" />,
          title: "Verifying Account...",
          description:
            "Please wait a moment while we confirm your security token.",
          buttonText: null,
          colorClass: "text-yellow-600",
        };
    }
  };

  const { icon, title, description, buttonText, buttonAction } =
    getStatusContent();

  const verifyEmail = async () => {
    try {
      const res = await axios.post(
        `https://beyoung-backend.onrender.com/api/v1/user/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res.data.success) {
        setStatus("success");
        setTimeout(() => {
          navigate("/login?verified=true");
        }, 3000);
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("failed");
    }
  };

  useEffect(() => {
    if (token) {
      verifyEmail();
    } else {
      setStatus("failed");
    }
  }, [token]);

  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
      {/* Left Side - Brand Section */}
      <div className="hidden lg:flex w-1/2 bg-yellow-400 relative flex-col justify-between p-12 lg:p-16 overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-size:[2rem_2rem]"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-black tracking-widest text-black uppercase">
            Straticrestedge
          </h1>
        </div>

        <div className="relative z-10 max-w-lg">
          <h2 className="text-5xl font-extrabold text-black leading-tight mb-4">
            Welcome to <br />
            <span className="italic text-white drop-shadow-sm">
              Future Fashion.
            </span>
          </h2>
          <p className="text-gray-900 text-lg font-medium">
            Discover the latest trends in streetwear and high fashion.
          </p>
        </div>

        <div className="relative z-10">
          <p className="text-sm font-semibold text-black">
            © 2025 Straticrestedge solutions private limited • Privacy Policy
          </p>
        </div>
      </div>

      {/* Right Side - Content Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm text-center">
          <div className="mb-8 flex justify-center">
            {/* Icon Wrapper with subtle shadow */}
            <div className="p-4 rounded-full bg-white shadow-xl shadow-gray-100 ring-1 ring-gray-50">
              {icon}
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            {title}
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-8">
            {description}
          </p>

          {/* Optional Action Button */}
          {buttonText && (
            <button
              onClick={buttonAction}
              className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verifyemail;
