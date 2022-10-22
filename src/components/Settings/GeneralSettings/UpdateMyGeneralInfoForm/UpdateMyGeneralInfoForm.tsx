import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { GeneralInfoInitialValues } from '../../../../types/FormikTypes';
import { updateMyGeneralInfo } from '../../../../redux/myselfSlice';

const validationSchema = yup.object({
  cityOfBirth: yup.string().max(20, 'City name is too long'),
  nativeLanguage: yup.string().max(20, 'Language name is too long'),
});

const UpdateMyGeneralInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { updateMyGeneralInfoErrorMsg, isMyGeneralInfoFetching } =
    useAppSelector((state) => state.myslef);
  const { isUserGeneralInfoSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const dispatch = useAppDispatch();

  const initialValues: GeneralInfoInitialValues = {
    dateOfBirth: currentUser.generalInfo?.dateOfBirth || '',
    country: currentUser.generalInfo?.country || '',
    currentCity: currentUser.generalInfo?.currentCity || '',
    relationship: currentUser.generalInfo?.relationship || '',
    jobPlace: currentUser.generalInfo?.jobPlace || '',
    website: currentUser.generalInfo?.website || '',
  };

  const onSubmit = (values: GeneralInfoInitialValues) => {
    dispatch(updateMyGeneralInfo(values));
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
          field="relationship"
          placeholder="Relationship"
          inputClass={s.form__input}
          type="text"
          label="Relationship"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="website"
          placeholder="Website"
          inputClass={s.form__input}
          type="text"
          label="Website"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="jobPlace"
          placeholder="Job Place"
          inputClass={s.form__input}
          type="text"
          label="Job Place"
          labelClass={s.form__label}
        />
        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update main information"
            btnFetchingText="Updating main information"
            isFetching={isMyGeneralInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={isUserGeneralInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={updateMyGeneralInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyGeneralInfoForm;
