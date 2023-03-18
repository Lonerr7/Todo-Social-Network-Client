import { User } from './authSliceTypes';
import { TodoFiltersEnum } from './todoSliceTypes';

export type UsersList = Array<User>;

export type UsersInitialState = {
  users: UsersList | null;
  currentUser: null | User | undefined;
  isCurrentUserFetching: boolean;
  errorMsg: string;
  banOrUnbanErrorMsg: string;
  usersSearchText: string;
  totalUsersCount: number;
  isCurrentUserBeingBanned: boolean;
  isCurrentUserBeingDeleted: boolean;
  activeUserTodoFilterWord: TodoFiltersEnum;
};
