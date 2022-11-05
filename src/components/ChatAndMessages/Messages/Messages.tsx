import Message from '../Message/Message';
import s from './Messages.module.scss';

const Messages: React.FC = () => {
  return (
    <div className={s.messages}>
      <Message />
    </div>
  );
};

export default Messages;
