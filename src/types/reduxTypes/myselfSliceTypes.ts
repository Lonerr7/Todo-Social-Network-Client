export type MyselfState = {
  isMyRegisterInfoFetching: boolean;
  isMyGeneralInfoFetching: boolean;
  isMyContactInfoFetching: boolean;
  isMyAdditionalInfoFetching: boolean;
  isMyMainInfoFetching: boolean;
  isMyBioUpdating: boolean;
  isChangingPasswordFetching: boolean;
  isUserDeletingFetching: boolean;
  updateMyRegisterInfoErrorMsg: string;
  updateMyGeneralInfoErrorMsg: string;
  updateMyContactInfoErrorMsg: string;
  sendMyAdditionalInfoErrorMsg: string;
  updateMyMainInfoErrorMsg: string;
  changePasswordErrorMsg: string;
  deleteMyProfileErrorMsg: string;
};

export type GeneralInfoFieldsToSend = {
  generalInfo: {
    dateOfBirth: string;
    country: string;
    currentCity: string;
    jobPlace: string;
    relationship: string;
    website: string;
  };
};

export type MainInfoFieldsToSend = {
  mainInfo: {
    cityOfBirth: string;
    nativeLanguage: string;
  };
};

export type ContactFieldsToSend = {
  contactInfo: {
    phoneNumber: string;
    discord: string;
  };
};

export type AdditionalFieldsToSend = {
  generalInfo: {
    dateOfBirth: string;
    country: string;
    currentCity: string;
  };
  mainInfo: {
    cityOfBirth: string;
    languages?: string;
  };
  contactInfo: {
    phoneNumber: string;
  };
};
