import { User } from './authSliceTypes';
import { TodoFiltersEnum } from './todoSliceTypes';

export type UsersList = Array<User>;

export type UsersInitialState = {
  users: UsersList | null;
  currentUser: null | User;
  isCurrentUserFetching: boolean;
  errorMsg: string;
  usersSearchText: string;
  totalUsersCount: number;
  isCurrentUserBeingBanned: boolean;
  activeUserTodoFilterWord: TodoFiltersEnum;
};
