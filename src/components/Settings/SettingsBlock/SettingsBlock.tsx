import Accordion from '../../common/Accordion/Accordion';
import s from './SettingsBlock.module.scss';

type Props = {
  title: string;
  form: React.ReactNode;
};

const SettingsBlock: React.FC<Props> = ({ title, form }) => {
  return (
    <div className={s.block}>
      {/* <h2 className={s.block__title}>{title}</h2> */}
      {/* <Accordion title={title}>{form}</Accordion> */}
    </div>
  );
};

export default SettingsBlock;
