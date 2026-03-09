import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectFavorites, selectFavoritesStatus } from '../../store/favorite/favorite.selectors';
import FavoritesEmpty from './components/favorites-empty';
import FavoritesList from './components/favorites-list';
import { useSelector } from 'react-redux';
import { fetchFavoritesAction } from '../../store/favorite/favorite.thunks';
import { RequestStatus } from '../../const';


const Favorites = () => {

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const status = useSelector(selectFavoritesStatus);
  const hasFavorites = favorites.length > 0;

  useEffect(() => {
    if(status === RequestStatus.Success) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, status]);

  return (
    <main className={`
      page__main
      page__main--favorites
      ${hasFavorites ? 'page__main--favorites-empty' : ''}`}
    >
      <div className="page__favorites-container container">

        <section className={`
          favorites
          ${hasFavorites ? 'favorites--empty' : ''}`}
        >
          {hasFavorites ? <FavoritesList favorites={favorites} /> : <FavoritesEmpty />}
        </section>

      </div>
    </main>
  );
};

export default Favorites;
