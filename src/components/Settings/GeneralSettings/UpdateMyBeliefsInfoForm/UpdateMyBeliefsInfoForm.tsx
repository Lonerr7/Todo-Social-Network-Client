import s from '../../../../styles/formStyle.module.scss';
import FormSelectControl from '../../../common/FormSelectControl/FormSelectControl';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import {
  ReligionEnum,
  User,
} from '../../../../types/reduxTypes/authSliceTypes';
import { BeliefsInfoInitialValues } from '../../../../types/formikTypes';
import { BeliefsValidationSchema } from './UpdateMyBeliefsInfoFormContainer';

interface Props {
  currentUser: User;
  initialValues: BeliefsInfoInitialValues;
  isMyBeliefsInfoFetching: boolean;
  isUserBeliefsInfoSuccessfulySent: boolean;
  updateMyBeliefsInfoErrorMsg: string;
  selectOptions: any[];
  validationSchema: BeliefsValidationSchema;
  onSubmit: (values: BeliefsInfoInitialValues) => void;
  onSelectChange: (newValue: any) => void;
}

const UpdateMyBeliefsInfoForm: React.FC<Props> = (props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={props.validationSchema}
    >
      <Form className={s.form}>
        <FormSelectControl
          options={props.selectOptions}
          defaultValue={
            props.currentUser.beliefs?.religion || ReligionEnum.NOT_SELECTED
          }
          onChange={props.onSelectChange}
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
            isFetching={props.isMyBeliefsInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={props.isUserBeliefsInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={props.updateMyBeliefsInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyBeliefsInfoForm;
