import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import UserDashBoard from './Components/UserDashBoard/UserDashboard/UserDashBoard';
import NotFound from './Components/404Page/NotFound'
import About from './Components/Home/Menu-Area/About/About'
import Contact from './Components/Home/Menu-Area/Contact/Contact'
import AdminPenal from './Components/AdminPenal/AdminPenal/AdminPenal';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Order from './Components/UserDashBoard/Order/Order';

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
           
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        
          <PrivateRoute path="/admin">
            <AdminPenal/>
          </PrivateRoute>
          <PrivateRoute path="/userDashboard/:BookId">
            <UserDashBoard/>
          </PrivateRoute>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
