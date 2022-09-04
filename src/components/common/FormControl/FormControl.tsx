import { ErrorMessage, Field } from 'formik';
import TextError from '../TextError/TextError';
import s from './FormControl.module.scss';

type FormControlProps = {
  customClass: string;
  field: string;
  placeholder: string;
  inputClass: string;
  type: 'text' | 'password';
};

const FormControl: React.FC<FormControlProps> = ({
  customClass,
  field,
  placeholder,
  inputClass,
  type,
}) => {
  return (
    <div className={customClass}>
      <label htmlFor={field} />
      <Field
        className={inputClass}
        name={field}
        id={field}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage name={field}>
        {(err) => <TextError customClass={s.textError}>{err}</TextError>}
      </ErrorMessage>
    </div>
  );
};

export default FormControl;
