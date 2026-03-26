import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<ErrorPage></ErrorPage>,
            children: [
      {
        path: "/",
        loader: () => fetch('appsData.json'),
        Component: Home,
      },{
        path: "/apps",
        loader: () => fetch('appsData.json'),
        Component:AllApps,
      },{
        path: "appdetails/:id",
        loader: () => fetch('appsData.json'),
        Component:AppDetails,
      }
    ]
  },
]);