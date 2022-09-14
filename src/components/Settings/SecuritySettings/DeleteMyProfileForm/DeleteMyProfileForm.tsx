import s from '../../../../styles/formStyle.module.scss';
import st from './DeleteMyProfileForm.module.scss';
import * as yup from 'yup';
import { DeleteMyProfileInitialValues } from '../../../../types/FormikTypes';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormStatus from '../../../common/FormStatus/FormStatus';
import FormError from '../../../common/FormError/FormError';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { deleteMyProfile } from '../../../../redux/authSlice';

const initialValues: DeleteMyProfileInitialValues = {
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object({
  password: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'Password must be more than 8 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm your password'),
});

const DeleteMyProfileForm: React.FC = () => {
  const { isUserDeletingFetching, errorMsg } = useAppSelector(
    (state) => state.auth
  );
  const { isUserSucessfulyDeleted } = useAppSelector((state) => state.forms);
  const dispatch = useAppDispatch();

  const onSubmit = (passwords: DeleteMyProfileInitialValues) => {
    dispatch(deleteMyProfile(passwords));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.form}>
        <FormControl
          customClass={s.form__control}
          field="password"
          placeholder="Password"
          type="password"
          inputClass={s.form__input}
          label="Password"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="passwordConfirm"
          placeholder="Confirm your password"
          type="password"
          inputClass={s.form__input}
          label="Password confirmation"
          labelClass={s.form__label}
        />

        <div className={s.form__box}>
          <button className={`${s.form__btn} ${st.deleteBtn}`} type="submit">
            Delete Profile
          </button>
          <FormStatus
            isFetching={isUserDeletingFetching}
            isSuccessfulySent={isUserSucessfulyDeleted}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>

        <FormError errorMsg={errorMsg} customClass={s.form__error} />
      </Form>
    </Formik>
  );
};

export default DeleteMyProfileForm;
