import s from '../../../../styles/formStyle.module.scss';
import { Form, Formik, useFormikContext } from 'formik';
import FormControl from '../../../common/FormControl/FormControl';
import FormError from '../../../common/FormError/FormError';
import FormStatus from '../../../common/FormStatus/FormStatus';
import SubmitLoadingBtn from '../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import {
  AttitudeTowardsEnum,
  User,
} from '../../../../types/reduxTypes/authSliceTypes';
import FormSelectControl from '../../../common/FormSelectControl/FormSelectControl';
import { PersonalInfoInitialValues } from '../../../../types/formikTypes';
import { PersonalInfoValidationShema } from './UpdateMyPersonalInfoFormContainer';
import { textareaFormSubmitHandler } from '../../../../utils/appHelpers';

interface Props {
  initialValues: PersonalInfoInitialValues;
  validationSchema: PersonalInfoValidationShema;
  selectOptions: any[];
  currentUser: User;
  isMyPersonalInfoFetching: boolean;
  isUserPersonalInfoSuccessfulySent: boolean;
  updateMyPersonalInfoErrorMsg: string;
  onSubmit: (data: PersonalInfoInitialValues) => void;
  onSmokingSelectChange: (newValue: any) => void;
  onDrinkingSelectChange: (newValue: any) => void;
}

const UpdateMyPersonalInfoForm: React.FC<Props> = (props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
      validationSchema={props.validationSchema}
    >
      <FormikForm {...props} />
    </Formik>
  );
};

const FormikForm: React.FC<Props> = (props) => {
  const { submitForm } = useFormikContext();

  return (
    <Form className={s.form}>
      <FormControl
        customClass={s.form__control}
        field="aboutMe"
        placeholder="About Me"
        inputClass={`${s.form__input} ${s.form__textarea}`}
        type="text"
        label="About Me"
        labelClass={s.form__label}
        component="textarea"
        onKeyDown={textareaFormSubmitHandler(submitForm)}
      />
      <FormControl
        customClass={s.form__control}
        field="activities"
        placeholder="Activities"
        inputClass={s.form__input}
        type="text"
        label="Activities"
        labelClass={s.form__label}
      />
      <FormSelectControl
        options={props.selectOptions}
        classNamePrefix="settings_select"
        defaultValue={
          props.currentUser.personalInfo?.attitudeTowardsSmoking ||
          AttitudeTowardsEnum.NOT_SELECTED
        }
        labelText="Attidute towards smoking"
        onChange={props.onSmokingSelectChange}
        placeholder="Select your attitude..."
      />
      <FormSelectControl
        options={props.selectOptions}
        classNamePrefix="settings_select"
        defaultValue={
          props.currentUser.personalInfo?.attitudeTowardsDrinking ||
          AttitudeTowardsEnum.NOT_SELECTED
        }
        labelText="Attidute towards drinking"
        onChange={props.onDrinkingSelectChange}
        placeholder="Select your drinking..."
      />
      <FormControl
        customClass={s.form__control}
        field="favoriteMovies"
        placeholder="Favorite movies"
        inputClass={`${s.form__input} ${s.form__textarea}`}
        type="text"
        label="Favorite movies"
        labelClass={s.form__label}
        component="textarea"
        onKeyDown={textareaFormSubmitHandler(submitForm)}
      />
      <FormControl
        customClass={s.form__control}
        field="favoriteMusic"
        placeholder="Favorite music"
        inputClass={`${s.form__input} ${s.form__textarea}`}
        type="text"
        label="Favorite music"
        labelClass={s.form__label}
        component="textarea"
        onKeyDown={textareaFormSubmitHandler(submitForm)}
      />
      <FormControl
        customClass={s.form__control}
        field="favouriteBooks"
        placeholder="Favourite books"
        inputClass={`${s.form__input} ${s.form__textarea}`}
        type="text"
        label="Favourite books"
        labelClass={s.form__label}
        component="textarea"
        onKeyDown={textareaFormSubmitHandler(submitForm)}
      />
      <FormControl
        customClass={s.form__control}
        field="interests"
        placeholder="Interests"
        inputClass={`${s.form__input} ${s.form__textarea}`}
        type="text"
        label="Interests"
        labelClass={s.form__label}
        component="textarea"
        onKeyDown={textareaFormSubmitHandler(submitForm)}
      />
      <div className={s.form__box}>
        <SubmitLoadingBtn
          btnClass={s.form__btn}
          btnType="submit"
          btnText="Update contact information"
          btnFetchingText="Updating contact information"
          isFetching={props.isMyPersonalInfoFetching}
          onSubmit={() => {}}
        />
        <FormStatus
          isSuccessfulySent={props.isUserPersonalInfoSuccessfulySent}
          preloaderClass={s.form__preloader}
          msgClass={s.form__success}
        />
      </div>
      <FormError
        customClass={s.form__error}
        errorMsg={props.updateMyPersonalInfoErrorMsg}
      />
    </Form>
  );
};

export default UpdateMyPersonalInfoForm;
