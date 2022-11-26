import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  submitForgotPasswordEmail,
  toggleIsForgotPasswordSent,
} from '../../../redux/forgotPasswordSlice';
import { ForgotPasswordInitialValues } from '../../../types/formikTypes';
import FormControl from '../FormControl/FormControl';
import FormStatus from '../FormStatus/FormStatus';
import s from './ForgotPasswordForm.module.scss';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';
import { Link, Navigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
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
  const {
    isForgotPasswordFetching,
    isForgotPasswordSuccessfullySent,
    successMsg,
  } = useAppSelector((state) => state.forgotPassword);
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
    <div className={s.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
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

          {isForgotPasswordSuccessfullySent ? (
            <div className={s.form__box}>
              <FormStatus
                isSuccessfulySent={isForgotPasswordSuccessfullySent}
                preloaderClass={s.form__preloader}
                msgClass={s.form__success}
                message={successMsg}
              />
              <Link className={s.form__link} to="/">
                Next
                <HiArrowRight className={s.form__linkIcon} size={24} />
              </Link>
            </div>
          ) : (
            ''
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
