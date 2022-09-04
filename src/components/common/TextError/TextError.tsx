import s from './TextError.module.scss';

type TextErrorProps = {
  children: string;
  customClass?: string;
};

const TextError: React.FC<TextErrorProps> = ({ children, customClass }) => {
  return <p className={`${s.textError} ${customClass}`}>{children}</p>;
};

export default TextError;
