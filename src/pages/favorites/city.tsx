import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { ShortenedOfferType } from '../../types/offer.type';

type CityPropsType = {
  cityName: string;
  favorites: ShortenedOfferType[];
}


export const City = ({cityName, favorites}: CityPropsType) => (

  <li className="favorites__locations-items" key={cityName}>
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to="#">
          <span>{cityName}</span>
        </Link>
      </div>
    </div>
    <div className="favorites__places">
      {
        favorites.filter((favoriteOffer) => favoriteOffer.city.name === cityName)
          .map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              className={'favorites'}
            />
          ))
      }
    </div>
  </li>
);
