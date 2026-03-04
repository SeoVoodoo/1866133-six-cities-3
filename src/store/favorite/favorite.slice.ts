import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { fetchFavoritesAction, changeFavoriteAction } from './favorite.thunks';
import { ShortenedOfferType } from '../../types/offer.type';


type FavoriteState = {
  fetchFavoriteStatus: RequestStatus;
  postFavoriteStatus: RequestStatus;
  items: ShortenedOfferType[];
}

const initialState: FavoriteState = {
  fetchFavoriteStatus: RequestStatus.Idle,
  postFavoriteStatus: RequestStatus.Idle,
  items: [],
};


const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchFavoriteStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.fetchFavoriteStatus = RequestStatus.Success;
        state.items = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchFavoriteStatus = RequestStatus.Failed;
      })
      .addCase(changeFavoriteAction.pending, (state) => {
        state.postFavoriteStatus = RequestStatus.Loading;
      })
      .addCase(changeFavoriteAction.rejected, (state) => {
        state.postFavoriteStatus = RequestStatus.Failed;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, action) => {

        if (action.payload.isFavorite) {
          state.items.push(action.payload);
        } else {
          state.items = state.items.filter(({id}) => id !== action.payload.id);
        }
      })
});

export const favoritesReducer = favoriteSlice.reducer;
