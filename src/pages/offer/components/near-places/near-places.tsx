import PlaceCard from '../../../../components/place-card/place-card';
import { ShortenedOfferType } from '../../../../types/offer.type.ts';

type NearPlacesPropsType = {
  otherOffers: ShortenedOfferType[];
}

const NearPlaces = ({ otherOffers }: NearPlacesPropsType) => (

  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {
        otherOffers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            className={'near-places'}
          />
        ))
      }
    </div>
  </section>
);

export default NearPlaces;
