import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { LoginFormInitialValues } from '../../../types/FormikTypes';
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
        <div className={s.loginForm__formControl}>
          <label htmlFor="email" />
          <Field
            className={s.loginForm__formInput}
            name="email"
            id="email"
            type="text"
            placeholder="Email"
          />
          <ErrorMessage name="email">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>

        <div className={s.loginForm__formControl}>
          <label htmlFor="password" />
          <Field
            className={s.loginForm__formInput}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="password">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>

        <div className={s.loginForm__formControl}>
          <label htmlFor="passwordConfirm" />
          <Field
            className={s.loginForm__formInput}
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            placeholder="Password confirmation"
          />
          <ErrorMessage name="passwordConfirm">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>

        <button className={s.loginForm__btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
