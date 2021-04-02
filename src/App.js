import React, { useState, createContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Admin from "./Components/Admin/Admin";
import Deals from "./Components/Deals/Deals";
import Login from "./Components/Login/Login";
import NavigationBar from "./Components/Navbar/NavigationBar";
import Checkout from "./Components/Checkout/Checkout";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";

export const UserContext = createContext();

const Home = lazy(() => import("./Components/Home/Home"));

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Suspense
          fallback={
            <Spinner
              animation="border"
              role="status"
              variant="info"
              size="bg"
            ></Spinner>
          }
        >
          <Switch>
            <Route exact path="/">
              <NavigationBar />
              <Home />
            </Route>

            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>

            <PrivateRoute path="/checkout=:id">
              <NavigationBar />
              <Checkout />
            </PrivateRoute>

            <PrivateRoute path="/placeOrder=:id">
              <NavigationBar />
              <PlaceOrder />
            </PrivateRoute>

            <PrivateRoute path="/orders=:id">
              <NavigationBar />
              <Orders />
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
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
