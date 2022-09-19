import s from './RegisterForm.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { RegisterFormInitialValues } from '../../../types/FormikTypes';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { signUserUp } from '../../../redux/authSlice';
import FormControl from '../FormControl/FormControl';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';

const initialValues = {
  email: 'newuser@gmail.com',
  nickname: 'New User',
  firstName: 'Vanya',
  lastName: 'Karabankov',
  password: 'gZ929ufnAdsa9',
  passwordConfirm: 'gZ929ufnAdsa9',
} as RegisterFormInitialValues;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Please, enter an email'),
  nickname: yup.string().required('Please, enter a nickname'),
  firstName: yup.string().required('Please, enter your first name'),
  lastName: yup.string().required('Please, enter your last name'),
  password: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'Password must be more than 8 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm your password!'),
});

const RegisterForm: React.FC = () => {
  const { isFetching } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = (values: RegisterFormInitialValues) => {
    dispatch(signUserUp(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.registerForm}>
        <FormControl
          customClass={s.registerForm__formControl}
          field="email"
          placeholder="Email"
          inputClass={s.registerForm__formInput}
          type="text"
          label="Email"
          labelClass={s.registerForm__label}
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="nickname"
          placeholder="Nickname"
          inputClass={s.registerForm__formInput}
          type="text"
          label="Nickname"
          labelClass={s.registerForm__label}
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="firstName"
          placeholder="First Name"
          inputClass={s.registerForm__formInput}
          type="text"
          label="First Name"
          labelClass={s.registerForm__label}
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="lastName"
          placeholder="Last Name"
          inputClass={s.registerForm__formInput}
          type="text"
          label="Last Name"
          labelClass={s.registerForm__label}
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="password"
          placeholder="Password"
          inputClass={s.registerForm__formInput}
          type="password"
          label="Password"
          labelClass={s.registerForm__label}
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="passwordConfirm"
          placeholder="Password confirmation"
          inputClass={s.registerForm__formInput}
          type="password"
          label="Password Confirmation"
          labelClass={s.registerForm__label}
        />

        <SubmitLoadingBtn
          btnClass={s.registerForm__btn}
          btnType="submit"
          btnText="Sign Up"
          btnFetchingText="Signing You Up"
          isFetching={isFetching}
          onSubmit={() => {}}
        />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
