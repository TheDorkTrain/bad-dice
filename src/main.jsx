import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createHashRouter, RouterProvider } from "react-router-dom";

import Start from './pages/Start';
import ErrorPage from './pages/ErrorPage';
import Game from './pages/Game';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <> <Start />  </>
      }, {
        path: '/game',
        element: <Game />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

