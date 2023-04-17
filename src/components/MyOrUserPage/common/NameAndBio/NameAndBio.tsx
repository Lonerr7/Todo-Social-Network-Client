import { UserRoles } from '../../../../types/reduxTypes/authSliceTypes';
import s from './NameAndBio.module.scss';
import IsUserVerifiedIcon from '../../../common/IsUserVerifiedIcon/IsUserVerified';
import Role from '../Role/Role';

interface Props {
  fName: string;
  lName: string;
  nickname: string;
  BioComponent: React.ReactNode;
  isVerified: boolean;
  isBanned: boolean;
  role: UserRoles;
  customBioBoxClass?: string;
}

const NameAndBio: React.FC<Props> = ({
  fName,
  lName,
  nickname,
  BioComponent,
  isVerified,
  isBanned,
  role,
  customBioBoxClass,
}) => {
  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <div className={s.nameAndBio__row}>
          <h1
            className={
              !isBanned
                ? s.nameAndBio__name
                : `${s.nameAndBio__name} ${s.banned}`
            }
          >
            {fName} {lName} ({nickname})
          </h1>

          <div className={s.nameAndBio__roleInfoBox}>
            {isVerified && (
              <IsUserVerifiedIcon customCalss={s.nameAndBio__icon} />
            )}
            <Role role={role} customClass={s.nameAndBio__role} />
          </div>
        </div>
      </div>
      <div className={`${s.nameAndBio__bioBox} ${customBioBoxClass}`}>
        {BioComponent}
      </div>
    </div>
  );
};

export default NameAndBio;
