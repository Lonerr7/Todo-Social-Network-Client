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

export const notAllSameType = (arr: (string | undefined)[]) => {
  const set = new Set(arr.map((item) => item));
  const [firstEl] = set;

  return set.size <= 1 && typeof firstEl === 'undefined';
};
