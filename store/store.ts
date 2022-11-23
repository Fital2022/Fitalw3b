import { configureStore } from "@reduxjs/toolkit";
import { empireSlice } from "./empireSlice";
import { addformSlice } from './addformSlice';

export const store = configureStore({
  reducer: {
    empire: empireSlice.reducer,
    form: addformSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
