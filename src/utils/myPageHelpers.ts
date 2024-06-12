import { replaceCamelCase } from './appHelpers';

export const createKeysOrValsArr = <T extends {}>(
  obj: T,
  field: keyof T,
  keysOrVals: 'keys' | 'values'
) => {
  return Object.keys(obj).includes(field as string)
    ? Object[keysOrVals](obj[field]!).map((key) => replaceCamelCase(key))
    : null;
};
