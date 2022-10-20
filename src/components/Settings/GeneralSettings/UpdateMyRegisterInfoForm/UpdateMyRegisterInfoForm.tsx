import s from '../../../../styles/formStyle.module.scss';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { UpdateMyRegisterlInfoFormInitialValues } from '../../../../types/FormikTypes';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import FormControl from '../../../common/FormControl/FormControl';
import { updateMyRegisterInfo } from '../../../../redux/myselfSlice';
import FormStatus from '../../../common/FormStatus/FormStatus';
import FormError from '../../../common/FormError/FormError';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';

const validationSchema = yup.object({
  nickname: yup
    .string()
    .max(20, 'Your nickname is too long')
    .min(3, 'Your nickname is too short')
    .required('Nickname is required!'),
  firstName: yup
    .string()
    .max(20, 'Your first name is too long')
    .required('First name is required!'),
  lastName: yup
    .string()
    .max(20, 'Your last name is too long')
    .required('Last name is required!'),
  bio: yup.string().max(100, 'Your bio is too long'),
});

const UpdateMyRegisterInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { updateMyRegisterInfoErrorMsg, isMyRegisterInfoFetching } =
    useAppSelector((state) => state.myslef);
  const { isUserRegisterInfoSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const dispatch = useAppDispatch();

  const initialValues: UpdateMyRegisterlInfoFormInitialValues = {
    nickname: currentUser.nickname,
    bio: currentUser.bio || '',
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
  };

  const onSubmit = (values: UpdateMyRegisterlInfoFormInitialValues) => {
    dispatch(
      updateMyRegisterInfo({
        nickname: values.nickname.trim(),
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        bio: values.bio.trim(),
      })
    );
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
          field="nickname"
          placeholder="Nickname"
          type="text"
          inputClass={s.form__input}
          label="Nickname"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="firstName"
          placeholder="First name"
          type="text"
          inputClass={s.form__input}
          label="First name"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="lastName"
          placeholder="Last name"
          type="text"
          inputClass={s.form__input}
          label="Last name"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="bio"
          placeholder="Bio"
          type="text"
          inputClass={`${s.form__input} ${s.form__textarea}`}
          label="Bio"
          labelClass={s.form__label}
          component="textarea"
        />

        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update general information"
            btnFetchingText="Updating general information"
            isFetching={isMyRegisterInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={isUserRegisterInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={updateMyRegisterInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyRegisterInfoForm;
