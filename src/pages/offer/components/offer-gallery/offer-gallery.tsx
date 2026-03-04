import { memo } from 'react';

type OfferGalleryPropsType = {
  images: string[];
}

const OfferGallery = memo(({images}: OfferGalleryPropsType) => (

  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {
        images.map((src) => (
          <div className="offer__image-wrapper" key={src}>
            <img
              className="offer__image"
              src={src}
            />
          </div>
        ))
      }
    </div>

  </div>
));

OfferGallery.displayName = 'OfferGallery';

export default OfferGallery;
