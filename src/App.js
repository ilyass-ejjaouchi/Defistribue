import './App.css';
import Home from "./components/home/home";
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import DefiInfos from "./components/defiInfos/defiInfos";
import Navbar from "./components/navbar/navbar";
import React from "react";
function App() {
  return (
      <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
              <Route path="/defis/:id" exactly>
                  <DefiInfos/>
              </Route>
              <Route path="/">
                  <Home/>
              </Route>
          </Switch>
      </BrowserRouter>

  )
}

export default App;
