import s from './NameAndBio.module.scss';

type Props = {
  fName: string;
  lName: string;
  nickname: string;
  BioComponent: React.ReactNode;
};

const NameAndBio: React.FC<Props> = ({
  fName,
  lName,
  nickname,
  BioComponent,
}) => {
  return (
    <div className={s.nameAndBio}>
      <div className={s.nameAndBio__box}>
        <h1 className={s.nameAndBio__name}>
          {fName} {lName} ({nickname})
        </h1>
        <div className={s.nameAndBio__online}>Online</div>
      </div>
      <div className={s.nameAndBio__bioBox}>{BioComponent}</div>
    </div>
  );
};

export default NameAndBio;
