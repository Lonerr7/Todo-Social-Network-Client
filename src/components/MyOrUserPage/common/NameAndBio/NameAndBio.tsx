import { OnlineStatusEnum } from '../../../../types/reduxTypes/authSliceTypes';
import OnlineStatus from '../../../common/OnlineStatus/OnlineStatus';
import s from './NameAndBio.module.scss';
import tick from '../../../../assets/img/verifiedIcon.svg';
import tickDark from '../../../../assets/img/verifiedIcon(dark).svg';
import { Themes } from '../../../../types/reduxTypes/themeSliceTypes';

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
  if (document.body.getAttribute('data-theme') === Themes.DARK) {
  }

  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <div className={s.nameAndBio__row}>
          <h1 className={s.nameAndBio__name}>
            {fName} {lName} ({nickname})
          </h1>
          {isVerified &&
            (document.body.getAttribute('data-theme') === Themes.DARK ? (
              <img
                className={s.nameAndBio__icon}
                src={tickDark}
                alt="tick"
                title="Verified"
              />
            ) : (
              <img
                className={s.nameAndBio__icon}
                src={tick}
                alt="tick"
                title="Verified"
              />
            ))}
        </div>
        <OnlineStatus customClass={s.nameAndBio__online} isOnline={isOnline} />
      </div>
      <div className={s.nameAndBio__bioBox}>{BioComponent}</div>
    </div>
  );
};

export default NameAndBio;
