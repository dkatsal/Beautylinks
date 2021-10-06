/* eslint-disable */
import axios from 'axios';
import { apiUrl } from './parameters';
//
axios.setXApiKey = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
//
axios.defaults.baseURL = apiUrl;
// axios.defaults.validateStatus = (status) => {
//   if (status === 401) {
//     localStorage.removeItem('token');
//     window.location.assign('/');
//   }
//   return status >= 200 && status < 300; // default
// };
// axios.defaults.headers.common['Content-Type'] = 'application/json';
//
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axios;
