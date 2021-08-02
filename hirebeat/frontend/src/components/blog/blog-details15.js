import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent15 from './BlogDetailsContent15';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail15 extends Component {
    render() {
        let title = "HireBeat Blog – Top 3 Jobs You Should Apply For Finance Major";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "You can capitalize on the various exciting opportunities in the ever-expanding financial sector.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title></title>
                    <meta name="description" CONTENT={description}></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent15 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail15;