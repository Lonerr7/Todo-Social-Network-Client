import { Todo } from '../reduxTypes/todoSliceTypes';

export type User = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: string;
  generalInfo: {
    country?: string;
    currentCity?: string;
    dateOfBirth?: string;
  };
  mainInfo: {
    cityOfBirth?: string;
    languages?: string[];
  };
  contactInfo: {
    phoneNumber?: string;
  };
  id: string;
  bio: string;
  todos: Array<Todo>;
  img?: string;
};

export type AuthState = {
  user: User | null;
  isFetching: boolean;
  isGetMeFetching: boolean;
  errorMsg: string;
  afterSignUp: boolean;
};
