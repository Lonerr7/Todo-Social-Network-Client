import { Todo } from '../reduxTypes/todoSliceTypes';

export type User = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: string;
  generalInfo: {
    dateOfBirth: string;
    country: string;
    currentCity: string;
    jobPlace: string;
    relationship: string; //! needs change in order with backend
    website: string; //! needs a fix to have a website URL template
  };
  mainInfo: {
    cityOfBirth: string;
    nativeLanguage: string;
    languages: string[];
  };
  contactInfo: {
    phoneNumber: string;
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
