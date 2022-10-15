import UserInfoRow from '../../UserInfoRow/UserInfoRow';
import s from './UserAdditionalInfoBlock.module.scss';

type Props = {
  blockTitle: string;
  fieldTitles: string[];
  fieldValues: (string | undefined)[];
};

const UserAdditionalInfoBlock: React.FC<Props> = ({
  blockTitle,
  fieldTitles,
  fieldValues,
}) => {
  console.log(fieldValues);

  if (fieldValues.length === 0) return null; //! Not working

  const elements = fieldValues.map((val, i) => (
    <UserInfoRow key={i} title={fieldTitles[i]} value={val} />
  ));

  return (
    <div className={s.block}>
      <div className={s.block__box}>
        <h2 className={s.block__title}>{blockTitle}</h2>
        <span className={s.block__line}></span>
      </div>
      <div>{elements}</div>
    </div>
  );
};

export default UserAdditionalInfoBlock;
