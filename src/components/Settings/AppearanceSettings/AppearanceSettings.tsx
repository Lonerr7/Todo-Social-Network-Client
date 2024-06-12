import withActiveSettingsNum from '../../../hoc/withActiveSettingsNum';
import s from './AppearanceSettings.module.scss';

const AppearanceSettings: React.FC = () => {
  return (
    <div className={s.appearance}>
      <h1 className={s.appearance__title}>Appearance</h1>
      <div className={s.apperance__inner}></div>
    </div>
  );
};

export default withActiveSettingsNum(AppearanceSettings, 3);
