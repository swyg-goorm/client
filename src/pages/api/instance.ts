import axios from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_END_POINT,
  timeout: 5000,
});

export { baseInstance };
