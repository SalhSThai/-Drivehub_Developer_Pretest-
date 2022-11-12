import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slice/AuthSlice';
import loadingReducer from './slice/LoadingSlice';
import carReducer from './slice/CarSlice';




export const store = configureStore({
    reducer: {
      auth: authReducer,
      loading: loadingReducer,
      carState: carReducer,

    }
  });
  