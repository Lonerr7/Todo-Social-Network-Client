import { useEffect } from 'react';
import { useAppDispatch } from '../../../../../../hooks/hooks';
import { updateMyBio } from '../../../../../../redux/myselfSlice';
import s from './MyBioEditForm.module.scss';

type Props = {
  text: string;
  bio: string | undefined;
  setText: React.Dispatch<React.SetStateAction<string>>;
  toggleEditMode: () => void;
};

const MyBioEditForm: React.FC<Props> = ({
  text,
  bio,
  setText,
  toggleEditMode,
}) => {
  const dispatch = useAppDispatch();

  const textChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await dispatch(updateMyBio({ bio: text }));

    toggleEditMode();
  };

  useEffect(() => {
    setText(bio!);

    // eslint-disable-next-line
  }, []);

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
      <div className={s.form__controls}>
        <button className={s.form__btn} type="submit" onClick={onSubmit}>
          Ok
        </button>
        <button className={s.form__btn} onClick={toggleEditMode}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default MyBioEditForm;
