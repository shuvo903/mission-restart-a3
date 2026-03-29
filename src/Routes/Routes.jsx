import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import MyInstallation from '../pages/MyInstallation/MyInstallation';
import Loader from '../pages/Loader/Loader';
import AppsError from '../pages/AppsError/AppsError';
import NotFoundApp from '../pages/notFoundApp/notFoundApp';
import { getInstallApp } from '../utility/localStorage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('/appsData.json'),
        HydrateFallback: Loader,
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch('/appsData.json'),
        HydrateFallback: Loader,
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        loader: () => fetch('/appsData.json'),
        HydrateFallback: Loader,
        Component: AppDetails,
        errorElement: <NotFoundApp />
      },
      {
        path: "/installApp",
        loader: async () => {
          const installAppData = getInstallApp();
          const res = await fetch('/appsData.json')
          const data = await res.json()
          if (!Array.isArray(data)) return [];
          return data.filter(item => installAppData.includes(String(item.id)))


        },
        HydrateFallback: Loader,
        Component: MyInstallation,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ]
  },
]);