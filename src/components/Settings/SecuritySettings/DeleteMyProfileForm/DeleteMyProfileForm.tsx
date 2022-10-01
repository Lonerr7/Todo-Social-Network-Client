import s from '../../../../styles/formStyle.module.scss';
import st from './DeleteMyProfileForm.module.scss';
import * as yup from 'yup';
import { DeleteMyProfileInitialValues } from '../../../../types/FormikTypes';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormStatus from '../../../common/FormStatus/FormStatus';
import FormError from '../../../common/FormError/FormError';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { DeleteMePasswords } from '../../../../types/axiosTypes';
import { openPopup } from '../../../../redux/areYouSurePopupSlice';

const initialValues: DeleteMyProfileInitialValues = {
  myPassword: '',
  myPasswordConfirm: '',
};

const validationSchema = yup.object({
  myPassword: yup
    .string()
    .required('Please, enter your password')
    .min(8, 'Password must be more than 8 characters'),
  myPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('myPassword'), null], 'Passwords must match')
    .required('Please, confirm your password'),
});

const DeleteMyProfileForm: React.FC = () => {
  const { deleteMyProfileErrorMsg } = useAppSelector((state) => state.myslef);
  const { isUserSucessfulyDeleted } = useAppSelector((state) => state.forms);
  const dispatch = useAppDispatch();

  const onSubmit = ({
    myPassword,
    myPasswordConfirm,
  }: DeleteMyProfileInitialValues) => {
    // Obj to prevent duplicate id fields warning
    const obj: DeleteMePasswords = {
      password: myPassword,
      passwordConfirm: myPasswordConfirm,
    };

    // dispatch(deleteMyProfile(obj));
    dispatch(openPopup(obj));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.form}>
        <FormControl
          customClass={s.form__control}
          field="myPassword"
          placeholder="Password"
          type="password"
          inputClass={s.form__input}
          label="Password"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="myPasswordConfirm"
          placeholder="Confirm your password"
          type="password"
          inputClass={s.form__input}
          label="Password confirmation"
          labelClass={s.form__label}
        />

        <div className={s.form__box}>
          <button className={`${s.form__btn} ${st.deleteBtn}`} type="submit">
            Delete Profile
          </button>
          <FormStatus
            isSuccessfulySent={isUserSucessfulyDeleted}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>

        <FormError
          errorMsg={deleteMyProfileErrorMsg}
          customClass={s.form__error}
        />
      </Form>
    </Formik>
  );
};

export default DeleteMyProfileForm;
