export const getSetCurrentNumFromLS = (
  item: string,
  setActiveNum: (neededNum: number) => void
) => {
  const isCurrentNum = localStorage.getItem(item);
  const currentMenuNum = isCurrentNum ? +isCurrentNum : 1;
  setActiveNum(currentMenuNum);
};

export const uppercaseFirstLetter = (word: string) => {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
};
