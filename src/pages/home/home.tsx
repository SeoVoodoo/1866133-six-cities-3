import NavTabs from './components/navigation-tabs/nav-tabs';
import CitiesMap from './components/cities-map/cities-map';
import FormSorting from './components/form-sorting/form-sorting';
import { OfferType } from '../../types/offer.type';
import { OfferList } from './components/offer-list/offer-list';


type HomePropsType = {
  offersCount: number;
  offersData: OfferType[];
}

const Home = ({ offersCount, offersData }: HomePropsType) => (
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <NavTabs />
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersCount} places to stay in Amsterdam</b>
          <FormSorting />
          <div className="cities__places-list places__list tabs__content">
            <OfferList offers={offersData} />
          </div>
        </section>
        <CitiesMap />
      </div>
    </div>
  </main>
);

export default Home;
