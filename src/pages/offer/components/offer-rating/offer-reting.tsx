import { memo } from 'react';
import { StarRating } from '../../../../components/star-rating/star-rating';

type OfferRetingPropsType = {
  rating: number;
};

const OfferReting = ({rating}: OfferRetingPropsType) => (
  <div className="offer__rating rating">
    <div className="offer__stars rating__stars">
      <StarRating rating={rating} />
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="offer__rating-value rating__value">{Math.round(rating)}</span>
  </div>
);

const MemoizedOfferReting = memo(OfferReting);

export default MemoizedOfferReting ;
