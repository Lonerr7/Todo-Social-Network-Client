import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxToolkitHooks';

const withBanRedirect = (Component: any) => {
  const NewComponent = (props: any) => {
    const isMeBanned = useAppSelector((state) => state.auth.user?.isBanned);

    if (isMeBanned) {
      return <Navigate to="/banned" />;
    }

    return <Component {...props} />;
  };

  return NewComponent;
};

export default withBanRedirect;
