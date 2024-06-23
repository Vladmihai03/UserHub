// src/App.tsx
import React, { useState } from 'react';
import api from './api';
import UserList from './UserList';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await api.post('/add-user', { name, email });
      console.log('User added:', response.data);
      setName('');  // Golește câmpul de nume
      setEmail(''); // Golește câmpul de email
    } catch (error) {
      console.error('There was an error adding the user!', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="App bg-cyan-50 p-8 rounded shadow-md w-full max-w-md">
        <div className='text-center'>
         <h1 className="text-2xl font-bold mb-4 center">Add User</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
        <Link to="/users">
          <button className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800  shadow-md mt-5'>
            Users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
