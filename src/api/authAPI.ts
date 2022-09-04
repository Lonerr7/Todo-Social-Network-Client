import axios from 'axios';

import {
  RegisterFormInitialValues,
  LoginFormInitialValues,
} from '../types/FormikTypes';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

export const authAPI = {
  signUp: async (userData: RegisterFormInitialValues) => {
    return await axiosInstance.post('users/signup', userData);
  },
  logIn: async (userData: LoginFormInitialValues) => {
    return await axiosInstance.post('/users/login', userData);
  },
};
