import { useState } from 'react';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxToolkitHooks';
import { GeneralInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyGeneralInfo } from '../../../../redux/myselfSlice';
import { RelationshipEnum } from '../../../../types/reduxTypes/authSliceTypes';
import { GeneralInfoFieldsToSend } from '../../../../types/reduxTypes/myselfSliceTypes';
import UpdateMyGeneralInfoForm from './UpdateMyGeneralInfoForm';

const validationSchema = yup.object({
  currentCity: yup.string().max(20, 'City name is too long'),
});

export type GeneralInfoValidationSchema = typeof validationSchema;

const UpdateMyGeneralInfoFormContainer = () => {
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
    if (!newValue) {
      return setSelectValue(RelationshipEnum.NOT_SELECTED);
    }
    setSelectValue(newValue.value);
  };

  return (
    <UpdateMyGeneralInfoForm
      initialValues={initialValues}
      updateMyGeneralInfoErrorMsg={updateMyGeneralInfoErrorMsg}
      currentUser={currentUser}
      isMyGeneralInfoFetching={isMyGeneralInfoFetching}
      isUserGeneralInfoSuccessfulySent={isUserGeneralInfoSuccessfulySent}
      onSelectChange={onSelectChange}
      onSubmit={onSubmit}
      selectOptions={selectOptions}
      validationSchema={validationSchema}
    />
  );
};

export default UpdateMyGeneralInfoFormContainer;
