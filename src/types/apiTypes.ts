import { myselfAPI } from '../api/api';

export type MyselfApi = typeof myselfAPI;

export type MyselfApiMethods = 'updateMe' | 'changeMyPassword' | 'deleteMe';
