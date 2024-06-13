import s from './LoginForm.module.scss';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxToolkitHooks';
import { clearErrorMsg, logUserIn } from '../../../redux/authSlice';
import { LoginFormInitialValues } from '../../../types/formikTypes';
import FormControl from '../FormControl/FormControl';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

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

  useEffect(() => {
    return () => {
      dispatch(clearErrorMsg());
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <FormControl
          customClass={s.form__formControl}
          field="email"
          placeholder="Email"
          inputClass={s.form__formInput}
          type="text"
          label="Email"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__formControl}
          field="password"
          placeholder="Password"
          inputClass={s.form__formInput}
          type="password"
          label="Password"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={`${s.form__formControl} ${s.form__formControl_last}`}
          field="passwordConfirm"
          placeholder="Password confirmation"
          inputClass={s.form__formInput}
          type="password"
          label="Password confirmation"
          labelClass={s.form__label}
        />

        <Link className={s.form__link} to="/Todo-Social-Network-Client/forgotPassword">
          Forgot Password?
        </Link>

        <SubmitLoadingBtn
          btnClass={s.form__btn}
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
