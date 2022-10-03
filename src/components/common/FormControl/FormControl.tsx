import { ErrorMessage, Field, FieldProps } from 'formik';
import TextError from '../TextError/TextError';
import s from './FormControl.module.scss';

type FormControlProps = {
  customClass: string;
  field: string;
  placeholder: string;
  inputClass: string;
  type: 'text' | 'password';
  label?: string;
  labelClass?: string;
  errorClass?: string;
  component?: string | React.ComponentType<FieldProps>;
};

const FormControl: React.FC<FormControlProps> = ({
  customClass,
  field,
  placeholder,
  inputClass,
  type,
  label,
  labelClass,
  component,
  errorClass,
}) => {
  return (
    <div className={customClass}>
      <label className={`${s.label} ${labelClass}`} htmlFor={field}>
        {label}
      </label>
      <Field
        className={inputClass}
        name={field}
        id={field}
        type={type}
        placeholder={placeholder}
        component={component}
      />
      <ErrorMessage name={field}>
        {(err) => (
          <TextError customClass={`${s.textError} ${errorClass}`}>
            {err}
          </TextError>
        )}
      </ErrorMessage>
    </div>
  );
};

export default FormControl;
