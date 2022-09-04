import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch } from '../../../hooks/hooks';
import { logUserIn } from '../../../redux/authSlice';
import { LoginFormInitialValues } from '../../../types/FormikTypes';
import FormControl from '../FormControl/FormControl';
import s from './LoginForm.module.scss';

const initialValues = {
  email: 'newuser@gmail.com',
  password: 'gZ929ufnAdsa9',
  passwordConfirm: 'gZ929ufnAdsa9',
} as LoginFormInitialValues;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Please, enter an email'),
  password: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'Password must be more than 8 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm your password!'),
});

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: LoginFormInitialValues) => {
    dispatch(logUserIn(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.loginForm}>
        <FormControl
          customClass={s.loginForm__formControl}
          field="email"
          placeholder="Email"
          inputClass={s.loginForm__formInput}
          type="text"
        />
        <FormControl
          customClass={s.loginForm__formControl}
          field="password"
          placeholder="Password"
          inputClass={s.loginForm__formInput}
          type="password"
        />
        <FormControl
          customClass={s.loginForm__formControl}
          field="passwordConfirm"
          placeholder="Password confirmation"
          inputClass={s.loginForm__formInput}
          type="password"
        />

        <button className={s.loginForm__btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
