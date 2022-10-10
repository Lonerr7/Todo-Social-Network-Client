export type User = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: string;
  cityOfBirth: string;
  currentCity: string;
  country: string;
  dateOfBirth: string;
  phoneNumber: string;
  id: string;
  bio: string;
  todos: Array<Todo>;
  img?: string;
};

export type UsersList = Array<User>;

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
  afterSignUp: boolean;
};

export type UserState = {
  isUserUpdateFetching: boolean;
  isMyBioUpdating: boolean;
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
  todoSearchText: string;
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

export type UsersInitialState = {
  users: UsersList | null;
  currentUser: null | User;
  isCurrentUserFetching: boolean;
  errorMsg: string;
  usersSearchText: string;
};
