import axios from 'axios'
import STORAGE from './localStore'

const authClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1'
});

authClient.interceptors.request.use(
  (config) => {
    const token = STORAGE.get('TOKEN');
    if (token) config.headers.Authorization = `JWT ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject (error);
  }
);

const request = ({url, method = 'GET', data}) => {
  if(method === 'GET') {
    return authClient({url, method})
  } else {
    return authClient({url, method, data})
  }
};

export default request;
