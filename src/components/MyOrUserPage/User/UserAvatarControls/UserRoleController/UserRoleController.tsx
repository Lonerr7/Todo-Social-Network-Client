import { useState } from 'react';
import ChangeUserRole from './ChangeUserRole';

const UserRoleController: React.FC = () => {
  const [editMode, setEditMode] = useState(false);

  const toglleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div>
      {!editMode ? (
        <button onClick={toglleEditMode}>Change role</button>
      ) : (
        <ChangeUserRole toggleEditMode={toglleEditMode} />
      )}
    </div>
  );
};

export default UserRoleController;
