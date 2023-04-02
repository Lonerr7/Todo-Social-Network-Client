import { useState, useRef } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/reduxToolkitHooks';
import { sendTodoComment } from '../../../../../redux/currentTodoSlice';
import SubmitLoadingBtn from '../../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import Avatar from '../../Avatar/Avatar';
import s from './UserTodoCommentInput.module.scss';
import { EmojiClickData } from 'emoji-picker-react';
import EmojiPicker from '../../../../common/EmojiPicker/EmojiPicker';
import { VscSmiley } from 'react-icons/vsc';

interface Props {
  myPhoto: string;
  todoId: string;
}

const UserTodoCommentInput: React.FC<Props> = ({ myPhoto, todoId }) => {
  const [commentText, setCommentText] = useState('');
  const [isPickerOpened, setIsPickerOpened] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isCommentSending, sendCommentErrMsg } = useAppSelector(
    (state) => state.currentTodo
  );
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
    setIsPickerOpened(false);
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

  const toggleEmojiPicker = () => {
    setIsPickerOpened(!isPickerOpened);
  };

  const emojiClickHandler = (emojiData: EmojiClickData) => {
    setCommentText((prevMessage) => `${prevMessage}${emojiData.emoji}`);
  };

  return (
    <div className={s.input}>
      <div className={s.input__inner}>
        <Avatar
          avatar={myPhoto}
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
            <button
              className={s.input__pickerBtn}
              onClick={toggleEmojiPicker}
              type="button"
            >
              <VscSmiley className={s.input__pickerIcon} size={24} />
            </button>
            <EmojiPicker
              customClass={s.input__emojiPicker}
              isPickerOpened={isPickerOpened}
              onEmojiClick={emojiClickHandler}
            />
            <SubmitLoadingBtn
              btnClass={s.input__sendBtn}
              btnType="submit"
              btnText="Send"
              btnFetchingText="Sending..."
              isFetching={isCommentSending}
              onSubmit={() => {}}
            />
          </form>
        </div>
      </div>
      {sendCommentErrMsg ? (
        <p className={s.input__err}>{sendCommentErrMsg}</p>
      ) : null}
    </div>
  );
};

export default UserTodoCommentInput;
