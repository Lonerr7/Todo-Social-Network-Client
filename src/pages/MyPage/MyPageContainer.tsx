import { useState } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppSelector } from '../../hooks/hooks';
import MyPage from './MyPage';

const MyPageContainer: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user); //! Todos are not synced
  const todos = useAppSelector((state) => state.todo.todos);

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfoVisibility = () => {
    setIsAdditionalInfoVisible(!isAdditionalInfoVisible);
  };

  if (!myself) return <></>;

  return (
    <MyPage
      myself={myself}
      isAdditionalInfoVisible={isAdditionalInfoVisible}
      todos={todos}
      toggleAdditionalInfoVisibility={toggleAdditionalInfoVisibility}
    />
  );
};

export default withActiveMenuNum(MyPageContainer, 1);
