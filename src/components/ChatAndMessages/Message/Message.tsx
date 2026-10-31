import {Link} from 'react-router-dom';
import {useAppSelector} from '../../../hooks/reduxToolkitHooks';
import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import {HiOutlineTrash} from 'react-icons/hi';
import s from './Message.module.scss';
import {ChatMessage} from '../../../types/chatTypes';

interface Props {
  isMe: boolean;
  myId: string;
  message: ChatMessage;
}

const Message: React.FC<Props> = ({message, isMe, myId}) => {
  const {
    _id: messageId,
    text,
    user: {id: userId, nickname, photo},
  } = message;
  const socketChannel = useAppSelector((state) => state.chat.socketChannel);

  const messageDeleteHandler = () => {
    socketChannel.emit('deleteMessage', {userId: myId, messageId});
  };

  return (
    <li className={s.message}>
      <div className={s.message__inner}>
        <Link to={isMe ? '/' : `/users/${userId}`}>
          <Avatar customImgClass={s.message__avatar} avatar={photo} />
        </Link>
        <div className={s.message__box}>
          <div className={s.message__row}>
            <Link className={s.message__usernameLink} to={isMe ? '/' : `/users/${userId}`}>
              <span className={s.message__username}>
                {nickname} {isMe && '(you)'}
              </span>
            </Link>
            {isMe && (
              <button className={s.message__deleteBtn} onClick={messageDeleteHandler}>
                <HiOutlineTrash className={s.message__deleteIcon} size={18} />
              </button>
            )}
          </div>
          <p className={s.message__text}>{text}</p>
        </div>
      </div>
    </li>
  );
};

export default Message;
