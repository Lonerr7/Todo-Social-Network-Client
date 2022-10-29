import { useState } from 'react';
import s from './ChangeAvatar.module.scss';

interface Props {
  toggleChangeAvatarForm: () => void;
}

const ChangeAvatar: React.FC<Props> = ({ toggleChangeAvatarForm }) => {
  const [file, setFile] = useState({});

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files && e.target.files[0]);
  };

  const fileUploadHandler = () => {};

  return (
    <div className={s.change}>
      <label className={s.change__label} htmlFor="changeAvatar">
        <input
          className={s.change__input}
          type="file"
          id="changeAvatar"
          onChange={fileSelectedHandler}
        />
      </label>
      <div className={s.change__btns}>
        <button className={s.change__btn}>Ok</button>
        <button className={s.change__btn} onClick={toggleChangeAvatarForm}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChangeAvatar;
