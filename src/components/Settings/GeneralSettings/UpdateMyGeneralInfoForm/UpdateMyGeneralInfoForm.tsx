import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { GeneralInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyGeneralInfo } from '../../../../redux/myselfSlice';
import FormSelectControl from '../../../common/FormSelectControl/FormSelectControl';
import { RelationshipEnum } from '../../../../types/reduxTypes/authSliceTypes';
import { useState } from 'react';
import { GeneralInfoFieldsToSend } from '../../../../types/reduxTypes/myselfSliceTypes';

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
  const [selectValue, setSelectValue] = useState(
    currentUser.generalInfo?.relationship || RelationshipEnum.NOT_SELECTED
  );

  const selectOptions = [
    { label: 'Single', value: RelationshipEnum.SINGLE },
    { label: 'In active search', value: RelationshipEnum.IN_ACTIVE_SEARCH },
    { label: 'Not married', value: RelationshipEnum.NOT_MARRIED },
    { label: 'Married', value: RelationshipEnum.MARRIED },
    { label: 'Not selected', value: RelationshipEnum.NOT_SELECTED },
  ];

  const dispatch = useAppDispatch();

  const initialValues: GeneralInfoInitialValues = {
    dateOfBirth: currentUser.generalInfo?.dateOfBirth
      ? new Date(currentUser.generalInfo?.dateOfBirth)
          .toISOString()
          .split('T')[0]
      : '',
    country: currentUser.generalInfo?.country || '',
    currentCity: currentUser.generalInfo?.currentCity || '',
    jobPlace: currentUser.generalInfo?.jobPlace || '',
    website: currentUser.generalInfo?.website || '',
  };

  const onSubmit = (values: GeneralInfoInitialValues) => {
    const fieldsToSend: GeneralInfoFieldsToSend = {
      generalInfo: {
        ...values,
        relationship: selectValue,
      },
    };

    dispatch(updateMyGeneralInfo(fieldsToSend));
  };

  const onSelectChange = (newValue: any) => {
    setSelectValue(newValue.value);
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
        {/* <FormControl
          customClass={s.form__control}
          field="relationship"
          placeholder="Relationship"
          inputClass={s.form__input}
          type="text"
          label="Relationship"
          labelClass={s.form__label}
        /> */}
        <FormSelectControl
          options={selectOptions}
          defaultValue={
            currentUser.generalInfo?.relationship ||
            RelationshipEnum.NOT_SELECTED
          }
          onChange={onSelectChange}
        />
        <button onClick={() => console.log(selectValue)} type="button">
          Log selected value
        </button>
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
            btnText="Update general information"
            btnFetchingText="Updating general information"
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
