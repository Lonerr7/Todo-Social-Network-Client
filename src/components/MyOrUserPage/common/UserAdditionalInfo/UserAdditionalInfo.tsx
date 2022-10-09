import { User } from '../../../../types/reduxTypes';
import s from './UserAdditionalInfo.module.scss';

type Props = {
  user: User;
};

const UserAdditionalInfo: React.FC<Props> = ({ user }) => {
  return <div className={s.info}>INFO</div>;
};

export default UserAdditionalInfo;
