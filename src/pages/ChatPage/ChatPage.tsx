import {FC} from 'react';
import s from './ChatPage.module.scss';
import Chat from '../../components/ChatAndMessages/Chat/Chat';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import withBanRedirect from '../../hoc/withBanRedirect';

const ChatPage: FC = () => {
  return (
    <div className={s.chat}>
      <Chat />
    </div>
  );
};

export default withBanRedirect(withActiveMenuNum(ChatPage, 3));
