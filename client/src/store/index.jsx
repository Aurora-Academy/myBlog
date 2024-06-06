import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { cartReducer } from "../slices/cartSlice";

const persistCartConfig = {
  key: "mb-cart",
  storage,
};

const persistCart = persistReducer(persistCartConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    }),
});

export const newStore = persistStore(store);
