import STOR from '../config';

export default {
  set: (key, value) => {
    localStorage.setItem(`${STOR.STORAGE}:${key}`, value);
  },
  get: (key) => {
   return localStorage.getItem(`${STOR.STORAGE}:${key}`);
  },
  remove: (key) => {
    localStorage.removeItem(`${STOR.STORAGE}:${key}`);
  },
  getKey: (key) => {
    return localStorage.key(`${STOR.STORAGE}:${key}`);
  }
}
