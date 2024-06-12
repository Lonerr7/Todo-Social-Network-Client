import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  progress: 0,
};

const progressBarSlice = createSlice({
  name: 'progressBar',
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export default progressBarSlice.reducer;
export const { setProgress } = progressBarSlice.actions;
