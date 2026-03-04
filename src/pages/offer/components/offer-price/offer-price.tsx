import { memo } from 'react';

type OfferPricePropsType = {
  price: number;
}

const OfferPrice = memo(({price}:OfferPricePropsType) => (
  <div className="offer__price">
    <b className="offer__price-value">&euro;{price}</b>
    <span className="offer__price-text">&nbsp;night</span>
  </div>
));

OfferPrice.displayName = 'OfferPrice';

export default OfferPrice;
