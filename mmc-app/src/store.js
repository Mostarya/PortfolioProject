import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { commentsReducer } from '../src/features/Comments/commentsSlice';
// import { userReducer } from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    //user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
