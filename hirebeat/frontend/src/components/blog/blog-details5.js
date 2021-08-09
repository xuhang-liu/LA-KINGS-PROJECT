import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent5 from './BlogDetailsContent5';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail5 extends Component {
    render() {
        let title = "HireBeat Blog – Things to Do Before an Interview";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "To have a successful interview, you need to be prepared. Learn about the things you should do before an interview to help you stay prepared.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                    <meta name="description" CONTENT={description}></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent5 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail5;