import { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { useAppDispatch } from '../../../hooks/reduxToolkitHooks';
import s from './Search.module.scss';

interface Props {
  text: string;
  actionCreator: (payload: string) => {
    payload: string;
    type: string;
  };
  placeholder?: string;
  styling?: {
    customBoxClass?: string;
    customInputClass?: string;
    searchIconSize?: number;
    customSearchIconClass?: string;
    customClearBtnClass?: string;
    clearIconSize?: number;
  };
}

const Search: React.FC<Props> = ({
  text,
  placeholder,
  styling,
  actionCreator,
}) => {
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
    <div className={`${s.search} ${styling?.customBoxClass}`}>
      <AiOutlineSearch
        className={`${s.search__searchIcon} ${styling?.customSearchIconClass}`}
        size={styling?.searchIconSize ? styling.searchIconSize : 24}
      />
      <input
        className={`${s.search__input} ${styling?.customInputClass}`}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={onTextChange}
      />
      {text && (
        <button
          className={`${s.search__clear} ${styling?.customClearBtnClass}`}
          onClick={onInputClear}
        >
          <ImCross
            className={`${s.search__icon} ${s.search__clearIcon}`}
            size={styling?.clearIconSize ? styling?.clearIconSize : 15}
          />
        </button>
      )}
    </div>
  );
};

export default Search;
