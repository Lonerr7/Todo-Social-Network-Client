import Chat from '../../components/ChatAndMessages/Chat/Chat';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import withBanRedirect from '../../hoc/withBanRedirect';
import s from './ChatPage.module.scss';

const ChatPage: React.FC = () => {
  return (
    <div className={s.chat}>
      <Chat />
    </div>
  );
};

export default withBanRedirect(withActiveMenuNum(ChatPage, 3));
