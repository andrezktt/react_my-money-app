import React from "react";
import { Router, Route, Redirect, hashHistory, IndexRoute } from "react-router";

import AuthOrApp from './authOrApp'
import App from "./app";
import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path="billingCycles" component={BillingCycle} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
