import { VALUTES } from '../../../../const.ts';

type OfferPricePropsType = {
  price: number;
}
const OfferPrice = ({price}:OfferPricePropsType) => (
  <div className="offer__price">
    <b className="offer__price-value">{VALUTES.EURO}{price}</b>
    <span className="offer__price-text">&nbsp;night</span>
  </div>
);

export default OfferPrice;
