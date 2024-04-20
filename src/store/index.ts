/* The code is taken from redux toolkit website */
import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from '../services/apiSlice';

export const store = configureStore({
  reducer: {
    // reducers.
    // [apiSlice.reducerPath]: apiSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
