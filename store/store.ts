import { configureStore } from "@reduxjs/toolkit";
import { empireSlice } from "./empireSlice";
import { addformSlice } from './addformSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";

const persistConfigemp = {
  key: 'empire',
  storage,
}
const persistConfigform = {
  key: 'stepform',
  storage,
}

const persistedReducerempire = persistReducer(persistConfigemp, empireSlice.reducer);
const persistedReduceraddform = persistReducer(persistConfigform, addformSlice.reducer);


export const store = configureStore({
  reducer: {
   empire: persistedReducerempire,
    form: persistedReduceraddform
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
