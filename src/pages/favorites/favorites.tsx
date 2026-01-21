import { ShortenedOfferType } from '../../types/offer.type';
import { City } from './city';

type FavoritesPropsType = {
  favorites: ShortenedOfferType[];
}


const Favorites = ({favorites}: FavoritesPropsType) => {

  const uniqueCityNames: string[] = [];

  favorites.forEach((item) => {
    if (!uniqueCityNames.includes(item.city.name)) {
      uniqueCityNames.push(item.city.name);
    }
  });

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
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
        </section>
      </div>
    </main>
  );
};

export default Favorites;
