import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Login from './Pages/Login';
//import signup from './Pages/SignUp';
import Landing from "./Pages/Landing";
import Contactus from "./Pages/Contact-us";
//import Navbar2 from "./Components/Navbar2";
import Testimonials from "./Pages/Testimonials/Testi";



function App() {
  return (


    <div className="App">


      <BrowserRouter>
        <Navbar />
      
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/services'>
            <services />
          </Route>
           <Route path='/contactus'>
            <Contactus />
          </Route>
          <Route path='/Login'>
            <login />
          </Route>
          <Route path='/sign-up'>
            <signup />
          </Route>
          <Route path='/Testimonials'>
            <Testimonials />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>




  );
}

export default App;
