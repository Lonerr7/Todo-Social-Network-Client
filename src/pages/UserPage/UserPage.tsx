import s from './UserPage.module.scss';

const UserPage: React.FC = () => {
  return (
    <div className={s.page}>
      <div className={s.page__inner}>User's page</div>
    </div>
  );
};

export default UserPage;
