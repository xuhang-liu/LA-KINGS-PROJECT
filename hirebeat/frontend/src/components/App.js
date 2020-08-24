import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import NavbarTwo from "./layout/NavbarTwo";
import Footer from "./layout/Footer";
import Dashboard from "./dashboard/Dashboard";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import Alerts from "./layout/Alerts";
import store from "../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import indexsaas from "./home/index-saas";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./basic/PrivateRoute";
import Home from "./home/Home";
import Pricing from "./pricing/Pricing";
import pricings from "./pricing/pricings";
import Payment from "./payment/Payment"
import Company from "./company/Company";
import about from "./company/about";
import BlogHome from "./blog/BlogHome";
import Blog1 from "./blog/Blog1";
import bloggrid from "./blog/bloggrid";
import blogdetail1 from "./blog/blog-details1";
import SelectParam from "./practice/SelectParam";
import TechFields from "./practice/TechFields";
import NotFoundPage from "./layout/NotFoundPage";
import Privacy from "./layout/Privacy";
import Term from "./layout/Term";

import Contact from "./contact/contact";

import { loadUser, loadProfile } from "../redux/actions/auth_actions";

import VideoReplayPage from "./dashboard/videos/VideoReplayPage";
import MyVideoUploader from "./videos/MyVideoUploader";
import ReviewWindow from "./review/ReviewWindow";
import GoTop from './shared/GoTop';

import QuestionTypeChoices from "./practice/QuestionTypeChoices";

import "./app.css";
import "./public/css/style.css";
import "./public/css/responsive.css";
import "./public/css/animate.min.css";
import "./public/css/bootstrap.min.css";
import "./public/css/boxicons.min.css";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    console.log("loading user");
    await store.dispatch(loadUser());
    console.log("loading profile");
    store.dispatch(loadProfile());
  }

  render() {
    return (
      <React.Fragment>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header/>
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/review" component={ReviewWindow} />
                <PrivateRoute
                  exact
                  path="/practice/:type"
                  component={SelectParam}
                />
                <PrivateRoute
                  exact
                  path="/techfields/"
                  component={TechFields}
                />
                <PrivateRoute
                  exact
                  path="/practice/"
                  component={QuestionTypeChoices}
                />
                <PrivateRoute path="/video/:id" component={VideoReplayPage} />
                <Route exact path="/pricing" component={pricings} />
                <Route exact path="/company" component={about} />
                <Route exact path="/bloghome" component={bloggrid} />
                <Route exact path="/blog-details" component={blogdetail1} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/upload" component={MyVideoUploader} />
                <Route exact path="/" component={indexsaas} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/term" component={Term} />
                <Route exact path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
              </Switch>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </React.Fragment>
    );
  }
}

export default App;
