import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-sky-900 to-blue-700 px-4">
      
      <div className="text-center text-white max-w-lg">
        
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold mb-4 animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-3">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8">
          The page you are looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-blue-700 transition"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;