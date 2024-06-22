// src/App.tsx
import React, { useState } from 'react';
import api from './api';
import UserList from './UserList';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    <div className="App">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <UserList />
    </div>
  );
};

export default App;
