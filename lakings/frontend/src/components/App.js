import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import store, { persistor } from "../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from 'redux-persist/lib/integration/react';
import HomePage from "./accounts/HomePage";
import { loadUser } from "../redux/actions/auth_actions";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.loadData();
    }
  }

  async loadData() {
    console.log("loading user");
    await store.dispatch(loadUser());
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
