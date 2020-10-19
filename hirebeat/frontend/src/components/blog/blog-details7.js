import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent7 from './BlogDetailsContent7';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent7 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetails;