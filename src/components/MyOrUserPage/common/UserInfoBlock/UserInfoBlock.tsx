import UserInfoRow from '../UserInfoRow/UserInfoRow';
import s from './UserInfoBlock.module.scss';

type Props = {
  blockTitle?: string;
  fieldTitles: string[] | null;
  fieldValues: (string | undefined)[] | null;
  rowElemsType: string[];
};

const UserInfoBlock: React.FC<Props> = ({
  blockTitle,
  fieldTitles,
  fieldValues,
  rowElemsType,
}) => {
  if (!fieldTitles || !fieldValues) return null;

  if (!fieldValues.filter((val) => val).length) return null;

  const elements = fieldValues.map((val, i) => (
    <UserInfoRow
      key={i}
      title={fieldTitles[i]}
      value={val}
      fieldType={rowElemsType[i]}
    />
  ));

  return (
    <div className={s.block}>
      {blockTitle && (
        <div className={s.block__box}>
          <h2 className={s.block__title}>{blockTitle}</h2>
          <span className={s.block__line}></span>
        </div>
      )}
      <div>{elements}</div>
    </div>
  );
};

export default UserInfoBlock;
