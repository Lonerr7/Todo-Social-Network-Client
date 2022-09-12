import { Form, Formik } from 'formik';
import s from './UpdateUserInfoForm.module.scss';
import * as yup from 'yup';
import { UpdateUserFromInitialValues } from '../../../../types/FormikTypes';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import FormControl from '../../../common/FormControl/FormControl';
import { updateMe } from '../../../../redux/authSlice';
import TextError from '../../../common/TextError/TextError';
import Preloader from '../../../common/Preloader/Preloader';

const validationSchema = yup.object({
  nickname: yup.string().max(20, 'Your nickname is too long'),
  bio: yup.string().max(100, 'Your bio is too long'),
});

const UpdateUserInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { errorMsg, isUserUpdateFetching } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const initialValues: UpdateUserFromInitialValues = {
    nickname: currentUser.nickname,
    bio: currentUser.bio ? currentUser.bio : '',
    firstName: '',
    lastName: '',
  };

  const onSubmit = (values: UpdateUserFromInitialValues) => {
    dispatch(updateMe(values));
  };

  return (
    <>
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
            field="bio"
            placeholder="Bio"
            type="text"
            inputClass={s.form__input}
            label="Bio"
            labelClass={s.form__label}
          />

          <div className={s.form__box}>
            <button className={s.form__btn} type="submit">
              Update Profile
            </button>
            {isUserUpdateFetching && (
              <Preloader customClass={s.form__preloader} />
            )}
          </div>
        </Form>
      </Formik>
      {errorMsg ? <TextError>{errorMsg}</TextError> : ''}
    </>
  );
};

export default UpdateUserInfoForm;
