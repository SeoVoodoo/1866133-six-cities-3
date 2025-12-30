
type BookmarkButtonPropsType = {
  isFavorite: boolean;
}

const BookmarkButton = ({isFavorite}:BookmarkButtonPropsType):JSX.Element => {

  const BOOKMARK_ICON_SIZE = {
    WIDTH: '18',
    HEIGHT: '19'
  };

  return (
    <button
      className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={BOOKMARK_ICON_SIZE.WIDTH}
        height={BOOKMARK_ICON_SIZE.HEIGHT}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        ${isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
};

export default BookmarkButton;
