import { AdditionalFieldsToSend } from './reduxTypes/myselfSliceTypes';

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

export type UpdateMyRegisterlInfoFormInitialValues = {
  nickname: string;
  firstName: string;
  lastName: string;
  bio: string | '';
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

export type AdditionalInfoInitialValues = {
  dateOfBirth: string;
  country: string;
  currentCity: string;
  cityOfBirth: string;
  phoneNumber: string;
};

export type MainInfoAdditionalValues = {
  cityOfBirth: string;
  nativeLanguage: string;
  languages?: string[];
};

export type UpdateMeInitialValues =
  | UpdateMyRegisterlInfoFormInitialValues
  | UpdateMyBioValue
  | AdditionalFieldsToSend
  | MainInfoAdditionalValues;
