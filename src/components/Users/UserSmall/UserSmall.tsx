import { NavLink } from 'react-router-dom';
import { UserRoles } from '../../../types/reduxTypes/authSliceTypes';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import Role from '../../MyOrUserPage/common/Role/Role';
import s from './UserSmall.module.scss';

type Props = {
  img?: string;
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  bio: string;
  isBanned: boolean;
  role: UserRoles;
};

const UserSmall: React.FC<Props> = ({
  firstName,
  id,
  lastName,
  nickname,
  img,
  bio,
  isBanned,
  role,
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
          className={
            !isBanned
              ? `${s.user__FLName} ${s.user__link}`
              : `${s.user__FLName} ${s.user__link} ${s.banned}`
          }
          to={`/users/${id}`}
        >
          {firstName} {lastName}
          <Role role={role} customClass={s.user__role} />
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
