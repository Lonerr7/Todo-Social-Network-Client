import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/reduxToolkitHooks';
import { setActiveSettingsNum } from '../redux/appSlice';

const withActiveSettingsNum = (
  Component: any,
  newActiveSettingsNum: number
) => {
  const NewComponent = (props: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setActiveSettingsNum(newActiveSettingsNum));

      // eslint-disable-next-line
    }, []);

    return <Component {...props} />;
  };

  return NewComponent;
};

export default withActiveSettingsNum;
