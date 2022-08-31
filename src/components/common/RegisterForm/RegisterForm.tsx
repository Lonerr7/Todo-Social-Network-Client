import s from './RegisterForm.module.scss';
import * as yup from 'yup';

const initialValues = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirm: '',
  // photo: req.body.photo,
};

const validationSchema = yup.object({
  email: yup.string().email(), // !
  nickname: yup.string(),
  password: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'Password must be more than 8 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const RegisterForm: React.FC = () => {
  return <div>RegisterForm</div>;
};

export default RegisterForm;
