import React, { useRef, useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../hooks/reduxToolkitHooks';
import {
  resetCurrentTodoErrorMessages,
  sendTodoComment,
} from '../../../../../redux/currentTodoSlice';
import { EmojiClickData } from 'emoji-picker-react';
import UserTodoCommentInput from './UserTodoCommentInput';

interface Props {
  myPhoto: string;
  todoId: string;
}

const UserTodoCommentInputContainer: React.FC<Props> = ({
  myPhoto,
  todoId,
}) => {
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
      } else {
        setTimeout(() => {
          dispatch(resetCurrentTodoErrorMessages());
        }, 5000);
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
    <UserTodoCommentInput
      myPhoto={myPhoto}
      textareaRef={textareaRef}
      isPickerOpened={isPickerOpened}
      isCommentSending={isCommentSending}
      sendCommentErrMsg={sendCommentErrMsg}
      sendCommentHandler={sendCommentHandler}
      onCommentChange={onCommentChange}
      textareaSendCommentHandler={textareaSendCommentHandler}
      emojiClickHandler={emojiClickHandler}
      toggleEmojiPicker={toggleEmojiPicker}
      commentText={commentText}
    />
  );
};

export default UserTodoCommentInputContainer;
