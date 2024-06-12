import { useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks/reduxToolkitHooks';
import { setProgress } from '../../../../redux/progressBarSlice';

interface Props {
  errorMsg: string;
}

const FinishProgressBarIfError: React.FC<Props> = ({ errorMsg }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProgress(100));

    // eslint-disable-next-line
  }, []);

  return <p>{errorMsg}</p>;
};

export default FinishProgressBarIfError;
