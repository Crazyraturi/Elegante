import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

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
    // console.log(formData);
    // Simple client-side validation check
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
        toast.error("All fields are required.");
        return;
    }

    // Basic password strength check (can be enhanced)
    if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        return;
    }
    try {
      setloading(true)
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
          toast.success(res.data.message || "Registration successful! Check your email for verification.");
          navigate("/login?verifyEmail=sent");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message
)
   
    }
    finally{
      setloading(false)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>
          <CardDescription>
            Enter given details below to create to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
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
                    className="w-5 h-5 text-grey-700 absolute bottom-2 right-5  "
                    onClick={() => setshowPassword(false)}
                  />
                ) : (
                  <Eye
                    onClick={() => setshowPassword(true)}
                    className="w-5 h-5 text-grey-700 absolute bottom-2 right-5  "
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
            {loading?<><Loader2 className="h-4 w-4 animate-spin mr-2"/>please wait</>:"Signup"} 
          </Button>
          <p className="text-grey-600 text-sm">
            Already Have an account ?{" "}
            <Link
              to={"/login"}
              className=" hover:underline curser-pointer text-yellow-500">
              Login
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
