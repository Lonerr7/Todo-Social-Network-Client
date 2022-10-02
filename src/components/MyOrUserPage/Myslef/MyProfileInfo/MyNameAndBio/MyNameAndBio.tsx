import s from './MyNameAndBio.module.scss';

type Props = {
  fName: string;
  lName: string;
  nickname: string;
  bio?: string;
};

const MyNameAndBio: React.FC<Props> = ({ fName, lName, nickname, bio }) => {
  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <h1 className={s.nameAndBio__name}>
          {fName} {lName} ({nickname})
        </h1>
        <div className={s.nameAndBio__online}>Online</div>
      </div>
      <div className={s.nameAndBio__bioBox}>
        <span className={s.nameAndBio__bio}>{bio}</span>
      </div>
    </div>
  );
};

export default MyNameAndBio;
