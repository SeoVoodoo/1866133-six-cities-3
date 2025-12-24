//import React from 'react';

type OfferInsidePropsType = {
  insideList: string[];
}

const OfferInside = ({ insideList }: OfferInsidePropsType): JSX.Element => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {
        insideList.map((item) => (
          <li className="offer__inside-item" key={item}>
            {item}
          </li>
        ))
      }
    </ul>
  </div>
);


export default OfferInside;
