import * as yup from 'yup';
import UpdateMyBeliefsInfoForm from './UpdateMyBeliefsInfoForm';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxToolkitHooks';
import { BeliefsInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyBeliefsInfo } from '../../../../redux/myselfSlice';
import { BeliefsFieldsToSend } from '../../../../types/reduxTypes/myselfSliceTypes';
import { useState } from 'react';
import { ReligionEnum } from '../../../../types/reduxTypes/authSliceTypes';

const validationSchema = yup.object({});

export type BeliefsValidationSchema = typeof validationSchema;

const UpdateMyBeliefsInfoFormContainer: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { isMyBeliefsInfoFetching, updateMyBeliefsInfoErrorMsg } =
    useAppSelector((state) => state.myslef);
  const { isUserBeliefsInfoSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const [selectValue, setSelectValue] = useState(
    currentUser.beliefs.religion || ReligionEnum.NOT_SELECTED
  );

  const selectOptions = [
    { label: 'Orthodoxy', value: ReligionEnum.ORTHODOXY },
    { label: 'Catholicism', value: ReligionEnum.CATHOLICISM },
    { label: 'Islam', value: ReligionEnum.ISLAM },
    { label: 'Judaism', value: ReligionEnum.JUDAISM },
    { label: 'Buddhism', value: ReligionEnum.BUDDHISM },
    { label: 'Not selected', value: ReligionEnum.NOT_SELECTED },
  ];

  const dispatch = useAppDispatch();

  const initialValues: BeliefsInfoInitialValues = {
    inspiredBy: currentUser.beliefs?.inspiredBy || '',
    politicalViews: currentUser.beliefs?.politicalViews || '',
  };

  const onSubmit = (data: BeliefsInfoInitialValues) => {
    const fieldsToSend: BeliefsFieldsToSend = {
      beliefs: {
        ...data,
        religion: selectValue,
      },
    };
    dispatch(updateMyBeliefsInfo(fieldsToSend));
  };

  const onSelectChange = (newValue: any) => {
    if (!newValue) {
      return setSelectValue(ReligionEnum.NOT_SELECTED);
    }
    setSelectValue(newValue.value);
  };

  return (
    <UpdateMyBeliefsInfoForm
      currentUser={currentUser}
      initialValues={initialValues}
      isMyBeliefsInfoFetching={isMyBeliefsInfoFetching}
      isUserBeliefsInfoSuccessfulySent={isUserBeliefsInfoSuccessfulySent}
      updateMyBeliefsInfoErrorMsg={updateMyBeliefsInfoErrorMsg}
      selectOptions={selectOptions}
      validationSchema={validationSchema}
      onSelectChange={onSelectChange}
      onSubmit={onSubmit}
    />
  );
};

export default UpdateMyBeliefsInfoFormContainer;
