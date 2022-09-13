import Preloader from '../Preloader/Preloader';

type FormStatusProps = {
  isFetching: boolean;
  isSuccessfulySent: boolean;
  message?: string;
  preloaderClass: string;
  msgClass: string;
};

const FormStatus: React.FC<FormStatusProps> = ({
  isFetching,
  isSuccessfulySent,
  msgClass,
  preloaderClass,
  message,
}) => {
  return (
    <>
      {isFetching && <Preloader customClass={preloaderClass} />}
      {isSuccessfulySent ? (
        <p className={msgClass}>{message || 'Success!'}</p>
      ) : null}
    </>
  );
};

export default FormStatus;
