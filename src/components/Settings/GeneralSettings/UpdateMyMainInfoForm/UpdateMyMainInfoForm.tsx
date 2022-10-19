import s from '../../../../styles/formStyle.module.scss';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';

const validationSchema = yup.object({});

const UpdateMyMainInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { updateMyMainInfoErrorMsg } = useAppSelector((state) => state.myslef);
  // const {} = useAppSelector((state) => state.forms);
  const dispatch = useAppDispatch();

  const initialValues = {};

  const onSubmit = (values: any) => {};

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
        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update general information"
            btnFetchingText="Updating general information"
            isFetching={false} //!
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={false} //!
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError customClass={s.form__error} errorMsg={''} /> {/*//! */}
      </Form>
    </Formik>
  );
};

export default UpdateMyMainInfoForm;
