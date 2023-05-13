import { useAppSelector } from '../../../../hooks/reduxToolkitHooks';
import TextError from '../../../common/TextError/TextError';
import ChangeAvatar from './ChangeAvatar/ChangeAvatar';
import s from './MyAvatarControls.module.scss';

const MyAvatarControls: React.FC = () => {
  const changeAvatarErrMsg = useAppSelector(
    (state) => state.myslef.changeMyAvatarErrorMsg
  );

  return (
    <div className={s.controls}>
      <ChangeAvatar />
      {changeAvatarErrMsg ? (
        <TextError customClass={s.controls__errMsg}>
          {changeAvatarErrMsg}
        </TextError>
      ) : null}
    </div>
  );
};

export default MyAvatarControls;
