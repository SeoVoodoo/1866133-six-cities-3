import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { offersReducer } from './offers/offers.slice';
import { createApi } from '../api/api';
import { userReducer } from './user/user.slice';
import { redirect } from '../store/middlewares/redirect';
import { offerReducer } from './offer/offer.slice';
import { commentsReducer } from './comments/comments.slice';
import { nearbyReducer } from './nearby/nearby.slice';


export const api = createApi();


export const rootReducer = combineReducers({
  offers: offersReducer,
  offer: offerReducer,
  user: userReducer,
  comments: commentsReducer,
  nearby: nearbyReducer
});


export const store = configureStore({

  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)

});
