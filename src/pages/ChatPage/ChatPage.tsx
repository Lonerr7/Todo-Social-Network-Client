import Chat from '../../components/ChatAndMessages/Chat/Chat';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import s from './ChatPage.module.scss';

const ChatPage: React.FC = () => {
  return (
    <div className={s.chat}>
      <Chat />
    </div>
  );
};

export default withActiveMenuNum(ChatPage, 4);
