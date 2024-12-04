import React, { useState } from "react";
import { FaTwitter, FaWhatsapp } from "react-icons/fa"; // Icons for social sharing

const Congratulation = ({ data, onReturn }) => {
  const [copied, setCopied] = useState(false); // Track if the link is copied
  console.log(data)

  // Function to copy the referral link
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(data.referral_link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(() => alert("Failed to copy referral link. Please try again."));
  };
  
  // Social media share URLs
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=Join%20me%20on%20SLATY!%20Here%20is%20my%20referral%20link:%20${encodeURIComponent(
    data.referral_link
  )}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=Join%20me%20on%20SLATY!%20Here%20is%20my%20referral%20link:%20${encodeURIComponent(
    data.referral_link
  )}`;

  return (
    <div className="flex flex-col justify-center w-screen p-2 rounded-md space-y-4 text-center">
      <p className="text-[1.5rem] font-semibold">Successfully signed up for SLATY!</p>

      {/* Referral Link Section */}
      <div className="border border-gray-200 p-4 rounded-md relative">
        <p className="text-[13px] font-medium mb-2">Referral link:</p>
        <span
          onClick={handleCopyLink}
          className="text-indigo-600 break-all cursor-pointer underline"
        >
          {data.referral_link}
        </span>
        {copied && (
          <span className="absolute top-2 right-2 text-green-500 text-sm">
            Copied!
          </span>
        )}
      </div>

      {/* Position Info */}
      <div className="border border-gray-200 p-4 rounded-md">
        <p className="font-medium">Your position:</p>
        <p className="text-xl font-bold">{data.priority}</p>
      </div>

      {/* Total Referrals */}
      <div className="border border-gray-200 p-4 rounded-md">
        <p className="font-medium">
          Total referrals: <b className="text-xl">{data.total_referrals}</b>
        </p>
      </div>

      <p className="text-[14px]">Share and refer your friends to move up in line!</p>

      {/* Social Media Share Buttons */}
      <div className="flex justify-center gap-4">
        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
      <button
          type="button"
          onClick={onReturn}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 mt-4"
        >
          Return to Signup
        </button>
    </div>
  );
};

export default Congratulation;





// // WaitlistSuccess.js
// import React, { useState } from "react";
// import { FaTwitter, FaWhatsapp } from "react-icons/fa";
// import { copyReferralLink } from "../api/waitService"; // Import API function

// const Congratulation = ({ data, onReturn }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopyLink = async () => {
//     const success = await copyReferralLink(data.referral_link);
//     if (success) {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
//     } else {
//       alert("Failed to copy referral link. Please try again.");
//     }
//   };

//   const twitterShareUrl = `https://twitter.com/intent/tweet?text=Join%20me%20on%20SLATY!%20Here%20is%20my%20referral%20link:%20${encodeURIComponent(
//     data.referral_link
//   )}`;
//   const whatsappShareUrl = `https://api.whatsapp.com/send?text=Join%20me%20on%20SLATY!%20Here%20is%20my%20referral%20link:%20${encodeURIComponent(
//     data.referral_link
//   )}`;

//   return (
//     <div className="p-6 rounded-md space-y-4 text-center">
//       <h1 className="text-xl font-bold">Successfully signed up for SLATY!</h1>
//       <div className="border p-4 rounded-md">
//         <p>Referral link:</p>
//         <span
//           onClick={handleCopyLink}
//           className="text-indigo-600 break-all cursor-pointer underline"
//         >
//           {data.referral_link}
//         </span>
//         {copied && <p className="text-green-500">Copied!</p>}
//       </div>

//       <div className="border p-4 rounded-md">
//         <p>Your position:</p>
//         <p className="text-xl font-bold">{data.priority}</p>
//       </div>

//       <div className="border p-4 rounded-md">
//         <p>Total referrals:</p>
//         <p className="text-xl font-bold">{data.total_referrals}</p>
//       </div>

//       <div className="flex justify-center gap-4">
//         <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
//           <FaTwitter size={24} className="text-blue-500" />
//         </a>
//         <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer">
//           <FaWhatsapp size={24} className="text-green-500" />
//         </a>
//       </div>

//       <button
//         onClick={onReturn}
//         className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-2 mt-4"
//       >
//         Return to Signup
//       </button>
//     </div>
//   );
// };

// export default Congratulation;

