import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserPortal = () => {

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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Welcome User
                </h1>
                <p className="text-gray-600 text-lg">
                    Select your role to proceed:
                </p>
            </header>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
                <Link
                    to="/admin-login"
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition"
                >
                    <h2 className="text-xl font-semibold text-gray-800">Vendor</h2>
                    <p className="text-gray-600 mt-2">

                    </p>
                </Link>
                <Link
                    to="/vendor-login"
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition"
                >
                    <h2 className="text-xl font-semibold text-gray-800">Cart</h2>
                    <p className="text-gray-600 mt-2">

                    </p>
                </Link>
                <Link
                    to="/user-login"
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition"
                >
                    <h2 className="text-xl font-semibold text-gray-800">Guest List</h2>
                    <p className="text-gray-600 mt-2">

                    </p>
                </Link>
                <Link
                    to="/user-login"
                    className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition"
                >
                    <h2 className="text-xl font-semibold text-gray-800">Order Status</h2>
                    <p className="text-gray-600 mt-2">

                    </p>
                </Link>
            </div>

            <footer className="mt-12 text-gray-500">
                &copy; 2024 Technical Event Management
            </footer>
        </div>
    );
};


export default UserPortal