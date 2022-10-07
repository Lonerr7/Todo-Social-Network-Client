import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './WelcomePage.module.scss';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { replace: true });

    // eslint-disable-next-line
  }, []);

  return <div className={s.page}>Welcome!</div>;
};

export default WelcomePage;
