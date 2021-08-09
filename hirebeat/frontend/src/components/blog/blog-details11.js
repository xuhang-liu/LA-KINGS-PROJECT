import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent11 from './BlogDetailsContent11';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail11 extends Component {
    render() {
        let title = "HireBeat Blog – Guidelines on How to Answer ‘What Is Your Biggest Strength’ In An Interview with a List of Strength";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "'What is your greatest strength' is a common question in interviews. Learn why employers ask the question and the best way to answer it.";
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
                <BlogDetailsContent11 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail11;