import s from './UserInfoRow.module.scss';

type Props = {
  title: string;
  value?: string;
};

const UserInfoRow: React.FC<Props> = ({ title, value }) => {
  // if (!value) return null;

  return (
    <div className={s.row}>
      <h3 className={s.row__title}>{title}:</h3>
      <span className={s.row__value}>{value}</span>
    </div>
  );
};

export default UserInfoRow;
