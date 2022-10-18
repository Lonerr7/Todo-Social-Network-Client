import s from './SettingsBlock.module.scss';

type Props = {
  title: string;
  form: React.ReactNode;
};

const SettingsBlock: React.FC<Props> = ({ title, form }) => {
  return (
    <div className={s.block}>
      <h2 className={s.block__title}>{title}</h2>
      {form}
    </div>
  );
};

export default SettingsBlock;
