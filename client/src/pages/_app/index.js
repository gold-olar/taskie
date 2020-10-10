import React from "react";
import { Switch, Route, Router } from "./../../util/router";
import NotFoundPage from "../not-found";
import HomePage from "../homepage";
import Dashboard from "../dashboard";
import AuthPage from "../auth";
import useMedia from "../../util/useQuery";
import { queryValues, queries } from "../../util/constants";
import { ProvideAuth } from "./../../util/auth";
import ContextProvider from "../../context/ContextProviders";

function App() {
  const mediaQuery = useMedia(queries, queryValues, "isDesktop");

  return (
    <>
      <ProvideAuth>
        <ContextProvider>
          <Router>
            <>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <HomePage mediaQuery={mediaQuery} />}
                />

                <Route exact path="/user/:authType" component={AuthPage} />

                <Route
                  path="/dashboard"
                  render={() => <Dashboard mediaQuery={mediaQuery} />}
                />

                <Route component={NotFoundPage} />
              </Switch>
            </>
          </Router>
        </ContextProvider>
      </ProvideAuth>
    </>
  );
}
export default App;
