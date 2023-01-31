import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import store, { persistor } from "../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';
import { HomePage } from "./accounts/HomePage";
import { Register } from "./accounts/Register";
import { TodoListPortal } from "./Dashboard/TodoListPortal";
import { ManagerPortal } from "./Dashboard/ManagerPortal";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AlertProvider template={AlertTemplate} {...alertOptions}>
              <Router>
                <Fragment>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={TodoListPortal} />
                    <Route exact path="/manager_dashboard" component={ManagerPortal} />
                  </Switch>
                </Fragment>
              </Router>
            </AlertProvider>
          </PersistGate>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
