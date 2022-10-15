export const getSetCurrentNumFromLS = (
  item: string,
  setActiveNum: (neededNum: number) => void
) => {
  const isCurrentNum = localStorage.getItem(item);
  const currentMenuNum = isCurrentNum ? +isCurrentNum : 1;
  setActiveNum(currentMenuNum);
};

export const uppercaseFirstLetter = (word: string | undefined) => {
  if (!word) return '';

  return `${word[0].toUpperCase()}${word.slice(1)}`;
};

export const toggleAdditionalInfoVisibilityHelp = (
  val: boolean,
  fn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => fn(!val);
};
