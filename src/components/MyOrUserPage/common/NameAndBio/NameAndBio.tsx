import { OnlineStatusEnum } from '../../../../types/reduxTypes/authSliceTypes';
import OnlineStatus from '../../../common/OnlineStatus/OnlineStatus';
import s from './NameAndBio.module.scss';
import { Themes } from '../../../../types/reduxTypes/themeSliceTypes';
import IsUserVerifiedIcon from '../../../common/IsUserVerifiedIcon/IsUserVerified';

interface Props {
  fName: string;
  lName: string;
  nickname: string;
  BioComponent: React.ReactNode;
  isOnline: OnlineStatusEnum;
  isVerified: boolean;
  isBanned: boolean;
}

const NameAndBio: React.FC<Props> = ({
  fName,
  lName,
  nickname,
  BioComponent,
  isOnline,
  isVerified,
  isBanned,
}) => {
  if (document.body.getAttribute('data-theme') === Themes.DARK) {
  }

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
        </div>
        <OnlineStatus customClass={s.nameAndBio__online} isOnline={isOnline} />
      </div>
      <div className={s.nameAndBio__bioBox}>{BioComponent}</div>
    </div>
  );
};

export default NameAndBio;
