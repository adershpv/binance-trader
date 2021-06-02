import React, { useEffect } from "react";
import Amplify, { API } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import config from "./aws-exports";
import Dashboard from "./dashboard/Dashboard";

Amplify.configure(config);

const App = () => {
  useEffect(() => {
    API.get("binance", "/streams").then((res) => console.log(res));
  }, []);
  return <Dashboard />;
};

export default withAuthenticator(App);
