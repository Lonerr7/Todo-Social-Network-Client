import s from './BannedPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxToolkitHooks';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authSlice';

const BannedPage: React.FC = () => {
  const isMeBanned = useAppSelector((state) => state.auth.user?.isBanned)!;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!isMeBanned) {
    navigate(-1);
    return <></>;
  }

  return (
    <div className={s.banned}>
      <div className={s.banned__inner}>
        <p className={s.banned__alert}>ALERT!</p>
        <p className={s.banned__message}>You are banned :(</p>
        <button className={s.banned__btn} onClick={() => dispatch(logOut())}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BannedPage;
