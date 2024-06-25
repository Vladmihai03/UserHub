// src/App.tsx
import React, { useState } from 'react';
import api from './api';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [func, SetFunc] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/add-user', { name, email, salary, func, gender });
      console.log('User added:', response.data);
      setName('');
      setEmail('');
      setSalary('');
      SetFunc('');
      setGender('');
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
          <div>
            <label className="block mb-2 text-sm font-medium">Salary:</label>
            <input 
              type="text" 
              value={salary} 
              onChange={(e) => setSalary(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your salary"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Function:</label>
            <input 
              type="text" 
              value={func} 
              onChange={(e) => SetFunc(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your function"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Gender:</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input 
                  type="radio" 
                  value="female" 
                  checked={gender === 'female'} 
                  onChange={(e) => setGender(e.target.value)} 
                  className="mr-1"
                />
                Female
              </label>
              <label>
                <input 
                  type="radio" 
                  value="male" 
                  checked={gender === 'male'} 
                  onChange={(e) => setGender(e.target.value)} 
                  className="mr-1"
                />
                Male
              </label>
            </div>
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
        <Link to="/delete">
            <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-800 mt-5">
               Delete User
            </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
