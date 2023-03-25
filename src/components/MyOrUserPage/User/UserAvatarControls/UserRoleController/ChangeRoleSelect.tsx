import Select from 'react-select';
import s from '../UserAvatarControls.module.scss';

interface Props {
  selectOptions: any[];
  userRole: any;
  onSelectChange: (newValue: any) => void;
}

const ChangeRoleSelect: React.FC<Props> = ({
  selectOptions,
  userRole,
  onSelectChange,
}) => {
  return (
    <div className={s.changeRole__select}>
      <Select
        placeholder="Select user's role..."
        classNamePrefix="role_select"
        options={selectOptions}
        defaultInputValue={userRole}
        onChange={onSelectChange}

      />
    </div>
  );
};

export default ChangeRoleSelect;
