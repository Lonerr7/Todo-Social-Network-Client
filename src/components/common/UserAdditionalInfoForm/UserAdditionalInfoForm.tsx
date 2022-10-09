import s from './UserAdditionalInfoForm.module.scss';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import FormControl from '../FormControl/FormControl';
import { AdditionalInfoInitialValues } from '../../../types/FormikTypes';
import SubmitLoadingBtn from '../SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch } from '../../../hooks/hooks';
import { sendMyAdditionalInfo } from '../../../redux/myselfSlice';

const initialValues: AdditionalInfoInitialValues = {
  dateOfBirth: '',
  country: '',
  cityOfBirth: '',
  currentCity: '',
};

const validationSchema = yup.object({});

const UserAdditionalInfoForm: React.FC = () => {
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
        <SubmitLoadingBtn
          btnClass={s.form__btn}
          btnType="submit"
          btnText="Send"
          btnFetchingText="Sending..."
          isFetching={false}
          onSubmit={() => {}}
        />
      </Form>
    </Formik>
  );
};

export default UserAdditionalInfoForm;
