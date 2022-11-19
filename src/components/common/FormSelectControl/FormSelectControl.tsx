import Select from 'react-select';
import { RelationshipEnum } from '../../../types/reduxTypes/authSliceTypes';
import s from './FormSelectControl.module.scss';

interface Props {
  options: any[];
  defaultValue: RelationshipEnum;
  onChange: (newValue: any) => void;
  customStyle?: string;
  classNamePrefix: string;
  placeholder?: string;
}

const FormSelectControl: React.FC<Props> = ({
  options,
  defaultValue,
  customStyle,
  classNamePrefix,
  placeholder,
  onChange,
}) => {
  return (
    <div className={s.select}>
      <label className={s.select__label}>Relationship</label>
      <Select
        placeholder={placeholder}
        classNamePrefix={classNamePrefix}
        className={`${s.select__select} ${customStyle}`}
        options={options}
        defaultInputValue={defaultValue}
        onChange={onChange}
        isClearable={true}
      />
    </div>
  );
};

export default FormSelectControl;
