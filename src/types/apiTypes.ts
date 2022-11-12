import { myselfAPI } from '../api/api';
import {
  UpdateMyBioValue,
  UpdateMyRegisterlInfoFormInitialValues,
} from './formikTypes';
import {
  AdditionalFieldsToSend,
  BeliefsFieldsToSend,
  ContactInfoFieldsToSend,
  GeneralInfoFieldsToSend,
  MainInfoFieldsToSend,
  OnlineStatusFieldToSend,
  PersonalInfoFieldsToSend,
} from './reduxTypes/myselfSliceTypes';

export type MyselfApi = typeof myselfAPI;

export type MyselfApiMethods = 'updateMe' | 'changeMyPassword' | 'deleteMe';

export type UpdateMeFieldsToSendForApi =
  | UpdateMyRegisterlInfoFormInitialValues
  | GeneralInfoFieldsToSend
  | UpdateMyBioValue
  | AdditionalFieldsToSend
  | MainInfoFieldsToSend
  | ContactInfoFieldsToSend
  | BeliefsFieldsToSend
  | PersonalInfoFieldsToSend
  | OnlineStatusFieldToSend;
