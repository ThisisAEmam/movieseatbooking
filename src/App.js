import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ContextProvider from "./context/context";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import NoMatchPage from './pages/NoMatchPage/NoMatchPage';
import MoviePage from './pages/MoviePage/MoviePage';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/movie/:movieId" exact component={MoviePage} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/notFound" exact component={NoMatchPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
