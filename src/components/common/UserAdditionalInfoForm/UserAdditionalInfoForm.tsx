import s from './UserAdditionalInfoForm.module.scss';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormControl from '../FormControl/FormControl';
import { AdditionalInfoInitialValues } from '../../../types/FormikTypes';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { sendMyAdditionalInfo } from '../../../redux/myselfSlice';
import FormError from '../FormError/FormError';

const initialValues: AdditionalInfoInitialValues = {
  dateOfBirth: '',
  country: '',
  cityOfBirth: '',
  currentCity: '',
  phoneNumber: '',
};

const validationSchema = yup.object({
  dateOfBirth: yup.date().required('Please, enter your birthday date'),
  country: yup.string().required('Please, enter your country'),
  cityOfBirth: yup.string().required('Please, enter the city you were born in'),
  currentCity: yup.string().required('Please, enter the city you live in'),
  // mobileNumber: yup
  //   .string()
  //   .matches(phoneRegExp, 'Please, enter a valid phone number'),
});

const UserAdditionalInfoForm: React.FC = () => {
  const errMsg = useAppSelector(
    (state) => state.myslef.sendMyAdditionalInfoErrorMsg
  );
  const dispatch = useAppDispatch();

  const onSubmit = (values: AdditionalInfoInitialValues) => {
    dispatch(sendMyAdditionalInfo(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <FormControl
          customClass={s.form__control}
          field="dateOfBirth"
          placeholder="Date of birth"
          inputClass={s.form__input}
          type="date"
          label="Date of birth"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="country"
          placeholder="Country"
          inputClass={s.form__input}
          type="text"
          label="Country"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="currentCity"
          placeholder="City"
          inputClass={s.form__input}
          type="text"
          label="City"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="cityOfBirth"
          placeholder="City of birth"
          inputClass={s.form__input}
          type="text"
          label="City of birth"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="phoneNumber"
          placeholder="Phone number"
          inputClass={s.form__input}
          type="tel"
          label="Phone number"
          labelClass={s.form__label}
        />
        <SubmitLoadingBtn
          btnClass={s.form__btn}
          btnType="submit"
          btnText="Send"
          btnFetchingText="Sending..."
          isFetching={false}
          onSubmit={() => {}}
        />
        <FormError customClass={s.form__error} errorMsg={errMsg} />
      </Form>
    </Formik>
  );
};

export default UserAdditionalInfoForm;
