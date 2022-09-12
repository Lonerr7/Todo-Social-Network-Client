import axios from 'axios';

import {
  RegisterFormInitialValues,
  LoginFormInitialValues,
  UpdateUserFromInitialValues
} from '../types/FormikTypes';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export const authAPI = {
  signUp: async (userData: RegisterFormInitialValues) => {
    return await axiosInstance.post('users/signup', userData);
  },
  logIn: async (userData: LoginFormInitialValues) => {
    return await axiosInstance.post('/users/login', userData);
  },
  getMe: async () => {
    return await axiosInstance.get('/users/me');
  },
  updateMe: async (newUserData: UpdateUserFromInitialValues) => {
    return await axiosInstance.patch('/users/updateMe', newUserData);
  },
};
