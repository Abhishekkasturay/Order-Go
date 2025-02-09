import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/userSlice"; // Adjust the path as necessary
import UserContext from "../utils/UserContext"; // Import UserContext

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext); // Use UserContext

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await fetch("https://orderandgo-2.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Ensure username and password are set
    });

    // Handle non-OK responses (like 400 or 500)
if (!response.ok) {
  try {
    const errorData = await response.json();
    console.log("Error Data:", errorData);  // Log the error data
    setError(errorData.message || "Login failed");
  } catch (err) {
    const errorText = await response.text();
    console.log("Error Text:", errorText);  // Log the plain error text
    setError(errorText || "Login failed");
  }
  return;
}


    // Parse response assuming it's JSON (most login responses are)
    const data = await response.json();
    
    // Show success message or token (based on your API response)
    alert(data.message || "Login successful!");

    // Dispatch the login action with the username
    dispatch(login({ username }));

    // Set the logged-in user in context (UserContext)
    setLoggedInUser(username);

    // Navigate to another page, e.g., the dashboard or homepage
    navigate("/");
  } catch (error) {
    console.error("Error logging in", error);
    setError("An error occurred during login. Please try again.");
  }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-roboto">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
