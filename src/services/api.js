import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const api = {
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },

  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};

export default api;
