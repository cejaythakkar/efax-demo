import React, { Component } from "react";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import ChooseNumber from "@containers/chooseNumber/ChooseNumber";
import CreateAccount from "@containers/createAccount/CreateAccount";
import "./App.scss";
import { get } from "@lib/http/http-service";
class App extends Component {
  componentDidMount() {
    get(
      "https://api.fax.j2.com/v1/inventory/cities/CA-Yosemite-209-P/phone_numbers?count=30",
      null,
      {
        "Authorization": "Bearer 02881c51-c7e1-4996-a460-8bb8a22b6598",
        "Content-Type": "application/json"
      },
      false
    )
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
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
