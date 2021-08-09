import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent4 from './BlogDetailsContent4';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail4 extends Component {
    render() {
        let title = "HireBeat Blog – Questions to Ask at Career Fairs";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Career fair helps students and graduates get more information about a company and deeper insights into the roles they are interested in. Get tips on the questions you should ask at career fairs to draw the recruiters' attention and know if a company is a good fit for you.";
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
                <BlogDetailsContent4 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail4;