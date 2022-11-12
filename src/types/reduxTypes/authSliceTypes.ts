import { Todo } from '../reduxTypes/todoSliceTypes';

export type User = {
  id: string;
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: string;
  photo: string;
  generalInfo: {
    dateOfBirth: string;
    country: string;
    currentCity: string;
    jobPlace: string;
    relationship: string; //! needs change in order with backend (select?)
    website: string; //! needs a fix to have a website URL template
  };
  mainInfo: {
    cityOfBirth: string;
    nativeLanguage: string;
  };
  contactInfo: {
    phoneNumber: string;
    discord: string;
  };
  beliefs: {
    politicalViews: string;
    religion: string;
    inspiredBy: string;
  };
  personalInfo: {
    activities: string;
    interests: string;
    attitudeTowardsSmoking: string; //! add enum and select on front
    attitudeTowardsDrinking: string; //! add enum and select on front
    favoriteMusic: string;
    favoriteMovies: string;
    favouriteBooks: string;
    aboutMe: string;
  };
  bio: string;
  todos: Array<Todo>;
  onlineStatus: OnlineStatusEnum;
};

export enum OnlineStatusEnum {
  ONLINE = 'Online',
  OFFLINE = 'Offline',
  DONT_BOTHER = "Don't bother",
  AWAY = 'Away',
  SLEEPING = 'Sleeping',
}

export type AuthState = {
  user: User | null;
  isFetching: boolean;
  isGetMeFetching: boolean;
  errorMsg: string;
  afterSignUp: boolean;
};
