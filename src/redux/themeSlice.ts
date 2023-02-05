import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Themes, ThemeState } from '../types/reduxTypes/themeSliceTypes';

const initialState: ThemeState = {
  theme: Themes.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Themes.DARK | Themes.LIGHT>) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
