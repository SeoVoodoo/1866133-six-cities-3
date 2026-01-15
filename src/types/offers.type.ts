import {HousingType} from '../const.ts';

export type OffersType = Array<{
    id: string;
    title: string;
    type: `${HousingType.Apartment}` | `${HousingType.Hotel}` | `${HousingType.House}` | `${HousingType.Room}`;
    price: number;
    city: {
      name: string;
      location: {
        latitude: number;
        longitude: number;
        zoom: number;
      };
    };
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  }>;
