import s from './ProfileInfo.module.scss';

type Props = {
  children: React.ReactNode;
  customClass?: string;
};

const ProfileInfo: React.FC<Props> = ({ children, customClass }) => {
  return (
    <div className={`${s.profileInfo} ${customClass}`}>
      <div className={s.info}>{children}</div>
    </div>
  );
};

export default ProfileInfo;
