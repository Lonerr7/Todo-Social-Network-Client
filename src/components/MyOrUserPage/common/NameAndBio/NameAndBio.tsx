import {
  OnlineStatusEnum,
  UserRoles,
} from '../../../../types/reduxTypes/authSliceTypes';
import OnlineStatus from '../../../common/OnlineStatus/OnlineStatus';
import s from './NameAndBio.module.scss';
import IsUserVerifiedIcon from '../../../common/IsUserVerifiedIcon/IsUserVerified';
import Role from '../Role/Role';

interface Props {
  fName: string;
  lName: string;
  nickname: string;
  BioComponent: React.ReactNode;
  isOnline: OnlineStatusEnum;
  isVerified: boolean;
  isBanned: boolean;
  role: UserRoles;
}

const NameAndBio: React.FC<Props> = ({
  fName,
  lName,
  nickname,
  BioComponent,
  isOnline,
  isVerified,
  isBanned,
  role,
}) => {
  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <div className={s.nameAndBio__row}>
          <h1
            className={
              !isBanned
                ? s.nameAndBio__name
                : `${s.nameAndBio__name} ${s.banned}`
            }
          >
            {fName} {lName} ({nickname})
          </h1>
          {isVerified && (
            <IsUserVerifiedIcon customCalss={s.nameAndBio__icon} />
          )}
          <Role role={role} customClass={s.nameAndBio__role} />
        </div>
        <OnlineStatus customClass={s.nameAndBio__online} isOnline={isOnline} />
      </div>
      <div className={s.nameAndBio__bioBox}>{BioComponent}</div>
    </div>
  );
};

export default NameAndBio;
