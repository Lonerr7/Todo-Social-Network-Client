import { useState } from 'react';
import s from './Accordion.module.scss';
import { VscTriangleRight, VscTriangleDown } from 'react-icons/vsc';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Accordion: React.FC<Props> = ({ children, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={s.accordion}>
      <h2 className={s.accordion__title} onClick={toggleIsVisible}>
        {!isVisible ? (
          <VscTriangleRight className={s.accordion__arrow} size={18} />
        ) : (
          <VscTriangleDown className={s.accordion__arrow} size={18} />
        )}
        {title}
      </h2>
      <div
        className={
          isVisible
            ? `${s.accordion__content} ${s.accordion__active}`
            : `${s.accordion__content}`
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
