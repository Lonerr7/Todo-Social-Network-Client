import { Outlet } from 'react-router-dom';
import AreYouSurePopup from '../../components/common/AreYouSurePopup/AreYouSurePopup';
import SettingsNav from '../../components/Settings/SettingsNav/SettingsNav';
import { useAppSelector } from '../../hooks/hooks';
import { deleteMyProfile } from '../../redux/userSlice';
import s from './SettingsPage.module.scss';

const SettingsPage: React.FC = () => {
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpen);
  const { isUserDeletingFetching } = useAppSelector((state) => state.user);

  return (
    <div className={s.settings}>
      <div className={s.settings__inner}>
        <Outlet />
        <SettingsNav />
      </div>
      {isPopupOpen ? (
        <AreYouSurePopup
          title="Do you really want to delete your profile?"
          fn={deleteMyProfile}
          isFetching={isUserDeletingFetching}
        />
      ) : null}
    </div>
  );
};

export default SettingsPage;
