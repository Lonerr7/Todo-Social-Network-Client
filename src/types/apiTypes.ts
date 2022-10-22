import { myselfAPI } from '../api/api';
import {
  UpdateMyBioValue,
  UpdateMyRegisterlInfoFormInitialValues,
} from './FormikTypes';
import {
  AdditionalFieldsToSend,
  GeneralInfoFieldsToSend,
  MainInfoFieldsToSend,
} from './reduxTypes/myselfSliceTypes';

export type MyselfApi = typeof myselfAPI;

export type MyselfApiMethods = 'updateMe' | 'changeMyPassword' | 'deleteMe';

export type UpdateMeInitialValuesForApi =
  | UpdateMyRegisterlInfoFormInitialValues
  | GeneralInfoFieldsToSend
  | UpdateMyBioValue
  | AdditionalFieldsToSend
  | MainInfoFieldsToSend;
