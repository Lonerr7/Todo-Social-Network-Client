import { useAppDispatch } from '../../../../../../hooks/hooks';
import { updateMyBio } from '../../../../../../redux/myselfSlice';
import s from './MyBioEditForm.module.scss';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

const MyBioEditForm: React.FC<Props> = ({ text, setText }) => {
  const dispatch = useAppDispatch();

  const textChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(updateMyBio({ bio: text }));
  };

  return (
    <form className={s.form}>
      <label htmlFor="bio" />
      <input
        className={s.form__input}
        type="text"
        id="bio"
        value={text}
        onChange={textChangeHandler}
      />
      <button className={s.form__btn} type="submit" onClick={onSubmit}>
        Ok
      </button>
    </form>
  );
};

export default MyBioEditForm;
