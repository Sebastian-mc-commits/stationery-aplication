import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSearch: false,
};

const globalSearchSlice = createSlice({
  name: 'globalSearch',
  initialState,
  reducers: {
    selected: (state, action) => {
      state.selectedSearch = action.payload;
    },
  },
});

export const { selected } = globalSearchSlice.actions;
export default globalSearchSlice.reducer;
