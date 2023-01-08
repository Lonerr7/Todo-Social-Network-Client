import s from './LoginForm.module.scss';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { logUserIn } from '../../../redux/authSlice';
import { LoginFormInitialValues } from '../../../types/formikTypes';
import FormControl from '../FormControl/FormControl';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';
import { Link } from 'react-router-dom';

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
  const { isFetching } = useAppSelector((state) => state.auth);
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
          label="Email"
          labelClass={s.loginForm__label}
        />
        <FormControl
          customClass={s.loginForm__formControl}
          field="password"
          placeholder="Password"
          inputClass={s.loginForm__formInput}
          type="password"
          label="Password"
          labelClass={s.loginForm__label}
        />
        <FormControl
          customClass={`${s.loginForm__formControl} ${s.loginForm__formControl_last}`}
          field="passwordConfirm"
          placeholder="Password confirmation"
          inputClass={s.loginForm__formInput}
          type="password"
          label="Password confirmation"
          labelClass={s.loginForm__label}
        />

        <Link className={s.loginForm__link} to="/forgotPassword">
          Forgot Password?
        </Link>

        <SubmitLoadingBtn
          btnClass={s.loginForm__btn}
          btnType="submit"
          btnText="Log In"
          btnFetchingText="Logging You In"
          isFetching={isFetching}
          onSubmit={() => {}}
        />
      </Form>
    </Formik>
  );
};

export default LoginForm;
