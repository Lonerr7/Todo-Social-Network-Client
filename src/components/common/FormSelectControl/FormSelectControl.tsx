import Select from 'react-select';
import { RelationshipEnum } from '../../../types/reduxTypes/authSliceTypes';
import s from './FormSelectControl.module.scss';

interface Props {
  options: any[];
  defaultValue: RelationshipEnum;
  onChange: (newValue: any) => void;
  customStyle?: string;
}

const FormSelectControl: React.FC<Props> = ({
  options,
  defaultValue,
  customStyle,
  onChange,
}) => {
  return (
    <Select
      className={`${s.select} ${customStyle}`}
      options={options}
      defaultInputValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default FormSelectControl;
