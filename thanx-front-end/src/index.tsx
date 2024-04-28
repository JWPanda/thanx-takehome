import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import reportWebVitals from './reportWebVitals';

import { 
  createBrowserRouter, 
  RouterProvider,
  Navigate 
} from 'react-router-dom';

import App from './App';
import Loader from './components/Loader';
import History from './pages/History';
import Redeem from './pages/Redeem';
import Home from './pages/Home';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      loader: Loader,
      children: [
        {
          path: "home",
          element: <Home />,
          loader: Loader,
        },
        {
          path: "redeem",
          element: <Redeem />,
          loader: Loader,
        },
        {
          path: "history",
          element: <History />,
          loader: Loader,
        },
      ],
    }
  ],
)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
