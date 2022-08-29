import Container from '../common/Container/Container';
import s from './Main.module.scss';

const Main: React.FC = () => {
  return (
    <div className={s.main}>
      <Container>Main</Container>
    </div>
  );
};

export default Main;
