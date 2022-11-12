import { OnlineStatusEnum } from '../../../../types/reduxTypes/authSliceTypes';
import OnlineStatus from '../../../common/OnlineStatus/OnlineStatus';
import s from './NameAndBio.module.scss';

type Props = {
  fName: string;
  lName: string;
  nickname: string;
  BioComponent: React.ReactNode;
  isOnline: OnlineStatusEnum;
};

const NameAndBio: React.FC<Props> = ({
  fName,
  lName,
  nickname,
  BioComponent,
  isOnline,
}) => {
  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <h1 className={s.nameAndBio__name}>
          {fName} {lName} ({nickname})
        </h1>
        <OnlineStatus customClass={s.nameAndBio__online} isOnline={isOnline} />
      </div>
      <div className={s.nameAndBio__bioBox}>{BioComponent}</div>
    </div>
  );
};

export default NameAndBio;
