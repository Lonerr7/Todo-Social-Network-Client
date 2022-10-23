import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { showHideUserInfoSuccessMsg } from '../redux/formsSlice';
import { MyselfApi } from '../types/apiTypes';
import { UpdateMeFieldsToSendForApi } from '../types/apiTypes';
import { ShowHideFor } from '../types/reduxTypes/formsSliceTypes';

export const updateInfoWithSuccessMsg = async (
  api: MyselfApi,
  data: UpdateMeFieldsToSendForApi,
  showFor: ShowHideFor,
  dispatch?: ThunkDispatch<unknown, unknown, AnyAction>
) => {
  const response = await api.updateMe(data);

  // If OK, show success message in form. Then delete it after 5 sec.
  if (response.data.data.user && dispatch) {
    dispatch(showHideUserInfoSuccessMsg({ show: true, for: showFor }));

    setTimeout(() => {
      dispatch(showHideUserInfoSuccessMsg({ show: false, for: showFor }));
    }, 5000);
  }

  return response;
};
