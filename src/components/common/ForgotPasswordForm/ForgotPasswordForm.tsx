import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxToolkitHooks';
import {
  submitForgotPasswordEmail,
  toggleIsForgotPasswordSent,
} from '../../../redux/passwordSlice';
import { ForgotPasswordInitialValues } from '../../../types/formikTypes';
import FormControl from '../FormControl/FormControl';
import s from './ForgotPasswordForm.module.scss';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';

const initialValues = {
  email: '',
} as ForgotPasswordInitialValues;

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Please, enter an email'),
});

const ForgotPasswordForm: React.FC = () => {
  const { isForgotPasswordFetching, isForgotPasswordSuccessfullySent } =
    useAppSelector((state) => state.password);
  const dispatch = useAppDispatch();

  const onSubmit = (values: ForgotPasswordInitialValues) => {
    dispatch(submitForgotPasswordEmail(values));
  };

  useEffect(() => {
    return () => {
      dispatch(toggleIsForgotPasswordSent(false));
    };

    // eslint-disable-next-line
  }, []);

  if (isForgotPasswordSuccessfullySent) {
    return <Navigate to="/resetPassword" />;
  }

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
          placeholder="Enter your email..."
          inputClass={s.form__formInput}
          type="text"
          label="Email"
          labelClass={s.form__label}
        />

        <SubmitLoadingBtn
          btnClass={s.form__btn}
          btnType="submit"
          btnText="Send"
          btnFetchingText="Sending"
          isFetching={isForgotPasswordFetching}
          onSubmit={() => {}}
        />
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
