import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Signup = ({ onSubmitSuccess }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => 
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submitWaitlist = async () => {
    setError(null);

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const data = {
      waitlist_id: 22656,
      email,
      referral_link: document.URL, // Capture the current URL as the referral link
    };

    try {
      const response = await fetch("https://api.getwaitlist.com/api/v1/waiter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const result = await response.json();
      onSubmitSuccess(result); // Pass the result to the success handler
    } catch (error) {
      setError("Failed to submit waitlist data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <p className="text-center text-2xl font-semibold">Sign up for SLATY</p>

      <form className="w-full space-y-6 mt-6">
        {/* Email Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="rounded-md border border-gray-300 p-2 text-gray-700 focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="button"
            onClick={submitWaitlist}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 flex items-center justify-center"
          >
            {loading ? <ClipLoader size={20} color="#ffffff" /> : "Sign Up"}
          </button>
          {error && <p className="text-red-500 mt-2 text-xs">{error}</p>}
        </div>

        <p className="text-center text-sm">
          Signed up before?{" "}
          <b className="text-indigo-600 cursor-pointer">Check your status</b>
        </p>
      </form>
    </div>
  );
};

export default Signup;
