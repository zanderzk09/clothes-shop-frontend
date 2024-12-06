import axios from 'axios';

const port = import.meta.env.VITE_BACKEND_PORT;

export const api = axios.create({
  baseURL: `http://localhost:${port}/api`,
  withCredentials: true,
});




