"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

function Page() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // To display field-specific errors

  const router = useRouter();

  const onLogin = async () => {
    try {
      setLoading(true);
      setErrorMessage(""); // Reset error message
      const response = await axios.post("/api/users/login", user);

      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);

      // Show error message based on the response
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "An error occurred");
        toast.error(error.response.data.message || "Login failed");
      } else {
        setErrorMessage("Login failed. Please try again.");
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {loading ? "Processing..." : "Login"}
        </h1>
        <hr className="mb-6 border-gray-300" />

        {/* Display error message */}
        {errorMessage && (
          <div
            className="mb-4 text-red-600 bg-red-100 p-2 rounded"
            aria-live="polite">
            {errorMessage}
          </div>
        )}

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={`mt-1 block w-full px-3 py-2 bg-gray-50 border ${
              errorMessage ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className={`mt-1 block w-full px-3 py-2 bg-gray-50 border ${
              errorMessage ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={onLogin}
          disabled={buttonDisabled || loading}
          className={`w-full py-2 px-4 rounded-md shadow-sm ${
            buttonDisabled || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}>
          {loading ? "Loading..." : "Login"}
        </button>

        {/* Link to Signup Page */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
