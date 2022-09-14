import TextError from '../TextError/TextError';

type FormErrorProps = {
  errorMsg?: string;
  customClass: string;
};

const FormError: React.FC<FormErrorProps> = ({ errorMsg, customClass }) => {
  return (
    <>
      {errorMsg ? (
        <div className={customClass}>
          <TextError>{errorMsg}</TextError>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default FormError;
