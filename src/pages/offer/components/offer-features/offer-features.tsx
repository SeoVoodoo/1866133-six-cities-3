import { capitalizeFirstLetter } from '../../../../utils/common';

type OfferFeaturesPropsType = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

const OfferFeatures = ({type, bedrooms, maxAdults}:OfferFeaturesPropsType) => {

  const upgradeType = capitalizeFirstLetter(type);

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {upgradeType}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedrooms} ${bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`}
      </li>
      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults} ${maxAdults > 1 ? 'adults' : 'adult'}`}
      </li>
    </ul>
  );
};

export default OfferFeatures;
