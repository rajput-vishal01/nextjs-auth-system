"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response?.data || "Error verifying email.");
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Verify Email</h1>

        <div className="mb-4">
          {token ? (
            <p className="text-sm text-gray-600">
              Verifying token:{" "}
              <span className="font-mono text-blue-600">{token}</span>
            </p>
          ) : (
            <p className="text-sm text-red-500">No token provided</p>
          )}
        </div>

        {verified && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-600">
              Email Verified!
            </h2>
            <Link
              href="/login"
              className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
              Go to Login
            </Link>
          </div>
        )}

        {error && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-red-600">
              Verification Failed
            </h2>
            <p className="text-sm text-gray-600">
              Please try again later or contact support.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
