import s from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader.gif';

type PreloaderProps = {
  customClass?: string;
};

const Preloader: React.FC<PreloaderProps> = ({ customClass }) => {
  return (
    <img
      className={`${s.preloader} ${customClass}`}
      src={preloader}
      alt="preloader"
    />
  );
};

export default Preloader;
