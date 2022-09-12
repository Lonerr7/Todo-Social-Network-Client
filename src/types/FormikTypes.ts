export type RegisterFormInitialValues = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

export type LoginFormInitialValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export type UpdateUserFromInitialValues = {
  nickname: string;
  firstName: string;
  lastName: string;
  bio: string;
};
