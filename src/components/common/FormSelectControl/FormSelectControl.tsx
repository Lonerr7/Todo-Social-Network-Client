import Select from 'react-select';
import { RelationshipEnum } from '../../../types/reduxTypes/authSliceTypes';
import s from './FormSelectControl.module.scss';

interface Props {
  options: any[];
  defaultValue: RelationshipEnum;
}

const FormSelectControl: React.FC<Props> = ({ options, defaultValue }) => {
  return <Select options={options} defaultInputValue={defaultValue} />;
};

export default FormSelectControl;
