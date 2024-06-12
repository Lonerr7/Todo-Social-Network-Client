import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import s from './MessagesPage.module.scss';

const MessagesPage: React.FC = () => {
  return <div className={s.messages}>MessagesPage</div>;
};

export default withActiveMenuNum(MessagesPage, 3);
