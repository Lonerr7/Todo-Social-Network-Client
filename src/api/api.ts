import axios from 'axios';
import {
  DeleteMePasswords,
  UpdateTodoParamsRequest,
} from '../types/axiosTypes';
import {
  RegisterFormInitialValues,
  LoginFormInitialValues,
  UpdateUserPasswordInitialValues,
  ForgotPasswordInitialValues,
  ResetPasswordInitialValues,
} from '../types/formikTypes';
import {
  UpdateMeFieldsToSendForApi,
  UserManipulationBanActions,
  UserManipulationRolesActions,
} from '../types/apiTypes';
import { TodoParams } from '../types/reduxTypes/todoSliceTypes';
import { CommentData } from '../types/reduxTypes/currentCommentSliceTypes';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export const authAPI = {
  signUp: async (userData: RegisterFormInitialValues) =>
    await axiosInstance.post('users/signup', userData),

  logIn: async (userData: LoginFormInitialValues) =>
    await axiosInstance.post('users/login', userData),

  getMe: async () => await axiosInstance.get('users/me'),

  sendToForgotPasswordEmail: async (data: ForgotPasswordInitialValues) =>
    await axiosInstance.post('users/forgotPassword', data),

  sendPasswordReset: async (data: ResetPasswordInitialValues) =>
    await axiosInstance.patch('users/resetPassword', data),
};

export const myselfAPI = {
  updateMe: async (data: UpdateMeFieldsToSendForApi) =>
    await axiosInstance.patch('users/updateMe', data),

  changeMyAvatar: async (data: any) =>
    await axiosInstance.patch('users/updateMyAvatar', data),

  changeMyPassword: async (passwords: UpdateUserPasswordInitialValues) =>
    await axiosInstance.patch('users/updateMyPassword', passwords),

  deleteMe: async (passwords: DeleteMePasswords) =>
    await axiosInstance.delete('users/deleteMe', {
      data: passwords,
    }),
};

export const todoAPI = {
  addTodo: async (todoInfo: TodoParams) =>
    await axiosInstance.post('todos', todoInfo),

  updateTodo: async (id: string, data: UpdateTodoParamsRequest) =>
    await axiosInstance.patch(`todos/${id}`, data),

  deleteTodo: async (id: string) => await axiosInstance.delete(`todos/${id}`),

  deleteAllUserTodos: async () => await axiosInstance.delete('todos'),
};

export const usersAPI = {
  getAllUsers: async (page: number) =>
    await axiosInstance.get(`users?limit=5&page=${page}`),

  getCurrentUser: async (userId: string) =>
    await axiosInstance.get(`users/${userId}`),
  chageUserRole: async (
    userId: string,
    action: { action: UserManipulationRolesActions }
  ) => await axiosInstance.patch(`users/changeUserRole/${userId}`, action),
  banOrUnbanUser: async (
    userId: string,
    action: { action: UserManipulationBanActions }
  ) => await axiosInstance.patch(`users/banOrUnbanUser/${userId}`, action),
};

export const usersTodoAPI = {
  getOpenedTodoComments: async (todoId: string, page: number) =>
    await axiosInstance.get(`todos/${todoId}/comments?limit=5&page=${page}`),
  getTodoOwner: async (userId: string) =>
    await axiosInstance.get(`todos/${userId}/owner`),
  getOpenedTodo: async (todoId: string) =>
    await axiosInstance.get(`todos/${todoId}`),
};

export const commentsAPI = {
  deleteTodoComment: async (todoId: string, commentId: string) =>
    await axiosInstance.delete(`todos/${todoId}/comments/${commentId}`),
  sendTodoComment: async (
    todoId: string,
    commentData: CommentData //!
  ) => axiosInstance.post(`todos/${todoId}/comments/`, commentData),
};
