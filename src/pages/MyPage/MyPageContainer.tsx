import { useEffect, useState } from 'react';
import withActiveMenuNum from '../../hoc/withActiveMenuNum';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { updateMyOnlineStatus } from '../../redux/myselfSlice';
import { OnlineStatusEnum } from '../../types/reduxTypes/authSliceTypes';
import { toggleAdditionalInfoVisibilityHelp } from '../../utils/appHelpers';
import MyPage from './MyPage';

const MyPageContainer: React.FC = () => {
  const myself = useAppSelector((state) => state.auth.user); //! Todos are not synced
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const [isAdditionalInfoVisible, setIsAdditionalInfoVisible] = useState(false);

  const toggleAdditionalInfoVisibility = toggleAdditionalInfoVisibilityHelp(
    isAdditionalInfoVisible,
    setIsAdditionalInfoVisible
  );

  useEffect(() => {
    dispatch(
      updateMyOnlineStatus({
        onlineStatus: OnlineStatusEnum.ONLINE,
      })
    );

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (document.title !== 'Todo Social Network') {
      document.title = 'Todo Social Network';
    }

    // eslint-disable-next-line
  }, []);

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
