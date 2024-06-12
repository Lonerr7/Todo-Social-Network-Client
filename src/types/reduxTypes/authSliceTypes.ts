import { Todo } from '../reduxTypes/todoSliceTypes';

export enum UserRoles {
  USER = 'user',
  ADMIN = 'admin',
  CEO = 'CEO',
}

export interface User {
  id: string;
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  isVerified: boolean;
  photo: string;
  generalInfo: {
    dateOfBirth: string;
    country: string;
    currentCity: string;
    jobPlace: string;
    relationship: RelationshipEnum;
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
    religion: ReligionEnum;
    inspiredBy: string;
  };
  personalInfo: {
    activities: string;
    interests: string;
    attitudeTowardsSmoking: AttitudeTowardsEnum;
    attitudeTowardsDrinking: AttitudeTowardsEnum;
    favoriteMusic: string;
    favoriteMovies: string;
    favouriteBooks: string;
    aboutMe: string;
  };
  bio: string;
  todos: Array<Todo>;
  isBanned: boolean;
}

export enum AttitudeTowardsEnum {
  POSITIVE = 'Positive',
  NEUTRAL = 'Neutral',
  NEGATIVE = 'Negative',
  COMPROMISE = 'Compromise',
  NOT_SELECTED = '',
}

export enum ReligionEnum {
  ORTHODOXY = 'Orthodoxy',
  CATHOLICISM = 'Catholicism',
  ISLAM = 'Islam',
  BUDDHISM = 'Buddhism',
  JUDAISM = 'Judaism',
  NOT_SELECTED = '',
}

export enum RelationshipEnum {
  SINGLE = 'Single',
  IN_ACTIVE_SEARCH = 'In active search',
  MARRIED = 'Married',
  NOT_MARRIED = 'Not married',
  NOT_SELECTED = '',
}

export enum OnlineStatusEnum {
  ONLINE = 'Online',
  OFFLINE = 'Offline',
  DONT_BOTHER = "Don't bother",
  AWAY = 'Away',
  SLEEPING = 'Sleeping',
}

export interface AuthState {
  user: User | null;
  isFetching: boolean;
  isGetMeFetching: boolean;
  errorMsg: string;
  afterSignUp: boolean;
}
