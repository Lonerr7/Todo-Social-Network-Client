import ChangeAvatar from './ChangeAvatar/ChangeAvatar';
import s from './MyAvatarControls.module.scss';

const MyAvatarControls: React.FC = () => {
  return (
    <div className={s.controls}>
      <ChangeAvatar />
    </div>
  );
};

export default MyAvatarControls;
