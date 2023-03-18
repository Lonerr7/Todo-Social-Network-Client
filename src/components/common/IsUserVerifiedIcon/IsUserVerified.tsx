import { Themes } from '../../../types/reduxTypes/themeSliceTypes';
import tick from '../../../assets/img/verifiedIcon.svg';
import tickDark from '../../../assets/img/verifiedIcon(dark).svg';

interface Props {
  customCalss?: string;
}

const IsUserVerifiedIcon: React.FC<Props> = ({ customCalss }) => {
  return (
    <>
      {document.body.getAttribute('data-theme') === Themes.DARK ? (
        <img
          className={customCalss}
          src={tickDark}
          alt="tick"
          title="Verified"
        />
      ) : (
        <img className={customCalss} src={tick} alt="tick" title="Verified" />
      )}
    </>
  );
};

export default IsUserVerifiedIcon;
