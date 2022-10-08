import { NavLink } from 'react-router-dom';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import s from './UserSmall.module.scss';

type Props = {
  img?: string;
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  bio: string;
};

const UserSmall: React.FC<Props> = ({
  firstName,
  id,
  lastName,
  nickname,
  img,
  bio,
}) => {
  return (
    <li className={s.user}>
      <NavLink
        className={`${s.user__avatarLink} ${s.user__link}`}
        to={`/users/${id}`}
      >
        <Avatar customImgClass={s.user__avatar} avatar={img} />
      </NavLink>
      <div className={s.user__info}>
        <NavLink
          className={`${s.user__FLName} ${s.user__link}`}
          to={`/users/${id}`}
        >
          {firstName} {lastName}
        </NavLink>
        <NavLink
          className={`${s.user__nickname} ${s.user__link}`}
          to={`/users/${id}`}
        >
          [{nickname}]
        </NavLink>
        <span className={s.user__bio}>{bio}</span>
      </div>
    </li>
  );
};

export default UserSmall;
