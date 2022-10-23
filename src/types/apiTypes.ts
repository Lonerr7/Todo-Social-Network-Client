import { myselfAPI } from '../api/api';
import {
  UpdateMyBioValue,
  UpdateMyRegisterlInfoFormInitialValues,
} from './formikTypes';
import {
  AdditionalFieldsToSend,
  BeliefsFieldsToSend,
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
  | ContactFieldsToSend
  | BeliefsFieldsToSend;
