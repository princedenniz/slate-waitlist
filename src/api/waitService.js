import axios from "axios";

const API_URL = "https://api.getwaitlist.com/api/v1/";

// Function to sign up a user
export const signupUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}waiter`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to sign up for the waitlist.");
  }
};

// Function to get waitlist information (status)
export const getWaitlistInfo = async () => {
  try {
    const response = await axios.get(`${API_URL}status`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch waitlist information.");
  }
};
