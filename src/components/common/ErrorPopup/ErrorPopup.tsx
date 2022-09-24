import s from './ErrorPopup.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';

const ErrorPopup: React.FC = () => {
  return (
    <li className={s.popup}>
      <button className={s.popup__close}>
        <IoIosCloseCircle size={18} />
      </button>
      <div className={s.popup__decor}></div>
      <div className={s.popup__box}>
        <p className={s.popup__errorMsg}>
        A task must not be more than 40 characters
        </p>
      </div>
    </li>
  );
};

export default ErrorPopup;
