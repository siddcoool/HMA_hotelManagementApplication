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

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common.access_token = localStorage.getItem('hma-token')

function About() {
  return (
    <div>About</div>
  )
}

function Contact() {
  return (
    <div>Contact</div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HorizontalLayout>
      <Home />
    </HorizontalLayout>,
  }, {
    path: "/about",
    element: <HorizontalLayout><About /></HorizontalLayout>,
  }, {
    path: "/contact",
    element: <HorizontalLayout><Contact /></HorizontalLayout>,
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

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//          <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         </Routes>
//          </Router>
//       {/* <Login /> */}
//       <ToastContainer />
//     </>
//   )
// }

export default App;
