import axios from 'axios';
import {
  DeleteMePasswords,
  UpdateTodoParamsRequest,
} from '../types/axiosTypes';
import {
  RegisterFormInitialValues,
  LoginFormInitialValues,
  UpdateUserPasswordInitialValues,
} from '../types/FormikTypes';
import { UpdateMeFieldsToSendForApi } from '../types/apiTypes';

import { TodoParams } from '../types/reduxTypes/todoSliceTypes';

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
    return await axiosInstance.post('users/login', userData);
  },
  getMe: async () => {
    return await axiosInstance.get('users/me');
  },
};

export const myselfAPI = {
  updateMe: async (data: UpdateMeFieldsToSendForApi) => {
    return await axiosInstance.patch('users/updateMe', data);
  },
  changeMyPassword: async (passwords: UpdateUserPasswordInitialValues) => {
    return await axiosInstance.patch('users/updateMyPassword', passwords);
  },
  deleteMe: async (passwords: DeleteMePasswords) => {
    return await axiosInstance.delete('users/deleteMe', {
      data: passwords,
    });
  },
};

export const todoAPI = {
  addTodo: async (todoInfo: TodoParams) => {
    return await axiosInstance.post('todos', todoInfo);
  },
  updateTodo: async (id: string, data: UpdateTodoParamsRequest) => {
    return await axiosInstance.patch(`todos/${id}`, data);
  },
  deleteTodo: async (id: string) => {
    return await axiosInstance.delete(`todos/${id}`);
  },
  deleteAllUserTodos: async () => {
    return await axiosInstance.delete('todos');
  },
};

export const usersAPI = {
  getAllUsers: async () => {
    return await axiosInstance.get('users');
  },
  getCurrentUser: async (userId: string) => {
    return await axiosInstance.get(`users/${userId}`);
  },
};
