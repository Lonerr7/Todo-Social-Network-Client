export type MyselfState = {
  isMyRegisterInfoFetching: boolean;
  isMyGeneralInfoFetching: boolean;
  isMyContactInfoFetching: boolean;
  isMyAdditionalInfoFetching: boolean;
  isMyMainInfoFetching: boolean;
  isMyBeliefsInfoFetching: boolean;
  isMyPersonalInfoFetching: boolean;
  isMyBioUpdating: boolean;
  isChangingPasswordFetching: boolean;
  isUserDeletingFetching: boolean;
  updateMyRegisterInfoErrorMsg: string;
  updateMyGeneralInfoErrorMsg: string;
  updateMyContactInfoErrorMsg: string;
  sendMyAdditionalInfoErrorMsg: string;
  updateMyMainInfoErrorMsg: string;
  updateMyBeliefsInfoErrorMsg: string;
  updateMyPersonalInfoErrorMsg: string;
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

export type ContactInfoFieldsToSend = {
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

export type BeliefsFieldsToSend = {
  beliefs: {
    politicalViews: string;
    religion: string;
    inspiredBy: string;
  };
};

export type PersonalInfoFieldsToSend = {
  personalInfo: {
    activities: string;
    interests: string;
    attitudeTowardsSmoking: string;
    attitudeTowardsDrinking: string;
    favoriteMusic: string;
    favoriteMovies: string;
    favouriteBooks: string;
    aboutMe: string;
  };
};
