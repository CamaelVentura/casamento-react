import axios from 'axios';

const api = axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL: 'https://camael.club',
});

export default api;
