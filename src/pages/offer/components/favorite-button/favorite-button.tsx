import { useNavigate } from 'react-router-dom';
import { getAutorizationStatus } from '../../../../authorization-status';
import { AppRoute, AutorizationStatus } from '../../../../const';

type FavoriteButtonPropsType = {
  isFavorite: boolean;
}

const ICON_SIZE = {
  WIDTH: '31',
  HEIGHT: '33'
};

export const FavoriteButton = ({ isFavorite }: FavoriteButtonPropsType) => {
  const navigate = useNavigate();
  const autorizationStatus = getAutorizationStatus();

  const onFavoriteButtonClick = () => {
    if(autorizationStatus === AutorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className="offer__bookmark-button button"
      type="button"
      onClick={onFavoriteButtonClick}
    >
      <svg
        className="offer__bookmark-icon"
        width={ICON_SIZE.WIDTH}
        height={ICON_SIZE.HEIGHT}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        ${isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
};
