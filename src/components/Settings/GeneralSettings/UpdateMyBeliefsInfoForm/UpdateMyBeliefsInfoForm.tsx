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

const validationSchema = yup.object({});

const UpdateMyBeliefsInfoForm: React.FC = () => {
  const currentUser = useAppSelector((state) => state.auth.user)!;
  const { isMyBeliefsInfoFetching, updateMyBeliefsInfoErrorMsg } =
    useAppSelector((state) => state.myslef);
  const { isUserBeliefsInfoSuccessfulySent } = useAppSelector(
    (state) => state.forms
  );
  const dispatch = useAppDispatch();

  const initialValues: BeliefsInfoInitialValues = {
    inspiredBy: currentUser.beliefs?.inspiredBy || '',
    politicalViews: currentUser.beliefs?.politicalViews || '',
    religion: currentUser.beliefs?.religion || '',
  };

  const onSubmit = (data: BeliefsInfoInitialValues) => {
    dispatch(updateMyBeliefsInfo(data));
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
        <FormControl
          customClass={s.form__control}
          field="religion"
          placeholder="Religion"
          inputClass={s.form__input}
          type="text"
          label="Religion"
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
