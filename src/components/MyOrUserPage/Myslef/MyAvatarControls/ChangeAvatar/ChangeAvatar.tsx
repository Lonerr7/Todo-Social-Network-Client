import s from './ChangeAvatar.module.scss';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useAppDispatch } from '../../../../../hooks/reduxToolkitHooks';
import { changeMyAvatar } from '../../../../../redux/myselfSlice';
import { convertBase64 } from '../../../../../utils/appHelpers';

const ChangeAvatar: React.FC = () => {
  const dispatch = useAppDispatch();

  const fileSelectedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      (async () => {
        const file = e.target.files && e.target.files[0];
        const base64 = await convertBase64(file);

        dispatch(changeMyAvatar(base64));
      })();
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
      <span className={s.change__upload_small}>
        <AiOutlineCloudUpload className={s.change__icon} size={20} />
      </span>
    </label>
  );
};

export default ChangeAvatar;
