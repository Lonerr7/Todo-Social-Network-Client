import s from './UserInfoRow.module.scss';

interface Props {
  title: string;
  value?: string;
  fieldType?: string;
}

const UserInfoRow: React.FC<Props> = ({ title, value, fieldType }) => {
  if (!value) return null;

  let valueElem;

  if (fieldType === 'tel') {
    valueElem = (
      <a className={s.row__value} href={`tel:${value}`}>
        {value}
      </a>
    );
  } else {
    valueElem = <span className={s.row__value}>{value}</span>;
  }

  return (
    <div className={s.row}>
      <h3 className={s.row__title}>{title}:</h3>
      {valueElem}
    </div>
  );
};

export default UserInfoRow;
