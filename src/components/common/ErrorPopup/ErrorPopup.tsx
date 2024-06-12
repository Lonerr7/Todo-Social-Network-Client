import s from './ErrorPopup.module.scss';
import { IoIosCloseCircle } from 'react-icons/io';

type ErrorPopupProps = {
  message: string;
  id: string;
};

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, id }) => {
  return (
    <li className={s.popup}>
      <button className={s.popup__close}>
        <IoIosCloseCircle size={18} />
      </button>
      <div className={s.popup__decor}></div>
      <div className={s.popup__box}>
        <p className={s.popup__errorMsg}>{message}</p>
      </div>
    </li>
  );
};

export default ErrorPopup;
