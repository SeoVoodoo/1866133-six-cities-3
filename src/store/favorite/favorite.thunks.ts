import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferType, ShortenedOfferType } from '../../types/offer.type';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';


export const fetchFavoritesAction = createAsyncThunk<ShortenedOfferType[], undefined, {extra: AxiosInstance}>(
  'fetchFavorites',
  async(_arg, {extra: api}) => {
    const response = await api.get<ShortenedOfferType[]>(APIRoute.Favorite);
    return response.data;
  }
);

type ChangePropsType = {
  offerId: string;
  isFavorite: boolean;
}


export const changeFavoriteAction = createAsyncThunk<OfferType, ChangePropsType, {extra: AxiosInstance}>(
  'favorite/change',
  async({offerId, isFavorite}, {extra: api}) => {
    const status = Number(!isFavorite);
    const response = await api.post<OfferType>(`${APIRoute.Favorite}/${offerId}/${status}`);
    return response.data;
  }
);
