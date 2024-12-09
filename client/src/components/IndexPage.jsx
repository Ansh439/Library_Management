import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Technical Event Management
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
          <h2 className="text-xl font-semibold text-gray-800">Admin</h2>
          <p className="text-gray-600 mt-2">
            Manage users, vendors, and memberships
          </p>
        </Link>
        <Link
          to="/vendor-login"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">Vendor</h2>
          <p className="text-gray-600 mt-2">
            Manage items and transactions
          </p>
        </Link>
        <Link
          to="/user-login"
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold text-gray-800">User</h2>
          <p className="text-gray-600 mt-2">
            Browse vendors, manage cart, and checkout
          </p>
        </Link>
      </div>

      <footer className="mt-12 text-gray-500">
        &copy; 2024 Technical Event Management
      </footer>
    </div>
  );
};

export default IndexPage;
