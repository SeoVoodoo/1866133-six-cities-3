import { OfferType } from '../../types/offer.type';

export const offersData: OfferType[] = [
  {
    'id': '1',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 120,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    ],
    'maxAdults': 4
  },
  {
    'id': '2',
    'title': 'Wood and stone place',
    'type': 'room',
    'price': 80,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 3.1,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    'bedrooms': 2,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Elvis',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    ],
    'maxAdults': 3
  },
  {
    'id': '3',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 132,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Maikle',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ],
    'maxAdults': 5
  },
  {
    'id': '4',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 180,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    'bedrooms': 1,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Rita',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    ],
    'maxAdults': 1
  }
];
