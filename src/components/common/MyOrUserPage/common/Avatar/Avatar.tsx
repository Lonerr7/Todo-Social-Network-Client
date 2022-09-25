import s from './Avatar.module.scss';
import mockAvatar from '../../../../../img/mockAvatar.jpg';

type Props = {
  avatar?: string;
  customClass?: string;
};

const AvatarBig: React.FC<Props> = ({ avatar, customClass }) => {
  return (
    <div className={s.avatar}>
      {avatar ? (
        <img
          className={`${s.avatar__img} ${customClass}`}
          src={avatar}
          alt="avatar"
        />
      ) : (
        <img
          className={`${s.avatar__img} ${customClass}`}
          src={mockAvatar}
          alt="avatar"
        />
      )}
    </div>
  );
};

export default AvatarBig;
