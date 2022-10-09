import UserAdditionalInfoForm from '../../components/common/UserAdditionalInfoForm/UserAdditionalInfoForm';
import s from './AdditionalInfoEnterPage.module.scss';

const AdditionalInfoEnterPage: React.FC = () => {
  return (
    <div className={s.page}>
      <h1 className={s.page__title}>Please, tell us more about yourself</h1>
      <UserAdditionalInfoForm />
    </div>
  );
};

export default AdditionalInfoEnterPage;
