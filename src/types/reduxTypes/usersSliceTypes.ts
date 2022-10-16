import { User } from './authSliceTypes';

export type UsersList = Array<User>;

export type UsersInitialState = {
  users: UsersList | null;
  currentUser: null | User;
  isCurrentUserFetching: boolean;
  errorMsg: string;
  usersSearchText: string;
};
