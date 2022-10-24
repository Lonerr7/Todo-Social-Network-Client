import { replaceCamelCase } from './appHelpers';

export const createKeysOrValsArr = <T extends object>(
  obj: T,
  field: keyof T,
  keysOrVals: 'keys' | 'values'
) => {
  return Object[keysOrVals](obj).includes(field as string)
    ? Object.keys(obj[field]!).map((key) => replaceCamelCase(key))
    : null;
};
