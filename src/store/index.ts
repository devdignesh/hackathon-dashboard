import { configureStore } from '@reduxjs/toolkit';
import hackathonsReducer from './slices/hackathonsSlice';

const store = configureStore({
  reducer: {
    hackathons: hackathonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
