import Avatar from '../../MyOrUserPage/common/Avatar/Avatar';
import s from './Message.module.scss';

interface Props {
  userId: string;
  userName: string;
  message: string;
  photo: string;
}

const Message: React.FC = () => {
  return (
    <div className={s.message}>
      <Avatar customImgClass={s.message__avatar} />
      <div className={s.message__box}>
        <span>User_nickname</span>
        <p>Message</p>
      </div>
    </div>
  );
};

export default Message;
