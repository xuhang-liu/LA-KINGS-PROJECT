import React, { Component } from 'react';
import MoreToDiscover from '../HomeSaas/MoreToDiscover';
import PageTitleArea from '../Common/PageTitleArea';
import Features from '../HomeSaas/Features';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

class Howitworks extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="How HireBeat Works" 
                    pageDescription="Optimize your interview and resume easier than ever and stay on top of your job search progresss."
                />
                <Features />
                <MoreToDiscover />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Howitworks;