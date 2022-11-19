import s from '../../../../styles/formStyle.module.scss';
import { Form, Formik } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import FormSelectControl from '../../../common/FormSelectControl/FormSelectControl';
import {
  RelationshipEnum,
  User,
} from '../../../../types/reduxTypes/authSliceTypes';
import { GeneralInfoInitialValues } from '../../../../types/formikTypes';
import { GeneralInfoValidationSchema } from './UpdateMyGeneralInfoFormContainer';

interface Props {
  currentUser: User;
  initialValues: GeneralInfoInitialValues;
  updateMyGeneralInfoErrorMsg: string;
  isMyGeneralInfoFetching: boolean;
  isUserGeneralInfoSuccessfulySent: boolean;
  selectOptions: any[];
  validationSchema: GeneralInfoValidationSchema;
  onSubmit: (values: GeneralInfoInitialValues) => void;
  onSelectChange: (newValue: any) => void;
}

const UpdateMyGeneralInfoForm: React.FC<Props> = (props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={props.validationSchema}
    >
      <Form className={s.form}>
        <FormControl
          customClass={s.form__control}
          field="dateOfBirth"
          placeholder="Date of birth"
          inputClass={s.form__input}
          type="date"
          label="Date of birth"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="country"
          placeholder="Country"
          inputClass={s.form__input}
          type="text"
          label="Country"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="currentCity"
          placeholder="City"
          inputClass={s.form__input}
          type="text"
          label="City"
          labelClass={s.form__label}
        />
        <FormSelectControl
          options={props.selectOptions}
          defaultValue={
            props.currentUser.generalInfo?.relationship ||
            RelationshipEnum.NOT_SELECTED
          }
          onChange={props.onSelectChange}
          classNamePrefix="generalInfo_select"
          labelText="Relationship"
          placeholder="Select your relationship..."
        />
        <FormControl
          customClass={s.form__control}
          field="website"
          placeholder="Website"
          inputClass={s.form__input}
          type="text"
          label="Website"
          labelClass={s.form__label}
        />
        <FormControl
          customClass={s.form__control}
          field="jobPlace"
          placeholder="Job Place"
          inputClass={s.form__input}
          type="text"
          label="Job Place"
          labelClass={s.form__label}
        />
        <div className={s.form__box}>
          <SubmitLoadingBtn
            btnClass={s.form__btn}
            btnType="submit"
            btnText="Update general information"
            btnFetchingText="Updating general information"
            isFetching={props.isMyGeneralInfoFetching}
            onSubmit={() => {}}
          />
          <FormStatus
            isSuccessfulySent={props.isUserGeneralInfoSuccessfulySent}
            preloaderClass={s.form__preloader}
            msgClass={s.form__success}
          />
        </div>
        <FormError
          customClass={s.form__error}
          errorMsg={props.updateMyGeneralInfoErrorMsg}
        />
      </Form>
    </Formik>
  );
};

export default UpdateMyGeneralInfoForm;
