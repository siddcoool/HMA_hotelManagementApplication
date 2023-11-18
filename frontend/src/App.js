import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Login from './pages/Login';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Booking from './pages/Booking'
import HorizontalLayout from './layout/HorizontalLayout';
import BlankLayout from './layout/BlankLayout';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';


axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common.access_token = localStorage.getItem('hma-token')


const router = createBrowserRouter([
  {
    path: "/",
    element: <HorizontalLayout>
      <Home />
    </HorizontalLayout>,
  }, {
    path: "/about",
    element: <HorizontalLayout><AboutUs /></HorizontalLayout>,
  }, {
    path: "/contact",
    element: <HorizontalLayout><ContactUs/></HorizontalLayout>,
  }, {
    path: "/login",
    element: <BlankLayout><Login /></BlankLayout>,

  }, {
    path: "/register",
    element: <BlankLayout><Signup /></BlankLayout>
  },
  {
    path: "/room/:roomId/booking",
    element: <HorizontalLayout><Booking /></HorizontalLayout>
  }
]);

const App = () => {
  return <>
    <RouterProvider router={router} >
    </RouterProvider>
    <ToastContainer />

  </>
}

export default App;
