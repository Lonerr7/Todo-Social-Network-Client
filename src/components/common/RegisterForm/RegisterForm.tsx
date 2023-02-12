import s from '../LoginForm/LoginForm.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { RegisterFormInitialValues } from '../../../types/formikTypes';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/reduxToolkitHooks';
import { signUserUp } from '../../../redux/authSlice';
import FormControl from '../FormControl/FormControl';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';

const initialValues = {
  email: 'newuser@gmail.com',
  nickname: '_nic3guy',
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
          field="nickname"
          placeholder="Nickname"
          inputClass={s.form__formInput}
          type="text"
          label="Nickname"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__formControl}
          field="firstName"
          placeholder="First Name"
          inputClass={s.form__formInput}
          type="text"
          label="First Name"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__formControl}
          field="lastName"
          placeholder="Last Name"
          inputClass={s.form__formInput}
          type="text"
          label="Last Name"
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
          customClass={s.form__formControl}
          field="passwordConfirm"
          placeholder="Password confirmation"
          inputClass={s.form__formInput}
          type="password"
          label="Password Confirmation"
          labelClass={s.form__label}
        />

        <SubmitLoadingBtn
          btnClass={s.form__btn}
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
