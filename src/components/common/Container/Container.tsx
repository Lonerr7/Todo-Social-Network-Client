import s from './Container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
  classProp?: string;
};

const Container: React.FC<ContainerProps> = ({ children, classProp }) => {
  return <div className={`${s.container} ${classProp}`}>{children}</div>;
};

export default Container;
