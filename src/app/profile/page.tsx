"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");

      if (response.data.success) {
        toast.success("Logged Out Successfully");
        localStorage.removeItem("token");
        router.push("/login");
      } else {
        toast.error("Failed to Logout");
      }
    } catch (error: any) {
      console.error(error.message);
      toast.error("An error occurred during logout.");
    }
  };

  const getUserDetails = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get("/api/users/me");

      if (res.data && res.data.data && res.data.data._id) {
        setData(res.data.data._id); // Safely access `_id`
        toast.success("User details fetched successfully!");
      } else {
        setData("");
        toast.error("User details not found.");
      }
    } catch (error: any) {
      console.error(error.message);
      setData(""); // Reset data in case of error
      toast.error("Failed to fetch user details.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      {/* Conditionally Render Link or Placeholder */}
      <h2 className="text-lg font-medium mb-6">
        {data ? (
          <Link href={`/profile/${data}`} className="text-blue-500 hover:underline">
            {data}
          </Link>
        ) : (
          "No User Data Available"
        )}
      </h2>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="mb-4 w-full max-w-xs bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        Logout
      </button>

      {/* Get User Details Button */}
      <button
        onClick={getUserDetails}
        disabled={loading}
        className={`w-full max-w-xs py-2 px-4 rounded-md shadow-sm ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
        }`}>
        {loading ? "Loading..." : "Get User Details"}
      </button>
    </div>
  );
}

export default Page;
