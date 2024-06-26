import React, { useState } from 'react';
import api from '../api'; // Asigură-te că importul este corect
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DeleteUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleDeleteButton = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: { email }
      };

      const response = await api.delete('/delete-user', config);
      console.log(response.data); // Log the response data
      alert(response.data.message);
      navigate('/admin'); // Redirect to home or another page
    } catch (error) {
      console.error("There was an error", error);
      alert('There was an error deleting the user');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-cyan-50 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Delete User</h1>
        <form onSubmit={handleDeleteButton} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter the email of the user to delete"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-800"
          >
            Delete User
          </button>
          <Link to="/admin">
            <button className="w-full bg-blue-500 text-white mt-3 p-2 rounded hover:bg-blue-800">Admin</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DeleteUser;
