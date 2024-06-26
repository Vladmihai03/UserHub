import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="space-y-4">
          <Link to="/users">
            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
              Manage Users
            </button>
          </Link>
          <Link to="/delete">
            <button className="w-full bg-red-500 text-white p-2 mt-3 rounded hover:bg-red-800">
              Delete User
            </button>
          </Link>
          <Link to="/">
            <button className="w-full bg-green-500 text-white p-2 mt-3 rounded hover:bg-green-800">
              Auth Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
