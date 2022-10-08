import s from './UserAvatarControls.module.scss';

const UserAvatarControls: React.FC = () => {
  return (
    <div className={s.controls}>
      <button className={s.controls__btn}>Message</button>
      <button className={s.controls__btn}>Add Friend</button>
    </div>
  );
};

export default UserAvatarControls;
