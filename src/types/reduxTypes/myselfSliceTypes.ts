export type MyselfState = {
  isMyGeneralInfoFetching: boolean;
  isMyAdditionalInfoFetching: boolean;
  isMyMainInfoFetching: boolean;
  isMyBioUpdating: boolean;
  isChangingPasswordFetching: boolean;
  isUserDeletingFetching: boolean;
  sendMyAdditionalInfoErrorMsg: string;
  updateMyGeneralInfoErrorMsg: string;
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
