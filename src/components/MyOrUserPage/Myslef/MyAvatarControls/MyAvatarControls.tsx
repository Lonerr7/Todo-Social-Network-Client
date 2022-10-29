import { useState } from 'react';
import ChangeAvatar from './ChangeAvatar/ChangeAvatar';
import s from './MyAvatarControls.module.scss';

const MyAvatarControls: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChangeAvatarForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.controls}>
      {isOpen ? (
        <ChangeAvatar toggleChangeAvatarForm={toggleChangeAvatarForm} />
      ) : (
        <button className={s.controls__btn} onClick={toggleChangeAvatarForm}>
          Change avatar
        </button>
      )}
    </div>
  );
};

export default MyAvatarControls;
