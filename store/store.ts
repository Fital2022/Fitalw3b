import { configureStore } from "@reduxjs/toolkit";
import { empireSlice } from "./empireSlice";

export const store = configureStore({
  reducer: {
    empire: empireSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
