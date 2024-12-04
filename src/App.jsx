// App.js
import React, { useState } from "react";
import Signup from "./components/Signup";
import Congratulation from "./components/Congratulations";
import './App.css'
import Home from "./components/Homee";

const App = () => {
  const [waitlistData, setWaitlistData] = useState(null);

  return (
    <div className="flex w-full h-full p-6">
      {!waitlistData ? (
        <Signup onSubmitSuccess={setWaitlistData} />
      ) : (
        <Congratulation data={waitlistData} onReturn={() => setWaitlistData(null)} />
      )}

      {/* <Home/> */}
    </div>
  );
};

export default App;
