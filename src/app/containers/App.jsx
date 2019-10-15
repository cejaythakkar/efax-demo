import React, { Component } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import ChooseNumber from "./chooseNumber/ChooseNumber";
import CreateAccount from "./createAccount/CreateAccount";
import "./App.scss";
class App extends Component {
  render = () => (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/choose-number" />
          </Route>
          <Route path="/choose-number" component={ChooseNumber} />
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
