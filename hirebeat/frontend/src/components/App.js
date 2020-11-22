import React, { Component, Fragment } from "react";
import DocumentMeta from 'react-document-meta';
import {Helmet} from "react-helmet";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Dashboard from "./dashboard/Dashboard";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import Alerts from "./layout/Alerts";
import store from "../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import indexsaas from "./home/index-saas";
import EmailVerification from "./accounts/EmailVerification";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./basic/PrivateRoute";
import pricings from "./pricing/pricings";
import Payment from "./payment/Payment"
import about from "./company/about";
import bloggrid from "./blog/bloggrid";
import BlogDetail1 from "./blog/blog-details1";
import BlogDetail2 from "./blog/blog-details2";
import BlogDetail3 from "./blog/blog-details3";
import BlogDetail4 from "./blog/blog-details4";
import BlogDetail5 from "./blog/blog-details5";
import BlogDetail6 from "./blog/blog-details6";
import BlogDetail7 from "./blog/blog-details7";
import BlogDetail8 from "./blog/blog-details8";
import BlogDetail9 from "./blog/blog-details9";
import BlogDetail10 from "./blog/blog-details10";
import BlogDetail11 from "./blog/blog-details11";
import SelectParam from "./practice/SelectParam";
import SelectSimulate from "./practice/SelectSimulate";
import TechFields from "./practice/TechFields";
import TechPracticeMode from "./practice/TechPracticeMode";
import BehaviorQuestionMode from "./practice/BehaviorQuestionMode"
import NotFoundPage from "./layout/NotFoundPage";
import Privacy from "./layout/Privacy";
import Term from "./layout/Term";
import QuizHome from "./quiz/quizHome";
import QuizResultPage from "./quiz/quizResultPage";
import Resume from "./resume/Resume";

import CompanyList from"./companyData/CompanyList";
import AIGInfo from"./companyData/companies/AIGInfo";
import AEInfo from"./companyData/companies/AEInfo";
import BBInfo from"./companyData/companies/BBInfo";
import BMInfo from"./companyData/companies/BMInfo";
import BRInfo from"./companyData/companies/BRInfo";
import BSInfo from"./companyData/companies/BSInfo";
import CityInfo from"./companyData/companies/CityInfo";
import ECInfo from"./companyData/companies/ECInfo";
import GSInfo from"./companyData/companies/GSInfo";
import JFInfo from"./companyData/companies/JFInfo";
import JLLPInfo from"./companyData/companies/JLLPInfo";
import JPMInfo from"./companyData/companies/JPMInfo";
import JSInfo from"./companyData/companies/JSInfo";
import MDInfo from"./companyData/companies/MDInfo";
import MSInfo from"./companyData/companies/MSInfo";
import MUFGInfo from"./companyData/companies/MUFGInfo";
import NDQInfo from"./companyData/companies/NDQInfo";
import TSMInfo from"./companyData/companies/TSMInfo";

import JobList from "./career/JobList";
import UIDesigner from "./career/jobs/UIDesigner";
import BusinessAnalyst from "./career/jobs/BusinessAnalyst";
import Marketing from "./career/jobs/Marketing";
import ProductManager from "./career/jobs/ProductManager";
import SoftwareEngineer from "./career/jobs/SoftwareEngineer";

import Contact from "./contact/contact";

import { loadUser, loadProfile } from "../redux/actions/auth_actions";

import VideoReplayPage from "./dashboard/videos/VideoReplayPage";
import MyVideoUploader from "./videos/MyVideoUploader";
import ReviewListPreload from "./review/ReviewListPreload";
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
    const meta = {
      title: 'HireBeat – The Best Career Prep Tool For Jobseekers',
      description: 'Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!',
      canonical: 'https://hirebeat.co/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HireBeat – The Best Video Interview Prep Tool For Jobseekers</title>
        <link rel="canonical" href="https://hirebeat.co"/>
      </Helmet>
      <React.Fragment>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header/>
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/resume" component={Resume} />
                <PrivateRoute exact path="/review" component={ReviewListPreload} />
                <PrivateRoute
                  exact
                  path="/practice/modes"
                  component={BehaviorQuestionMode}
                />
                <PrivateRoute
                  exact
                  path="/practice/modes/practice"
                  component={SelectParam}
                />
                <PrivateRoute
                  exact
                  path="/practice/modes/simulate"
                  component={SelectSimulate}
                />
                <PrivateRoute
                  exact
                  path="/techfields/"
                  component={TechFields}
                />
                <PrivateRoute
                  exact
                  path="/techfields/practice"
                  component={TechPracticeMode}
                />
                <Route
                  exact
                  path="/practice/"
                  component={QuestionTypeChoices}
                />
                <PrivateRoute path="/video/:id" component={VideoReplayPage} />
                <Route exact path="/pricing" component={pricings} />
                <Route exact path="/company" component={about} />
                <Route exact path="/bloghome" component={bloggrid} />
                <Route exact path="/why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job" component={BlogDetail1} />
                <Route exact path="/video-interview-practice" component={BlogDetail2} />
                <Route exact path="/how-to-prepare-for-an-AI-interview" component={BlogDetail3} />
                <Route exact path="/questions-to-ask-at-career-fairs" component={BlogDetail4} />
                <Route exact path="/things-to-do-before-an-interview" component={BlogDetail5} />
                <Route exact path="/4-common-interview-questions-and-how-to-answer-them" component={BlogDetail6} />
                <Route exact path="/how-to-write-a-thank-you-email-after-a-job-interview" component={BlogDetail7} />
                <Route exact path="/keywords-to-include-on-a-resume" component={BlogDetail8} />
                <Route exact path="/tips-for-getting-your-resume-past-an-applicant-tracking-system" component={BlogDetail9} />
                <Route exact path="/how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview" component={BlogDetail10} />
                <Route exact path="/guidelines-on-how-to-answer-what-is-your-biggest-strength" component={BlogDetail11} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/upload" component={MyVideoUploader} />
                <Route exact path="/" component={indexsaas} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/term" component={Term} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/quiz" component={QuizHome} />
                <Route exact path="/quizresult" component={QuizResultPage} />
                <Route exact path="/companydata" component={CompanyList} />
                <Route exact path="/companydata/american-international-group" component={AIGInfo} />
                <Route exact path="/companydata/american-express" component={AEInfo} />
                <Route exact path="/companydata/bloomberg" component={BBInfo} />
                <Route exact path="/companydata/bny-mellon" component={BMInfo} />
                <Route exact path="/companydata/blackrock" component={BRInfo} />
                <Route exact path="/companydata/blackstone" component={BSInfo} />
                <Route exact path="/companydata/citi" component={CityInfo} />
                <Route exact path="/companydata/evercore" component={ECInfo} />
                <Route exact path="/companydata/goldman-sachs" component={GSInfo} />
                <Route exact path="/companydata/jefferies-financial-group" component={JFInfo} />
                <Route exact path="/companydata/jll-partners" component={JLLPInfo} />
                <Route exact path="/companydata/jpmorgan-chase" component={JPMInfo} />
                <Route exact path="/companydata/jane-street-capital" component={JSInfo} />
                <Route exact path="/companydata/moodys" component={MDInfo} />
                <Route exact path="/companydata/morgan-stanley" component={MSInfo} />
                <Route exact path="/companydata/mufg" component={MUFGInfo} />
                <Route exact path="/companydata/nasdaq" component={NDQInfo} />
                <Route exact path="/companydata/two-sigma" component={TSMInfo} />
                <Route exact path="/jobs" component={JobList} />
                <Route exact path="/jobs/ui-designer" component={UIDesigner} />
                <Route exact path="/jobs/business-analyst" component={BusinessAnalyst} />
                <Route exact path="/jobs/marketing" component={Marketing} />
                <Route exact path="/jobs/product-manager" component={ProductManager} />
                <Route exact path="/jobs/software-engineer" component={SoftwareEngineer} />
                <PrivateRoute exact path="/email-verification" component={EmailVerification} />
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
      </DocumentMeta>
    );
  }
}

export default App;
