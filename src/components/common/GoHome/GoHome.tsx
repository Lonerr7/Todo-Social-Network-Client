import s from '../GoBack/GoBack.module.scss';
import { HiHome } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

interface Props {
  customClass?: string;
}

const GoHome: React.FC<Props> = ({ customClass }) => {
  const navigate = useNavigate();
  const goHome = () => navigate('/Todo-Social-Network-Client/');

  return (
    <button className={`${s.go} ${customClass}`} onClick={goHome}>
      <HiHome size={50} />
    </button>
  );
};

export default GoHome;
