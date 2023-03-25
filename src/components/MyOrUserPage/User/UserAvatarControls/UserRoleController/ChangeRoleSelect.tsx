import Select from 'react-select';
import s from '../UserAvatarControls.module.scss';

interface Props {
  selectOptions: any[];
  userRole: any;
}

const ChangeRoleSelect: React.FC<Props> = ({ selectOptions, userRole }) => {
  console.log(userRole);

  return (
    <div className={s.changeRole__select}>
      <Select
        placeholder="Select user's role..."
        classNamePrefix="role_select"
        options={selectOptions}
        defaultInputValue={userRole}
        isClearable
      />
    </div>
  );
};

export default ChangeRoleSelect;
