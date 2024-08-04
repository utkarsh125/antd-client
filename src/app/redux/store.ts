import { configureStore } from '@reduxjs/toolkit';
import emailReducer from './features/emailSlice';
import folderReducer from './features/folderSlice';

export const store = configureStore({
  reducer: {
    email: emailReducer,
    folder: folderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
