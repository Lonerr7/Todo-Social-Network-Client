import { OnlineStatusEnum } from '../../../../types/reduxTypes/authSliceTypes';
import OnlineStatus from '../../../common/OnlineStatus/OnlineStatus';
import s from './NameAndBio.module.scss';
import tick from '../../../../assets/img/verifiedIcon.svg';

interface Props {
  fName: string;
  lName: string;
  nickname: string;
  BioComponent: React.ReactNode;
  isOnline: OnlineStatusEnum;
  isVerified: boolean;
}

const NameAndBio: React.FC<Props> = ({
  fName,
  lName,
  nickname,
  BioComponent,
  isOnline,
  isVerified,
}) => {
  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <div className={s.nameAndBio__row}>
          <h1 className={s.nameAndBio__name}>
            {fName} {lName} ({nickname})
          </h1>
          {isVerified && (
            <img
              className={s.nameAndBio__icon}
              src={tick}
              alt="tick"
              title="Verified"
            />
          )}
        </div>
        <OnlineStatus customClass={s.nameAndBio__online} isOnline={isOnline} />
      </div>
      <div className={s.nameAndBio__bioBox}>{BioComponent}</div>
    </div>
  );
};

export default NameAndBio;
