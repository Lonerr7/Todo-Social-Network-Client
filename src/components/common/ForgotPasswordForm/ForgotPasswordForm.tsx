import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { submitForgotPasswordEmail } from '../../../redux/forgotPasswordSlice';
import { ForgotPasswordInitialValues } from '../../../types/formikTypes';
import FormControl from '../FormControl/FormControl';
import FormStatus from '../FormStatus/FormStatus';
import s from './ForgotPasswordForm.module.scss';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';

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
    useAppSelector((state) => state.forgotPassword);
  const dispatch = useAppDispatch();

  const onSubmit = (values: ForgotPasswordInitialValues) => {
    dispatch(submitForgotPasswordEmail(values));
  };

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
            placeholder="Email"
            inputClass={s.form__formInput}
            type="text"
            label="Email"
            labelClass={s.form__label}
          />

          <div className={s.form__box}>
            <SubmitLoadingBtn
              btnClass={s.form__btn}
              btnType="submit"
              btnText="Send"
              btnFetchingText="Sending"
              isFetching={isForgotPasswordFetching}
              onSubmit={() => {}}
            />
            <FormStatus
              isSuccessfulySent={isForgotPasswordSuccessfullySent}
              preloaderClass={s.form__preloader}
              msgClass={s.form__success}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ForgotPasswordForm;
