import PlaceCard from '../../../../components/place-card/place-card';
import { OffersType } from '../../../../types/offers.type.ts';

type NearPlacesPropsType = {
  otherOffersData: OffersType;
}

const NearPlaces = ({ otherOffersData }: NearPlacesPropsType) => (

  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {
        otherOffersData.map((offer) => (
          <PlaceCard
            key={offer.id}
            title={offer.title}
            type={offer.type}
            price={offer.price}
            isPremium={offer.isPremium}
            isFavorite={offer.isFavorite}
            rating={offer.rating}
            previewImage={offer.previewImage}
            className={'near-places'}
          />
        ))
      }
    </div>
  </section>
);

export default NearPlaces;
