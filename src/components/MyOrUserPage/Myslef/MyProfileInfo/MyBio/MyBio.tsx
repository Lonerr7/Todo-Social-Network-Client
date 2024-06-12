import s from './MyBio.module.scss';
import { useState } from 'react';
import MyBioEditForm from './MyBioEditForm/MyBioEditForm';
import { BiPencil } from 'react-icons/bi';

interface Props {
  bio: string;
}

const MyBio: React.FC<Props> = ({ bio }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <div className={s.bio}>
        {bio && !editMode ? (
          <div className={s.bio__textBox}>
            <span className={s.bio__text}>{bio}</span>
            <button className={s.bio__openEdit} onClick={toggleEditMode}>
              <BiPencil className={s.bio__editIcon} size={18} />
            </button>
          </div>
        ) : (
          <>
            {!editMode ? (
              <span className={s.bio__changeText} onClick={toggleEditMode}>
                Click here to change bio...
              </span>
            ) : (
              <div className={s.bio__editFormBox}>
                <MyBioEditForm bio={bio} toggleEditMode={toggleEditMode} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MyBio;
