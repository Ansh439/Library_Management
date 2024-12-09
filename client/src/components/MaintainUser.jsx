import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaintainUser = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        // e.preventDefault();
        // try {
        //   const response = await axios.post("http://localhost:5000/api/user/login", {
        //     userId,
        //     password,
        //   });
        //   alert(response.data.message);
        //   navigate("/dashboard"); // Navigate to the user dashboard on successful login
        // } catch (err) {
        //   setError(err.response.data.message || "An error occurred");
        // }
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96">

                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        Home
                    </button>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        LogOut
                    </button>
                </div>
                <h1 className="text-center text-2xl font-bold text-gray-700 mb-6">
                    Event Management System
                </h1>

                <div className="flex justify-between">
                    <label className="block text-gray-600 font-medium mb-1">Memebership</label>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        Add
                    </button>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        Update
                    </button>
                </div>

                <div className="flex justify-between">
                    <label className="block text-gray-600 font-medium mb-1">User Management</label>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        Add
                    </button>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
                    >
                        Update
                    </button>
                </div>

            </div>
        </div>
    )
}

export default MaintainUser