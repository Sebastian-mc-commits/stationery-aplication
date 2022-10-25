import { configureStore } from '@reduxjs/toolkit';
import {
  customModalSlice,
  categorySlice,
  itemSlice,
  historySlice,
  globalSearchSlice,
} from './slices';

export const store = configureStore({
  reducer: {
    customModal: customModalSlice,
    category: categorySlice,
    item: itemSlice,
    history: historySlice,
    globalSearch: globalSearchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
