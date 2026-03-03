import { State } from '../../types/state.type';

export const selectFavorites = (state: State) => state.favorites.items;
export const selectFavoritesStatus = (state: State) => state.favorites.fetchFavoriteStatus;
export const selectFavoriteStatus = (state: State) => state.favorites.postFavoriteStatus;
