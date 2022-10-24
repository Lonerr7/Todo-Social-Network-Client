import { User } from '../../../../types/reduxTypes/authSliceTypes';
import s from './UserAdditionalInfo.module.scss';
import UserInfoBlock from '../UserInfoBlock/UserInfoBlock';

type Props = {
  user: User;
  isVisible: boolean;
};

const UserAdditionalInfo: React.FC<Props> = ({ user, isVisible }) => {
  if (!isVisible) return null;

  if (!user.mainInfo && !user.contactInfo) return null;

  return (
    <div className={s.info}>
      <UserInfoBlock
        blockTitle="Main information"
        fieldTitles={['City of birth', 'Native language']}
        fieldValues={[
          user.mainInfo?.cityOfBirth,
          user.mainInfo?.nativeLanguage,
        ]}
        rowElemsType={['']} // don't need it here
      />
      <UserInfoBlock
        blockTitle="Contact information"
        fieldTitles={['Mobile number', 'Discord']}
        fieldValues={[user.contactInfo?.phoneNumber, user.contactInfo?.discord]}
        rowElemsType={['tel']}
      />
      <UserInfoBlock
        blockTitle="Beliefs"
        fieldTitles={['Inspired by', 'Political Views', 'Religion']}
        fieldValues={[
          user.beliefs?.inspiredBy,
          user.beliefs?.politicalViews,
          user.beliefs?.religion,
        ]}
        rowElemsType={[]}
      />
      <UserInfoBlock
        blockTitle="Personal information"
        fieldTitles={[
          'Activities',
          'Interests',
          'Attitude towards smoking',
          'Attitude towards drinking',
          'Favorite music',
          'Favorite movies',
          'Favorite books',
          'About Me',
        ]}
        fieldValues={[
          user.personalInfo?.activities,
          user.personalInfo?.interests,
          user.personalInfo?.attitudeTowardsSmoking,
          user.personalInfo?.attitudeTowardsDrinking,
          user.personalInfo?.favoriteMusic,
          user.personalInfo?.favoriteMovies,
          user.personalInfo?.favouriteBooks,
          user.personalInfo?.aboutMe,
        ]}
        rowElemsType={[]}
      />
    </div>
  );
};

export default UserAdditionalInfo;
