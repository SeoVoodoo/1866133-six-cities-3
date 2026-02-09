import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './offers/offers.slice';
import { createApi } from '../api/api';


export const api = createApi();


const rootReducer = combineReducers({
  offers: offersReducer
});


export const store = configureStore({

  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })

});
