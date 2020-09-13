import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Redirect, RouteProps
} from "react-router-dom";
import { Home, Dashboard } from "./pages";
import "./App.scss";

const ProtectedRoute = (props: RouteProps) => {
  if (localStorage.getItem('token')) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute
          path="/dashboard"
          exact
          render={(props: RouteComponentProps): React.ReactNode => (
            <Dashboard {...props} />
          )}
        />
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
