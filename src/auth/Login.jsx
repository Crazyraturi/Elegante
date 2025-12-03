import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext"; // Import remains correct
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth(); // Correctly accessing the login function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
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

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Simple client-side validation check
    if (!formData.email || !formData.password) {
      toast.error("All fields are required.");
      return;
    }

    // Basic password strength check 
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    try {
      setloading(true);
      const res = await axios.post(
        `https://beyoung-backend.onrender.com/api/v1/user/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (res.data.success) {
        toast.success(res.data.message || "Login successful!");
        
        // 🔑 KEY CHANGE: Call the context's login function 
        // with the token (accessToken) and user data.
        if (res.data.accessToken && res.data.user) {
            login(res.data.accessToken, res.data.user);
        }

        navigate("/"); // Redirect to the home page
      }
    } catch (error) {
      console.log(error);
      
      // Improved error handling
      const errorMessage = error.response?.data?.message || "Something went wrong.";

      if (errorMessage.includes("verify your account")) {
        toast.error("Please verify your email before logging in.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login your account</CardTitle>
          <CardDescription>
            Enter given details below to Login your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
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
                    className="w-5 h-5 text-grey-700 absolute bottom-2 right-5"
                    onClick={() => setshowPassword(false)}
                  />
                ) : (
                  <Eye
                    onClick={() => setshowPassword(true)}
                    className="w-5 h-5 text-grey-700 absolute bottom-2 right-5"
                  />
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={submitHandler}
            type="submit"
            className="w-full cursor-pointer bg-amber-300 hover:bg-amber-400 ">
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                please wait
              </>
            ) : (
              "login"
            )}
          </Button>
          <p className="text-grey-600 text-sm">
            Don't have an account ?{" "}
            <Link
              to={"/signup"}
              className=" hover:underline curser-pointer text-yellow-500">
              Signup
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;