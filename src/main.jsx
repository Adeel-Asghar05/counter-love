


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import counterStore from './assets/components/Store/index.js';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Love from './assets/components/Store/Love.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App /> }, 
  { path: "/love", element: <Love /> } 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

