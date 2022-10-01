import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useAppDispatch } from '../../../hooks/hooks';
import s from './Search.module.scss';

type Props = {
  text: string;
  actionCreator: (payload: string) => {
    payload: string;
    type: string;
  };
};

const Search: React.FC<Props> = ({ actionCreator, text }) => {
  console.log(`search rerender`);
  
  const dispatch = useAppDispatch();

  const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.match(/^\s+$/)) {
      return;
    }
    dispatch(actionCreator(e.currentTarget.value));
  };

  const onInputClear = () => {
    dispatch(actionCreator(''));
  };

  // Clear search input when we leave this Component
  useEffect(() => {
    return () => {
      dispatch(actionCreator(''));
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.search}>
      <AiOutlineSearch className={s.search__searchIcon} size={24} />
      <input
        className={s.search__input}
        type="text"
        placeholder="Search for todo"
        value={text}
        onChange={onTextChange}
      />
      {text && (
        <button className={s.search__clear} onClick={onInputClear}>
          <ImCross className={s.search__icon} size={15} />
        </button>
      )}
    </div>
  );
};

export default Search;
