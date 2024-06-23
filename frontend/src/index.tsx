import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import UserList from './UserList';
import DeleteUser from './DeleteUser';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />}/>
        <Route path="/users" element = {<UserList />}/>
        <Route path="/delete" element = {<DeleteUser />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
