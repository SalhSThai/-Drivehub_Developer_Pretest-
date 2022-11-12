import axios from 'axios';
import { getAccessToken, removeAccessToken } from '../utils/localStorage';
axios.defaults.baseURL = `https://cdn.contentful.com`;

axios.interceptors.request.use(
  (config) => {
    const access_token = getAccessToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err);
    if (err.response.status === '401') {
      removeAccessToken();
      return window.location.replace('/');
    }
    return Promise.reject(err);
  }
);

export default axios;
