import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { setActiveMenuNum } from '../redux/appSlice';

const withActiveMenuNum = (Component: any, newActiveMenuNum: number) => {
  const NewComponent = (props: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(setActiveMenuNum(newActiveMenuNum));

      // eslint-disable-next-line
    }, []);

    return <Component {...props} />;
  };

  return NewComponent;
};

export default withActiveMenuNum;
