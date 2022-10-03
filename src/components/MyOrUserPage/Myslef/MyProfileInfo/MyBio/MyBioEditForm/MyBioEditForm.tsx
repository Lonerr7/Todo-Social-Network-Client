import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/hooks';
import { updateMyBio } from '../../../../../../redux/myselfSlice';
import FormControl from '../../../../../common/FormControl/FormControl';
import SubmitLoadingBtn from '../../../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import s from './MyBioEditForm.module.scss';

type Props = {
  bio: string;
  toggleEditMode: () => void;
};

const validationSchema = yup.object({
  bio: yup
    .string()
    .max(100, 'Your bio is too long. Maximum is 100 characters.'),
});

const MyBioEditForm: React.FC<Props> = ({ bio, toggleEditMode }) => {
  const { isMyBioUpdating } = useAppSelector((state) => state.myslef);
  const dispatch = useAppDispatch();

  const onSubmit = async (values: { bio: string }) => {
    await dispatch(updateMyBio(values));

    toggleEditMode();
  };

  const initialValues = {
    bio,
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
          inputClass={s.form__input}
          errorClass={s.form__inputError}
          type="text"
          field="bio"
          placeholder="Enter your new bio here..."
        />
        <div className={s.form__buttons}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnFetchingText="Changing..."
            btnText="Ok"
            btnType="submit"
            isFetching={isMyBioUpdating}
            onSubmit={() => {}}
          />
          <button
            type="button"
            className={s.form__btn}
            onClick={toggleEditMode}
          >
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyBioEditForm;
