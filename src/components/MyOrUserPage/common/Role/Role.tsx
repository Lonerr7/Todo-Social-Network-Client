import { UserRole } from '../../../../types/reduxTypes/authSliceTypes';
import s from './Role.module.scss';

interface Props {
  role: UserRole;
  customClass?: string;
}

const Role: React.FC<Props> = ({ role, customClass }) => {
  if (role === 'user') {
    return (
      <span className={`${s.userRole} ${customClass}`} title="Basic user">
        {role}
      </span>
    );
  }

  if (role === 'admin') {
    return (
      <span className={`${s.adminRole} ${customClass}`} title="An Admin!">
        {role}
      </span>
    );
  }

  return (
    <span className={`${s.CEORole} ${customClass}`} title="Creator!">
      {role}
    </span>
  );
};

export default Role;
