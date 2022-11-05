import { Outlet } from 'react-router-dom';
import AreYouSurePopup from '../../components/common/Popups/AreYouSurePopup/AreYouSurePopup';
import SettingsNav from '../../components/Settings/SettingsNav/SettingsNav';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppSelector } from '../../hooks/hooks';
import { deleteMyProfile } from '../../redux/myselfSlice';
import s from './SettingsPage.module.scss';

const SettingsPage: React.FC = () => {
  const isPopupOpen = useAppSelector(
    (state) => state.popup.isAreYouSurePopupOpen
  );
  const { isUserDeletingFetching } = useAppSelector((state) => state.myslef);

  return (
    <div className={s.settings}>
      <div className={s.settings__inner}>
        <Outlet />
        <SettingsNav />
      </div>
      {isPopupOpen ? (
        <AreYouSurePopup
          title="Do you really want to delete your profile?"
          thunk={deleteMyProfile}
          isFetching={isUserDeletingFetching}
        />
      ) : null}
    </div>
  );
};

export default withActiveMenuNum(SettingsPage, 6);
