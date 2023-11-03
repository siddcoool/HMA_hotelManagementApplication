import logo from './logo.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* Add more routes for different views */}
      </Switch>
    </Router>
      <Login />
      <ToastContainer />
    </>
  )

}

export default App;
