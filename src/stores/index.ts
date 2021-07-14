import { configureStore } from '@reduxjs/toolkit';
import { sampleSlice } from './sampleSlice';

const store = configureStore({
  reducer: {
    sample: sampleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
