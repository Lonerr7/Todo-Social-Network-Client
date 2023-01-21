import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from './reduxToolkitHooks';

export const usePagination = (
  totalItemsCount: number,
  navigateURL: string,
  limit: number,
  neededItemId: string | null,
  fetchFn: any //! Needs a definite type
) => {
  const pageCount = Math.ceil(totalItemsCount / limit);

  const navigate = useNavigate();
  const location = useLocation();
  const searchURLArr = location.search.split('');
  const page = +searchURLArr[searchURLArr.length - 1];

  const dispatch = useAppDispatch();

  const handlePageClick = (selectedItem: { selected: number } | number) => {
    let selectedPage;
    if (typeof selectedItem === 'object') {
      selectedPage = selectedItem.selected + 1;
    } else {
      selectedPage = selectedItem;
    }

    navigate(`${navigateURL}${selectedPage}`);
  };

  useEffect(() => {
    (async () => {
      if (neededItemId) {
        await dispatch(fetchFn({ itemId: neededItemId, page: page }));
      } else {
        await dispatch(fetchFn(page));
      }

      window.scrollTo(0, 0);
    })();

    // eslint-disable-next-line
  }, [page]);

  return { pageCount, page, handlePageClick };
};
