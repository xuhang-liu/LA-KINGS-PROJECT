import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent20 from './BlogDetailsContent20';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail20 extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent20 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail20;