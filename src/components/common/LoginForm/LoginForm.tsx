import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { LoginFormInitialValues } from '../../../types/FormikTypes';
import FormControl from '../FormControl/FormControl';
import TextError from '../TextError/TextError';
import s from './LoginForm.module.scss';

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
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

const onSubmit = (values: LoginFormInitialValues) => {
  console.log(values);
};

const LoginForm: React.FC = () => {
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
