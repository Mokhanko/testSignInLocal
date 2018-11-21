import axios from 'axios';
import STORAGE from './localStore'

const token = STORAGE.get('TOKEN')

const authClient = axios.create({
  baseURL: 'http://localhost:3001/api/v1',
  headers: {
    Authorization: `JWT ${token}`
  }
});

const request = ({url, method = 'GET', data}) => {
  if(method === 'GET') {
    return authClient({url, method})
  } else {
    return authClient({url, method, data})
  }
};

export default request;
