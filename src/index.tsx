import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { favoriteData } from './mocks/favorite-data/favorite-data';
import { otherOffersData } from './mocks/other-offers-data/other-offers-data';
import { commentsData } from './mocks/comments-data/comments-data';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favoriteData={favoriteData}
        otherOffersData={otherOffersData}
        commentsData={commentsData}
      />
    </Provider>
  </React.StrictMode>
);
