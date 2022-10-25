import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  content: false,
};

const customModalSlice = createSlice({
  name: 'customModal',
  initialState,
  reducers: {
    activeModal: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { activeModal } = customModalSlice.actions;
export default customModalSlice.reducer;
