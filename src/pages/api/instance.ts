import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  withCredentials: true,
  timeout: 5000,
});

export { baseInstance };
