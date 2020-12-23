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
import BlogDetail12 from "./blog/blog-details12";
import BlogDetail13 from "./blog/blog-details13";
import BlogDetail14 from "./blog/blog-details14";
import BlogDetail15 from "./blog/blog-details15";
import BlogDetail16 from "./blog/blog-details16";
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
import BancoSInfo from"./companyData/companies/BancoSInfo";
import BLUSAInfo from"./companyData/companies/BLUSAInfo";
import CFGInfo from"./companyData/companies/CFGInfo";
import EJInfo from"./companyData/companies/EJInfo";
import FTBInfo from"./companyData/companies/FTBInfo";
import HFInfo from"./companyData/companies/HFInfo";
import HSBCInfo from"./companyData/companies/HSBCInfo";
import JBInfo from"./companyData/companies/JBInfo";
import KCInfo from"./companyData/companies/KCInfo";
import LazardInfo from"./companyData/companies/LazardInfo";
import MTBInfo from"./companyData/companies/MTBInfo";
import NTInfo from"./companyData/companies/NTInfo";
import PictetInfo from"./companyData/companies/PictetInfo";
import PNCInfo from"./companyData/companies/PNCInfo";
import RCInfo from"./companyData/companies/RCInfo";
import RFInfo from"./companyData/companies/RFInfo";
import RJInfo from"./companyData/companies/RJInfo";
import SSInfo from"./companyData/companies/SSInfo";
import WFInfo from"./companyData/companies/WFInfo";
import CharlesInfo from"./companyData/companies/CharlesInfo";
import FIInfo from"./companyData/companies/FIInfo";
import VanguardInfo from"./companyData/companies/VanguardInfo";

import SearchPanel from "./career/SearchPanel";
import SearchResult from "./career/SearchResult";
import JobList from "./career/JobList";
import UIDesigner from "./career/jobs/UIDesigner";
import BusinessAnalyst from "./career/jobs/BusinessAnalyst";
import Marketing from "./career/jobs/Marketing";
import ProductManager from "./career/jobs/ProductManager";
import SoftwareEngineer from "./career/jobs/SoftwareEngineer";
import CareerVideoRecorder from "./videoInterview/CareerVideoRecorder";
import Contact from "./contact/contact";
import Howitworks from "./home/Howitworks"

import { loadUser, loadProfile } from "../redux/actions/auth_actions";

import VideoReplayPage from "./dashboard/videos/VideoReplayPage";
import MyVideoUploader from "./videos/MyVideoUploader";
import ReviewListPreload from "./review/ReviewListPreload";
import GoTop from './shared/GoTop';

import QuestionTypeChoices from "./practice/QuestionTypeChoices";
import RetryResponseWindow from "./practice/RetryResponseWindow";
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
        <meta name="description" CONTENT="Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!"></meta>
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
                  path="/practice/modes/retry"
                  component={RetryResponseWindow}
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
                <Route exact path="/video-interview" component={CareerVideoRecorder}/>
                <Route exact path="/pricing" component={pricings} />
                <Route exact path="/company" component={about} />
                <Route exact path="/howitworks" component={Howitworks} />
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
                <Route exact path="/how-to-answer-what-is-your-weakness-question-in-an-interview" component={BlogDetail12} />
                <Route exact path="/3-fastest-growing-jobs-you-might-not-know-about" component={BlogDetail13} />
                <Route exact path="/why-do-you-want-to-work-here" component={BlogDetail14} />
                <Route exact path="/top-3-jobs-you-should-apply-for-finance-major" component={BlogDetail15} />
                <Route exact path="/10-tips-to-deal-with-job-hunting-stress" component={BlogDetail16} />
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
                <Route exact path="/american-international-group" component={AIGInfo} />
                <Route exact path="/american-express" component={AEInfo} />
                <Route exact path="/bloomberg" component={BBInfo} />
                <Route exact path="/bny-mellon" component={BMInfo} />
                <Route exact path="/blackrock" component={BRInfo} />
                <Route exact path="/blackstone" component={BSInfo} />
                <Route exact path="/citi" component={CityInfo} />
                <Route exact path="/evercore" component={ECInfo} />
                <Route exact path="/goldman-sachs" component={GSInfo} />
                <Route exact path="/jefferies-financial-group" component={JFInfo} />
                <Route exact path="/jll-partners" component={JLLPInfo} />
                <Route exact path="/jpmorgan-chase" component={JPMInfo} />
                <Route exact path="/jane-street-capital" component={JSInfo} />
                <Route exact path="/moodys" component={MDInfo} />
                <Route exact path="/morgan-stanley" component={MSInfo} />
                <Route exact path="/mufg" component={MUFGInfo} />
                <Route exact path="/nasdaq" component={NDQInfo} />
                <Route exact path="/two-sigma" component={TSMInfo} />
                <Route exact path="/banco-santander" component={BancoSInfo} />
                <Route exact path="/bank-leumi" component={BLUSAInfo} />
                <Route exact path="/citizens-financial-group" component={CFGInfo} />
                <Route exact path="/edward-jones" component={EJInfo} />
                <Route exact path="/fifth-third-bancorp" component={FTBInfo} />
                <Route exact path="/hanmi-financial" component={HFInfo} />
                <Route exact path="/hsbc" component={HSBCInfo} />
                <Route exact path="/julius-baer" component={JBInfo} />
                <Route exact path="/keycorp" component={KCInfo} />
                <Route exact path="/lazard" component={LazardInfo} />
                <Route exact path="/mt-bank" component={MTBInfo} />
                <Route exact path="/northern-trust" component={NTInfo} />
                <Route exact path="/pictet" component={PictetInfo} />
                <Route exact path="/pnc-financial-services-group" component={PNCInfo} />
                <Route exact path="/rothschild-co" component={RCInfo} />
                <Route exact path="/regions-financial" component={RFInfo} />
                <Route exact path="/raymond-james" component={RJInfo} />
                <Route exact path="/state-street" component={SSInfo} />
                <Route exact path="/wells-fargo" component={WFInfo} />
                <Route exact path="/charles-schwab" component={CharlesInfo} />
                <Route exact path="/fidelity-investments" component={FIInfo} />
                <Route exact path="/vanguard" component={VanguardInfo} />
                <Route exact path="/jobs" component={JobList} />
                <Route exact path="/ui-designer" component={UIDesigner} />
                <Route exact path="/business-analyst" component={BusinessAnalyst} />
                <Route exact path="/marketing" component={Marketing} />
                <Route exact path="/product-manager" component={ProductManager} />
                <Route exact path="/software-engineer" component={SoftwareEngineer} />
                <PrivateRoute exact path="/email-verification" component={EmailVerification} />
                <Route exact path="/career" component={SearchPanel} />
                <Route exact path="/career-details" component={SearchResult} />
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
