import s from './MyBioEditForm.module.scss';

const MyBioEditForm: React.FC = () => {
  return (
    <form className={s.form}>
      <label htmlFor="bio" />
      <input className={s.form__input} type="text" id="bio" />
      <button className={s.form__btn} type="submit">
        Ok
      </button>
    </form>
  );
};

export default MyBioEditForm;
