import PlaceCard from '../../../../components/place-card/place-card';
import { OfferType } from '../../../../types/offer.type';
import { useState } from 'react';

type OfferListPropsType = {
  offers: OfferType[];
}

export const OfferList = ({ offers }: OfferListPropsType) => {

  const [activeCard, setActiveCard] = useState<null | OfferType>(null);
  window.console.log('activeCard', activeCard);

  const handleHoverCard = (offer?: OfferType) => {
    setActiveCard(offer || null);
  };

  return (
    offers.map((offer) => (
      <PlaceCard
        key={offer.id}
        offer={offer}
        handleHoverCard={handleHoverCard}
        className={'cities'}
      />
    ))
  );
};
