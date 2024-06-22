// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3710/api', // URL-ul backend-ului
});

export default api;
