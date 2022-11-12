import { OnlineStatusEnum } from '../../../types/reduxTypes/authSliceTypes';
import s from './OnlineStatus.module.scss';

interface Props {
  isOnline: OnlineStatusEnum;
  customClass?: string;
}

const OnlineStatus: React.FC<Props> = ({ isOnline, customClass }) => {
  let onlineElem = <span></span>;

  if (isOnline === OnlineStatusEnum.ONLINE) {
    onlineElem = (
      <span className={`${s.status__indicator} ${s.status__online}`}>
        Online
      </span>
    );
  }

  if (isOnline === OnlineStatusEnum.OFFLINE) {
    onlineElem = (
      <span className={`${s.status__indicator} ${s.status__offline}`}>
        Offline
      </span>
    );
  }

  if (isOnline === OnlineStatusEnum.AWAY) {
    onlineElem = (
      <span className={`${s.status__indicator} ${s.status__away}`}>Away</span>
    );
  }

  if (isOnline === OnlineStatusEnum.DONT_BOTHER) {
    onlineElem = (
      <span className={`${s.status__indicator} ${s.status__dontBother}`}>
        Don't bother
      </span>
    );
  }

  return <div className={`${s.status} ${customClass}`}>{onlineElem}</div>;
};

export default OnlineStatus;
