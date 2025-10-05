import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/reducers';
import usersReducer from './slices/users/reducers';
import createSagaMiddleware from 'redux-saga';

// Import all sagas
import usersSaga from './slices/users/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Add all sagass to the saga middleware
sagaMiddleware.run(usersSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
