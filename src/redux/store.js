import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import filterReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedContactsReducer = persistReducer(
  {
    key: "user-contacts",
    storage,
  },
  contactsReducer
);

export const store = configureStore({
  reducer: {
    contactsData: persistedContactsReducer,
    filterData: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
