import { authAPI, myselfAPI } from '../api/api';
import { UpdateMyBioValue, UpdateMyRegisterlInfoFormInitialValues } from './formikTypes';
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
export type AuthApi = typeof authAPI;

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

export enum UserManipulationRolesActions {
  LOWER_ROLE = 'lowerRole',
  UPGRADE_ROLE = 'upgradeRole',
}

export enum UserManipulationBanActions {
  BAN = 'banUser',
  UNBAN = 'unbanUser',
}
