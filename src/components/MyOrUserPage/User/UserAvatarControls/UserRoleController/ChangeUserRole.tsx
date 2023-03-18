interface Props {
  toggleEditMode: () => void;
}

const ChangeUserRole: React.FC<Props> = ({ toggleEditMode }) => {
  return (
    <div>
      React-select role
      <button onClick={toggleEditMode}>Close</button>
    </div>
  );
};

export default ChangeUserRole;
