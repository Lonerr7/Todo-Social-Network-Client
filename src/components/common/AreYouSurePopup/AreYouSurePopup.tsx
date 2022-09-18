import s from './AreYouSurePopup.module.scss';
import { ImCross } from 'react-icons/im';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { closePopup } from '../../../redux/popupSlice';
import Preloader from '../Preloader/Preloader';

type AreYouSurePopupProps = {
  title: string;
  thunk: any; //!
  isFetching: boolean;
};

const AreYouSurePopup: React.FC<AreYouSurePopupProps> = ({
  title,
  thunk,
  isFetching,
}) => {
  const dispatchData = useAppSelector((state) => state.popup.popupDispatchData);
  const dispatch = useAppDispatch();

  const yesClickHandler = async () => {
    // async await because we are dispathing async thunk
    if (dispatchData) {
      await dispatch(thunk(dispatchData));
      return dispatch(closePopup());
    }

    await dispatch(thunk());
    dispatch(closePopup());
  };
  const noClickHandler = () => {
    dispatch(closePopup());
  };

  return (
    <div className={s.popup}>
      <div className={s.popup__body}>
        <div className={s.popup__content}>
          <button className={s.popup__close} onClick={noClickHandler}>
            <ImCross className={s.popup__closeIcon} size={18} />
          </button>
          <h2 className={s.popup__title}>{title}</h2>
          <div className={s.popup__controls}>
            <button
              className={`${s.popup__btn} ${s.popup__btnYes}`}
              onClick={yesClickHandler}
            >
              Yes
            </button>
            <button
              className={`${s.popup__btn} ${s.popup__btnNo}`}
              onClick={noClickHandler}
            >
              No
            </button>
          </div>
          {isFetching ? <Preloader customClass={s.popup__preloader} /> : null}
        </div>
      </div>
    </div>
  );
};

export default AreYouSurePopup;
