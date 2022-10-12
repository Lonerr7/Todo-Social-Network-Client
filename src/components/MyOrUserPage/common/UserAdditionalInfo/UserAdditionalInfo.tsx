import { User } from '../../../../types/reduxTypes';
import s from './UserAdditionalInfo.module.scss';

type Props = {
  user: User;
  isVisible: boolean;
};

const UserAdditionalInfo: React.FC<Props> = ({ user, isVisible }) => {
  if (!isVisible) return null;

  return <div className={s.info}>Additional info</div>;
};

export default UserAdditionalInfo;
