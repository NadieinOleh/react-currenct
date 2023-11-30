import { routing } from './app/routes/route';
import store from './app/store';
import Auth from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routing}>
        <Auth />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
