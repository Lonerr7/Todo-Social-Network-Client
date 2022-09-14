import TextError from '../TextError/TextError';

type FormErrorProps = {
  errorMsg?: string;
  customClass: string;
};

const FormError: React.FC<FormErrorProps> = ({ errorMsg, customClass }) => {
  return (
    <>
      {errorMsg ? (
        <p className={customClass}>
          <TextError>{errorMsg}</TextError>
        </p>
      ) : (
        ''
      )}
    </>
  );
};

export default FormError;
