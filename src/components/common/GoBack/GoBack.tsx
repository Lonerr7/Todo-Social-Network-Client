import s from './GoBack.module.scss';
import { TbArrowBackUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

type Props = {
  customClass?: string;
};

const GoBack: React.FC<Props> = ({ customClass }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button className={`${s.go} ${customClass}`} onClick={goBack}>
      <TbArrowBackUp className={s.go__arrow} size={50} />
    </button>
  );
};

export default GoBack;
