import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Stars from './components/Stars.jsx';
import SingleStar from './components/SingleStar.jsx';

const BASE_URL = 'http://localhost:8080';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Stars />,
        loader: async () => {
          return fetch(`${BASE_URL}/stars`);
        },
      },
      {
        path: '/:id',
        element: <SingleStar />,
        // loader: async ({ params }) => {
        //   return fetch(`${BASE_URL}/stars/${params.id.slice(1)}`);
        // },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
