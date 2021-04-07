import React, { Component, Fragment } from "react";
import DocumentMeta from 'react-document-meta';
import Header from "./layout/Header";
import Dashboard from "./dashboard/Dashboard";
import EmployerDashboard from "./dashboard/EmployerDashboard";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import Alerts from "./layout/Alerts";
import store, {persistor} from "../store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PersistGate} from 'redux-persist/lib/integration/react';

import indexsaas from "./home/index-saas";
import IndexEmployer from "./home/index-employer";
import EmailVerification from "./accounts/EmailVerification";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import EmployerRegister from "./accounts/EmployerRegister";
import PrivateRoute from "./basic/PrivateRoute";
import pricings from "./pricing/pricings";
import Employer_pricing from "./pricing/Employer_pricing";
import Payment from "./payment/Payment"
import about from "./company/about";
import Employerabout from "./company/employerabout";
import bloggrid from "./blog/bloggrid";
import bloggridEmployer from "./blog/bloggridEmployer";
import BlogDetail1_Employer from "./blog/blog-details1-employer";
import BlogDetail2_Employer from "./blog/blog-details2-employer";
import BlogDetail3_Employer from "./blog/blog-details3-employer";
import BlogDetail4_Employer from "./blog/blog-details4-employer";
import BlogDetail5_Employer from "./blog/blog-details5-employer";
import BlogDetail6_Employer from "./blog/blog-details6-employer";
import BlogDetail7_Employer from "./blog/blog-details7-employer";
import BlogDetail8_Employer from "./blog/blog-details8-employer";
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
import BlogDetail17 from "./blog/blog-details17";
import BlogDetail18 from "./blog/blog-details18";
import BlogDetail19 from "./blog/blog-details19";
import BlogDetail20 from "./blog/blog-details20";
import BlogDetail21 from "./blog/blog-details21";
import BlogDetail22 from "./blog/blog-details22";
import BlogDetail23 from "./blog/blog-details23";
import BlogDetail24 from "./blog/blog-details24";
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
import ABSAInfo from"./companyData/companies/ABSAInfo";
import ADIBInfo from"./companyData/companies/ADIBInfo";
import AmazonInfo from"./companyData/companies/AmazonInfo";
import FBInfo from"./companyData/companies/FBInfo";
import SEBInfo from"./companyData/companies/SEBInfo";
import AllstateInfo from"./companyData/companies/AllstateInfo";
import DeloitteInfo from"./companyData/companies/DeloitteInfo";
import DeutscheBankInfo from"./companyData/companies/DeutscheBankInfo";
import ErnstYoungInfo from"./companyData/companies/ErnstYoungInfo";
import MerrillLynchInfo from"./companyData/companies/MerrillLynchInfo";
import HCIGroupInfo from"./companyData/companies/HCIGroupInfo";
import KPMGInfo from"./companyData/companies/KPMGInfo";
import PWCInfo from"./companyData/companies/PWCInfo";
import BankOfMontrealInfo from"./companyData/companies/BankOfMontrealInfo";
import BarclaysInfo from"./companyData/companies/BarclaysInfo";
import CreditSuisseInfo from"./companyData/companies/CreditSuisseInfo";
import HoulihanLokeyInfo from"./companyData/companies/HoulihanLokeyInfo";
import MetLifeInfo from"./companyData/companies/MetLifeInfo";
import AccentureInfo from"./companyData/companies/AccentureInfo";
import BainInfo from"./companyData/companies/BainInfo";
import BCGInfo from"./companyData/companies/BCGInfo";
import OliverWymanInfo from"./companyData/companies/OliverWymanInfo";
import ATKearneyInfo from"./companyData/companies/ATKearneyInfo";
import AnalysisGroupInfo from"./companyData/companies/AnalysisGroupInfo";
import CornerstoneInfo from"./companyData/companies/CornerstoneInfo";
import LEKConsultingInfo from"./companyData/companies/LEKConsultingInfo";
import ZSAssociatesInfo from"./companyData/companies/ZSAssociatesInfo";
import BoozeAllenHamiltonInfo from"./companyData/companies/BoozeAllenHamiltonInfo";
import MastercardInfo from"./companyData/companies/MastercardInfo";
import CapitalOneInfo from"./companyData/companies/CapitalOneInfo";
import SelectQuoteInfo from"./companyData/companies/SelectQuoteInfo";
import JacobsInfo from"./companyData/companies/JacobsInfo";
import GartnerInfo from"./companyData/companies/GartnerInfo";
import AonInfo from"./companyData/companies/AonInfo";
import ForresterResearchInfo from"./companyData/companies/ForresterResearchInfo";
import HuronInfo from"./companyData/companies/HuronInfo";
import PerficientInfo from"./companyData/companies/PerficientInfo";
import WillisTowersWastonInfo from"./companyData/companies/WillisTowersWastonInfo";
import AlvarezMarsalInfo from"./companyData/companies/AlvarezMarsalInfo";
import HackettGroupInfo from"./companyData/companies/HackettGroupInfo";
import StrategyInfo from"./companyData/companies/StrategyInfo";
import NavigantConsultingInfo from"./companyData/companies/NavigantConsultingInfo";
import ResourcesGlobalProfessionalsInfo from"./companyData/companies/ResourcesGlobalProfessionalsInfo";
import CRAInternationalInfo from"./companyData/companies/CRAInternationalInfo";
import ICGInternationalInfo from"./companyData/companies/ICGInternationalInfo";
import ADPInfo from"./companyData/companies/ADPInfo";
import WorkdayInfo from"./companyData/companies/WorkdayInfo";
import AlightInfo from"./companyData/companies/AlightInfo";
import MassmutualInfo from"./companyData/companies/MassmutualInfo";
import SunLifeFinancialInfo from"./companyData/companies/SunLifeFinancialInfo";

import SearchPanel from "./career/SearchPanel";
import SearchResult from "./career/SearchResult";
import JobList from "./career/JobList";
import UIDesigner from "./career/jobs/UIDesigner";
import BusinessAnalyst from "./career/jobs/BusinessAnalyst";
import Marketing from "./career/jobs/Marketing";
import ProductManager from "./career/jobs/ProductManager";
import SoftwareEngineer from "./career/jobs/SoftwareEngineer";
import CareerResponseWindow from "./videoInterview/CareerResponseWindow";
import Contact from "./contact/contact";
import EmployerContact from "./contact/EmployerContact";
import Howitworks from "./home/Howitworks";
import InterviewCompletion from "./videoInterview/InterviewCompletion";

import CandidateLogin from "./videoInterview/CandidateLogin";
import InterviewInfo from "./videoInterview/InterviewInfo";

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
      title: 'HireBeat – Your First Step to A Better Recruiting Journey',
      description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
      canonical: 'https://hirebeat.co/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
      <React.Fragment>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header/>
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/employer_dashboard" component={EmployerDashboard}/>
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
                <PrivateRoute exact path="/video-interview" component={CareerResponseWindow}/>
                <Route exact path="/employer" component={IndexEmployer} />
                <Route exact path="/interview_Completion" component={InterviewCompletion} />
                <Route exact path="/pricing" component={pricings} />
                <Route exact path="/employer-pricing" component={Employer_pricing} />
                <Route exact path="/company" component={about} />
                <Route exact path="/employer_company" component={Employerabout} />
                <Route exact path="/howitworks" component={Howitworks} />
                <Route exact path="/bloghome" component={bloggrid} />
                <Route exact path="/bloghome_employer" component={bloggridEmployer} />
                <Route exact path="/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring" component={BlogDetail1_Employer} />
                <Route exact path="/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company" component={BlogDetail2_Employer} />
                <Route exact path="/employer_blog-writing-a-good-job-posting-that-will-attract-employees" component={BlogDetail3_Employer} />
                <Route exact path="/employer_blog-interview-questions-every-recruiter-should-ask" component={BlogDetail4_Employer} />
                <Route exact path="/employer_blog-how-the-pandemic-sparked-a-new-way-of-interviewing" component={BlogDetail5_Employer} />
                <Route exact path="/employer_blog-how-gender-pronouns-change-the-way-we-work" component={BlogDetail6_Employer} />
                <Route exact path="/employer_blog-millennials-we-want-you" component={BlogDetail7_Employer} />
                <Route exact path="/employer_blog-how-to-get-your-job-postings-noticed" component={BlogDetail8_Employer} />
                <Route exact path="/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job" component={BlogDetail1} />
                <Route exact path="/blog-video-interview-practice" component={BlogDetail2} />
                <Route exact path="/blog-how-to-prepare-for-an-AI-interview" component={BlogDetail3} />
                <Route exact path="/blog-questions-to-ask-at-career-fairs" component={BlogDetail4} />
                <Route exact path="/blog-things-to-do-before-an-interview" component={BlogDetail5} />
                <Route exact path="/blog-4-common-interview-questions-and-how-to-answer-them" component={BlogDetail6} />
                <Route exact path="/blog-how-to-write-a-thank-you-email-after-a-job-interview" component={BlogDetail7} />
                <Route exact path="/blog-keywords-to-include-on-a-resume" component={BlogDetail8} />
                <Route exact path="/blog-tips-for-getting-your-resume-past-an-applicant-tracking-system" component={BlogDetail9} />
                <Route exact path="/blog-how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview" component={BlogDetail10} />
                <Route exact path="/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength" component={BlogDetail11} />
                <Route exact path="/blog-how-to-answer-what-is-your-weakness-question-in-an-interview" component={BlogDetail12} />
                <Route exact path="/blog-3-fastest-growing-jobs-you-might-not-know-about" component={BlogDetail13} />
                <Route exact path="/blog-why-do-you-want-to-work-here" component={BlogDetail14} />
                <Route exact path="/blog-top-3-jobs-you-should-apply-for-finance-major" component={BlogDetail15} />
                <Route exact path="/blog-10-tips-to-deal-with-job-hunting-stress" component={BlogDetail16} />
                <Route exact path="/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr" component={BlogDetail17} />
                <Route exact path="/blog-how-to-answer-the-teamwork-type-question-in-an-interview" component={BlogDetail18} />
                <Route exact path="/blog-acing-pandemic-job-interview-questions" component={BlogDetail19} />
                <Route exact path="/blog-how-to-handle-the-question-you-donot-know" component={BlogDetail20} />
                <Route exact path="/blog-4-amazing-tips-to-effectively-networking-during-covid-19" component={BlogDetail21} />
                <Route exact path="/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years" component={BlogDetail22} />
                <Route exact path="/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview" component={BlogDetail23} />
                <Route exact path="/blog-how-to-answer-the-question-what-makes-you-stand-out-from-other-candidates" component={BlogDetail24} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/employer_register" component={EmployerRegister} />
                <Route exact path="/upload" component={MyVideoUploader} />
                <Route exact path="/" component={IndexEmployer} />
                <Route exact path="/for_candidate" component={indexsaas} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/privacy" component={Privacy} />
                <Route exact path="/term" component={Term} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/employer_contact" component={EmployerContact} />
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
                <Route exact path="/absa-group" component={ABSAInfo} />
                <Route exact path="/abu-dhabi-islamic-bank" component={ADIBInfo} />
                <Route exact path="/amazon" component={AmazonInfo} />
                <Route exact path="/facebook" component={FBInfo} />
                <Route exact path="/skandinaviska-enskilda-banken" component={SEBInfo} />
                <Route exact path="/allstate" component={AllstateInfo} />
                <Route exact path="/deloitte" component={DeloitteInfo} />
                <Route exact path="/deutsche-bank" component={DeutscheBankInfo} />
                <Route exact path="/ernst-young" component={ErnstYoungInfo} />
                <Route exact path="/merrill-lynch" component={MerrillLynchInfo} />
                <Route exact path="/hci-group" component={HCIGroupInfo} />
                <Route exact path="/kpmg" component={KPMGInfo} />
                <Route exact path="/pwc" component={PWCInfo} />
                <Route exact path="/bank-of-montreal" component={BankOfMontrealInfo} />
                <Route exact path="/barclays" component={BarclaysInfo} />
                <Route exact path="/credit-suisse" component={CreditSuisseInfo} />
                <Route exact path="/houlihan-lokey" component={HoulihanLokeyInfo} />
                <Route exact path="/metlife" component={MetLifeInfo} />
                <Route exact path="/oliver-wyman" component={OliverWymanInfo} />
                <Route exact path="/accenture" component={AccentureInfo} />
                <Route exact path="/bain" component={BainInfo} />
                <Route exact path="/boston-consulting-group" component={BCGInfo} />
                <Route exact path="/jobs" component={JobList} />
                <Route exact path="/kearney" component={ATKearneyInfo} />
                <Route exact path="/analysis-group" component={AnalysisGroupInfo} />
                <Route exact path="/cornerstone-research" component={CornerstoneInfo} />
                <Route exact path="/lek-consulting" component={LEKConsultingInfo} />
                <Route exact path="/zs-associates" component={ZSAssociatesInfo} />
                <Route exact path="/booz-allen-hamilton" component={BoozeAllenHamiltonInfo} />
                <Route exact path="/mastercard" component={MastercardInfo} />
                <Route exact path="/capital-one" component={CapitalOneInfo} />
                <Route exact path="/selectquote" component={SelectQuoteInfo} />
                <Route exact path="/jacobs" component={JacobsInfo} />
                <Route exact path="/gartner" component={GartnerInfo} />
                <Route exact path="/aon" component={AonInfo} />
                <Route exact path="/forrester-research" component={ForresterResearchInfo} />
                <Route exact path="/huron" component={HuronInfo} />
                <Route exact path="/perficient" component={PerficientInfo} />
                <Route exact path="/willis-towers-waston" component={WillisTowersWastonInfo} />
                <Route exact path="/alvarez-marsal" component={AlvarezMarsalInfo} />
                <Route exact path="/hackett-group" component={HackettGroupInfo} />
                <Route exact path="/strategy" component={StrategyInfo} />
                <Route exact path="/navigant-consulting" component={NavigantConsultingInfo} />
                <Route exact path="/resources-global-professionals" component={ResourcesGlobalProfessionalsInfo} />
                <Route exact path="/cra-international" component={CRAInternationalInfo} />
                <Route exact path="/icg-international" component={ICGInternationalInfo} />
                <Route exact path="/adp" component={ADPInfo} />
                <Route exact path="/workday" component={WorkdayInfo} />
                <Route exact path="/alight" component={AlightInfo} />
                <Route exact path="/massmutual" component={MassmutualInfo} />
                <Route exact path="/sun-life-financial" component={SunLifeFinancialInfo} />
                <Route exact path="/ui-designer" component={UIDesigner} />
                <Route exact path="/business-analyst" component={BusinessAnalyst} />
                <Route exact path="/marketing" component={Marketing} />
                <Route exact path="/product-manager" component={ProductManager} />
                <Route exact path="/software-engineer" component={SoftwareEngineer} />
                <PrivateRoute exact path="/email-verification" component={EmailVerification} />
                <Route exact path="/career" component={SearchPanel} />
                <Route exact path="/career-details" component={SearchResult} />
                <Route exact path="/candidate-login" component={CandidateLogin} />
                <PrivateRoute exact path="/interview-info" component={InterviewInfo} />
                <Route component={NotFoundPage} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
        </PersistGate>
      </Provider>
      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
      </React.Fragment>
      </DocumentMeta>
    );
  }
}

export default App;
