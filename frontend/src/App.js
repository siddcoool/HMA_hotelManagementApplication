import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Login';
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL

function Home() {
  return (
    <div>Home</div>
  )
}

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
    element: <Home />,
  }, {
    path: "/about",
    element: <About />,
  }, {
    path: "/contact",
    element: <Contact />,
  }, {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <>
    <RouterProvider router={router} />
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
