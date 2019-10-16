import React from "react";
import { Switch, Route, Redirect } from "react-router";
import ChooseNumber from "@containers/chooseNumber/ChooseNumber";
import CreateAccount from "@/app/containers/createAccount/CreateAccount";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/choose-number" />
        </Route>
        <Route path="/choose-number" component={ChooseNumber} />
        <Route path="/create-account" component={CreateAccount} />
      </Switch>
    </>
  );
}
