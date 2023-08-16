import axios from 'axios';

const customAxios = () => {
  // axios instance for making requests
  const axiosInstance = axios.create({
    baseURL: dynamicBaseURL
  });

  return axiosInstance;
};

export default customAxios;