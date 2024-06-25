import React, { useEffect, useState } from 'react';
import api from './api';
import { Link, useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  salary: number;
  func: string;
  gender: 'female' | 'male';
}

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState<number | string>('');
  const [func, setFunc] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setSalary(response.data.salary);
        setFunc(response.data.func);
      } catch (error) {
        console.error('There was an error fetching the user!', error);
      }
    };

    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <div className="flex flex-col items-center">
          <img
            src={user.gender === 'female' ? '/female.jpeg' : '/man.jpg'}
            alt={user.gender}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Function:</label>
            <input
              type="text"
              value={func}
              onChange={(e) => setFunc(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            onClick={() => alert('Save functionality to be implemented')}
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700"
          >
            Save
          </button>
          <Link to="/">
            <button className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-700">Homepage</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
