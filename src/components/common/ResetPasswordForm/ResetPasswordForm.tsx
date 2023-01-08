import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxToolkitHooks';
import { submitResetPassword } from '../../../redux/passwordSlice';
import { ResetPasswordInitialValues } from '../../../types/formikTypes';
import s from '../ForgotPasswordForm/ForgotPasswordForm.module.scss';
import FormControl from '../FormControl/FormControl';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';

const validationSchema = yup.object({
  resetToken: yup.string().required('Please, enter an email'),
  password: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'Password must be more than 8 characters'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm your password!'),
});

const initialValues: ResetPasswordInitialValues = {
  resetToken: '',
  password: '',
  passwordConfirm: '',
};

const ResetPasswordForm = () => {
  const isFetching = useAppSelector(
    (state) => state.password.isResetPasswordFetching
  );
  const dispatch = useAppDispatch();

  const onSubmit = (values: ResetPasswordInitialValues) => {
    dispatch(submitResetPassword(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <FormControl
          customClass={s.form__formControl}
          field="resetToken"
          placeholder="Your password reset token..."
          inputClass={s.form__formInput}
          type="text"
          label="Password reset token"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__formControl}
          field="password"
          placeholder="Your new password..."
          inputClass={s.form__formInput}
          type="password"
          label="New password"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__formControl}
          field="passwordConfirm"
          placeholder="Confirm your new password..."
          inputClass={s.form__formInput}
          type="password"
          label="Password confirmation"
          labelClass={s.form__label}
        />

        <SubmitLoadingBtn
          btnClass={s.form__btn}
          btnType="submit"
          btnText="Send"
          btnFetchingText="Sending"
          isFetching={isFetching}
          onSubmit={() => {}}
        />
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
