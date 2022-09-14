export type User = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: string;
  id: string;
  bio?: string;
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
  updateMeErrorMsg: string,
  changePasswordErrorMsg: string,
  deleteMyProfileErrorMsg: string,
};
