import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import Deals from "./Components/Deals/Deals";
import Login from "./Components/Login/Login";
import NavigationBar from "./Components/Navbar/NavigationBar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import "./App.css";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavigationBar />
            <Home />
          </Route>

          <PrivateRoute path="/orders">
            <NavigationBar />
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/deals">
            <NavigationBar />
            <Deals />
          </Route>

          <Route path="/login">
            <NavigationBar />
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
