import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { PersonalInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyPersonalInfo } from '../../../../redux/myselfSlice';
import { useState } from 'react';
import { AttitudeTowardsEnum } from '../../../../types/reduxTypes/authSliceTypes';
import FormSelectControl from '../../../common/FormSelectControl/FormSelectControl';
import { PersonalInfoFieldsToSend } from '../../../../types/reduxTypes/myselfSliceTypes';

const validationSchema = yup.object({});

const UpdateMyPersonalInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { isMyPersonalInfoFetching, updateMyPersonalInfoErrorMsg } =
    useAppSelector((state) => state.myslef);
  const { isUserPersonalInfoSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const [selectSmokingAttidute, setSelectSmokingAttidute] = useState(
    currentUser.personalInfo?.attitudeTowardsSmoking ||
      AttitudeTowardsEnum.NOT_SELECTED
  );
  const [selectDrinkingAttitude, setSelectDrinkingAttidute] = useState(
    currentUser.personalInfo?.attitudeTowardsDrinking ||
      AttitudeTowardsEnum.NOT_SELECTED
  );
  
  const selectOptions = [
    { label: 'Negative', value: AttitudeTowardsEnum.NEGATIVE },
    { label: 'Neutral', value: AttitudeTowardsEnum.NEUTRAL },
    { label: 'Positive', value: AttitudeTowardsEnum.POSITIVE },
    { label: 'Compromise', value: AttitudeTowardsEnum.COMPROMISE },
    { label: 'Not selected', value: AttitudeTowardsEnum.NOT_SELECTED },
  ];

  const dispatch = useAppDispatch();

  const initialValues: PersonalInfoInitialValues = {
    aboutMe: currentUser.personalInfo?.aboutMe || '',
    activities: currentUser.personalInfo?.activities || '',
    favoriteMovies: currentUser.personalInfo?.favoriteMovies || '',
    favoriteMusic: currentUser.personalInfo?.favoriteMusic || '',
    favouriteBooks: currentUser.personalInfo?.favouriteBooks || '',
    interests: currentUser.personalInfo?.interests || '',
  };

  const onSmokingSelectChange = (newValue: any) => {
    if (!newValue) {
      return setSelectSmokingAttidute(AttitudeTowardsEnum.NOT_SELECTED);
    }
    setSelectSmokingAttidute(newValue.value);
  };

  const onDrinkingSelectChange = (newValue: any) => {
    if (!newValue) {
      return setSelectDrinkingAttidute(AttitudeTowardsEnum.NOT_SELECTED);
    }
    setSelectDrinkingAttidute(newValue.value);
  };

  const onSubmit = (data: PersonalInfoInitialValues) => {
    const fieldsToSend: PersonalInfoFieldsToSend = {
      personalInfo: {
        ...data,
        attitudeTowardsDrinking: selectDrinkingAttitude,
        attitudeTowardsSmoking: selectSmokingAttidute,
      },
    };

    dispatch(updateMyPersonalInfo(fieldsToSend));
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
          field="aboutMe"
          placeholder="About Me"
          inputClass={s.form__input}
          type="text"
          label="About Me"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="activities"
          placeholder="Activities"
          inputClass={s.form__input}
          type="text"
          label="Activities"
          labelClass={s.form__label}
        />
        <FormSelectControl
          options={selectOptions}
          classNamePrefix="generalInfo_select"
          defaultValue={
            currentUser.personalInfo?.attitudeTowardsSmoking ||
            AttitudeTowardsEnum.NOT_SELECTED
          }
          labelText="Attidute towards smoking"
          onChange={onSmokingSelectChange}
          placeholder="Select your attitude..."
        />
        <FormSelectControl
          options={selectOptions}
          classNamePrefix="generalInfo_select"
          defaultValue={
            currentUser.personalInfo?.attitudeTowardsDrinking ||
            AttitudeTowardsEnum.NOT_SELECTED
          }
          labelText="Attidute towards drinking"
          onChange={onDrinkingSelectChange}
          placeholder="Select your drinking..."
        />
        <FormControl
          customClass={s.form__control}
          field="attitudeTowardsDrinking"
          placeholder="Attitude towards drinking"
          inputClass={s.form__input}
          type="text"
          label="Attitude towards drinking"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="favoriteMovies"
          placeholder="Favorite movies"
          inputClass={s.form__input}
          type="text"
          label="Favorite movies"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="favoriteMusic"
          placeholder="Favorite music"
          inputClass={s.form__input}
          type="text"
          label="Favorite music"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="favouriteBooks"
          placeholder="Favourite books"
          inputClass={s.form__input}
          type="text"
          label="Favourite books"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="interests"
          placeholder="Interests"
          inputClass={s.form__input}
          type="text"
          label="Interests"
          labelClass={s.form__label}
        />
        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update contact information"
            btnFetchingText="Updating contact information"
            isFetching={isMyPersonalInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={isUserPersonalInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={updateMyPersonalInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyPersonalInfoForm;
