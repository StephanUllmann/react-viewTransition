import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Stars from './components/Stars.jsx';
import StarPage from './pages/StarPage.jsx';
import { defer } from 'react-router-dom';

const BASE_URL = 'http://localhost:8080/stars';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Stars />,
        loader: async () => {
          return fetch(BASE_URL);
        },
      },
      {
        path: '/:id',
        element: <StarPage />,
        loader: async ({ params }) => {
          const dataPromise = fetch(`${BASE_URL}/${params.id.slice(1)}`);
          return defer({ data: dataPromise.then((res) => res.json()) });
        },
        action: async ({ request, params }) => {
          const id = params.id.slice(1);
          switch (request.method) {
            case 'PUT': {
              const data = Object.fromEntries(await request.formData());
              return fetch(`${BASE_URL}/${id}`, {
                body: JSON.stringify(data),
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            }
            default: {
              throw new Response('', { status: 405 });
            }
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
