import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'catalog',
  storage,
  whitelist: ['favorites']
};

const persistedReducer = persistReducer(persistConfig, catalogReducer);

const store = configureStore({
  reducer: {
    catalog: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
