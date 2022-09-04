export type User = {
  email: string;
  nickname: string;
  role: string;
  id: string;
};

export type AuthState = {
  user: User | null;
  isFetching: boolean;
  errorMsg: string;
};
