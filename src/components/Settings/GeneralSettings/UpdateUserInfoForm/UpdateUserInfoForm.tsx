import { Form, Formik } from 'formik';
import s from './UpdateUserInfoForm.module.scss';
import * as yup from 'yup';
import { UpdateUserFromInitialValues } from '../../../../types/FormikTypes';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import FormControl from '../../../common/FormControl/FormControl';
import { updateMe } from '../../../../redux/authSlice';
import TextError from '../../../common/TextError/TextError';

const validationSchema = yup.object({
  nickname: yup.string().max(20, 'Your nickname is too long'),
});

const UpdateUserInfoForm: React.FC = () => {
  const { user: currentUser, errorMsg } = useAppSelector(
    (state) => state.auth
  )!;
  const dispatch = useAppDispatch();

  const initialValues = {
    nickname: currentUser?.nickname,
  };

  const onSubmit = (values: any) => {
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
          <button className={s.form__btn} type="submit">
            Update Profile
          </button>
        </Form>
      </Formik>
      {errorMsg ? <TextError>{errorMsg}</TextError> : ''}
    </>
  );
};

export default UpdateUserInfoForm;
