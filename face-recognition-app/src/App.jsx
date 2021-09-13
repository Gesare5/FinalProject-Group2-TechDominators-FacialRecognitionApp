import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";



function App() {
  return (


    <div className="App">
      {/* <SignUp /> */}

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/services'>
            <services />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>

  );
}

export default App;
