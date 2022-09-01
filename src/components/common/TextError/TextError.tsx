import s from './TextError.module.scss';

type TextErrorProps = {
  children: string;
};

const TextError: React.FC<TextErrorProps> = ({ children }) => {
  return <p className={s.textError}>{children}</p>;
};

export default TextError;
