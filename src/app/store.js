import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import serviceListReducer from '../features/serviceList/serviceListSlice';
import serviceReducer from '../features/service/serviceSlice';
import saga from '../sagas/serviceSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    service: serviceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: true, thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'  
});

sagaMiddleware.run(saga);