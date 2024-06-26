import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    salary: '',
    func: '',
    gender: 'male'
  });

  const { name, email, password, salary, func, gender } = formData;
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post('/register', formData);
      //console.log('User registered:', res.data);
      setFormData({
        name: '',
        email: '',
        password: '',
        salary: '',
        func: '',
        gender: 'male'
      });
      navigate('/'); // Redirecționează utilizatorul către homepage după înregistrare
    } catch (err) {
      setError('There was an error registering the user.');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Salary:</label>
            <input
              type="number"
              name="salary"
              value={salary}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your salary"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Function:</label>
            <input
              type="text"
              name="func"
              value={func}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your function"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Gender:</label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={onChange}
                  className="mr-1"
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={onChange}
                  className="mr-1"
                />
                Male
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
