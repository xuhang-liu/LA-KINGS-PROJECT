import React, { Component } from 'react';
import MainBanner from '../HomeSaas/MainBanner';
import HighlitedFeatures from "../HomeSaas/HighlitedFeatures";
import ClientsFeedbackSlider from '../HomeSaas/ClientsFeedbackSlider';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Loader from '../shared/Loader';
import { useEffect } from "react";
import AmazingFeatures from "../HomeSaas/AmazingFeatures"
import Progress from '../HomeSaas/Progress';
import MediaQuery from 'react-responsive';
import Footer from "../layout/Footer";
import {loadProfile} from "../../redux/actions/auth_actions";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
//import WhyUs from '../HomeSaas/WhyUs';
//import CompanyProfile from '../HomeSaas/CompanyProfile';


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

class IndexSaas extends Component {
        // Preloader
        state = {
            loading: true
        };
      componentDidMount() {
        this.props.loadProfile();
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 666);
      }
    render() {
      if(this.props.profile.is_employer){
        return <Redirect to="/employer"/>;
      }
        return (
            <React.Fragment>
              <MediaQuery minDeviceWidth={1224}>
              <div className="min-width-1290">
                <ScrollToTopOnMount />
                <MainBanner />
                <HighlitedFeatures />
                <AmazingFeatures />
                <Progress />
                {/*<MoreToDiscover />*/}
                <ClientsFeedbackSlider/>
                <FreeTrialArea />
                <Footer />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1223}>
                <ScrollToTopOnMount />
                <MainBanner />
                <HighlitedFeatures />
                <AmazingFeatures />
                <Progress />
                {/*<MoreToDiscover />*/}
                <ClientsFeedbackSlider/>
                <FreeTrialArea />
                <Footer />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </MediaQuery>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, {loadProfile})(IndexSaas);