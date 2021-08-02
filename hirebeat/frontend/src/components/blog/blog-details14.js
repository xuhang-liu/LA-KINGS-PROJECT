import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent14 from './BlogDetailsContent14';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail14 extends Component {
    render() {
        let title = "HireBeat Blog – 'Why do you want to work here?' Your Ultimate Interview Tips";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "'Why do you want to work here?' seems to be a simple but challenging question. Lack of proper preparation for this question can be risky because you will lower the chances of acquiring the job.";
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
                <BlogDetailsContent14 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail14;