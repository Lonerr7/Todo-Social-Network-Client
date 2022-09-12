import s from './RegisterForm.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { RegisterFormInitialValues } from '../../../types/FormikTypes';
import { useAppDispatch } from '../../../hooks/hooks';
import { signUserUp } from '../../../redux/authSlice';
import FormControl from '../FormControl/FormControl';

const initialValues = {
  email: 'newuser@gmail.com',
  nickname: 'New User',
  password: 'gZ929ufnAdsa9',
  passwordConfirm: 'gZ929ufnAdsa9',
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
        <FormControl
          customClass={s.registerForm__formControl}
          field="email"
          placeholder="Email"
          inputClass={s.registerForm__formInput}
          type="text"
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="nickname"
          placeholder="Nickname"
          inputClass={s.registerForm__formInput}
          type="text"
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="password"
          placeholder="Password"
          inputClass={s.registerForm__formInput}
          type="password"
        />
        <FormControl
          customClass={s.registerForm__formControl}
          field="passwordConfirm"
          placeholder="Password confirmation"
          inputClass={s.registerForm__formInput}
          type="password"
        />

        <button className={s.registerForm__btn} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
