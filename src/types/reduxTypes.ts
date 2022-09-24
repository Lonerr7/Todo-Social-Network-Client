export type User = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: string;
  id: string;
  bio?: string;
  todos: Array<Todo>;
};

export type Todo = {
  _id: string;
  taskText: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
  createdAt: string;
  user: string;
  slug: string;
  __v: number;
  id: string;
  errorMsg: string;
};

export type AuthState = {
  user: User | null;
  isFetching: boolean;
  isGetMeFetching: boolean;
  errorMsg: string;
};

export type UserState = {
  isUserUpdateFetching: boolean;
  isChangingPasswordFetching: boolean;
  isUserDeletingFetching: boolean;
  updateMeErrorMsg: string;
  changePasswordErrorMsg: string;
  deleteMyProfileErrorMsg: string;
};

export enum TodoFiltersEnum {
  ALL = 'All',
  COMPLETED = 'Completed',
  UNCOMPLETED = 'Uncompleted',
}

export type TodoState = {
  todos: Array<Todo>;
  isTodoCreating: boolean;
  areAllTodosDeleting: boolean;
  activeTodoFilter: TodoFiltersEnum;
  todoInputErrMsg: string;
  todoErrMsg: string;
};

export type TodoParams = {
  taskText: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};

export type UpdateTodoParams = {
  id: string;
  isCompleted?: boolean;
  taskText?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};

type ErrorPopup = {
  id: string;
  message: string;
};

export type ErrorPopupInitialState = {
  errors: Array<ErrorPopup>;
};
