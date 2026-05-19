import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const submitQuoteRequest = async (quoteData) => {
  const response = await api.post('/quotes', quoteData);
  return response.data;
};

export const getQuoteRequests = async () => {
  const response = await api.get('/quotes');
  return response.data;
};

export const checkHealth = async () => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
