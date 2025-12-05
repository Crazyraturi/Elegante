import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CheckCircle, XCircle, Loader } from "lucide-react";

const Verifyemail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState("verifying");
  const navigate = useNavigate();

  const getStatusStyles = () => {
    switch (status) {
      case "success":
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-500" />,
          title: "Email Verified Successfully!",
          bgColor: "bg-green-50",
          textColor: "text-green-700",
          message: "You will be redirected to the login page shortly.",
        };
      case "failed":
        return {
          icon: <XCircle className="h-12 w-12 text-red-500" />,
          title: "Verification Failed",
          bgColor: "bg-red-50",
          textColor: "text-red-700",
          message:
            "The link may be invalid or expired. Please try registering again.",
        };
      case "verifying":
      default:
        return {
          //  loader icon
          icon: (
            <Loader className="h-12 w-12 text-amber-200-500 animate-spin" />
          ),
          title: "Verifying Email...",
          bgColor: "bg-blue-50",
          textColor: "text-blue-700",
          message: "Please wait while we confirm your account.",
        };
    }
  };

  const { icon, title, bgColor, textColor, message } = getStatusStyles();

  const verifyEmail = async () => {
    try {
      const res = await axios.post(
        `https://beyoung-backend.onrender.com/api/v1/user/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setStatus("success");
        setTimeout(() => {
          navigate("/login");
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
      URL;
      setStatus("failed");
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        className={`p-10 rounded-xl shadow-xl w-full max-w-sm text-center transition-colors duration-500 ${bgColor}`}
      >
        <div className="flex justify-center mb-6">{icon}</div>

        <h2 className={`text-2xl font-bold mb-3 ${textColor}`}>{title}</h2>

        {/* Message */}
        <p className="text-gray-600 text-base">{message}</p>
      </div>
    </div>
  );
};

export default Verifyemail;
