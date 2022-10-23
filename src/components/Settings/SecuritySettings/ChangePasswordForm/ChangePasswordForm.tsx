import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { UpdateUserPasswordInitialValues } from '../../../../types/formikTypes';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormStatus from '../../../common/FormStatus/FormStatus';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { changePassword } from '../../../../redux/myselfSlice';
import FormError from '../../../common/FormError/FormError';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';

const initialValues: UpdateUserPasswordInitialValues = {
  currentPassword: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = yup.object({
  currentPassword: yup
    .string()
    .required('Please, enter your current password')
    .min(8, 'Password must be more than 8 characters'),
  password: yup
    .string()
    .required('Please, enter your new password')
    .min(8, 'New password must be more than 8 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm your new password'),
});

const ChangePasswordForm: React.FC = () => {
  const { isChangingPasswordFetching, changePasswordErrorMsg } = useAppSelector(
    (state) => state.myslef
  );
  const { isNewPasswordSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const dispatch = useAppDispatch();

  const onSubmit = (values: UpdateUserPasswordInitialValues) => {
    dispatch(changePassword(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <FormControl
            customClass={s.form__control}
            field="currentPassword"
            placeholder="Current password"
            type="password"
            inputClass={s.form__input}
            label="Current password"
            labelClass={s.form__label}
          />
          <FormControl
            customClass={s.form__control}
            field="password"
            placeholder="New password"
            type="password"
            inputClass={s.form__input}
            label="New password"
            labelClass={s.form__label}
          />
          <FormControl
            customClass={s.form__control}
            field="passwordConfirm"
            placeholder="Confirm your new password"
            type="password"
            inputClass={s.form__input}
            label="New password confirmation"
            labelClass={s.form__label}
          />

          <div className={s.form__box}>
            <SubmitLoadingBtn
              btnClass={s.form__btn}
              btnType="submit"
              btnText="Change Password"
              btnFetchingText="Changing"
              isFetching={isChangingPasswordFetching}
              onSubmit={() => {}}
            />
            <FormStatus
              isSuccessfulySent={isNewPasswordSuccessfulySent}
              preloaderClass={s.form__preloader}
              msgClass={s.form__success}
            />
          </div>

          <FormError
            errorMsg={changePasswordErrorMsg}
            customClass={s.form__error}
          />
        </Form>
      </Formik>
    </>
  );
};

export default ChangePasswordForm;
