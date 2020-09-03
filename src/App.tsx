import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import { Home } from "./pages";
import "./App.scss";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props: RouteComponentProps): React.ReactNode => (
            <Home {...props} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
