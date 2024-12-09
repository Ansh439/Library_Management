import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const VendorLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:5000/api/vendor/login", {
    //     userId,
    //     password,
    //   });
    //   alert(response.data.message);
    //   navigate("/chart"); // Navigate to chart page on successful login
    // } catch (err) {
    //   setError(err.response.data.message || "An error occurred");
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/chart")}
          >
            Chart
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
          Event Management System
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-between">
            <button
              type="reset"
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition"
              onClick={() => {
                setUserId("");
                setPassword("");
                setError("");
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorLogin;
