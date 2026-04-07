import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getCards } from './api/CitesCardInfo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export type BookingInfo = {
  bookingOffers?: number,
}

root.render(
  <React.StrictMode>
    <App bookingOffers={getCards().length}/>
  </React.StrictMode>
);
