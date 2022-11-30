import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import {
  Cryptocurrencies,
  CryptoDetails,

  Homepage,
  News
} from "./components";
import ErrorPage from './error-page/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index:true,
        element:<Homepage />
      },
      {
        path: "/homepage",
        element: <Homepage />,
        
      },
     
      {
        path: "/cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "/crypto/:coinId",
        element: <CryptoDetails />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Provider store={store}><RouterProvider router={router} /></Provider>
  </React.StrictMode>
);
 