import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxToolkitHooks';
import { PersonalInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyPersonalInfo } from '../../../../redux/myselfSlice';
import { useState } from 'react';
import * as yup from 'yup';
import { AttitudeTowardsEnum } from '../../../../types/reduxTypes/authSliceTypes';
import { PersonalInfoFieldsToSend } from '../../../../types/reduxTypes/myselfSliceTypes';
import UpdateMyPersonalInfoForm from './UpdateMyPersonalInfoForm';

const validationSchema = yup.object({});

export type PersonalInfoValidationShema = typeof validationSchema;

const UpdateMyPersonalInfoFormContainer = () => {
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
    <UpdateMyPersonalInfoForm
      initialValues={initialValues}
      currentUser={currentUser}
      isMyPersonalInfoFetching={isMyPersonalInfoFetching}
      isUserPersonalInfoSuccessfulySent={isUserPersonalInfoSuccessfulySent}
      updateMyPersonalInfoErrorMsg={updateMyPersonalInfoErrorMsg}
      selectOptions={selectOptions}
      validationSchema={validationSchema}
      onDrinkingSelectChange={onDrinkingSelectChange}
      onSmokingSelectChange={onSmokingSelectChange}
      onSubmit={onSubmit}
    />
  );
};

export default UpdateMyPersonalInfoFormContainer;
