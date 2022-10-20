export type MyselfState = {
  isMyRegisterInfoFetching: boolean;
  isMyAdditionalInfoFetching: boolean;
  isMyMainInfoFetching: boolean;
  isMyBioUpdating: boolean;
  isChangingPasswordFetching: boolean;
  isUserDeletingFetching: boolean;
  sendMyAdditionalInfoErrorMsg: string;
  updateMyRegisterInfoErrorMsg: string;
  updateMyMainInfoErrorMsg: string;
  changePasswordErrorMsg: string;
  deleteMyProfileErrorMsg: string;
};

export type AdditionalFieldsToSend = {
  generalInfo: {
    dateOfBirth?: string;
    country?: string;
    currentCity?: string;
  };
  mainInfo: {
    cityOfBirth?: string;
    languages?: string;
  };
  contactInfo: {
    phoneNumber?: string;
  };
};

export type MainInfoFieldsToSend = {
  mainInfo: {
    cityOfBirth: string;
    nativeLanguage: string;
  };
};
