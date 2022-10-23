import { User } from '../../../../types/reduxTypes/authSliceTypes';
import { replaceCamelCase } from '../../../../utils/appHelpers';
import UserInfoBlock from '../UserInfoBlock/UserInfoBlock';
import s from './UserGeneralInfo.module.scss';

type Props = {
  user: User;
};

const UserGeneralInfo: React.FC<Props> = ({ user }) => {
  const correctFieldTitles = Object.keys(user).includes('generalInfo')
    ? Object.keys(user.generalInfo).map((title) => replaceCamelCase(title))
    : null;
  const fieldValues = Object.keys(user).includes('generalInfo')
    ? Object.values(user.generalInfo).map((val, i) => {
        if (correctFieldTitles && correctFieldTitles[i] === 'Date Of Birth') {
          return val?.split('T')[0];
        }

        return val;
      })
    : null;

  if (!fieldValues?.filter((val) => val).length) return null;

  return (
    <div className={s.info}>
      <UserInfoBlock
        fieldTitles={correctFieldTitles}
        fieldValues={fieldValues}
        rowElemsType={['']}
      />
    </div>
  );
};

export default UserGeneralInfo;
