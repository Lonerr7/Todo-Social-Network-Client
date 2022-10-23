import { myselfAPI } from '../api/api';
import {
  UpdateMyBioValue,
  UpdateMyRegisterlInfoFormInitialValues,
} from './FormikTypes';
import {
  AdditionalFieldsToSend,
  ContactFieldsToSend,
  GeneralInfoFieldsToSend,
  MainInfoFieldsToSend,
} from './reduxTypes/myselfSliceTypes';

export type MyselfApi = typeof myselfAPI;

export type MyselfApiMethods = 'updateMe' | 'changeMyPassword' | 'deleteMe';

export type UpdateMeFieldsToSendForApi =
  | UpdateMyRegisterlInfoFormInitialValues
  | GeneralInfoFieldsToSend
  | UpdateMyBioValue
  | AdditionalFieldsToSend
  | MainInfoFieldsToSend
  | ContactFieldsToSend;
