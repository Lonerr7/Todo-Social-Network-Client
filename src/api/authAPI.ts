import axios from 'axios';
import { SignUpResponse } from '../types/axiosResponseTypes';
import { RegisterFormInitialValues } from '../types/FormikTypes';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

export const authAPI = {
  signUp: async (userData: RegisterFormInitialValues) => {
    return await axiosInstance.post('users/signup', userData);
  },
  logIn: async () => {},
};
