import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { ContactInfoInitialValues } from '../../../../types/formikTypes';
import { updateMyContactInfo } from '../../../../redux/myselfSlice';

const validationSchema = yup.object({
  discord: yup.string().max(40, 'Your discord is too long!'),
});

const UpdateMyContactInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { isMyContactInfoFetching, updateMyContactInfoErrorMsg } =
    useAppSelector((state) => state.myslef);
  const { isUserContactInfoSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const dispatch = useAppDispatch();

  const initialValues: ContactInfoInitialValues = {
    phoneNumber: currentUser.contactInfo?.phoneNumber || '',
    discord: currentUser.contactInfo?.discord || '',
  };

  const onSubmit = (data: ContactInfoInitialValues) => {
    dispatch(updateMyContactInfo(data));
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
          field="phoneNumber"
          placeholder="Phone number"
          inputClass={s.form__input}
          type="text"
          label="Phone number"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="discord"
          placeholder="Discord"
          inputClass={s.form__input}
          type="text"
          label="Discord"
          labelClass={s.form__label}
        />
        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update contact information"
            btnFetchingText="Updating contact information"
            isFetching={isMyContactInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={isUserContactInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={updateMyContactInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyContactInfoForm;
