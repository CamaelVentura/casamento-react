import axios from 'axios';

const api = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL: 'http://68.183.145.105',
});

export default api;
