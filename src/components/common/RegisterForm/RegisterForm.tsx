import s from './RegisterForm.module.scss';
import * as yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextError from '../TextError/TextError';
import { RegisterFormInitialValues } from '../../../types/FormikTypes';
import { useAppDispatch } from '../../../hooks/hooks';
import { signUserUp } from '../../../redux/authSlice';

const initialValues = {
  email: 'dasd@gmail.com',
  nickname: 'dasdadsd',
  password: '12345678',
  passwordConfirm: '12345678',
  // photo: req.body.photo,
} as RegisterFormInitialValues;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Please, enter an email'),
  nickname: yup.string().required('Please, enter a nickname'),
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
        <div className={s.registerForm__formControl}>
          <label htmlFor="email" />
          <Field
            className={s.registerForm__formInput}
            name="email"
            id="email"
            type="text"
            placeholder="Email"
          />
          <ErrorMessage name="email">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>
        <div className={s.registerForm__formControl}>
          <label htmlFor="nickname" />
          <Field
            className={s.registerForm__formInput}
            name="nickname"
            id="nickname"
            type="text"
            placeholder="Nickname"
          />
          <ErrorMessage name="nickname">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>
        <div className={s.registerForm__formControl}>
          <label htmlFor="password" />
          <Field
            className={s.registerForm__formInput}
            name="password"
            id="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="password">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>
        <div className={s.registerForm__formControl}>
          <label htmlFor="passwordConfirm" />
          <Field
            className={s.registerForm__formInput}
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            placeholder="Password confirmation"
          />
          <ErrorMessage name="passwordConfirm">
            {(err) => <TextError customClass={s.textError}>{err}</TextError>}
          </ErrorMessage>
        </div>

        <button className={s.registerForm__btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
