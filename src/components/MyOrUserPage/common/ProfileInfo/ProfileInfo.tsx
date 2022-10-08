import s from './ProfileInfo.module.scss';

type Props = {
  children: React.ReactNode;
};

const ProfileInfo: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.profileInfo}>
      <div className={s.info}>{children}</div>
    </div>
  );
};

export default ProfileInfo;
