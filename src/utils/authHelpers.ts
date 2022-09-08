// import { authAPI } from '../api/api';
// import {
//   LoginFormInitialValues,
//   RegisterFormInitialValues,
// } from '../types/FormikTypes';
// import { User } from '../types/reduxTypes';

// type RegisterOrLoginType<T, U> = (
//   userData: T extends RegisterFormInitialValues ? U : LoginFormInitialValues
// ) => User;

// export const registerOrLogin: RegisterOrLoginType<
//   RegisterFormInitialValues,
//   LoginFormInitialValues
// > = async (
//   userData: RegisterFormInitialValues,
//   {
//     rejectWithValue,
//   }: { rejectWithValue: (value: unknown) => RejectWithValue<unknown, unknown> }
// ) => {
//   try {
//     const response = await authAPI.signUp(userData);

//     // save jwt to localstorage
//     if (response.data.token) {
//       localStorage.setItem('token', response.data.token);
//     }

//     console.log(response.data);

//     return response.data.data.user;
//   } catch (error: any) {
//     console.log(error.response.data.message);
//     return rejectWithValue(error.response.data.message);
//   }
// };

export const a = 1;