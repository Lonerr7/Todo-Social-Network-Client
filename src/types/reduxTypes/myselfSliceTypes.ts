export type MyselfState = {
  isUserUpdateFetching: boolean;
  isMyBioUpdating: boolean;
  isChangingPasswordFetching: boolean;
  isUserDeletingFetching: boolean;
  updateMeErrorMsg: string;
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
