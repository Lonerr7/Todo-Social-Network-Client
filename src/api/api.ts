import axios from 'axios';
import {
  DeleteMePasswords,
  UpdateTodoParamsRequest,
} from '../types/axiosTypes';
import {
  RegisterFormInitialValues,
  LoginFormInitialValues,
  UpdateUserFromInitialValues,
  UpdateUserPasswordInitialValues,
} from '../types/FormikTypes';
import { TodoParams } from '../types/reduxTypes';

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
};

export const userAPI = {
  updateMe: async (newUserData: UpdateUserFromInitialValues) => {
    return await axiosInstance.patch('/users/updateMe', newUserData);
  },
  changeMyPassword: async (passwords: UpdateUserPasswordInitialValues) => {
    return await axiosInstance.patch('/users/updateMyPassword', passwords);
  },
  deleteMe: async (passwords: DeleteMePasswords) => {
    return await axiosInstance.delete('/users/deleteMe', {
      data: passwords,
    });
  },
};

export const todoAPI = {
  addTodo: async (todoInfo: TodoParams) => {
    return await axiosInstance.post('/todos', todoInfo);
  },
  updateTodo: async (id: string, data: UpdateTodoParamsRequest) => {
    return await axiosInstance.patch(`/todos/${id}`, data);
  },
};
