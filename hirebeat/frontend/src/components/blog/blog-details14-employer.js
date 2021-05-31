import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer14 from './BlogDetailsContentEmployer14';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer14 extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContentEmployer14 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail1_Employer14;