import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SampleState = { count: number };
const initialState: SampleState = { count: 0 };

export const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({
      ...state,
      count: state.count - 1,
    }),
  },
});
