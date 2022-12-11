import { useState, useRef } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { sendTodoComment } from '../../../../../redux/currentTodoSlice';
import Avatar from '../../Avatar/Avatar';
import s from './UserTodoCommentInput.module.scss';

interface Props {
  ownerPhoto: string;
  todoId: string;
}

const UserTodoCommentInput: React.FC<Props> = ({ ownerPhoto, todoId }) => {
  const [commentText, setCommentText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  const onCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.currentTarget.value);
  };

  const sendCommentHelper = () => {
    if (/^\s*$/.test(commentText)) return;

    (async () => {
      const res = await dispatch(sendTodoComment({ todoId, commentText }));
      
      if (res.meta.requestStatus === 'fulfilled') {
        setCommentText('');
      }
    })();

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const sendCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendCommentHelper();
  };

  const textareaSendCommentHandler = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.code === 'Enter' && e.shiftKey === false) {
      e.preventDefault();

      sendCommentHelper();
    }
  };

  return (
    <div className={s.input}>
      <Avatar
        avatar={ownerPhoto}
        customImgClass={s.input__avatar}
        wrapperClass={s.input__avatarWrapper}
      />
      <div className={s.input__box}>
        <form className={s.input__form} onSubmit={sendCommentHandler}>
          <textarea
            className={s.input__textarea}
            value={commentText}
            ref={textareaRef}
            onChange={onCommentChange}
            onKeyDown={textareaSendCommentHandler}
          />
          <button className={s.input__sendBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserTodoCommentInput;
