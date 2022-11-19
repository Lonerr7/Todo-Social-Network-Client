export type RegisterFormInitialValues = {
  email: string;
  nickname: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirm: string;
};

export type LoginFormInitialValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export type UpdateMyBioValue = {
  bio: string;
};

export type UpdateUserPasswordInitialValues = {
  currentPassword: string;
  password: string;
  passwordConfirm: string;
};

export type DeleteMyProfileInitialValues = {
  myPassword: string;
  myPasswordConfirm: string;
};

export type UpdateMyRegisterlInfoFormInitialValues = {
  nickname: string;
  firstName: string;
  lastName: string;
  bio: string | '';
};

export type GeneralInfoInitialValues = {
  dateOfBirth: string;
  currentCity: string;
  country: string;
  website: string;
  jobPlace: string;
};

export type MainInfoInitialValues = {
  cityOfBirth: string;
  nativeLanguage: string;
  languages?: string[];
};

export type ContactInfoInitialValues = {
  phoneNumber: string;
  discord: string;
};

export type AdditionalInfoInitialValues = {
  dateOfBirth: string;
  country: string;
  currentCity: string;
  cityOfBirth: string;
  phoneNumber: string;
};

export type BeliefsInfoInitialValues = {
  politicalViews: string;
  religion: string;
  inspiredBy: string;
};

export type PersonalInfoInitialValues = {
  activities: string;
  interests: string;
  attitudeTowardsSmoking: string;
  attitudeTowardsDrinking: string;
  favoriteMusic: string;
  favoriteMovies: string;
  favouriteBooks: string;
  aboutMe: string;
};
