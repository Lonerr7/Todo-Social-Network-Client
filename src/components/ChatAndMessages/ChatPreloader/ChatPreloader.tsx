import {FC} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ChatPreloader.module.scss';

interface ChatPreloaderProps {
  className?: string;
}

export const ChatPreloader: FC<ChatPreloaderProps> = ({className}) => {
  return (
    <div className={`${s.preloader} ${className}`}>
      <h3 className={s.preloader__title}>
        This chat is hosted on render free tier. First load might take a while. Please wait...
      </h3>
      <Preloader customClass={s.preloader__spinner} />
    </div>
  );
};
