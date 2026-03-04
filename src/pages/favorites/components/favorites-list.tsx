import { ShortenedOfferType } from '../../../types/offer.type';
import { City } from '../city';

type FavoritesListPropsType = {
  favorites: ShortenedOfferType[];
}

const FavoritesList = ({ favorites }: FavoritesListPropsType) => {

  const uniqueCityNames: string[] = [...new Set(favorites.map((item) => item.city.name))];

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          uniqueCityNames.map((cityName) => (
            <City
              key={cityName}
              cityName={cityName}
              favorites={favorites}
            />
          ))
        }
      </ul>
    </>
  );
};

export default FavoritesList;
