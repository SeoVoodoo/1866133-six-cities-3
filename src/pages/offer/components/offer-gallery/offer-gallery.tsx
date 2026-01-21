
type OfferGalleryPropsType = {
  images: string[];
}

const OfferGallery = ({images}: OfferGalleryPropsType) => (

  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {
        images.map((src, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="offer__image-wrapper" key={index}>
            <img
              className="offer__image"
              src={src}
            />
          </div>
        ))
      }
    </div>

  </div>
);


export default OfferGallery;
