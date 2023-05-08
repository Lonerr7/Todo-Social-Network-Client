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

export const checkIfEpmty = (arr: (string | undefined)[]) => {
  const set = new Set(arr.map((item) => item));
  const [firstEl] = set;

  return set.size <= 1 && !firstEl;
};

export const replaceCamelCase = (str: string) => {
  const result = str.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const convertBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (err) => {
      reject(err);
    };
  });
};
