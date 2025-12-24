import { capitalizeFirstLetter } from '../../utils/common';

type PlaceCardPropsType = {
  title: string;
  //type: 'apartment' | 'room' | 'house' | 'hotel';
  type: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
  isOffer?: boolean;
}

const PlaceCard = ({
  title, type, price, isPremium, isFavorite, rating, previewImage, isOffer
}: PlaceCardPropsType): JSX.Element => {

  const upgradeType = capitalizeFirstLetter(type);

  return (
    <article
      className={`${isOffer ? 'near-places__card' : 'cities__card'} place-card`}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`place-card__image-wrapper ${isOffer
          ? 'near-places__image-wrapper'
          : 'cities__image-wrapper'}
        `}
      >
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price} </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{upgradeType}</p>
      </div>
    </article>
  );
};


export default PlaceCard;
