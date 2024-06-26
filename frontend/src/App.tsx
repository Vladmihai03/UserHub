import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import SignIn from './components/SignIn';
import UserDetail from './components/UserDetail';
import AdminPage from './components/AdminPage';
import UserList from './components/UserList';
import DeleteUser from './components/DeleteUser';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/delete" element={<DeleteUser />} />
      </Routes>
    </div>
  );
};

export default App;
