import s from './AreYouSurePopup.module.scss';

type AreYouSurePopupProps = {
  title: string;
};

const AreYouSurePopup: React.FC<AreYouSurePopupProps> = ({ title }) => {
  return (
    <div className={s.popup}>
      <div className={s.popup__body}>
        <div className={s.popup__content}>
          <button className={s.popup__close}>X</button>
          <h2 className={s.popup__title}>{title}</h2>
          <div className={s.popup__controls}>
            <button className={s.popup__btn}>Yes</button>
            <button className={s.popup__btn}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreYouSurePopup;
