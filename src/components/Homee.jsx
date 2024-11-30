import React, { useState } from "react";
import Signup from "./Signup";
import Congratulation from "./Congratulations";

const Home = () => {
  const [waitlistData, setWaitlistData] = useState(null);

//   console.log(waitlistData)

  if (waitlistData === "signup") {
    return <Signup onSubmitSuccess={setWaitlistData} />;
  }

  if (waitlistData) {
    return (
      <Congratulation
        data={waitlistData}
        onReturn={() => setWaitlistData(null)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-6">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to SLATY</h1>
        <p className="text-lg">
          Join the exclusive waitlist for SLATY and be the first to access the
          future of [describe product/service].
        </p>
      </header>

      {/* Call to Action */}
      <div className="mt-8">
        <button
          onClick={() => setWaitlistData("signup")}
          className="bg-white text-indigo-600 font-semibold rounded-lg px-6 py-3 text-lg hover:bg-indigo-100 transition duration-300"
        >
          Join the Waitlist Now
        </button>
      </div>

      {/* Features Section */}
      <section className="mt-12 space-y-8">
        <h2 className="text-2xl font-semibold text-center">Why Join SLATY?</h2>
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:space-x-6">
          <div className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Exclusive Early Access</h3>
            <p>Be among the first to experience our innovative platform.</p>
          </div>
          <div className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Special Rewards</h3>
            <p>Get early adopter benefits, including unique rewards and perks.</p>
          </div>
          <div className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Priority Support</h3>
            <p>Enjoy priority support as a valued early user of SLATY.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-16">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SLATY. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
