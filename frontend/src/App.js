import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios';
import { createRoutes } from './route/route';

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common.access_token = localStorage.getItem('hma-token')

const router = createBrowserRouter(createRoutes());

const App = () => {
  return <>
    <RouterProvider router={router} >
    </RouterProvider>
    <ToastContainer />

  </>
}

export default App;
