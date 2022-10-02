import { useState } from 'react';
import s from './MyBio.module.scss';
import MyBioEditForm from './MyBioEditForm/MyBioEditForm';

type Props = {
  bio?: string;
};

const MyBio: React.FC<Props> = ({ bio }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={s.bio}>
      {bio ? (
        <>
          <span className={s.bio__text}>{bio}</span>
        </>
      ) : (
        <>
          {!editMode ? (
            <span className={s.bio__changeText} onClick={toggleEditMode}>
              Click here to change bio...
            </span>
          ) : (
            <div className={s.bio__editFormBox}>
              <MyBioEditForm />
              <button className={s.bio__btnCloseEdit} onClick={toggleEditMode}>
                Cancel
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyBio;
