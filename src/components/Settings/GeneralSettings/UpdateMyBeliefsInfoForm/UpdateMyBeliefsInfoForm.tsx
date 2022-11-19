import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { BeliefsInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyBeliefsInfo } from '../../../../redux/myselfSlice';
import { BeliefsFieldsToSend } from '../../../../types/reduxTypes/myselfSliceTypes';
import { useState } from 'react';
import { ReligionEnum } from '../../../../types/reduxTypes/authSliceTypes';
import FormSelectControl from '../../../common/FormSelectControl/FormSelectControl';

const validationSchema = yup.object({});

const UpdateMyBeliefsInfoForm: React.FC = () => {
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <FormSelectControl
          options={selectOptions}
          defaultValue={
            currentUser.beliefs?.religion || ReligionEnum.NOT_SELECTED
          }
          onChange={onSelectChange}
          classNamePrefix="generalInfo_select"
          labelText="Religion"
          placeholder="Select your religion..."
        />
        <FormControl
          customClass={s.form__control}
          field="inspiredBy"
          placeholder="Inspired by"
          inputClass={s.form__input}
          type="text"
          label="Inspired by"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="politicalViews"
          placeholder="Political Views"
          inputClass={s.form__input}
          type="text"
          label="Political Views"
          labelClass={s.form__label}
        />
        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update beliefs"
            btnFetchingText="Updating beliefs"
            isFetching={isMyBeliefsInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={isUserBeliefsInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={updateMyBeliefsInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyBeliefsInfoForm;
