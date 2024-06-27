import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link, useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  salary: number;
  func: string;
  gender: 'female' | 'male';
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const response = await api.get('/users', config);
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching the users!', error);
      }
    };

    fetchUsers();
  }, []);

  const handleCheckboxChange = (email: string) => {
    setSelectedEmails((prevSelectedEmails) =>
      prevSelectedEmails.includes(email)
        ? prevSelectedEmails.filter((e) => e !== email)
        : [...prevSelectedEmails, email]
    );
  };

  const handleDeleteSelectedUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { emails: selectedEmails }
      };

      const response = await api.delete('/delete-users', config);
      console.log(response.data);
      alert(response.data.message);

      // Refetch users after deletion
      const newUsers = users.filter((user) => !selectedEmails.includes(user.email));
      setUsers(newUsers);
      setSelectedEmails([]);
    } catch (error) {
      console.error('There was an error deleting the users!', error);
      alert('There was an error deleting the users');
    }
  };

  const handleDeleteAllUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const response = await api.delete('/delete-all-users', config);
      console.log(response.data);
      alert(response.data.message);

      navigate('/admin');
    } catch (error) {
      console.error('There was an error deleting all users!', error);
      alert('There was an error deleting all users');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-4xl mb-4 flex justify-between items-center">
        <Link to="/admin">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 transition">
            Admin Dashboard
          </button>
        </Link>
        {selectedEmails.length > 0 && (
          <div className="flex space-x-2">
            <button
              className="bg-red-500 text-white p-2 rounded hover:bg-red-800 transition"
              onClick={handleDeleteSelectedUsers}
            >
              Delete Selected Users
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded hover:bg-red-800 transition"
              onClick={handleDeleteAllUsers}
            >
              Delete All Users
            </button>
          </div>
        )}
      </div>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Users Database</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Select</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Count</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Salary</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Function</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-100 transition duration-300">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedEmails.includes(user.email)}
                      onChange={() => handleCheckboxChange(user.email)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.salary}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.func}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
