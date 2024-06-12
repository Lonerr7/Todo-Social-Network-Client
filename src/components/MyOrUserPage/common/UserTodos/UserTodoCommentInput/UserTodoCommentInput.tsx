import SubmitLoadingBtn from '../../../../common/SubmitLoadingBtn/SubmitLoadingBtn';
import Avatar from '../../Avatar/Avatar';
import s from './UserTodoCommentInput.module.scss';
import EmojiPick from '../../../../common/EmojiPick/EmojiPick';
import { EmojiClickData } from 'emoji-picker-react';
import TextError from '../../../../common/TextError/TextError';

interface Props {
  myPhoto: string;
  commentText: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  isPickerOpened: boolean;
  isCommentSending: boolean;
  sendCommentErrMsg: string;
  sendCommentHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  onCommentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaSendCommentHandler: (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => void;
  emojiClickHandler: (emojiData: EmojiClickData) => void;
  toggleEmojiPicker: () => void;
}

const UserTodoCommentInput: React.FC<Props> = ({
  myPhoto,
  commentText,
  textareaRef,
  isPickerOpened,
  isCommentSending,
  sendCommentErrMsg,
  sendCommentHandler,
  onCommentChange,
  textareaSendCommentHandler,
  emojiClickHandler,
  toggleEmojiPicker,
}) => {
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
            <EmojiPick
              customBtnPickerClass={s.input__pickerBtn}
              emojiClickHandler={emojiClickHandler}
              isPickerOpened={isPickerOpened}
              toggleEmojiPicker={toggleEmojiPicker}
              customPickerClass={s.input__emojiPicker}
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
        // <p className={s.input__err}>{sendCommentErrMsg}</p>
        <TextError customClass={s.input__err}>{sendCommentErrMsg}</TextError>
      ) : null}
    </div>
  );
};

export default UserTodoCommentInput;
