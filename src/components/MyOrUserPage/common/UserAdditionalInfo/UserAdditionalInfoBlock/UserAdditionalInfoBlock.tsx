import { checkIfEpmty } from '../../../../../utils/appHelpers';
import UserInfoRow from '../../UserInfoRow/UserInfoRow';
import s from './UserAdditionalInfoBlock.module.scss';

type Props = {
  blockTitle: string;
  fieldTitles: string[];
  fieldValues: (string | undefined)[];
  rowElemsType: string[];
};

const UserAdditionalInfoBlock: React.FC<Props> = ({
  blockTitle,
  fieldTitles,
  fieldValues,
  rowElemsType,
}) => {
  if (checkIfEpmty(fieldValues)) return null; // checking if all items in array are 'undefined', then it means we display nothing

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
      <div className={s.block__box}>
        <h2 className={s.block__title}>{blockTitle}</h2>
        <span className={s.block__line}></span>
      </div>
      <div>{elements}</div>
    </div>
  );
};

export default UserAdditionalInfoBlock;
