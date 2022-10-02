import { useState } from 'react';
import s from './MyBio.module.scss';
import MyBioEditForm from './MyBioEditForm/MyBioEditForm';
import { BiPencil } from 'react-icons/bi';

type Props = {
  bio?: string;
};

const MyBio: React.FC<Props> = ({ bio }) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(bio!);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={s.bio}>
      {bio && !editMode ? (
        <div className={s.bio__textBox}>
          <span className={s.bio__text}>{bio}</span>
          <button className={s.bio__openEdit} onClick={toggleEditMode}>
            <BiPencil size={18} />
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
              <MyBioEditForm
                text={text}
                bio={bio}
                setText={setText}
                toggleEditMode={toggleEditMode}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyBio;
