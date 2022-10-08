import s from './Avatar.module.scss';
import mockAvatar from '../../../../assets/img/mockAvatar.jpg';

type Props = {
  avatar?: string;
  customImgClass?: string;
  wrapperClass?: string;
};

const Avatar: React.FC<Props> = ({ avatar, customImgClass, wrapperClass }) => {
  return (
    <div className={`${s.avatar} ${wrapperClass}`}>
      {avatar ? (
        <img
          className={`${s.avatar__img} ${customImgClass}`}
          src={avatar}
          alt="avatar"
        />
      ) : (
        <img
          className={`${s.avatar__img} ${customImgClass}`}
          src={mockAvatar}
          alt="avatar"
        />
      )}
    </div>
  );
};

export default Avatar;
