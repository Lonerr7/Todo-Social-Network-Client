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
  difficulty: string;
  isCompleted: boolean;
  createdAt: string;
  user: string;
  slug: string;
  __v: number;
  id: string;
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
