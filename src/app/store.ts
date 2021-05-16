import { configureStore } from '@reduxjs/toolkit';
import { sampleSlice } from 'features/sampleSlice';

export default configureStore({
  reducer: {
    sample: sampleSlice.reducer,
  },
});
