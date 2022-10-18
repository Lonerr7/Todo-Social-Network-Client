import s from './SubmitLoadingBtn.module.scss';

type SubmitLoadingBtnProps = {
  isFetching: boolean;
  btnType: 'button' | 'submit' | 'reset' | undefined;
  btnClass: string;
  btnText: string;
  btnFetchingText: string;
  onSubmit: any; //!
};

const SubmitLoadingBtn: React.FC<SubmitLoadingBtnProps> = ({
  isFetching,
  btnClass,
  onSubmit,
  btnType,
  btnText,
  btnFetchingText,
}) => {
  return (
    <>
      {!isFetching ? (
        <button
          className={`${s.btn} ${btnClass}`}
          type={btnType}
          onClick={onSubmit}
        >
          {btnText}
        </button>
      ) : (
        <button className={`${btnClass} ${s.btn__disabled}`} disabled={true}>
          {btnFetchingText}...
        </button>
      )}
    </>
  );
};

export default SubmitLoadingBtn;
