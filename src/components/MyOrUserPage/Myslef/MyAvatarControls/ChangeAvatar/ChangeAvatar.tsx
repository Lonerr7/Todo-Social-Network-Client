import s from './ChangeAvatar.module.scss';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { changeMyAvatar } from '../../../../../redux/myselfSlice';

const ChangeAvatar: React.FC = () => {
  const dispatch = useAppDispatch();

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fd = new FormData();
      fd.append('photo', e.target.files[0], e.target.files[0].name);

      dispatch(changeMyAvatar(fd));
    }
  };

  return (
    <label className={s.change__label} htmlFor="changeAvatar">
      <input
        className={s.change__input}
        type="file"
        id="changeAvatar"
        onChange={fileSelectedHandler}
      />
      <span className={s.change__upload}>
        <AiOutlineCloudUpload className={s.change__icon} size={20} />
        Change avatar
      </span>
    </label>
  );
};

export default ChangeAvatar;
