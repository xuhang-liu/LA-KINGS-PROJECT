import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer18 from './BlogDetailsContentEmployer18';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer18 extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContentEmployer18 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail1_Employer18;