import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./catalogSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['catalog']
};

const persistedReducer = persistReducer(persistConfig, catalogReducer);

const store = configureStore({
  reducer: {
    catalog: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
