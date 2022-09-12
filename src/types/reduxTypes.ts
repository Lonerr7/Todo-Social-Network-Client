export type User = {
  email: string;
  nickname: string;
  role: string;
  id: string;
  bio?: string;
};

export type AuthState = {
  user: User | null;
  isFetching: boolean;
  isGetMeFetching: boolean;
  errorMsg: string;
  isUserUpdateFetching: boolean;
};
