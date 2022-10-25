import { createSlice } from '@reduxjs/toolkit';
import {Alert} from "react-native"
const initialState = {
  historyList: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addCommit: (state, action) => {
      state.historyList.push(action.payload);
    },
    deleteCommit: (state, action) => {
     alert(action.payload.name)
      //state.historyList.filter(item => item !== action.payload.id)
    },
  },
});

export const { addCommit, deleteCommit } = historySlice.actions;
export default historySlice.reducer;
