import { memo } from 'react';

type OfferInsidePropsType = {
  goods: string[];
}

const OfferInside = memo(({goods}: OfferInsidePropsType) => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {
        goods.map((item) => (
          <li className="offer__inside-item" key={item}>
            {item}
          </li>
        ))
      }
    </ul>
  </div>
));

OfferInside.displayName = 'OfferInside';

export default OfferInside;
