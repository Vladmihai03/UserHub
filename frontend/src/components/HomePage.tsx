import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className=" text-2xl font-bold mb-4">Welcome to UserHub</h1>
        <div className="space-y-4">
          <Link to="/register">
            <button className="register  w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
              Register
            </button>
          </Link>
          <Link to="/signin">
            <button className="signin w-full bg-green-500 text-white p-2 mt-3 rounded hover:bg-green-800">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
