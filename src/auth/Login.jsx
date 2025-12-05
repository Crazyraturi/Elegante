import React, { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowRight, Mail, Lock, Loader2 } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import Logo from "@/components/icons/Logo";
import React, { useState, useEffect, createContext, useContext } from "react";
import {
  Eye,
  EyeOff,
  ShoppingBag,
  ArrowRight,
  Mail,
  Lock,
  Loader2,
} from "lucide-react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

import Logo from "@/components/icons/Logo";
import Loader from "@/components/common/Loder";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Trigger Animation
  useEffect(() => {
    setAnimate(true);
  }, []);

  // Handle Query Params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("verifyEmail") === "sent") {
      toast.success(
        "A verification email has been sent. Please check your inbox."
      );
    }
    if (params.get("verified") === "true") {
      toast.success("Your email has been verified! You can now login.");
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("All fields are required.");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `https://beyoung-.onrender.com/api/v1/user/login`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        toast.success(res.data.message || "Login successful!");

        if (res.data.accessToken && res.data.user) {
          login(res.data.accessToken, res.data.user);
        }

        navigate("/");
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";

      if (errorMessage.includes("verify your account")) {
        toast.error("Please verify your email before logging in.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans text-gray-900 selection:bg-yellow-200">
      {/* LEFT SIDE - VISUAL BANNER */}
      <div
        className={`hidden lg:flex lg:w-1/2 relative overflow-hidden bg-yellow-400 transition-all duration-1000 ease-out ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        }`}>
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between w-full p-12 text-gray-900">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold">
              <Logo />
            </Link>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome Back to <br />
              <span className="bg-white px-2 italic text-yellow-500">
                Future Fashion.
              </span>
            </h1>
            <p className="text-lg font-medium max-w-md opacity-80">
              Discover the latest trends in streetwear and high fashion,
              exclusively curated for the bold and the brave.
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm font-semibold">
            <span>© 2025 Elegante.in</span>
            <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-2xl opacity-20"></div>
      </div>

      {/* RIGHT SIDE - FORM AREA */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative bg-white">
        {/* Mobile Logo */}
        <div className="absolute top-6 left-6 lg:hidden flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold">
              <Logo />
            </Link>
          </div>
        </div>

        <div
          className={`w-full max-w-md space-y-8 transition-all duration-700 delay-100 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          }`}>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              New to Elegante ?
              <Link
                to="/signup"
                className="ml-1 font-semibold text-yellow-500 hover:text-yellow-600 transition-colors focus:outline-none focus:underline">
                Create an account
              </Link>
            </p>
          </div>

          <form className="space-y-6" onSubmit={submitHandler}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 sm:text-sm"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none p-1">
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-gray-500 hover:text-yellow-600 transition-colors">
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-200 shadow-lg shadow-yellow-200 hover:shadow-yellow-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? (
                <div className="flex items-center">
                  <Loader2 className="h-5 w-5 animate-spin mr-2 text-gray-800" />
                  <span>Please wait...</span>
                </div>
              ) : (
                <>
                  <span className="absolute right-5 inset-y-0 flex items-center pl-3">
                    <ArrowRight className="h-5 w-5 text-gray-800 group-hover:translate-x-1 transition-transform" />
                  </span>
                  Login in
                </>
              )}
            </button>
          </form>

          <div className="mt-6">
            <p className="text-center text-xs text-gray-400">
              By continuing, you agree to Elegante{" "}
              <Link to="/terms" className="underline hover:text-gray-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline hover:text-gray-600">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
