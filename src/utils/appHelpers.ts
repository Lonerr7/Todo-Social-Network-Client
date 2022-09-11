export const getSetCurrentNumFromLS = (
  item: string,
  setActiveNum: (neededNum: number) => void
) => {
  const isCurrentNum = localStorage.getItem(item);
  const currentMenuNum = isCurrentNum ? +isCurrentNum : 1;
  setActiveNum(currentMenuNum);
};
