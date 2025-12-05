import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// Removed Card, CardHeader, CardTitle, CardContent, CardFooter imports
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import Logo from "@/components/icons/Logo";
import Loader from "@/components/common/Loder";
// Import the logo if available, or just use the text
// import Logo from "./path/to/Logo"; 

const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // Simple client-side validation check
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("All fields are required.");
      return;
    }

    // Basic password strength check (can be enhanced)
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    try {
      setloading(true);
      const res = await axios.post(
        `https://beyoung-backend.onrender.com/api/v1/user/register`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        toast.success(
          res.data.message || "Registration successful! Check your email for verification."
        );
        navigate("/login?verifyEmail=sent");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setloading(false);
    }
  };

  return (
    // Main container for the split-screen layout
    <div className="grid lg:grid-cols-2 min-h-screen">
      {/* 1. Left Section (Yellow Background) */}
      <div className="flex flex-col justify-between p-10 bg-yellow-400 text-black">
        <div>
            <div className="flex items-center space-x-2">
             <Link to="/" className="text-2xl font-bold">
              <Logo />
            </Link>
          </div>
        </div>
         <div className="space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome to  <br />
              <span className="bg-white px-2 italic text-yellow-500">Future Fashion.</span>
            </h1>
            <p className="text-lg font-medium max-w-md opacity-80">
              Discover the latest trends in streetwear and high fashion, exclusively curated for the bold and the brave.
            </p>
          </div>
        <div className="text-sm">
          <p>
            © 2025 Elegante •{" "}
            <Link to="#" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      {/* 2. Right Section (Form/Login) */}
      <div className="flex flex-col justify-center items-center p-6 bg-white">
        <div className="w-full max-w-sm p-0">
          <header className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-1">Create your account</h2>
            {/* Adjusted the 'New to Beyoung' text for the signup page context */}
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-500 hover:underline">
                Login
              </Link>
            </p>
          </header>

          {/* Form Content */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Subodh"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Raturi"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="subodh@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>

              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {showPassword ? (
                  <EyeOff
                    className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                    onClick={() => setshowPassword(false)}
                  />
                ) : (
                  <Eye
                    onClick={() => setshowPassword(true)}
                    className="w-5 h-5 text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
                  />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={submitHandler}
              type="submit"
              className="w-full mt-4 h-10 bg-yellow-400 hover:bg-yellow-500 text-black text-base font-semibold transition duration-300"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Please wait
                </>
              ) : (
                <>
                  Signup
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            
            {/* Terms and Privacy Policy Footer */}
            <p className="text-center text-xs text-gray-500 mt-4">
              By continuing, you agree to Elegante{" "}
              <Link to="#" className="hover:underline text-gray-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="hover:underline text-gray-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;