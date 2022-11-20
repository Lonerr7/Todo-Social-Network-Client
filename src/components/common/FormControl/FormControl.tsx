import React from 'react';
import { ErrorMessage, Field, FieldProps } from 'formik';
import TextError from '../TextError/TextError';
import s from './FormControl.module.scss';

type FormControlProps = {
  customClass: string;
  field: string;
  placeholder: string;
  inputClass: string;
  type: 'text' | 'password' | 'date' | 'tel';
  label?: string;
  labelClass?: string;
  errorClass?: string;
  component?: string | React.ComponentType<FieldProps>;
  focus?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
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
  focus,
  onKeyDown,
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
        autoFocus={focus}
        onKeyDown={onKeyDown}
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

export default React.memo(FormControl);
