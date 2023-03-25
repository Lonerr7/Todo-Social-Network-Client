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
  isUserRoleChanging: boolean;
  isCurrentUserBeingBanned: boolean;
  isCurrentUserBeingDeleted: boolean;
  activeUserTodoFilterWord: TodoFiltersEnum;
};

export enum UserRolesSelect {
  USER = 'user',
  ADMIN = 'admin',
  CEO = 'CEO',
  NOT_SELECTED = 'NOT_SELECTED',
}
